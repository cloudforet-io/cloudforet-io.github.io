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

## Adding users
There are three types of users that can be added as follows:
- **Internal user**: users who can sign in by using their ID and password on the login page
- **External user**: users added by following the external user authentication that the domain has
- **API Only**: users who are only able to use API, and for whom the Cloudforet console is not accessible

### Adding internal users
Internal users are users who can sign in by using their IDs and passwords on the login page.

(1) Click the [Create] button on the [Admin > Users] page.

![user-create-button](/docs/guides/administration/iam-user-img/user-create-button.png)

(2) After the [Add user] modal dialog opens, select the [Local] tab to add an internal user.

![user-create-modal-local](/docs/guides/administration/iam-user-img/user-create-modal-local.png)

(2-1) After entering the ID of an internal user, click the [Confirm ID] button. The user ID must be in an email form, and not on the list of existing users.

(2-2) Enter your name and email (optional).

(2-3) If necessary, select a role from the [Assign admin role] menu.
{{<alert>}}
Page access permissions or API policies are differently applied depending on the role assigned to the user . For detailed information on roles, see [here](/docs/guides/administration/iam-role).
{{</alert>}}

(2-4) Enter the password to be used by the user when signing in for the first time.

(3) Click the [OK] button.


### Adding external users
Adding an external user follows the external user authentication that the domain has. Without authentication as an external user, one cannot be added as a user.

![user-create-modal-oauth](/docs/guides/administration/iam-user-img/user-create-modal-oauth.png)

{{<alert>}}
For a detailed description on external user authentication, see [here](/docs/guides/plugins/iam-authentication/).
{{</alert>}}


### Adding API only users
API users cannot access the Cloudforet console and can only use the API.

![user-create-modal-apionly](/docs/guides/administration/iam-user-img/user-create-modal-apionly.png)


## Viewing user details
By selecting a specific user from the table on the user page, you can view detailed information on that user.

![user-single-select](/docs/guides/administration/iam-user-img/user-single-select.png)
