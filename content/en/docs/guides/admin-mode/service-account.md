---
weight: 8
description: >
  You can add and manage top-level organization accounts for each cloud
  provider, and automatically sync them to create and update workspaces and
  projects in Cloudforet(SpaceONE)
title: Trusted Accounts
---

## Accessing the Menu

(1) Switch to Admin Center

![](/guides/admin/admin_mode/admin-mode-01-en.png)

(2) Navigate to \[Asset Inventory > Service Account]

<br> <br>

## Managing Global Trusted Accounts

In Admin Center, you can create and manage global `Trusted Accounts` that can be used across all workspaces.

💡 `Trusted Account` is used for the following purposes:

1\) Higher-level accounts

* When creating a new `General Account`, you can attach a `Trusted Account` to avoid repeatedly entering secret and access keys, thereby simplifying the process and enhancing security in line with the organization’s structure.

2\) Automatic Account Synchronization

* Instead of entering individual accounts one by one, you can use the Auto Sync feature to automatically link the organizational structure configured in the cloud provider with the SpaceONE system, creating and updating workspaces and projects according to SpaceONE's structure. Detailed instructions for setting up account synchronization are provided below.

<br> <br>

## Setting Up Trusted Account Auto Sync

**\[ Basic Structure ]**

SpaceONE has a management structure of `Workspace > Project Group > Project - Service Account`.
When Cloud resources are collected, it is managed by being mapped to a Project, which can then be used for grouping purposes.

![](/guides/admin/service_account/project-hierarchy-en.png)

➊ Workspace

: The top-level management structure that separates workspaces. This can be used to separate environments by company or internal organization.

➋ Project Group

: Represents a structure for detailed departments. It commonly has a folder structure.

➌ Project

: The lower management structure where actual Cloud resources are mapped. It represents a project unit and can map one or more accounts (Service Accounts) used in the project.

* Service Account: An account used for actual data collection, which is added to the Project.

<br>

**\[ Set Auto Synchronization ]**

1\) Select a provider and click the \[+ Create] button

![](/guides/admin/service_account/create-trusted-account-01-en.png)

2\) Enter Base Information & Credentials

3\) Turn Auto Sync ON

![](/guides/admin/service_account/create-trusted-account-02-en.png)

* Set the Mapping Method as needed

![](/guides/admin/service_account/create-trusted-account-03-en.png)

* Set Schedule: Select up to 2 times daily for sync

![](/guides/admin/service_account/create-trusted-account-04-en.png)

<br>

**\[ Set Auto Synchronization by Cloud Provider ]**

* [AWS 계정 자동 동기화](/docs/guides/account-hierarchy/aws/)
* [Azure 계정 자동 동기화](/docs/guides/account-hierarchy/azure/)
* [GCP 계정 자동 동기화](/docs/guides/account-hierarchy/gcp/)

<br> <br>

## Viewing/Editing Trusted Accounts

1\) Select a Trusted Account: Go to \[Asset Inventory > Service Account] in Admin Center

![](/guides/admin/service_account/view-trusted-account-01-en.png)

2\) Check or Edit Base Information

![](/guides/admin/service_account/view-trusted-account-02-en.png)

3\) Check the List of Connected General Accounts:

💡 With auto sync turned on,

* Accounts are automatically synced and updated according to CSP's structures.
* It allows you to sync and update accounts directly via the \[Sync Now] button.

![](/guides/admin/service_account/view-trusted-account-03-en.png)

4\) Check and Edit Auto Synchronization Settings:

* Set details, turn it On or Off, change schedule, etc.

![](/guides/admin/service_account/view-trusted-account-04-en.png)

5\) Edit Service Account Name or Delete it:

* Change the service account name with the \[✏️] edit button on the top right next to the title. 
* Delete the service account via the \[🗑️] delete button on the top right next to the title.

![](/guides/admin/service_account/delete-service-account.png)
