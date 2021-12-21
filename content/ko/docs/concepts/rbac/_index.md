---
title: "Role Based Access Control"
linkTitle: "Role Based Access Control"
weight: 1
date: 2021-12-21
description: >
    이 페이지에서는 SpaceONE의 사용자 역할기반 접근관리(RBAC)의 기본 개념에 대해 살펴봅니다.
---

## How RBAC works

SpaceONE의 RBAC(Role Based Access Control)을 통해 누가(who), 어떠한 조직(project or domain)에 어떠한(what) 접근을 할 수 있는지를 정의 합니다.
예를 들어, Project Admin Role은 지정된 Project 내의 모든 자원을 조회(Read) 몇 변경(Update/Delete)할 수 있습니다. Domain Viewer Role은 지정된 Domain 내의 모든 자원을 조회(Read)할 수 있습니다.
여기서 자원이란, SpaceONE 내에 생성한 사용자, Project/Project Group 및 개별 클라우드 리소스까지 모든것을 포함 합니다.

모든 사용자는 하나 이상의 역할을 가지고 있으며, 이것은 직접 역할을 부여하거나 프로젝트 내에서 상속될 수도 있습니다.
이를 통해 복잡한 프로젝트 관계 속에서 사용자의 역할관리를 손쉽게 관리할 수 있습니다.

Policy는 대상이 지정된 자원에 대해 어떠한 Action을 할 수 있는지 정의 합니다. 그리고 이 Policy는 Role과 연결 됩니다.
또한 Role은 각각의 사용자에 바인딩 됩니다.  
아래의 다이어그램은 RBAC를 구성하는 사용자와 Role 및 Policy간의 관계를 나타냅니다.

![](/ko/docs/concepts/rbac/rbac_img/rbac_concept_img01.png)

이러한 역할 관리 모델은 크게 3가지 구성 요소로 구분 됩니다.

- _**Role**_. 각 사용자별 부여할 수 있는 접근권한 정책의 모음 입니다. 모든 Role은 하나의 Policy를 반드시 필요로 합니다.
  더 상세한 설명은 [Understanding Role](/ko/docs/concepts/rbac/understanding-role/)를 참고해주세요

- _**Policy**_. 정책은 permission의 모음 입니다. permission에는 스페이스원의 각 자원에 대해 허용되는 접근 범위가 정의 되어 있습니다.
  정책은 Role을 통해, 각 사용자에게 부여될 수 있습니다. 정책은 Marketplace에 게시하여 다른사용자들이 사용할 수도 있고, 특정 도메인만을 위해 Private 하게 게시될 수도 있습니다.
  더 상세한 설명은 [Understanding Policy](/ko/docs/concepts/rbac/understanding-policy/)를 참고해주세요.

- _**User**_. 사용자는 콘솔에 로그인하여 UI를 이용하는 사용자와 API 사용자, SYSTEM 사용자를 모두 포함 합니다.
  각 사용자들은 RoleBinding 절차를 통해 복수의 Role과 연결 됩니다. 이를 통해 적절한 권한을 받아 SpaceONE의 다양한 자원들에 접근이 가능합니다.



## Basic concepts of access management

사용자가 조직 내의 자원에 접근 하고자 할때, 관리자는 각 사용자에게 대상 프로젝트 혹은 도메인의 역할(Role)을 부여 합니다.
SpaceONE Identity Service는 각 사용자에게 부여된 Role/Policy를 확인하여 각 사용자가 자원에 접근할 수 있도록 합니다.

### Resource

만약 사용자가 특정한 SpaceONE 프로젝트 내의 자원에 접근 하고자 한다면, 해당 사용자에게 적합한 Role을 부여한 후 대상 프로젝트에 멤버로 추가하여 접근 가능할게 할 수 있습니다.
이러한 자원의 예는 [Servers](/ko/docs/guides/user_guide/invetory/server/), [Projects](/ko/docs/guides/user_guide/project/project_management.md), [Alerts](/docs/guides/user_guide/monitoring/alert_manager/alert/) 입니다.

