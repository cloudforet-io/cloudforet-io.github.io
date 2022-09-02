---
title: "Project"
linkTitle: "Project"
weight: 3
date: 2022-06-07
description: >
    **Project** is a grouping unit for managing resources.
    <br>
    <br>
    A project must belong to a specific [**Project group**](/docs/guides/project/project-group), and there can be no more hierarchies below the project.
    <br>
    <br>
    Invite a [**Member**](/docs/guides/project/member) to the project and assign a [**Role**](/docs/guides/administration/iam-role) that differentiates their access privilege to project resources.
---

## Creating a project

{{<alert>}}
Since a project can only exist under a project group, you need to have a **project group** first.
For ways to create a project group, see [here](/docs/guides/project/project-group/#create-project-group).
{{</alert>}}

(1) From the [Project group] list on the left side of the [Project] page, select a project group for which you will create a project.

![project-full-page](/docs/guides/project/project-img/project-full-page.png)

(2) Click the [Create project] button at the top right.

(3) After entering a project name in the [Create project] modal dialog, click the [OK] button to create the project.

![project-create-modal](/docs/guides/project/project-img/project-create-modal.png)

## Viewing the project list

From the project list, you can easily check the resource status of the major categories of each project.
<br>
You can also enter a search word to see a list of project groups and projects that match your criteria.

### Getting a list of all projects

You can view a list of the entire projects by selecting [All projects] from [Project groups] on the left.

![project-click-all-project](/docs/guides/project/project-img/project-click-all-project.png)

### Viewing a list of projects in a project group

You can select the project group you want from the [Project group] list on the left to view projects belonging to that group only.

![project-click-single-project-group](/docs/guides/project/project-img/project-click-single-project-group.png)

If there are other project groups under the selected project group, the projects belonging to such other project groups are not displayed here.

```
- Project Group A
    - Project Group B
        - Project B-1
        - Project B-2
    - Project A-1
    - Project A-2
```

For example in the above structure, if you select `Project Group A,` only `Project A-1` and `Project A-2` would be displayed in the list.

## Exploring projects

Select a project from a list of projects to enter the project detail page.

### Project Dashboard

In the [Summary information] tab, you can check the aggregated information of the resources belonging to the project through the project dashboard.

![project-dashboard-full-page](/docs/guides/project/project-img/project-dashboard-full-page.png)

<br>
The project dashboard shows the status of resource usage and trends by category and region.

In addition, statistical information about the project in diverse formats through multiple widgets helps to manage resources more efficiently and minimize costs.

Below is a list of widgets on the project dashboard.

| Project dashboard widget name | Description |
| -- | -- |
| Alert | Information on alerts that occurred in the project |
| Cost | Cost information for the project |
| Today's resource updates | Resource information updated from midnight local time to the present |
| Cloud services | Information on major cloud services among the services |
| AWS Personal Health Dashboard | Information on AWS Personal Health Dashboard |
| AWS Trusted Advisor | Information on AWS Trusted Advisor |

## Edit project

### Changing project name

(1) Click the [Edit] icon button to the right of the project name.

![project-name-edit-icon-button](/docs/guides/project/project-img/project-name-edit-icon-button.png)

(2) After entering the name to be changed in the [Change project] modal dialog, click the [OK] button to change the project name.

![project-name-edit-modal](/docs/guides/project/project-img/project-name-edit-modal.png)

### Managing project tags

You can manage it by adding tags to your project.
<br>
<br>

(1) Click the [Edit] button inside the [Tag] tab.

![project-tag-table](/docs/guides/project/project-img/project-tag-table.png)

(2) Click the [Add Tag] button on the [Tag] page.

(3) Enter the value to be added in the form of ‘key:value.’

![project-tag-add](/docs/guides/project/project-img/project-tag-add.png)

(3-1) If you want to add more tags, click the [Add tag] button as many as the number of tags you want.

(4) Click the [Save] button to finish adding tags.

## Deleting a project

(1) Click the [Delete] icon button to the right of the project name.

![project-delete-icon-button](/docs/guides/project/project-img/project-delete-icon-button.png)

(2) Click the [OK] button in the [Delete project] modal dialog to delete the project.

![project-delete-modal](/docs/guides/project/project-img/project-delete-modal.png)
