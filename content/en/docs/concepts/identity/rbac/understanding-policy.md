---
title: "Understanding Policy"
linkTitle: "Understanding Policy"
weight: 2
date: 2021-11-17
description: >
    This page takes a detailed look at Policy. 
---


## Policy

Policy is a set of permissions defined to perform specific actions on SpaceONE resources.
Permissions define the scopes that can be managed for Cloud Resources.
For an overall description of the authority management system, please refer to [Role Based Access Control](/docs/concepts/identity/rbac/).


## Policy Type

Once defined, the policy can be shared so that it can be used by roles in other domains. Depending on whether or not this is possible, the policy is divided into two types.
- MANAGED: A policy defined globally in the Repository service. The policy is directly managed and shared by the entire system administrator. This is a common policy convenient for most users.
- CUSTOM: You can use a policy with self-defined permissions for each domain. It is useful to manage detailed permission for each domain.

{{< alert title="Note" >}}
*MANAGED Policy* is published on *Official Marketplace* and managed by the CloudONE team.

*CUSTOM Policy* is published in the *Private Repository* and managed by the administrator of each domain.
{{< /alert >}}

Policy can be classified as following according to Permission Scope.
- Basic: Includes overall permission for all resources in SpaceONE.
- Predefined : Includes granular permission for specific services (alert manager, billing, etc.).

## Managed Policy

The policy below is a full list of Managed Policies managed by the CloudONE team.
Detailed permission is automatically updated if necessary. Managed Policy was created to classify policies according to the major roles within the organization.

|    Policy Type     |        Policy Name        |                Policy Id                 | Permission Description                                                                                                                                                                                                                                                                                                                                                         |                                                                           Reference                                                                           |
|:------------------:|:-------------------------:|:----------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|   MANAGED-Basic    |    Domain Admin Access    |       policy-managed-domain-admin        | Has all privileges except for the following <br> Create/delete domain <br> api_type is SYSTEM/NO_AUTH <br>Manage DomainOwner (create/change/delete) <br>Manage plug-in identity.Auth Plugin management ( change)                                                                                                                                                          |                [policy-managed-domain-admin](https://github.com/cloudforet-io/managed-policy/blob/master/basic_policy/domain_admin_policy.yml)                 |
|   MANAGED-Basic    |   Domain Viewer Access    |       policy-managed-domain-viewer       | Read permission among Domain Admin Access permissions                                                                                                                                                                                                                                                                                                                          |              [policy-managed-domain-viewer](https://github.com/cloudforet-io/managed-policy/blob/master/basic_policy/domain_readonly_policy.yml)               |
|   MANAGED-Basic    |   Project Admin Access    |       policy-managed-project-admin       | Exclude the following permissions from Domain Admin Access Policy <br> Manage providers (create/change/inquire/delete) <br> Manage Role/Policy (create/change/delete) <br> Manage plug-ins inventory.Collector (create/change /delete) <br> plugin management monitoring.DataSource (create/change/delete) <br> plugin management notification.Protocol (create/change/delete) |               [policy-managed-project-admin](https://github.com/cloudforet-io/managed-policy/blob/master/basic_policy/project_admin_policy.yml)                |
|   MANAGED-Basic    |   Project Viewer Access   |      policy-managed-project-viewer       | Read permission among Permissions of Project Admin Access Policy                                                                                                                                                                                                                                                                                                               |             [policy-managed-project-viewer](https://github.com/cloudforet-io/managed-policy/blob/master/basic_policy/project_readonly_policy.yml)              |
| MANAGED-Predefined | Alert Manager Full Access | policy-managed-alert-manager-full-access | Full access to Alert Manager                                                                                                                                                                                                                                                                                                                                                   | [policy-managed-alert-manager-full-access](https://github.com/cloudforet-io/managed-policy/blob/master/predefined-policy/alert_manager_full_access_policy.yml) |


## Custom Policy

If you want to manage the policy of a domain by yourself, please refer to the [Managing Custom Policy](/docs/guides_v1/advanced/spaceone_cli/managing_role_policy/) document. 


