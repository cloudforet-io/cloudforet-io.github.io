---
title: "Member"
linkTitle: "Member"
weight: 4
date: 2022-06-07
description: >
    Invite **Members** to a [**Project**](/docs/guides/project/project) and a [**Project group**](/docs/guides/project/project-group), and assign a [**Role**](/docs/guides/administration/iam-role) to them.
    <br>
    <br>
    Members are always assigned at least one role for each, which allows them to manage access to the project and project group.
---

{{<alert>}}
Access to the project depends on the [**Policy**](/docs/guides/administration/iam-policy) related to the member's role.
Roles are spread to lower levels according to the rules below.
<br>
<br>
• **Roles of project group members** are equally applied to all project groups and projects under such roles.
<br>
• **Roles of project members** are applied only to corresponding projects.
<br>
• If roles of members exist for multiple project groups that exist in the upper hierarchy, the roles granted to each are merged and then applied.
{{</alert>}}

## Manage project group members

You can manage members by entering the [Manage project group members] page.
<br>
<br>

(1) Select the project group whose members you want to manage from the [Project group] list on the left side of the [Project] page.

(2) Click the [Manage project group members] icon button at the top right.

![project-member-icon-button](/docs/guides/project/member-img/project-member-icon-button.png)

{{<alert title="">}}
You must have permission to manage the project group to see the button at the top right.
{{</alert>}}

(3) Enter a search word on the [Manage project group members] page to view a list of projects that meet the criteria, invite new members, or edit/delete members.

![project-member-search](/docs/guides/project/member-img/project-member-search.png)

{{<alert title="">}}
You should be permitted to manage project groups to invite/edit/delete members.
{{</alert>}}

### Inviting project group members

(1) Click the [Invite] button on the [Manage project group members] page to open the [Invite members] modal dialog.

![project-member-invite-button](/docs/guides/project/member-img/project-member-invite-button.png)

(2) Select the member you want to invite. You can select and invite multiple members at once.

![project-member-invite-modal-member](/docs/guides/project/member-img/project-member-invite-modal-member.png)

(3) Select the roles to be granted to members that you want to invite.

![project-member-invite-modal-role](/docs/guides/project/member-img/project-member-invite-modal-role.png)

{{<alert title="roles of members">}}

Roles that can be granted to members of the project can only be of a `user` type. 

For detailed instructions, see [here](/docs/guides/administration/iam-role).

{{</alert>}}

(4) After entering labels for members to invite, press the Enter key to add them.

(5) Click the [OK] button to complete member invitation.

![project-member-invite-success](/docs/guides/project/member-img/project-member-invite-success.png)

### Editing project group members

You can change the roles and labels granted to members for the project group.
<br>
<br>

(1) In the [Manage project group members] page, select the member you want to edit.

(2) Select [Edit] from the [Action] dropdown.

![project-member-edit-menu](/docs/guides/project/member-img/project-member-edit-menu.png)

(3) In the [Change member information] modal dialog, enter the contents you want to change and click the [OK] button to complete the change.

![project-member-edit-modal](/docs/guides/project/member-img/project-member-edit-modal.png)

### Deleting project group members

(1) In the [Manage project group members] page, select the member you want to delete. Multiple selections are possible.

(2) Select [Delete] from the [Action] dropdown.

![project-member-delete-menu](/docs/guides/project/member-img/project-member-delete-menu.png)

(3) Click the [OK] button in the [Remove member] modal dialog to remove the member.

![project-member-delete-modal](/docs/guides/project/member-img/project-member-delete-modal.png)


## Managing project members

You can manage members by entering the [Members] tab of the project detail page, and all methods and contents are the same as the managing project group members (link).
<br>
<br>

(1) On the [Project] page, select the project whose members you want to manage and go to the project detail page.

(2) Select the [Member] tab.

![project-member-tab](/docs/guides/project/member-img/project-member-tab.png)
