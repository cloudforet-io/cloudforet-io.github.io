---
title: "Examples"
linkTitle: "Examples"
weight: 3
date: 2021-12-21
description: >
    Role을 관리하는 방법을 주요 사례를 통해서 알아 보도록 합니다. 
---

## PreRequisite 
모든 Example을 진행하기 전 사전에 확인해야 할 사항을 정리 합니다.

{{< alert title="Note" >}}
이 페이지의 모든 예제는 Official Marketplace를 사용하는것을 가정하고 작성 하였습니다.
{{< /alert >}}

<br>

### Repository

모든 작업은 Repository(repository_id)를 지정해야 합니다. 
각 SpaceONE내의 도메인은 _**Official Marketplace**_ 와 _**Private Repository**_ 타입의 Repository를 가질 수 있습니다.
이것은 아래와 같이 확인할 수 있습니다.

- repository_type : _**remote**_ 인 repository가 _**Official Marketplace**_ 입니다.
- repository_type : _**local**_ 인 repository가 _**Private Repository**_ 입니다.

~~~bash
$> spacectl list repository.Repository
 repository_id     | name        | repository_type   | endpoint                                          | created_at
-------------------+-------------+-------------------+---------------------------------------------------+--------------------------
 repo-xxxxxxx | Marketplace | remote            | grpc+ssl://xxxx:443 | 2021-10-03T15:51:56.338Z
 repo-xxxxxxx | root        | local             |                                                   | 2020-05-12T00:04:37.010Z

 Count: 2 / 2
~~~

<br>

### Policy

- 아래와 같이 원하는 정책을 가지고 있는 policy_id를 확인 합니다.
- -c 옵션을 통해 조회 하고자 하는 column을 지정할 수 있습니다.(전체 column 사용시 line이 너무 길어질 수 있습니다.)

~~~bash
$> spacectl list repository.Policy -p repository_id=repo-xxxxx -c policy_id,name,state,labels,repository_info,domain_id
 policy_id                             | name                          | state   | labels   | repository_info                                                                            | domain_id
---------------------------------------+-------------------------------+---------+----------+--------------------------------------------------------------------------------------------+---------------------
 policy-managed-alert-manager-operator | Alert Manager Operator Access | ENABLED | []       | {'repository_id': 'repo-xxxxxxxx', 'name': 'Marketplace', 'repository_type': 'remote'} | domain-xxxxxxx
 policy-managed-domain-admin           | Domain Admin Access           | ENABLED | []       | {'repository_id': 'repo-xxxxxxxx', 'name': 'Marketplace', 'repository_type': 'remote'} | domain-xxxxxxx
 policy-managed-domain-viewer          | Domain Viewer Access          | ENABLED | []       | {'repository_id': 'repo-xxxxxxxx', 'name': 'Marketplace', 'repository_type': 'remote'} | domain-xxxxxxx
 policy-managed-project-admin          | Project Admin Access          | ENABLED | []       | {'repository_id': 'repo-xxxxxxxx', 'name': 'Marketplace', 'repository_type': 'remote'} | domain-xxxxxxx
 policy-managed-project-viewer         | Project Viewer Access         | ENABLED | []       | {'repository_id': 'repo-xxxxxxxx', 'name': 'Marketplace', 'repository_type': 'remote'} | domain-xxxxxxx

 Count: 6 / 6
~~~

<br>

## EX1. Create Domain Admin Role

