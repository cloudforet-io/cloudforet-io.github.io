---
title: "Understanding Role"
linkTitle: "Understanding Role"
weight: 3
date: 2021-11-17
description: >
    This page takes a detailed look at Roles.
---


## Role structure

Role is a [Role Type](/docs/concepts/identity/rbac/understanding-role/#role-type) that specifies the scope of access to resources as shown below and the organization (project or project group) to which the authority is applied. is composed.
Users can define access rights within each SpaceONE through RoleBinding. 

![](/docs/concepts/identity/rbac/rbac_img/understanding_role_img01.png)

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

Role Type specifies the range of accessible resources within the domain.
- DOMAIN: Access is possible to all resources in the domain.
- PROJECT: Access is possible to all resources in the project added as a member.

Please refer to [Add as Project Member](/docs/guides/project/project_management/) for how to add a member as a member in the project.

### Add Member

All resources in SpaceONE are hierarchically managed as follows.
The administrator of the domain can manage so that users can access resources within the project by adding members to each project.
Users who need access to multiple projects can access all projects belonging to the lower hierarchy by adding them to the parent project group as a member.
For how to add as a member of the Project Group, refer to [Add as a Member of Project Group](/docs/guides/project/project_group_management/).


## Role Hierarchy

If a user have complex [Rolebinding](/docs/concepts/identity/rbac/#how-rbac-works) within the [hierarchical project structure](/docs/concepts/identity/rbac/#organization).
Role is applied according to the following rules.

For example, as shown in the figure below, the user _**stark@example.com**_ is bound to the parent Project Group as _**Project Admin**_ Role, and the lower level project is _**APAC. When it is bound to _**Project Viewer**_ Role in **_
Roles for each project are applied in the following way.

- The role of the parent project is applied to the sub-project/project group that is not directly bound by RoleBinding.
- The role is applied to the subproject that has been explicitly RoleBinding (overwriting the higher-level role)


![](/docs/concepts/identity/rbac/rbac_img/rbac_concept_img04.png)


## Default Roles

All SpaceOne domains automatically include _**Default Role**_ when created. Below is the list.

|          Name          | Role Type |                                                      Description                                                      |
|:----------------------:|:---------:|:---------------------------------------------------------------------------------------------------------------------:|
|      Domain Admin      |  DOMAIN   |                                   You can search/change/delete all domain resources                                   |
|     Domain Viewer      |  DOMAIN   |                                          You can search all domain resources                                          |
|     Project Admin      |  PROJECT  |                       You can view/change/delete the entire project resource added as a member                        |
|     Project Viewer     |  PROJECT  |                             You can search the entire project resource added as a member                              |
| Alert Manager Operator |  PROJECT  | You can inquire the entire project resource added as a member, and have the alert handling authority of Alert Manager |

## Managing Roles

Roles can be managed by the domain itself through spacectl.
Please refer to the [Managing Roles](/docs/guides/advanced/spaceone_cli/managing_role_policy/) document.




