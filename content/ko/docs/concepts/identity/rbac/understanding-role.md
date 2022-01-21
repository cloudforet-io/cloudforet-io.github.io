---
title: "Understanding Role"
linkTitle: "Understanding Role"
weight: 3
date: 2021-11-17
description: >
    이 페이지에서는 Role에 대해 상세하게 살펴봅니다.
---


## Role structure

Role은 아래와 같이 자원에 대한 접근 범위를 지정하는 [Role Type](/ko/docs/concepts/identity/rbac/understanding-role/#role-type)과 권한이 적용되는 조직(프로젝트 or 프로젝트 그룹)으로 구성 됩니다.
사용자는 RoleBinding을 통해 각 SpaceONE내에 접근할 수 있는 권한을 정의할 수 있습니다. 

![](/ko/docs/concepts/identity/rbac/rbac_img/understanding_role_img01.png)

### Role Example

**Example: Alert Operator Role**

~~~yaml
---
results:
  - created_at: '2021-11-15T05:12:31.060Z'
    domain_id: domain-xxx
    name: Alert Manager Operator
    policies:
      - policy_id: policy-managed-alert-manager-operator
        policy_type: MANAGED
    role_id: role-f18c7d2a9398
    role_type: PROJECT
    tags: {}
~~~
**Example : Domain Viewer Role**

~~~yaml
---
results:
- created_at: '2021-11-15T05:12:28.865Z'
  domain_id: domain-xxx
  name: Domain Viewer
  policies:
  - policy_id: policy-managed-domain-viewer
    policy_type: MANAGED
  role_id: role-242f9851eee7
  role_type: DOMAIN
  tags: {}
~~~


## Role Type

Role Type은 도메인내의 접근 가능한 자원의 범위를 지정 합니다. 
- DOMAIN : Domain내의 모든 자원에 Access 가능 합니다. 
- PROJECT : Member로 추가된 Project내의 모든 자원에 Access 가능 합니다.

Project내의 Member로 추가하는 방법은 [Project의 Member로 추가](/ko/docs/guides/project/project_management/) 를 참고 해 주세요.

### Add Member

SpaceONE내의 모든 자원들은 아래와 같이 계층적으로 관리 됩니다. 
도메인의 관리자는 각 Project에 Member를 추가하여 사용자를 프로젝트내의 자원에 Access 할 수 있도록 관리할 수 있습니다.
여러 Project에 대한 Access가 필요한 사용자의 경우는 상위 Project Group에 Member로 추가하여 하위 계층에 소속된 모든 Project에 대한 Access할 수 있습니다.  
Project Group의 Member로 추가하는 방법은 [Project Group의 Member로 추가](/ko/docs/guides/project/project_group_management/)를 참고 해주세요. 


## Role Hierarchy

사용자가 [계층적인 Project 구조](/ko/docs/concepts/identity/rbac/#organization)내에서 복합적인 [Rolebinding](/ko/docs/concepts/identity/rbac/#how-rbac-works)을 가질 경우 
Role은 아래와 같은 규칙으로 적용 됩니다.

예를 들어, 아래의 그림과 같이 _**stark@example.com**_ 사용자가 상위 Project Group에 _**Project Admin**_ Role로 Binding이 되어 있고, 하위 레벨의 프로젝트인 _**APAC**_ 에 _**Project Viewer**_ Role로 Binding되어 있는 경우
아래와 같은 방식으로 프로젝트별 Role이 적용 됩니다. 

- 직접 RoleBinding 하지 않은 하위 프로젝트/프로젝트 그룹에는 상위 프로젝트의 Role이 적용됨
- 명시적으로 RoleBinding 한 하위 프로젝트에는 해당 Role이 적용됨(상위레벨의 Role을 Overwriting함)


![](/ko/docs/concepts/identity/rbac/rbac_img/rbac_concept_img04.png)


## Default Roles

모든 스페이스원 도메인은 생성시 _**Default Role**_ 을 자동으로 포함합니다. 아래는 그 리스트 입니다. 

|          Name          | Role Type |                               Description                               |
|:----------------------:|:---------:|:-----------------------------------------------------------------------:|
|      Domain Admin      |  DOMAIN   |                    도메인 전체 Resource 를 조회/변경/삭제 할 수 있음                    |
|     Domain Viewer      |  DOMAIN   |                        도메인 전체 Resource를 조회할 수 있음                        |
|     Project Admin      |  PROJECT  |               멤버로 추가된 프로젝트 전체 Resource 를 조회/변경/삭제 할 수 있음                |
|     Project Viewer     |  PROJECT  |                  멤버로 추가된 프로젝트 전체 Resource 를 조회 할 수 있음                   |
| Alert Manager Operator |  PROJECT  | 멤버로 추가된 Project 전체 Resource 를 조회 할 수 있음, Alert Manager의 Alert 처리 권한을 가짐 |

## Managing Roles

spacectl을 통해 도메인 자체적 으로 Role을 관리할 수 있습니다.
[Role 관리하기](/ko/docs/guides/advanced/spaceone_cli/managing_role_policy/) 문서를 참고 해 주세요.




