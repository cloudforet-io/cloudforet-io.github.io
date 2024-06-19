---
linkTitle: Role Settings
weight: 4
date: '2024-01-08T00:00:00.000Z'
description: |
  Detailed role management is available through user role types, page access permissions, and API connections.
title: Role Settings
---

## Accessing the Menu

(1) Switch to Admin Center

![](/guides/admin/admin_mode/admin-mode-01-en.png)

(2) Navigate to \[IAM > Role]

<br> <br>

## Using Managed Roles

* Pre-provided 'Managed' roles allow you to easily identify and quickly assign roles to users: 

 `Domain Admin`, `Workspace Owner`, `Workspace Member`. (Managed roles cannot be modified or deleted.)

![](/guides/admin/iam_role/role-managed-01-en.png)

<br> <br>

## Creating Custom Roles

(1) Click the \[+ Create] button at the top

![](/guides/admin/iam_role/role-create-00-en.png)

(2) Enter the role name

![](/guides/admin/iam_role/role-create-01-en.png)

(3) Select a role type

{{<alert>}}
Learn more about permission in details [here](/docs/guides/permission/).
{{</alert>}}

![](/guides/admin/iam_role/role-type-en.png)

(4) Set page access permissions

* The Admin role type has access to the entire domain, so no additional page access permissions are needed.
* Workspace Owner and Workspace Member can have page access permissions set accordingly.

![](/guides/admin/iam_role/role-create-03-en.png)

(5)  Click the \[+ Create] button to complete the role creation

![](/guides/admin/iam_role/role-create-05-en.png) 

<br> <br>

## Editing/Deleting Roles

(1) Select a role

(2) Click \[Actions > Edit] or \[Actions > Delete] at the top

![](/guides/admin/iam_role/role-edit-delete-01-en.png)

(3) When 'Edit' is clicked, you will be taken to the role editing page as shown below

![](/guides/admin/iam_role/role-edit-en.png)

{{<alert>}}
Note: When editing a role, the role type cannot be changed.
{{</alert>}}
