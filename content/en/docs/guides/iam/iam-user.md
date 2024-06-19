---
linkTitle: User
weight: 1
date: '2022-06-23T00:00:00.000Z'
description: |
  You can invite and manage users for a workspace.
title: User
---

## Accessing the Menu

(1) Select a specific workspace

![](/guides/admin/workspaces/move-to-workspace-en.png)

(2) Go to \[IAM > User]


{{<alert>}}
Inviting users with `Admin` role type is only available in 'Admin Center'.
For detailed instructions, refer to [here](/docs/guides/admin-mode/app/).
{{</alert>}}

<br> <br>

## Inviting Users

(1) Click the \[Invite] button at the top

![](/guides/iam_user/user-invite-00-en.png)

(2) Add user accounts and assign workspace roles

![](/guides/iam_user/user-invite-01-en.png)

(2-1) Enter & Search user accounts

You can invite both existing users within the domain and external users to the workspace.

* Local: Enter the email format.
* If SSO such as Google, Keycloak, etc., is added to the domain, enter according to the corresponding format.

(2-2) Select a workspace access role

(2-3) Click the \[Confirm] button to complete the user invitation

{{<alert>}}
For detailed information on roles, please refer to [here](/docs/guides/admin-mode/role/).
{{</alert>}}

<br>

(3) Check the invited user list

![](/guides/iam_user/user-invite-02-en.png)

By clicking on a specific user, you can view detailed user information as well as the list of `projects` the user belongs to.

{{<alert>}}
If the invited user has not logged in yet, their state will be displayed as 'Pending'.
{{</alert>}}

<br><br>

## Editing Users

Workspace Owners can only modify or remove user roles, and cannot edit other user information.

(1) Change roles

* Click the dropdown button in the user's Role display to change the role. 

![](/guides/iam_user/user-edit-01-en.png)

(2) Remove users from the workspace

* Click the \[Remove] button to remove the user.

{{<alert>}}

When a user is removed, they are removed from the workspace but remain in the domain as a user.


{{</alert>}}
