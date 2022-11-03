---
title: "Role Based Access Control"
linkTitle: "Role Based Access Control"
weight: 1
date: 2021-12-21
description: >
    This page explores the basic concepts of User Role-Based Access Management (RBAC) in Cloudforet.
listed_on_entry: true
no_list: true
---

## How RBAC Works

Defines who can access **what** to **who** and **what organization (project or domain)** through Cloudforet's RBAC (Role Based Access Control).

For example, the Project Admin Role can inquire (Read) and make several changes (Update/Delete) all resources within the specified Project. Domain Viewer Role can inquire (Read) all resources within the specified domain.
Resources here include everything from users created within Cloudforet, Project/Project Groups, and individual cloud resources.

Every user has one or more roles, which can be assigned directly or inherited within a project.
This makes it easy to manage user role management in complex project relationships.

Role defines what actions can be performed on the resource specified through [Policy](/docs/concepts/identity/rbac/#policy).
Also, a Role is bound to each user.
The diagram below shows the relationships between Users and Roles and Projects that make up RBAC.

![](/docs/concepts/identity/rbac/rbac_img/rbac_concept_img01.png)

This role management model is divided into three main components.

- _**Role**_. It is a collection of access rights policies that can be granted for each user. All roles must have one policy.
  For more detailed explanation, please refer to [Understanding Role](/docs/concepts/identity/rbac/understanding-role/)

- _**Project**_. The project or project group to which the permission is applied.

- _**User**_. Users include users who log in to the console and use UI, API users, and SYSTEM users.
  Each user is connected to multiple Roles through the RoleBinding procedure. Through this, it is possible to access various resources of Cloudforet by receiving appropriate permissions.



## Basic Concepts

When a user wants to access resources within the organization, the administrator grants each user a role of the target project or domain.
Cloudforet Identity Service verifies the Role/Policy granted to each user so that each user can access resources.

### Resource

If a user wants to access a resource in a specific Cloudforet project, you can grant the user an appropriate role and then add it to the target project as a member to make it accessible.
Examples of these resources are [Server](/docs/guides_v1/inventory/server/), [Project](/docs/guides_v1/project/project_management/), [Alert](/docs/guides_v1/alert_manager/alert/) .

In order to conveniently use the resources managed within Cloudforet for each service, we publish the predefined Role/Policy.
If you want to define your own access scope within the company, you can create a Custom Policy/Custom Role and apply it to the internal organization.

For a detailed explanation of this, refer to [Understanding Role](/docs/concepts/identity/rbac/understanding-role/).


### Policy

A policy is a collection of permissions. In permission, the allowed access range for each resource of Space One is defined.
A policy can be assigned to each user through a role. Policies can be posted on the Marketplace and used by other users, or can be posted privately for a specific domain.

This permission is expressed in the form below. _**{service}.{resource}.{verb}**_
For example, it has the form _**inventory.Server.list**_ .

Permission also corresponds to SpaceONE API Method. This is because each microservice in each SpaceONE is closely related to each exposed API method.
Therefore, when the user who calls the API calls the method, the corresponding permission is required.

For example, if you want to call inventory.Server.list to see the server list of the Inventory service
The user must include the corresponding _**inventory.Server.list**_ permission in the role.

Permission cannot be granted directly to a user. Instead, an appropriate set of permissions can be defined as a policy and assigned to a user through a role.
For more information, refer to [Understanding Policy](/docs/concepts/identity/rbac/understanding-policy/).

### Roles

A role is composed of a combination of an access target and a policy. Permission cannot be directly granted to a user, but can be granted in the form of a role.
Also, all resources in SpaceONE belong to Project. [DOMAIN](/docs/concepts/identity/rbac/understanding-role/#role-type), [PROJECT](/docs/concepts/identity/rbac/understanding-role/#role-type) can be separated and managed.

For example, _**Domain Admin Role**_ is provided for the full administrator of the domain, and _**Alert Manager Operator Role**_ is provided for event management of Alert Manager.

![](/docs/concepts/identity/rbac/rbac_img/rbac_concept_img02.png)


### Members

All cloud resources managed within SpaceONE are managed in units of projects.
Therefore, you can control access to resources by giving each user a role and adding them as project members.

Depending on the role type, the user can access all resources within the domain or the resources within the specified project.

- Domain: You can access all resources within the domain.
- Project: You can access the resources within the specified Project.

Project type users can access resources within the project by being specific [added as a member of the project](/docs/guides_v1/project/project_management/).

If you [Add as member of Project Group](/docs/guides_v1/project/project_group_management/), the right to access all subordinate project resources is inherited.

### Organization

All resources in SpaceONE can be hierarchically managed through the following organizational structure.

All users can specify access targets in such a way that they are _**connected (RoleBinding)**_ to the organization.
- _**Domain**_ : This is the highest level organization. Covers all projects and project groups.
- _**PROJECT GROUP**_ : This is an organization that can integrate and manage multiple projects.
- _**Projects**_ : The smallest organizational unit in SpaceONE. All cloud resources belong to a project.

![](/docs/concepts/identity/rbac/rbac_img/rbac_concept_img03.png)



