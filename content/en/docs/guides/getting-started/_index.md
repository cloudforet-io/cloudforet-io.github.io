---
title: "Get started"
linkTitle: "Get started"
weight: 1
date: 2022-06-07
description: >
    Cloudforet provides a service that helps integrate resources spread in many ‘cloud service’ providers and systematically manage them.
    <br>
    <br>
    Learn more about Cloudforet through a user guide. 
---

To use Cloudforet's services, the following three prerequisites must be met:

- User settings
- Project settings
- Service account settings

## User settings

Cloudforet users are classified into three types: **internal users**, **external users**, and **API users**.

This section only introduces how to add internal users, and how to add external users and API users can be found in [[IAM] user guide](/docs/guides/administration/iam-user).

### Adding a user

(1) Click the [Create] button on the [Admin > Users] page.

![user-page](/docs/guides/getting-started/user-setup-img/user-page.png)

(2) In the [Create user] modal, select the [Local] tab.

(2-1) After entering the ID, click the [Check ID] button to check if the ID is valid.

![user-create-modal-local-id](/docs/guides/getting-started/user-setup-img/user-create-modal-local-id.png)

(2-2) After entering the name, email, and password to identify the user, click the [OK] button to complete the user creation.

![user-create-modal-local-filed](/docs/guides/getting-started/user-setup-img/user-create-modal-local-filed.png)

{{<alert title="Assign administrator’s privileges">}}
If you want to give a user administrator’s privileges, you can assign them by selecting them from the [Assign admin role] dropdown.

If nothing is selected, no privileges will be granted to that user.

For a more detailed information on permissions, see [here](/docs/guides/administration/iam-role).

![user-create-role-assign](/docs/guides/getting-started/user-setup-img/user-create-role-assign.png)
{{</alert>}}


## Project settings

Create [**project**](/docs/guides/project/project) and [**Project group**](/docs/guides/project/project-group) for systematic resource management .

### Creating a project group

Since a project must belong to one project group, you must first create a project group before creating a project.

(1) Click the [Create project group] button on the [Project] page.

![project-group-create-button](/docs/guides/getting-started/project-setup-img/project-group-create-button.png)

(2) After entering the project group name in the [Create project group] modal dialog, click the [OK] button to create the project group.

![project-group-create-modal](/docs/guides/getting-started/project-setup-img/project-group-create-modal.png)

### Creating a project

After creating a project group, create a project that will belong to it.

(1) Select the previously created project group from the list of project groups on the left and click the [Create project] button at the top right.

![project-group-select](/docs/guides/getting-started/project-setup-img/project-group-select.png)

(2) After entering the project name in the [Create project] modal dialog, click the [OK] button to create the project.

![project-create-modal](/docs/guides/getting-started/project-setup-img/project-create-modal.png)


### Inviting project group members

You can invite users to a project group to register as a [**Member**](/docs/guides/project/member) of the project group.

{{<alert title="Roles of project group members">}}
Invited members must have one role for the project group.
This role is equally applied to all project groups and projects that fall under that project group.

For more information, see [here](/docs/guides/administration/iam-role).
{{</alert>}}

(1) Select the previously created project group from the [Project group] list on the left.

(2) Click the [Manage project group members] icon button at the top right.

![project-member-icon-button](/docs/guides/getting-started/project-setup-img/project-member-icon-button.png)

{{<alert title="">}}
You must have permission to manage the project group to see the button at the top right.
{{</alert>}}

(3) Click the [Invite] button on the [Manage project group members] page to open the [Invite members] modal dialog.

![project-member-invite-button](/docs/guides/getting-started/project-setup-img/project-member-invite-button.png)

(3-1) Select the member you want to invite. You can select and invite multiple members at once.

![project-member-invite-modal-member-added](/docs/guides/getting-started/project-setup-img/project-member-invite-modal-member-added.png)

(3-2) Select the role to be granted to the members to be invited.

![project-member-invite-modal-role-added](/docs/guides/getting-started/project-setup-img/project-member-invite-modal-role-added.png)

{{<alert title="Member’s role">}}
A project member can only be granted a `user` type role.
For a detailed description of role types, see [here](/docs/guides/administration/iam-role/#role-type).
{{</alert>}}

(3-3) After entering the labels for the members to invite, press the Enter key to add them.

(3-4) Click the [OK] button to complete member invitation.

![project-member-invited](/docs/guides/getting-started/project-setup-img/project-member-invited.png)

## Service account settings

Service Account means the **Cloud service account** required to collect resources for the cloud service.

### Adding cloud service account

(1) On the [Asset Inventory > Service account] page, select the cloud service you want to add.

![service-account-provider-menu](/docs/guides/getting-started/service-account-setup-img/service-account-provider-menu.png)

(2) Click the [Add] button.

![service-account-add-button](/docs/guides/getting-started/service-account-setup-img/service-account-add-button.png)

(3) Fill out the service account creation form.

(3-1) Enter basic information.

![service-account-add-base-info](/docs/guides/getting-started/service-account-setup-img/service-account-add-base-info.png)

(3-2) Specify the project to collect resources from according to the service account.

![service-account-connect-project](/docs/guides/getting-started/service-account-setup-img/service-account-connect-project.png)

(3-3) Enter encryption key information.

![service-account-add-key](/docs/guides/getting-started/service-account-setup-img/service-account-add-key.png)

(4) Click the [Save] button to complete.


{{<alert title="Add account by cloud service">}}
Account information required for each cloud service may differ. You can see detailed information from the link below:

• AWS (link)

• Azure (link)

• GCP (link)

• OCI (link)

• Alibaba Cloud (link)
{{</alert>}}

---

After completing the above steps, if you want to use Cloudforet’s services more conveniently and in a variety of ways, please see the following guide:

- [Start **Asset inventory**](/docs/guides/asset-inventory/quick-start)
- [Start **cost analysis**](/docs/guides/cost-explorer/cost-analysis)
- [Start **Alert manager**](/docs/guides/alert-manager/quick-start)
