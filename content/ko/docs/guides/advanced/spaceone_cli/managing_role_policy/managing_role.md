---
title: "Manage Role"
linkTitle: "Manage Role"
weight: 2
date: 2021-12-21
description: >
    Domain 내의 Role & Policy를 Spacectl로 편리하게 관리할 수 있습니다.
---


## Role

- Role은 정책이 적용되는 범위에 따라 Domain/Project Type으로 구분 됩니다.
- 자세한 설명은 [Role Type](/ko/docs/concepts/rbac/understanding-role/#role-type) 문서를 참조해 주세요.

<br>

## Domain Role

<br>

**List Domain Role**

~~~bash
$> spacectl list identity.Role -p role_type=DOMAIN
 role_id           | name          | role_type   | policies                                                                  | tags   | domain_id           | created_at
-------------------+---------------+-------------+---------------------------------------------------------------------------+--------+---------------------+--------------------------
 role-xxxxx | Domain Admin  | DOMAIN      | [{'policy_type': 'MANAGED', 'policy_id': 'policy-xxxxx'}]          | {}     | domain-xxxxx | 2020-12-27T15:46:52.893Z
 role-xxxxx | Domain Viewer | DOMAIN      | [{'policy_type': 'MANAGED', 'policy_id': 'policy-xxxxx'}] | {}     | domain-xxxxx | 2021-11-15T05:12:28.865Z
~~~


<br>

**Create Domain Role**

~~~bash
$> spacectl exec create identity.Role -p domain_id=domain-xxxxx -f test-domain-admin.yaml
---
created_at: '2021-12-28T15:15:49.398Z'
domain_id: domain-xxxxxx
name: Test Domain Admin
policies:
- policy_id: policy-managed-alert-manager-operator
  policy_type: MANAGED
- policy_id: policy-managed-project-viewer
  policy_type: MANAGED
role_id: role-xxxxxxx
role_type: DOMAIN
tags: {}
~~~

~~~yaml
# test-domain-admin.yaml
---
name: Test Domain Admin
role_type: DOMAIN
policies:
  - policy_type: MANAGED
    policy_id: policy-xxxxxxx
  - policy_type: MANAGED
    policy_id: policy-xxxxxxx
~~~


<br>

**Update Domain Role**

상세 Parameter는 [identity.Role api 문서](https://spaceone-dev.gitbook.io/spaceone-apis/identity/v1/role#update) 를 참고해 주세요. 

~~~bash
$> spacectl exec update identity.Role -p role_id=role-xxxxxx -p domain_id=domain-xxxxxx -f update_role.yaml
---
created_at: '2021-12-28T15:15:49.398Z'
domain_id: domain-xxxxxx
name: Test Domain Admin
policies:
- policy_id: policy-managed-alert-manager-operator
  policy_type: MANAGED
- policy_id: policy-managed-project-admin
  policy_type: MANAGED
role_id: role-xxxxxx
role_type: DOMAIN
tags: {}
~~~

~~~yaml
# update_role.yaml
---
policies:
  - policy_type: MANAGED
    policy_id: policy-managed-alert-manager-operator
  - policy_type: MANAGED
    policy_id: policy-managed-project-admin
~~~

<br>

**Delete Domain Role**

{{< alert title="Note" >}}
사용중인 Domain Role은 삭제할 수 없습니다. [사용자 Domain Role 해제하기](/ko/docs/guides/admin_guide/identity/user/#editdelete-users) 를 참고하여  
_**Assign Domain Role > Not select role > Confirm **_ 와 같은 방법을 통해 해제 할 수 있습니다. 
{{< /alert >}}

~~~bash
$>  spacectl exec delete identity.Role -p role_id=role-xxxxxx -p domain_id=domain-xxxxx
~~~

<br>

## Project Role

<br>

**List Project Role**

~~~bash
$> spacectl list identity.Role -p role_type=PROJECT 
 role_id           | name                   | role_type   | policies                                                                           | tags   | domain_id           | created_at
-------------------+------------------------+-------------+------------------------------------------------------------------------------------+--------+---------------------+--------------------------
 role-xxxxx | Alert Manager Operator | PROJECT     | [{'policy_type': 'MANAGED', 'policy_id': 'policy-xxxxx'}] | {}     | domain-xxxxxx | 2021-11-15T05:12:31.060Z
 role-xxxxx | Project Admin          | PROJECT     | [{'policy_type': 'MANAGED', 'policy_id': 'policy-xxxxx'}]                   | {}     | domain-xxxxxx | 2020-12-27T15:43:59.950Z
 role-xxxxx | Project Viewer         | PROJECT     | [{'policy_type': 'MANAGED', 'policy_id': 'policy-xxxxx'}]         | {}     | domain-xxxxxx | 2021-11-15T05:12:29.946Z
~~~


<br>

**Create Project Role**

~~~bash
$> spacectl exec create identity.Role -p domain_id=domain-xxxxxxx -f test-project-admin.yaml
---
created_at: '2021-12-28T15:26:56.247Z'
domain_id: domain-xxxxxx
name: Test Project Admin
policies:
- policy_id: policy-managed-alert-manager-operator
  policy_type: MANAGED
- policy_id: policy-managed-project-admin
  policy_type: MANAGED
role_id: role-23003698c2fa
role_type: PROJECT
tags: {}
~~~

~~~yaml
# test-project-admin.yaml
---
name: Test Project Admin
role_type: PROJECT
policies:
  - policy_type: MANAGED
    policy_id: policy-managed-alert-manager-operator
  - policy_type: MANAGED
    policy_id: policy-managed-project-admin
~~~

<br>

**Update Project Role**

~~~bash
$> spacectl exec update identity.Role -p role_id=role-xxxxxx -p domain_id=domain-xxxxx -f update_role.yaml
---
created_at: '2021-12-28T15:26:56.247Z'
domain_id: domain-xxxxx
name: Test Project Admin
policies:
- policy_id: policy-managed-alert-manager-operator
  policy_type: MANAGED
role_id: role-23003698c2fa
role_type: PROJECT
tags: {}
~~~

~~~yaml
---
policies:
  - policy_type: MANAGED
    policy_id: policy-managed-alert-manager-operator
~~~

<br>

**Delete Project Role**

{{< alert title="Note" >}}
사용중인 Role은 삭제할 수 없습니다. 
1. [사용자에게 할당된 Role 확인하기](/ko/docs/guides/admin_guide/identity/user/#overview)를 통해 
삭제 대상 Role을 사용중인 사용자를 확인 후  
2. [Project Group Member 관리하기](/ko/docs/guides/user_guide/project/project_group_management/#set-project-group-roles) 혹은 
[Project Membember 관리하기](/ko/docs/guides/user_guide/project/project_management/#member)를 통해 등록된 Member 설정을 삭제할 수 있습니다. 
{{< /alert >}}

~~~bash
$> spacectl exec delete identity.Role -p role_id=role-xxxxxx -p domain_id=domain-xxxxxx
~~~

