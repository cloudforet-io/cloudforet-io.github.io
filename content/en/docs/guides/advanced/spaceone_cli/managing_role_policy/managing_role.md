---
title: "Manage Role"
linkTitle: "Manage Role"
weight: 2
date: 2021-12-21
description: >
    You can conveniently manage Role & Policy within the domain with Spacectl.
---


## Role

- Role is divided into Domain/Project Type according to the scope to which the policy is applied.
- For more information, refer to the [Role Type](/docs/concepts/identity/rbac/understanding-role/#role-type) document.

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

For detailed parameters, refer to the [identity.Role api document](https://spaceone-dev.gitbook.io/spaceone-apis/identity/v1/role#update). 

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
The domain role in use cannot be deleted. Refer to [Release User Domain Role](/docs/guides/user/user/#editdelete-users)
It can be released through methods such as _**Assign Domain Role > Not select role > Confirm **_.
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
Roles in use cannot be deleted.
1. Via [Checking Roles Assigned to User](/docs/guides/user/user/#overview)
   After checking the user who is using the role to be deleted
2. [Manage Project Group Members](/docs/guides/project/project_group_management/#set-project-group-roles) or
   You can delete the registered member settings through [Manage Project Member](/docs/guides/project/project_management/#member). 
{{< /alert >}}

~~~bash
$> spacectl exec delete identity.Role -p role_id=role-xxxxxx -p domain_id=domain-xxxxxx
~~~

