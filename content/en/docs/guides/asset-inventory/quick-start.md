---
title: "Quick Start"
linkTitle: "Quick Start"
weight: 1
date: 2022-06-23
description: >
    You may want to go over our **Asset inventory** service for a quick start below.
---

## Creating a service account
Add a cloud service account in the [Asset inventory > Service account] page.

(1) Select a cloud service to add.

![service-account-provider-menu](/docs/guides/asset-inventory/quick-start-img/service-account-provider-menu.png)

(2) Click the [Add] button.

![service-account-add-button](/docs/guides/asset-inventory/quick-start-img/service-account-add-button.png)

(3) Fill out the service account creation form.

(3-1) Enter basic information.

![service-account-add-base-info](/docs/guides/asset-inventory/quick-start-img/service-account-add-base-info.png)

(3-2) Specify the project to collect resources from according to the service account.

![service-account-connect-project](/docs/guides/asset-inventory/quick-start-img/service-account-connect-project.png)

(3-3) Enter encryption key information.

![service-account-add-key](/docs/guides/asset-inventory/quick-start-img/service-account-add-key.png)

## Creating a collector
On the [Asset Inventory > Collector] page, create a collector to collect resources.

(1) Click the [Create] button.

![collector-create-button](/docs/guides/asset-inventory/quick-start-img/collector-create-button.png)

(2) Select the plugin to use when collecting resources.

![collector-plugin-list](/docs/guides/asset-inventory/quick-start-img/collector-plugin-list.png)

(3) Fill out the collector creation form.
(3-1) Enter basic information such as a name and a version.

![collector-create-base-info](/docs/guides/asset-inventory/quick-start-img/collector-create-base-info.png)

(3-2) Add tags if necessary.

![collector-create-tag](/docs/guides/asset-inventory/quick-start-img/collector-create-tag.png)

(4) Create a schedule for running the collector.

(4-1) On the [Asset inventory > Collector] page, select one collector from the table, and then click the [Add] button in the [Schedule] tab.

![collector-single-select](/docs/guides/asset-inventory/quick-start-img/collector-single-select.png)

(4-2) In the [Add schedule] modal dialog, set the time to run the collector and click the [OK] button.

![collector-schedule-modal](/docs/guides/asset-inventory/quick-start-img/collector-schedule-modal.png)


## Verifying collected resources
You can view the collected resources in [Asset inventory > Cloud service].

![collector-resource-inquiry](/docs/guides/asset-inventory/quick-start-img/collector-resource-inquiry.png)
