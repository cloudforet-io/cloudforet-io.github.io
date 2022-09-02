---
title: "[IAM] Role"
linkTitle: "[IAM] Role"
weight: 2
date: 2022-06-07
description: >
    **Role** is a unit that defines the scope of privileges.
---

An administrator can create desired roles and assign them to [Users](/docs/guides/administration/iam-user/) who will perform such roles.

The properties set up for a role are as follows:

#### Role type

| | Project management privilege | the position to grant roles to users |
| --- | --- | --- |
| **User** | • Create your own <br/>• Invited projects and project groups<br/>• Subprojects within the project groups you have privilege to enter | • Invite other users to the project under the project detail page > [Members] tab<br/>• When changing member information, you can shift the type of user’s role |
| **Admin** | All projects and project groups | Add or edit users on the [Admin > Users and permission management > Users] page |

#### Access permission for each page of the Cloudforet service

You can grant different `view` and `manage` permissions for each sub menu of each service.

- **View**

  View permissions are separately given for each page.

- **Manage**

  You can use management features such as create, edit, add, etc. that exist in a selected service menu. (Management features are different for each service/page.)


#### Reviewing API policy

Policy is an object that defines privilege over a resource when it is attached.

For guidelines on policies, see [Policy documents](/docs/guides/administration/iam-policy).

## Creating roles

{{< alert title="" >}}
Roles can be created only by an administrator. If the [Create] button is not activated, ask the administrator for permission.
{{< /alert >}}




(1) Select [Admin > User and permission management > Roles] to enter the role page.

(2) Enter the [Create role] page through the [Create] button at the upper left.

![role-create-button](/docs/guides/administration/iam-role-img/role-create-button.png)

(3) Write a name and description (optional) of the role, and select [Role type](/docs/guides/administration/iam-role/#role-type).

![role-create-base-info](/docs/guides/administration/iam-role-img/role-create-base-info.png)

- The [Name] must be at least 2 characters long.
- Since [[Role type]](/docs/guides/administration/iam-role/#role-role-type) is an item that cannot be modified once you create it, please make a careful selection.

(4) Set the [Page access permission](/docs/guides/administration/iam-role/#Cloudforet-service-per-page-access-permission).

![role-create-page-access](/docs/guides/administration/iam-role-img/role-create-page-access.png)

(5) To decide what permission to grant to the role that you are creating, select a policy to connect.

![role-create-page-policy-connect](/docs/guides/administration/iam-role-img/role-create-page-policy-connect.png)


For a detailed description on policy connection, see [here](/docs/guides/administration/iam-role/#api-policy-connection).

(6) Click the [Create] button to complete role creation.

## Viewing roles

You can search for created roles, view them, and review their detailed information.

### Getting a list of roles

Roles that have been created can be viewed on the role page.

![role-list](/docs/guides/administration/iam-role-img/role-list.png)

You can enter a search term to see a list of roles that match your criteria. For a detailed description on advanced search, see [here](/docs/guides/advanced/search/).

![role-search](/docs/guides/administration/iam-role-img/role-search.png)

### Viewing detailed information on roles

When selecting a role in the table of contents, you can check information about the selected role in the [Details] tab below.

![role-detail-info](/docs/guides/administration/iam-role-img/role-detail-info.png)

## Editing roles

### Steps

(1) Select the role you want to edit from a list of roles, and click the [Edit] button to enter the edit page.

![role-edit-button](/docs/guides/administration/iam-role-img/role-edit-button.png)

(2) Except for a role type, changes are the same as [Create Role](/docs/guides/administration/iam-role/#role-creating).

![role-edit-base-info](/docs/guides/administration/iam-role-img/role-edit-base-info.png)

{{< alert title="주의" >}}

[Role Type] of basic information is an item that cannot be modified after you created the role.

{{< /alert >}}


## Deleting roles

### Steps

(1) Enter the role page.

![role-delete-menu](/docs/guides/administration/iam-role-img/role-delete-menu.png)

You can delete multiple roles at once.

(2) Click the [Delete] button to review the list of roles to be removed.

![role-delete-modal](/docs/guides/administration/iam-role-img/role-delete-modal.png)

{{< alert title="주의" >}}
Roles assigned to a user cannot be removed.

![role-cannot-delete-modal](/docs/guides/administration/iam-role-img/role-cannot-delete-modal.png)

If a role that cannot be deleted was included, the role and the user assigned to the role are displayed together.
{{< /alert >}}

(3) Click the [OK] button to delete the role.