SpaceONE내에서 관리되는 자원들을 각 서비스별로 편리하게 이용할 수 있게 하기 위해, 사전에 정의된 Role/Policy를 게시하고 있습니다.
회사 내부적으로 자체 접근범위를 정의하고 싶을 경우 Custom Policy/Custom Role을 생성하여 내부 조직에 적용할 수도 있습니다.

이것에 대한 상세할 설명은 [Understanding Role](/ko/docs/concepts/rbac/understanding-role/), [Understanding Policy](/ko/docs/concepts/rbac/understanding-policy/)를 참고 해 주세요.


### Permissions

Permission은 대상 자원에 대하여 어떠한 동작이 허용되었는지를 정의 합니다. 이 Permission은 아래와 같은 형태로 표현됩니다.
_** microservice.resource.verb **_ 예를 들자면 _** inventory.Server.list **_ 와 같은 형태 입니다.

Permission은 SpaceONE API Method에 대응 되기도 합니다. 이것은 각각의 SpaceONE내의 microservice 각각의 노출된 API method과 긴밀하게 연관 되어 있기 때문 입니다.
그러므로, API를 호출하는 사용자가 method를 호출시 대응하는 permission을 필요로 합니다. 만약, Inventory 서비스의 Server 리스트를 보기 위해 inventory.Server.list를 호출 하고자 한다면
사용자는 대응되는 _** inventory.Server.list **_ permission을 role에 포함하고 있어야 합니다.

Permission은 사용자에게 직접적으로 부여할 수 없습니다. 대신에 적절한 permission의 모음을 Policy로 정의하여, 사용자에게 Role을 통해 할당할 수 있습니다.


### Roles

Role은 접근 대상과 Policy의 조합으로 구성되어 있습니다. 사용자에게 Permission을 직접 부여할 수는 없고, Role의 형태로 부여할 수 있습니다.
또한, SpaceONE 내의 모든 자원들은 모두 Project 에 소속 되어 있습니다. 각 사용자들의 자원 접근 대상을 _** Project/Domain **_ 으로 구분해서 관리 할 수 있습니다.

![](/ko/docs/concepts/rbac/rbac_img/rbac_concept_img02.png)

Role은 관리 방식에 따라 아래와 같이 나뉩니다.

- Managed Roles : 사용자 역할에 맞게 상세하게 정의된 접근 제어가 가능 합니다. 예를 들어, Domain에 대한 전체 관리자를 위해 _** Domain Admin Role **_ 를 제공하고, Alert Manager의 이벤트 관리를 위해 _** Alert Manager Operator Role **_ 을 제공 합니다.
- Custom Roles : 각 조직에 맞는 Permission을 직접 설정하여 관리할 수 있습니다.

### Members

SpaceONE내의 모든 자원들은 아래와 같이 계층적으로 관리 됩니다.
그러므로, 각 계층의 사용자에게 역할을 부여하고 멤버로 추가하여, 자원에 접근 할 수 있도록 제어할 수 있습니다.

Role 타입에 따라 사용자는 도메인내의 전체 자원에 접근 하거나, 지정된 Project 내의 자원에 Access 할 수 있습니다.

- Domain : 도메인내의 전체 자원에 접근 할 수 있습니다.
- Project : 지정된 Project 내의 자원에 접근 할 수 있습니다.

Project 타입의 사용자는 특정 [Project의 Member로 추가](/ko/docs/guides/user_guide/project/project_management/) 됨으로서 해당 프로젝트 내의 자원에 접근이 가능 합니다.
[Project Group의 Member로 추가](/ko/docs/guides/user_guide/project/project_group_management/)하면, 하위 모든 프로젝트 자원에 접근할 수 있는 권한이 승계 됩니다.

![](/ko/docs/concepts/rbac/rbac_img/rbac_concept_img03.png)





