---
title: "Managing Role and Policy"
linkTitle: "Managing Role and Policy"
weight: 1
date: 2021-12-21
description: >
    Domain 내의 Role & Policy를 Spacectl로 편리하게 관리할 수 있습니다.
---



## Policy

- Policy는 Permission의 모음으로 구성되어 있습니다. 
- Permission은 {microservice}.{resource}.{verb}로 나타냅니다.
- Asterisk(*)를 지원합니다. 

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


### Manage MANAGED Policy
- MANAGED Policy는 SpaceONE Marketplace에 등록되어 SpaceONE 팀에 의해 관리되는 정책 입니다. 
- 일반 사용자는 조회만 가능하며, 게시된 Policy를 Role에 연동하여 사용 가능합니다. 

***Lists policy***

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

### Manage Custom Policy
- 도메인 관리자는 Private Registry에 도메인 내부에서 사용할 Policy를 직접 등록하여 사용할 수 있습니다.


***Lists policy***
~~~bash

~~~

***Create policy***
~~~bash
~~~





## Role

- Role은 정책이 적용되는 범위에 따라 Domain/Project Type으로 구분 됩니다.
- 자세한 설명은 [Role Type](/ko/docs/concepts/rbac/understanding-role/#role-type) 문서를 참조해 주세요.

### Manage Domain Role

***Lists Domain Role***



### Manage Project Role






## Example
- 도메인 Role을 생성하는 예제 입니다. 

### Create Domain Viewer Role


- Domain에 등록된 Repository를 확인 합니다. _**repository_type : remote**_ 인 repository가 Marketplace 입니다.
~~~bash
$> spacectl list repository.Repository
 repository_id     | name        | repository_type   | endpoint                                          | created_at
-------------------+-------------+-------------------+---------------------------------------------------+--------------------------
 repo-xxxxxxx | Marketplace | remote            | grpc+ssl://xxxx:443 | 2021-10-03T15:51:56.338Z
 repo-xxxxxxx | root        | local             |                                                   | 2020-05-12T00:04:37.010Z

 Count: 2 / 2
~~~

- 원하는 정책을 가지고 있는 policy_id를 얻는다.
~~~bash
$> spacectl list repository.Policy -p repository_id=repo-xxxx -o table
policy_id                             | name                          | state   | labels   | repository_info                                                                            | domain_id
---------------------------------------+-------------------------------+---------+----------+--------------------------------------------------------------------------------------------+---------------------
 policy-managed-alert-manager-operator | Alert Manager Operator Access | ENABLED | []       | {'repository_id': 'repo-xxxxxxx', 'name': 'Marketplace', 'repository_type': 'remote'} | domain-xxxxxx
 policy-managed-domain-admin           | Domain Admin Access           | ENABLED | []       | {'repository_id': 'repo-xxxxxxx', 'name': 'Marketplace', 'repository_type': 'remote'} | domain-xxxxxx
~~~

- Domain Role을 생성 합니다.

~~~bash
$> spacectl exec create identity.Role -f crate_domain_role.yml
~~~

~~~yaml
create_domain_role.yaml

---
name: Domain Viewer
role_type: DOMAIN
policies:
  - policy_type: MANAGED
    policy_id: policy-managed-domain-viewer
~~~


### Create Alert Manager Operator Role



### Create Billing Admin Role



