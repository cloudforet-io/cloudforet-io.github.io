---
title: "Service account"
linkTitle: "Service account"
weight: 5
date: 2022-06-07
description: >
    In the **Service account** page, you can easily integrate, manage, and track your accounts of each cloud service.
---

## Add service account

(1) On the [Asset inventory > Service account] page, select the cloud service you want to add.

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

## Managing service account

### Changing a project

After selecting the service account whose project you want to change, click the [Change project] button in the action menu.

![service-account-project-change-menu](/docs/guides/asset-inventory/service-account-img/service-account-project-change-menu.png)

After selecting the project to change in the created modal dialog, click the [OK] button.

![service-account-project-change-selected](/docs/guides/asset-inventory/service-account-img/service-account-project-change-selected.png)

If you want to deselect the project for the service account, select the [Do not select a project] item at the bottom of the modal dialog and click the [OK] button.

![service-account-project-unselect-selected](/docs/guides/asset-inventory/service-account-img/service-account-project-unselect-selected.png)

### Connecting a console

After selecting the service account you want to connect to the console, click the [Console connection] menu in the [Action] dropdown.

![sevice-account-console-connect-menu](/docs/guides/asset-inventory/service-account-img/sevice-account-console-connect-menu.png)

## Check details

If you select a project for which you want to check detailed information, the information is displayed in the table below.

![service-account-single-select](/docs/guides/asset-inventory/service-account-img/service-account-single-select.png)

- You can check the following information in the [Details] tab:
<br />
  • ID
<br />
  • Name
<br />
  • Project
<br />
  • Creation date
<br />
- You can view, edit, and add tags in the [Tags] tab.
- Keys can be viewed and searched in the [Encryption key] tab.
- You can view and search for the corresponding service account in the [Associated members] tab.
<br />
  • A person with a project administrator’s privilege among members of the associated project will be assigned as an associated member.
<br />
  • For detailed information, see [Member](/docs/guides/project/member).

## Deleting service account
{{<alert>}}
Please note that deleted service accounts cannot be recovered.
{{</alert>}}

Select the service account you want to delete and click the [Delete] menu in the [Action] dropdown.

![service-account-delete-menu](/docs/guides/asset-inventory/service-account-img/service-account-delete-menu.png)

In the [Delete service account] modal dialog, enter the name of the service account you want to delete and click the [OK] button.

![service-account-delete-modal2](/docs/guides/asset-inventory/service-account-img/service-account-delete-modal2.png)