- 먼저 [repository_id 확인](/ko/docs/guides_v1/advanced/spaceone_cli/managing_role_policy/examples/#repository) 및 [policy_id 확인](/ko/docs/guides_v1/advanced/spaceone_cli/managing_role_policy/examples/#policy)합니다.
- 아래와 같은 샘플의 yaml 파일에서 policy_id를 변경 후 Role을 생성할 수 있습니다.

~~~bash
$> spacectl exec create identity.Role -f crate_domain_admin_role.yml
~~~

~~~yaml
# create_domain_admin_role.yaml
---
name: Domain Admin
role_type: DOMAIN
policies:
  - policy_type: MANAGED
    policy_id: policy-managed-domain-admin
~~~

- 정상적으로 생성 되었다면 아래와 같은 command로 생성을 확인할 수 있습니다.

~~~bash
$> spacectl list identity.Role 
 role_id           | name                   | role_type   | policies                                                                           | tags   | domain_id           | created_at
-------------------+------------------------+-------------+------------------------------------------------------------------------------------+--------+---------------------+--------------------------
 role-242f9851eee7 | Domain Admin          | DOMAIN      | [{'policy_type': 'MANAGED', 'policy_id': 'policy-managed-domain-admin'}]          | {}     | domain-xxxxxxxx | 2021-11-15T05:12:28.865Z
~~~


<br>

## EX2. Create Domain Viewer Role

- 먼저 [repository_id 확인](/ko/docs/guides_v1/advanced/spaceone_cli/managing_role_policy/examples/#repository) 및 [policy_id 확인](/ko/docs/guides_v1/advanced/spaceone_cli/managing_role_policy/examples/#policy)합니다.
- 아래와 같은 샘플의 yaml 파일에서 policy_id를 변경 후 Role을 생성할 수 있습니다.

~~~bash
$> spacectl exec create identity.Role -f crate_domain_viewer_role.yml
~~~

~~~yaml
# create_domain_viewer_role.yaml
---
name: Domain Viewer
role_type: DOMAIN
policies:
  - policy_type: MANAGED
    policy_id: policy-managed-domain-viewer
~~~

- 정상적으로 생성 되었다면 아래와 같은 command로 생성을 확인할 수 있습니다. 

~~~bash
$> spacectl list identity.Role 
 role_id           | name                   | role_type   | policies                                                                           | tags   | domain_id           | created_at
-------------------+------------------------+-------------+------------------------------------------------------------------------------------+--------+---------------------+--------------------------
 role-242f9851eee7 | Domain Viewer          | DOMAIN      | [{'policy_type': 'MANAGED', 'policy_id': 'policy-managed-domain-viewer'}]          | {}     | domain-xxxxxxxx | 2021-11-15T05:12:28.865Z
~~~

<br>

## EX3. Create Project Admin Role

- 먼저 [repository_id 확인](/ko/docs/guides_v1/advanced/spaceone_cli/managing_role_policy/examples/#repository) 및 [policy_id 확인](/ko/docs/guides_v1/advanced/spaceone_cli/managing_role_policy/examples/#policy)합니다.
- 아래와 같은 샘플의 yaml 파일에서 policy_id를 변경 후 Role을 생성할 수 있습니다.

~~~bash
$> spacectl exec create identity.Role -f crate_project_admin_role.yml
~~~

~~~yaml
# crate_project_admin_role.yml
---
name: Project Admin
role_type: PROJECT
policies:
  - policy_type: MANAGED
    policy_id: policy-managed-project-admin
~~~

- 정상적으로 생성 되었다면 아래와 같은 command로 생성을 확인할 수 있습니다.

~~~bash
$> spacectl list identity.Role 
 role_id           | name                   | role_type   | policies                                                                           | tags   | domain_id           | created_at
-------------------+------------------------+-------------+------------------------------------------------------------------------------------+--------+---------------------+--------------------------
 role-5faa30fb6191 | Project Admin         | PROJECT     | [{'policy_type': 'MANAGED', 'policy_id': 'policy-managed-project-admin'}]         | {}     | domain-xxxxxxxx | 2021-11-15T05:12:29.946Z
~~~


<br>

## EX4. Create Project Viewer Role

- 먼저 [repository_id 확인](/ko/docs/guides_v1/advanced/spaceone_cli/managing_role_policy/examples/#repository) 및 [policy_id 확인](/ko/docs/guides_v1/advanced/spaceone_cli/managing_role_policy/examples/#policy)합니다.
- 아래와 같은 샘플의 yaml 파일에서 policy_id를 변경 후 Role을 생성할 수 있습니다.

~~~bash
$> spacectl exec create identity.Role -f crate_project_viewer_role.yml
~~~

~~~yaml
# crate_project_viewer_role.yml
---
name: Project Viewer
role_type: PROJECT
policies:
  - policy_type: MANAGED
    policy_id: policy-managed-project-viewer
~~~

- 정상적으로 생성 되었다면 아래와 같은 command로 생성을 확인할 수 있습니다. 

~~~bash
$> spacectl list identity.Role 
 role_id           | name                   | role_type   | policies                                                                           | tags   | domain_id           | created_at
-------------------+------------------------+-------------+------------------------------------------------------------------------------------+--------+---------------------+--------------------------
 role-5faa30fb6191 | Project Viewer         | PROJECT     | [{'policy_type': 'MANAGED', 'policy_id': 'policy-managed-project-viewer'}]         | {}     | domain-xxxxxxxx | 2021-11-15T05:12:29.946Z
~~~

<br>

## EX5. Create Alert Manager Full Access Role

- 먼저 [repository_id 확인](/ko/docs/guides_v1/advanced/spaceone_cli/managing_role_policy/examples/#repository) 및 [policy_id 확인](/ko/docs/guides_v1/advanced/spaceone_cli/managing_role_policy/examples/#policy)합니다.
- 아래와 같은 샘플의 yaml 파일에서 policy_id를 변경 후 Role을 생성할 수 있습니다.

~~~bash
$> spacectl exec create identity.Role -f crate_alert_manager_full_access_role.yml
~~~

~~~yaml
---
# crate_alert_manager_full_access_role.yml
name: Alert Manager Full Access
role_type: PROJECT
policies:
  - policy_type: MANAGED
    policy_id: policy-managed-alert-manager-full-access
  - policy_type: MANAGED
    policy_id: policy-managed-project-viewer
~~~

- 정상적으로 생성 되었다면 아래와 같은 command로 생성을 확인할 수 있습니다.

~~~bash
$> spacectl list identity.Role 
 role_id           | name                   | role_type   | policies                                                                           | tags   | domain_id           | created_at
-------------------+------------------------+-------------+------------------------------------------------------------------------------------+--------+---------------------+--------------------------
 role-f18c7d2a9398 | Alert Manager Full Access | PROJECT     | [{'policy_type': 'MANAGED', 'policy_id': 'policy-managed-alert-manager-full-access'},{'policy_type': 'MANAGED', 'policy_id': 'policy-managed-project-viewer'}] | {}     | domain-xxxxxxxxx | 2021-11-15T05:12:31.060Z
~~~

<br>

