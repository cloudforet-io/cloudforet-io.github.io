---
title: "[IAM] User"
linkTitle: "[IAM] User"
weight: 1
date: 2022-06-23
description: >
    In the **User** page, you can create / delete Cloudforet users or enable / disable them.
    <br>
    <br>
    You can also grant permissions to users by assigning them roles.
---

{{<alert>}}
On the [Admin > Users] page, the role that can be assigned to a user is an the `admin` type. A `user` type can be assigned to a member of a project.
For how to assign roles to project members, see [here](/docs/guides/project/project-group/#invite-project-group-members).
{{</alert>}}
<br>

## Adding users
Click the [+ Add] button on the [Administration > IAM > User] page.

![user-create-button](/docs/guides/administration/iam-user-img/user-create-button.png)
<br>

There are three types of users that can be added as follows:
- **Internal user**: users who can sign in by using their ID and password on the login page
- **External user**: users added by following the external user authentication that the domain has
- **API Only**: users who are only able to use API, and for whom the Cloudforet console is not accessible
<br>

### 1. Adding internal users
Internal users are users who can sign in by using their IDs and passwords on the login page.

(1-1) After the [Add user] modal dialog opens, select the [Local] tab to add an internal user.

![user-create-modal-local](/docs/guides/administration/iam-user-img/user-create-modal-local_en.png)

(1-2) After entering the ID of an internal user, click the [Check ID] button. The user ID must be in an email form, and not on the list of existing users.

(1-3) Optionally enter user name and notification email(for receiving important system-related announcements or password reset link).

(1-4) Either send user a password reset link or, set the password on user's behalf. (※ If you set the password manually, you will need to directly inform the user of the password)

(1-5) To assign admin role to the user, you can activate the 'Admin Role' section at the bottom of the modal window and grant a specific role.

![user-create-local-admin-role](/docs/guides/administration/iam-user-img/user-create-local-admin-role_en.png)

{{<alert>}}
Page access permissions or API policies are differently applied depending on the role assigned to the user . For detailed information on roles, see [here](/docs/guides/administration/iam-role).
{{</alert>}}

(1-6) Click the [Confirm] button to complete the user addition.
<br>

### 2. Adding external users
Adding an external user follows the external user authentication that the domain has. Without authentication as an external user, one cannot be added as a user.

(2-1) After opening the [Add User] modal, select a specific SSO tab for adding external users. ex. Google OAuth

![user-create-modal-oauth](/docs/guides/administration/iam-user-img/user-create-modal-oauth_en.png)

(2-2) Enter an existing authenticated external user account.

{{<alert>}}
For a detailed description on external user authentication, see [here](/docs/guides/plugins/iam-authentication/).
{{</alert>}}

(2-3) Optionally enter user name and notification email(for receiving important system-related announcements or password reset link).

(2-4) To assign admin role to the user, you can activate the 'Admin Role' section at the bottom of the modal window and grant a specific role.

(2-5) Click the [Confirm] button to complete the user addition.
<br>


### 3. Adding API only users
API users cannot access the Cloudforet console and can only use the API.

(3-1) After the [Add user] modal dialog opens, select the [API Only] tab.

![user-create-modal-apionly](/docs/guides/administration/iam-user-img/user-create-modal-apionly_en.png)

(3-2) After entering the ID, click the [Check ID] button. The user ID must not be on the list of existing users.

(3-3) Optionally enter user name.

(3-4) To assign admin role to the user, you can activate the 'Admin Role' section at the bottom of the modal window and grant a specific role.

(3-5) Click the [Confirm] button to complete the user addition.
<br>
<br>

## Viewing user details
By selecting a specific user from the table on the user page, you can view detailed information on that user.

![user-single-select](/docs/guides/administration/iam-user-img/user-single-select.png)
<br>
<br>

## Updating users
By selecting a specific user in the table and clicking on [Actions > Edit], you can modify the user's information.

![user-update-modal](/docs/guides/administration/iam-user-img/user-update-modal_en.png)

- You can modify the user's ID, name, notification email, password, admin role (role), and tags. 
- If the user encounters difficulties with verification for the notification email, you can directly verify it without sending verification code.  
- For local users, you can either change the password on their behalf or send them a password reset link for the user to reset it themselves.