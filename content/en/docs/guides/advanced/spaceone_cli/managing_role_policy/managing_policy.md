---
title: "Manage Policy"
linkTitle: "Manage Policy"
weight: 1
date: 2021-12-21
description: >
    You can conveniently manage Role & Policy within the domain with Spacectl.
---



## Policy

- Policy consists of a collection of Permissions.
- Permission is expressed as {microservice}.{resource}.{verb}.
- Asterisk(*) is supported.

{{< alert title="Note" >}}
To manage policies, users need appropriate privileges. For detailed permissions, please refer to [Default Role](/docs/concepts/identity/rbac/understanding-role/#default-roles).
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
- _**MANAGED Policy**_ is a policy registered on the SpaceONE Marketplace and managed by the SpaceONE team.
- General users can only inquire, and the published policy can be linked to a role.

<br>

**Lists policy**

- Check the Repository registered in the Domain. The repository with _**repository_type : remote**_ is the Marketplace.
~~~bash
$> spacectl list repository.Repository
 repository_id     | name        | repository_type   | endpoint                                          | created_at
-------------------+-------------+-------------------+---------------------------------------------------+--------------------------
 repo-xxxxxxx | Marketplace | remote            | grpc+ssl://xxxx:443 | 2021-10-03T15:51:56.338Z
 repo-xxxxxxx | root        | local             |                                                   | 2020-05-12T00:04:37.010Z

 Count: 2 / 2
~~~

- Retrieve the policy from the Repository above. If the permission is long, only the necessary parameters can be extracted with the -c option. 
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
- A domain administrator can directly register and use the policy to be used within the domain in the private registry.

<br>

**Lists Private Repository**

- Check the Repository registered in the Domain. A repository with _**repository_type : local**_ is a Marketplace.
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
- You can create custom policy by referring to the Yaml file below.
{{< alert title="Note" >}}
In order to use the policy conveniently, the user can input the desired policy_id.

- Within 48 characters, a combination of lowercase letters, numbers, and hyphens ('-') is supported.
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

- Query the target policy.
~~~bash
$> spacectl list repository.Policy -p repository_id=repo-xxxxxxxx -c policy_id,name,state,labels,repository_info,domain_id
 policy_id            | name           | state   | labels   | repository_info                                                                    | domain_id
----------------------+----------------+---------+----------+------------------------------------------------------------------------------------+---------------------
 policy-custom-policy | Custom Policy  | ENABLED | []       | {'repository_id': 'repo-xxxxxxx', 'name': 'root', 'repository_type': 'local'} | domain-xxxxxxx

 Count: 3 / 3
~~~

- Delete the target policy. 
~~~bash
$> spacectl exec delete repository.Policy -p policy_id=policy-custom-policy -p domain_id=domain-xxxxxxx
~~~
