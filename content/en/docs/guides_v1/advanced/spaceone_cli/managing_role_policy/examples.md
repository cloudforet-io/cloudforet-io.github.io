---
title: "Examples"
linkTitle: "Examples"
weight: 3
date: 2021-12-21
description: >
    Let's find out how to manage roles through major examples.
---

## PreRequisite 
Before proceeding with all the examples, we arrange the things to check in advance.

{{< alert title="Note" >}}
All examples on this page assume that you are using the Official Marketplace.
{{< /alert >}}

<br>

### Repository

All operations must specify a Repository(repository_id).
Each domain in SpaceONE can have _**Official Marketplace**_ and _**Private Repository**_ types of Repository.
This can be verified as below.

- repository_type : The repository with _**remote**_ is _**Official Marketplace**_ .
- repository_type : The repository with _**local**_ is _**Private Repository**_ .

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

- Check the policy_id that has the desired policy as shown below.
- You can specify the column you want to search through the -c option. (The line may become too long when using all columns.)

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

- First check [repository_id](/docs/guides_v1/advanced/spaceone_cli/managing_role_policy/examples/#repository) and [check policy_id](/docs/guides_v1/advanced/spaceone_cli/managing_role_policy/examples/#policy) .
- You can create a role after changing policy_id in the yaml file of the sample below.

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

- If it was created normally, you can check the creation with the following command.

~~~bash
$> spacectl list identity.Role 
 role_id           | name                   | role_type   | policies                                                                           | tags   | domain_id           | created_at
-------------------+------------------------+-------------+------------------------------------------------------------------------------------+--------+---------------------+--------------------------
 role-242f9851eee7 | Domain Admin          | DOMAIN      | [{'policy_type': 'MANAGED', 'policy_id': 'policy-managed-domain-admin'}]          | {}     | domain-xxxxxxxx | 2021-11-15T05:12:28.865Z
~~~


<br>

## EX2. Create Domain Viewer Role

- First check [repository_id](/docs/guides_v1/advanced/spaceone_cli/managing_role_policy/examples/#repository) and [check policy_id](/docs/guides_v1/advanced/spaceone_cli/managing_role_policy/examples/#policy) .
- You can create a role after changing policy_id in the yaml file of the sample below.

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

- If it was created normally, you can check the creation with the following command.

~~~bash
$> spacectl list identity.Role 
 role_id           | name                   | role_type   | policies                                                                           | tags   | domain_id           | created_at
-------------------+------------------------+-------------+------------------------------------------------------------------------------------+--------+---------------------+--------------------------
 role-242f9851eee7 | Domain Viewer          | DOMAIN      | [{'policy_type': 'MANAGED', 'policy_id': 'policy-managed-domain-viewer'}]          | {}     | domain-xxxxxxxx | 2021-11-15T05:12:28.865Z
~~~

<br>

## EX3. Create Project Admin Role

- First check [repository_id](/docs/guides_v1/advanced/spaceone_cli/managing_role_policy/examples/#repository) and [check policy_id](/docs/guides_v1/advanced/spaceone_cli/managing_role_policy/examples/#policy) .
- You can create a role after changing policy_id in the yaml file of the sample below.

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

- If it was created normally, you can check the creation with the following command.

~~~bash
$> spacectl list identity.Role 
 role_id           | name                   | role_type   | policies                                                                           | tags   | domain_id           | created_at
-------------------+------------------------+-------------+------------------------------------------------------------------------------------+--------+---------------------+--------------------------
 role-5faa30fb6191 | Project Admin         | PROJECT     | [{'policy_type': 'MANAGED', 'policy_id': 'policy-managed-project-admin'}]         | {}     | domain-xxxxxxxx | 2021-11-15T05:12:29.946Z
~~~


<br>

## EX4. Create Project Viewer Role

- First check [repository_id](/docs/guides_v1/advanced/spaceone_cli/managing_role_policy/examples/#repository) and [check policy_id](/docs/guides_v1/advanced/spaceone_cli/managing_role_policy/examples/#policy) .
- You can create a role after changing policy_id in the yaml file of the sample below.

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

- If it was created normally, you can check the creation with the following command.

~~~bash
$> spacectl list identity.Role 
 role_id           | name                   | role_type   | policies                                                                           | tags   | domain_id           | created_at
-------------------+------------------------+-------------+------------------------------------------------------------------------------------+--------+---------------------+--------------------------
 role-5faa30fb6191 | Project Viewer         | PROJECT     | [{'policy_type': 'MANAGED', 'policy_id': 'policy-managed-project-viewer'}]         | {}     | domain-xxxxxxxx | 2021-11-15T05:12:29.946Z
~~~

<br>

## EX5. Create Alert Manager Full Access Role

- First check [repository_id](/docs/guides_v1/advanced/spaceone_cli/managing_role_policy/examples/#repository) and [check policy_id](/docs/guides_v1/advanced/spaceone_cli/managing_role_policy/examples/#policy).
- You can create a role after changing policy_id in the yaml file of the sample below.

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

- If it was created normally, you can check the creation with the following command.

~~~bash
$> spacectl list identity.Role 
 role_id           | name                   | role_type   | policies                                                                           | tags   | domain_id           | created_at
-------------------+------------------------+-------------+------------------------------------------------------------------------------------+--------+---------------------+--------------------------
 role-f18c7d2a9398 | Alert Manager Full Access | PROJECT     | [{'policy_type': 'MANAGED', 'policy_id': 'policy-managed-alert-manager-full-access'},{'policy_type': 'MANAGED', 'policy_id': 'policy-managed-project-viewer'}] | {}     | domain-xxxxxxxxx | 2021-11-15T05:12:31.060Z
~~~

<br>

