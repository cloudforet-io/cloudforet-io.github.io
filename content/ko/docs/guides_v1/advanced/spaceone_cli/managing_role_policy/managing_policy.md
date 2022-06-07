---
title: "Manage Policy"
linkTitle: "Manage Policy"
weight: 1
date: 2021-12-21
description: >
    Domain 내의 Role & Policy를 Spacectl로 편리하게 관리할 수 있습니다.
---



## Policy

- Policy는 Permission의 모음으로 구성되어 있습니다. 
- Permission은 {microservice}.{resource}.{verb}로 나타냅니다.
- Asterisk(*)를 지원합니다. 

{{< alert title="Note" >}}
Policy를 관리하기 위해서는 사용자에게 적절한 권한이 필요합니다. 이에 상세한 권한에 대해 [Default Role](/ko/docs/concepts/identity/rbac/understanding-role/#default-roles)을 참고해주세요.
{{< /alert >}}

~~~json
# policy definition sample for json 
{
  'name': 'General Identity User',
  'permissions': [
      'identity.Project.*',
      'identity.ProjectGroup.*',
      'identity.User.get',
      'identity.User.update',
      'identity.User.list',
  ]
}
~~~

~~~yaml
# policy definition sample for yaml
---
name: General Identity User
permissions: 
  - 'identity.Project.*'
  - 'identity.ProjectGroup.*'
  - 'identity.User.get'
  - 'identity.User.update'
  - 'identity.User.list'
~~~


## MANAGED Policy
- _**MANAGED Policy**_는 SpaceONE Marketplace에 등록되어 SpaceONE 팀에 의해 관리되는 정책 입니다. 
- 일반 사용자는 조회만 가능하며, 게시된 Policy를 Role에 연동하여 사용 가능합니다. 

<br>

**Lists policy**

- Domain에 등록된 Repository를 확인 합니다. _**repository_type : remote**_ 인 repository가 Marketplace 입니다.
~~~bash
$> spacectl list repository.Repository
 repository_id     | name        | repository_type   | endpoint                                          | created_at
-------------------+-------------+-------------------+---------------------------------------------------+--------------------------
 repo-xxxxxxx | Marketplace | remote            | grpc+ssl://xxxx:443 | 2021-10-03T15:51:56.338Z
 repo-xxxxxxx | root        | local             |                                                   | 2020-05-12T00:04:37.010Z

 Count: 2 / 2
~~~

- 위의 Repository로 부터 Policy를 조회 합니다. Permission이 긴 경우 -c 옵션으로 필요한 parameter만 추출할 수 있습니다. 
~~~bash
$> spacectl list repository.Policy -p repository_id=repo-xxxxxxxx -c policy_id,name,state,labels,repository_info,domain_id
 policy_id                             | name                          | state   | labels   | repository_info                                                                            | domain_id
---------------------------------------+-------------------------------+---------+----------+--------------------------------------------------------------------------------------------+---------------------
 policy-managed-alert-manager-operator | Alert Manager Operator Access | ENABLED | []       | {'repository_id': 'repo-xxxxxxx', 'name': 'Marketplace', 'repository_type': 'remote'} | domain-xxxxxx
 policy-managed-domain-admin           | Domain Admin Access           | ENABLED | []       | {'repository_id': 'repo-xxxxxxx', 'name': 'Marketplace', 'repository_type': 'remote'} | domain-xxxxxx
 policy-managed-domain-viewer          | Domain Viewer Access          | ENABLED | []       | {'repository_id': 'repo-xxxxxxx', 'name': 'Marketplace', 'repository_type': 'remote'} | domain-xxxxxx
 policy-managed-project-admin          | Project Admin Access          | ENABLED | []       | {'repository_id': 'repo-xxxxxxx', 'name': 'Marketplace', 'repository_type': 'remote'} | domain-xxxxxx
 policy-managed-project-viewer         | Project Viewer Access         | ENABLED | []       | {'repository_id': 'repo-xxxxxxx', 'name': 'Marketplace', 'repository_type': 'remote'} | domain-xxxxxx
~~~

## Custom Policy
- 도메인 관리자는 Private Registry에 도메인 내부에서 사용할 Policy를 직접 등록하여 사용할 수 있습니다.

<br>

**Lists Private Repository**

- Domain에 등록된 Repository를 확인 합니다. _**repository_type : local**_ 인 repository가 Marketplace 입니다.
~~~bash
$> spacectl list repository.Repository
 repository_id     | name        | repository_type   | endpoint                                          | created_at
-------------------+-------------+-------------------+---------------------------------------------------+--------------------------
 repo-xxxxxxx | Marketplace | remote            | grpc+ssl://xxxx:443 | 2021-10-03T15:51:56.338Z
 repo-xxxxxxx | root        | local             |                                                   | 2020-05-12T00:04:37.010Z

 Count: 2 / 2
~~~


<br>

**Create Custom Policy**
- 아래와 같은 Yaml 파일을 참고하여 custom policy를 생성할 수 있습니다.
{{< alert title="Note" >}}
policy를 편리하게 활용하기 위해 사용자가 원하는 policy_id입력할 수 있습니다. 

- 48 자 이내, 소문자, 숫자, 하이픈('-') 조합을 지원 합니다. 
{{< /alert >}}

~~~bash
$> spacectl exec create repository.Policy -p domain_id=domain-xxxxxxx -f custom_policy.yml 
---
created_at: '2021-12-28T10:57:54.574Z'
domain_id: domain-xxxxxxxx
labels: []
name: Custom Policy
permissions:
- identity.User.get
- identity.User.update
- identity.User.list
policy_id: policy-custom-policy
repository_info:
  name: root
  repository_id: repo-xxxxxxxx
  repository_type: local
state: ENABLED
tags: {}
updated_at: '2021-12-28T10:57:54.574Z'
~~~

~~~yaml
# policy definition sample for yaml
---
policy_id: policy-custom-policy
name: Custom Policy
permissions: 
  - 'identity.User.get'
  - 'identity.User.update'
  - 'identity.User.list'
~~~

<br>

**Update Custom Policy**
~~~bash
$> spacectl exec update repository.Policy -p domain_id=domain-xxxxxxx -f update_policy.yml
---
created_at: '2021-12-28T10:57:54.574Z'
domain_id: domain-xxxxxxxx
labels: []
name: Custom Policy
permissions:
- identity.ProjectGroup.*
- identity.User.get
- identity.User.update
- identity.User.list
policy_id: policy-custom-policy
repository_info:
  name: root
  repository_id: repo-xxxxxxx
  repository_type: local
state: ENABLED
tags: {}
updated_at: '2021-12-28T10:57:54.574Z'
~~~

~~~yaml
---
policy_id: policy-custom-policy
name: Custom Policy
permissions: 
  - 'identity.ProjectGroup.*'
  - 'identity.User.get'
  - 'identity.User.update'
  - 'identity.User.list'
~~~

<br>

**Delete Custom Policy**

- 대상 Policy를 조회 합니다.
~~~bash
$> spacectl list repository.Policy -p repository_id=repo-xxxxxxxx -c policy_id,name,state,labels,repository_info,domain_id
 policy_id            | name           | state   | labels   | repository_info                                                                    | domain_id
----------------------+----------------+---------+----------+------------------------------------------------------------------------------------+---------------------
 policy-custom-policy | Custom Policy  | ENABLED | []       | {'repository_id': 'repo-xxxxxxx', 'name': 'root', 'repository_type': 'local'} | domain-xxxxxxx

 Count: 3 / 3
~~~

- 대상 Policy를 삭제 합니다. 
~~~bash
$> spacectl exec delete repository.Policy -p policy_id=policy-custom-policy -p domain_id=domain-xxxxxxx
~~~
