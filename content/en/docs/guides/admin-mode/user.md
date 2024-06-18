---
linkTitle: User Management
weight: 2
date: '2024-01-08T00:00:00.000Z'
description: |
  You can invite new users, view and manage all users across the domain.
title: User Management
---

## Accessing the Menu

(1) Switch to Admin Center

![](/guides/admin/admin_mode/admin-mode-01-en.png)

(2) Navigate to \[IAM > User]

<br> <br>

## Inviting Users

(1) Click the \[+ Add] button at the top

![](/guides/admin/iam_user/user-create-01-en.png)

(2) Invite users with workspaces and roles assigned

![](/guides/admin/iam_user/user-create-02-en.png)

(2-1) Add user account

* Local: Local: Enter in email format
* For other SSO such as Google, Keycloak, etc., enter according to the format configured in the domain.

(2-2) Select if the user has the Admin role or not

* Admin Role ON: No need to select a workspace as it grants access to the entire domain
* Admin Role OFF: Must select one or more workspaces and assign roles within those workspaces

(2-3) Click the \[Confirm] button to complete the user invitation
<br>

{{<alert>}}
Learn more about roles [here](/docs/guides/admin-mode/role/).
{{</alert>}}

<br>

(3) Check the added user list

![](/guides/admin/iam_user/user-create-03-en.png)

Clicking on a specific user allows you to see detailed user information and the list of workspaces the user belongs to.

![](/guides/admin/iam_user/user-detail-01-en.png)![](/guides/admin/iam_user/user-detail-02-en.png)

{{<alert>}}
Users who have not yet logged in after being invited will have their state displayed as 'Pending.'
{{</alert>}}

<br><br>

## Editing Users

(1) Click on a specific user, then click the \[Actions > Edit] button.

![](/guides/admin/iam_user/use-edit-01-ko.png)

(2) Edit user information:

* Change Name
* Change Notification Email: the Admins can change the email address and verify it directly.
* Change Password: the Admins can either set a new password directly for the user or send a password reset link via email.

![](/guides/admin/iam_user/use-edit-02-en.png)

(3) Enable/Disable Users

Select one or more users, then click the \[Actions > Enable] or \[Actions > Disable] button to change their active status.

![](/guides/admin/iam_user/use-enable-disable-01-en.png)
