---
title: "Project group"
linkTitle: "Project group"
weight: 2
date: 2022-06-07
description: >
    **Project group** is a concept for grouping and managing multiple [**Projects**](/docs/guides/project/project).
    <br>
    <br>
    Both projects and project groups can belong to the subproject group, and you can design and manage a project hierarchy that suits the size and structure of your organization through this tree-shaped structure of hierarchies.
---

[//]: # (If you give a [**Role&#40;Role&#41;**]&#40;/ko/docs/guides/administration/iam-user&#41; to a [**Member**]&#40;/ko/docs/guides/project/member&#41; invited to a project group, that member will have the same role&#40;Role&#41; for subproject groups and projects.)

## Creating a project group

### Creating a top level project group

(1) Select [All projects] from the [Project group] list on the left side of the [Projects] page.

![project-group-all-project-lnb](/docs/guides/project/project-group-img/project-group-all-project-lnb.png)

(2) Click the [Create project group] button on the right.

{{<alert title="If the [Create project group] button is not visible">}}

Among users with an administrator’s role, only users with edit permission on the project page can create/modify/delete top level project groups.

Users who are not granted a role to create a project group at the top level do not see this button.

![project-group-full-page](/docs/guides/project/project-group-img/project-group-full-page.png)

{{</alert>}}

(3) After entering the name you want in the [Create project group] modal dialog, click the [OK] button to complete the project group creation.

![project-group-create-modal](/docs/guides/project/project-group-img/project-group-create-modal.png)

### Creating a subproject group

Follow the steps below to create another project group under a specific project group.
<br>
<br>

(1) In the [Project group] list on the left, place the mouse cursor on the project group to create a subproject group, and click the [+] button displayed on the right.

![project-group-create-button-from-lnb](/docs/guides/project/project-group-img/project-group-create-button-from-lnb.png)

{{<alert title="If [+] button is disabled">}}

If you are not invited to be a member of the project group, or if you do not have permission to create a group, the button is disabled. 

Ask your manager to invite you to a project group member or change your role.

{{</alert>}}

(2) After creating a group name in the [Create project group] modal dialog, click the [OK] button to create a project group.

![project-group-child-create-modal](/docs/guides/project/project-group-img/project-group-child-create-modal.png)

(3) The newly created project group is displayed under the selected project group.

![project-group-child-tree](/docs/guides/project/project-group-img/project-group-child-tree.png)

## Searching for a project group and project

You can search for project groups and projects through the search bar on the left.
 
If you select a project group from the search results, the corresponding project group page would open, and then if you choose a project, a detailed page about the project opens in a new tab.

![project-group-search](/docs/guides/project/project-group-img/project-group-search.png)

If you open the search bar again after selecting a project group, you can see the subprojects of that project group.

![project-group-search-project](/docs/guides/project/project-group-img/project-group-search-project.png)


## Exploring project groups

If you select a specific project group from the [Project group] list on the left, you can check the detailed information of that group.

![project-group-single-select-from-lnb](/docs/guides/project/project-group-img/project-group-single-select-from-lnb.png)

{{<alert title="Search project list">}}
If you select a project group, you can see a list of projects belonging to that group. For detailed information, see [here](/docs/guides/project/project/#inquire-project-list).
{{</alert>}}

## Editing a project group

You can rename project groups or change the groups' hierarchy.
<br>
<br>
You can edit by clicking the [Edit] button at the top of the [Project group] list on the left to switch to edit mode.

![project-group-edit-button](/docs/guides/project/project-group-img/project-group-edit-button.png)

{{<alert title="If [Edit] button is disabled">}}
• If the [Edit] button is disabled when no project group is selected, it is because you do not have the permission to edit the top level project group.

• If the button is disabled even when a project group is selected, it means that you are not invited as a member of the project group or that you do not have the permission to edit a group. 
Ask your administrator to [Invite to project group member](/docs/guides/project/member/#invite-project-group-member), or [Change member role](/docs/guides/ project/member/#edit-project-group-member).
{{</alert>}}

### Renaming a project group

(1) After switching to edit mode, click the project group whose name you want to edit.

![project-group-name-change-at-lnb](/docs/guides/project/project-group-img/project-group-name-change-at-lnb.png)

(2) When the input window appears, enter the name to which you want to change. Then, click anywhere other than the input window with the mouse to switch to reading mode.

### Editing the project group hierarchy

You can conveniently edit the hierarchical structure of project groups by dragging and dropping items from the project group list.
<br>
<br>

(1) After switching to edit mode, click and drag the project group you want to move and drop it in the desired location.

(2) Click and drag the project group you want to move and drop it in the desired location.

![project-group-tree-change](/docs/guides/project/project-group-img/project-group-tree-change.png)

{{<alert title="If the project group cannot be moved">}}
• If you do not have the permission to edit the selected project group: You can select a project group in edit mode only when you have the permission to move a project group.

• If you do not have the permission to edit the parent project group of the dropdown location: The location where you want to drop the selected project group is blurred when you do not have edit permission for the project group you want to move.
{{</alert>}}

### Moving a project

It is possible to move not only the project group but also the projects that exist under that project group to another project group.

After switching to edit mode, you can move a project in the same way as a project group.

![project-group-project-tree-change](/docs/guides/project/project-group-img/project-group-project-tree-change.png)

{{<alert title="If the [Edit] button is not active">}}
This is because you do not have the permission to edit that project group. 
Even if you have edit permission for subprojects of a project group, you may not have permission for the project group. 
Ask the project group manager to [Change member role](/docs/guides/project/member/#project-group-member-edit).
{{</alert>}}

## Deleting the project group

(1) Select the project group you want to delete from the [Project group] list on the left.

(2) Click the [Settings] button in the upper right corner and select [Delete selected group] from the dropdown.

![project-group-delete-menu](/docs/guides/project/project-group-img/project-group-delete-menu.png)

(2-1) Click the [OK] button in the [Delete project group] modal dialog to permanently delete the project group.

![project-group-delete-modal](/docs/guides/project/project-group-img/project-group-delete-modal.png)

{{<alert title="If the project group cannot be deleted">}}

• If there is a project belonging to the selected project group, that project group is not deleted.

• Even when the selected project group does not have a project of its own, if there is a project in its subgroups, the project group would not be deleted.
<br>
<br>
In the above two cases, the project must be deleted first. For ways to delete a project, see [here](/docs/guides/project/project/#project-delete).

{{</alert>}}
