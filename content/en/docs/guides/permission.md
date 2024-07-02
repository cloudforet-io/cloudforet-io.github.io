---
linkTitle: User permission
weight: 2
date: '2024-01-08T00:00:00.000Z'
description: >
  It provides a basic role-based permission system, enabling you to assign
  user-specific access rights and manage the system effectively, tailored to
  your organization’s structure and objectives.
title: User permission
---

## Role Type

Roles are defined based on three types:

* `Admin`: has access to all workspaces, including domain settings and Admin mode.
* `Workspace Owner`: has access to all projects within the workspace.
* `Workspace Member`: has access only to projects they are invited to or that are public within the workspace.

![](/guides/admin/iam_role/role-type-en.png)

You can find detailed information about the permissions for each role type below.

<br> <br>

## Admin Role Type

<br>

**✓ Domain-Wide Management**

* Manage all users including admins within the domain
* Invite and manage users across all workspaces
* Assign roles: Admin, Workspace Owner, Workspace Member
* Restrict access to specific service menus based on roles

**✓ All Workspace Management**

* Create/Delete/Enable/Disable workspaces
* Access settings for all workspaces

**✓ App (Client Secret) Management**

* Create and mange domain-level access apps (Client Secrets)
* Assign apps (Client Secrets) to Admin roles

**✓ Domain Settings**

* Configure domain display, icons, and other white labeling settings
* Set the domain timezone and language

**✓ Service Management**

* Create data collectors or budget allocations at a global level

<br> <br>

## Workspace Owner Role Type

**✓ Specific Workspace User Management**

* Invite and manage users within the workspace
* Assign roles: Workspace Owner, Workspace Member

**✓ Workspace App (Client Secret) Management**

* Create and manage workspace-level access apps (Client Secrets)
* Assign apps (Client Secrets) to Workspace Owner roles

**✓ Project Management**
* Create new projects and project groups, and invite users to them

**✓ Service Management**

* Manage each service within a workspace

<br> <br>

## Workspace Member Role Type

✓ View data within the invited workspace, with limited management capabilities

✓ Access only to projects they are invited to or that are public within the workspace


<br> <br>

## Workspace Owner vs Workspace Member 

{{<alert>}}
Workspace Owners and Workspace Members have access only to the workspaces they belong to.
{{</alert>}}

![](/guides/admin/iam_role/role-type-comparison-02-en.png)

<br> <br>

{{<alert>}}
Learn more about creating and managing roles [here](/docs/guides/admin-mode/role/).
{{</alert>}}
