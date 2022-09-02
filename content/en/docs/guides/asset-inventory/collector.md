---
title: "Collector"
linkTitle: "Collector"
weight: 4
date: 2022-06-07
description: >
    Cloudforet gathers [Cloud resources](/docs/guides/asset-inventory) through a **Collector**, and its schedule can be set up.   

---

## Overview

To collect data with a collector, you need two elements:

### Collector plugin

This is an element that defines the specifications of what resources to collect from the [Cloud provider](/docs/guides/asset-inventory), and how to display the collected data on the screen. 

Since each provider has a different structure and content of data, a collector completely relies on **Collector plugin** to collect resources.

For detailed information on this, see [here](/docs/guides/plugins/asset-inventory-collector).
 
### Service account 

To collect resources, you need to connect to an account on the [Cloud provider](/docs/guides/asset-inventory).

**Service Account** is your account information to link to your provider's account. 

A collector accesses the provider account through the service account created for each provider. 

For detailed information on this, see [here](/docs/guides/asset-inventory/service-account).

## Creating a collector

(1) Click the [Create] button at the top left.

![collector-create-button](/docs/guides/asset-inventory/collector-img/collector-create-button.png)

(2) On the plugin list page, find the collector plugin you want and click the [Create] button.

![collector-plugin-lists](/docs/guides/asset-inventory/collector-img/collector-plugin-lists.png)

(3) On the [Create collector] page, follow the steps below:

(3-1) In the [Collector settings] tab, select the name and version of the plugin.

![collector-create-base-info](/docs/guides/asset-inventory/collector-img/collector-create-base-info.png)

{{<alert title="Version and auto upgrade">}}
Version refers to the version of the previously selected collector plugin, which can be chosen by disabling auto upgrade. In this case, the data is always collected with the specified version of the plugin.

On the other hand, if you enable auto upgrade, your data will always be collected with the latest version of the plugin.
{{</alert>}}

(3-2) If necessary, enter additional information about the collector in the [Add tag] tab.

![collector-create-tags](/docs/guides/asset-inventory/collector-img/collector-create-tags.png)

(4) Click the [OK] button to complete collector creation.

## Get a list of collectors

You can view a list of all collectors that have been created on the collector page.

**Advanced search** allows you to filter the list by elaborate criteria. For a detailed explanation, see [here](/docs/guides/advanced/search/).

![collector-list-inquiry](/docs/guides/asset-inventory/collector-img/collector-list-inquiry.png)

## Verifying collector details

(1) Select a collector whose details you want to check from a list of collectors.

(2) You can check the detailed information of the collector in the [Details] tab below the list.

![collector-detail-info-tab](/docs/guides/asset-inventory/collector-img/collector-detail-info-tab.png)

## Modifying collector

(1) Select the collector you want to edit from a list of collectors.

(2) Select the [Modify] menu from the [Action] dropdown.

![collector-edit-menu](/docs/guides/asset-inventory/collector-img/collector-edit-menu.png)

(3) After changing the value in the [Modify collector] modal dialog, click the [OK] button to complete the modification.

![collector-edit-modal](/docs/guides/asset-inventory/collector-img/collector-edit-modal.png)

## Enabling/disabling collector

You can enable or disable collectors. Disabling collectors prevents data collection by the scheduler.

(1) Select the collector you want to activate or deactivate from a list of collectors. You can select several collectors and apply them in bulk.

(2) Select [Enable] or [Disable] from the [Action] dropdown.

![collector-multi-select-for-disable](/docs/guides/asset-inventory/collector-img/collector-multi-select-for-disable.png)

(3) After the checking items selected in the [Activate collector] or [Disable collector] modal dialog, click the [OK] button to complete the activation/deactivation.

![collector-disable-modal](/docs/guides/asset-inventory/collector-img/collector-disable-modal.png)

## Deleting a collector

You can permanently delete a collector.

(1) Select the collector you want to delete from a list of collectors. Batch deletion is possible by selecting multiple collectors.

(2) Select the [Delete] menu from the [Action] dropdown.

![collector-delete-menu](/docs/guides/asset-inventory/collector-img/collector-delete-menu.png)

(3) After checking the selected items in the [Delete collector] modal dialog, click the [OK] button to complete the deletion.

![collector-delete-modal](/docs/guides/asset-inventory/collector-img/collector-delete-modal.png)

## Collect one-time data

You can collect data on a one-time basis without scheduling.

This feature allows data collection to occur even when the collector is inactive.

Data collection works in two ways:

- [Data collection for all service accounts](/docs/guides/asset-inventory/collector/#collect-data-on-all-connected-service-accounts)
- [Data collection for a single service account](/docs/guides/asset-inventory/collector/#collect-data-on-single-service-account)

- [Data collection for one service account](/docs/guides/asset-inventory/collector/#single-service-account-data-collecting)

Collector needs account information from a [Provider](/docs/guides/asset-inventory) for data collection, which is registered through [Service account](/docs/guides/asset-inventory/service-account).

The collector basically collects data for all service accounts of the provider.

(1) Select a collector to collect data from a list of collectors.

(2) Select the [Data collection] menu from the [Action] dropdown.

![collector-collect-data-menu](/docs/guides/asset-inventory/collector-img/collector-collect-data-menu.png)

(3) Click the [OK] button in the [Data collection] modal dialog to start data collection.

![collector-collect-data-modal](/docs/guides/asset-inventory/collector-img/collector-collect-data-modal.png)

(4) Whether or not the collector has completed a data collection can be checked in [Collector history](ko/docs/guides/asset-inventory/collector/#check-data-collection-history). You can click the [View details] link of a selected collector to go to that page.

![collector-history-at-table](/docs/guides/asset-inventory/collector-img/collector-history-at-table.png)

### Collect data for a single service account

When collecting data with a collector, you may only collect data from a specific cloud provider’s account.

(1) Select a collector to collect data from a list of collectors.

(2) Select the [Service account] tab below.

![collector-service-account-tab](/docs/guides/asset-inventory/collector-img/collector-service-account-tab.png)

A list of service accounts used when collecting data through the selected collector is displayed here.

{{<alert title="Service account">}}
[Service account](/docs/guides/asset-inventory/service-account) has access information for the provider account required for data collection.

If no information can be found here, this means there is no account information for accessing the provider, and as a result, no data collection occurs even when the collector is running.

Therefore, to collect data with a collector, you must first register the account information of the provider in the [Service account] menu.

{{</alert>}}

(3) Click the [Data collection] button on the right side of the service account for which you want to collect data.

(4) Click the [OK] button in the [Data collection] modal dialog to start data collection.

![collector-data-collect-one-account-modal](/docs/guides/asset-inventory/collector-img/collector-data-collect-one-account-modal.png)

## Setting up a data collection schedule

You can schedule the collector to collect resources periodically.

(1) From a list of collectors, select a collector for which you want to set a schedule.

(2) Select the [Schedule] tab below.

Here you can check a list of schedules or add/change/delete them.

![collector-schedule-tab](/docs/guides/asset-inventory/collector-img/collector-schedule-tab.png)

### Adding a schedule

(1) Click the [Add] button.

(2) Enter a value in the [Add schedule] modal dialog.

![collector-schedule-modal](/docs/guides/asset-inventory/collector-img/collector-schedule-modal.png)

(2-1) Select an identifiable name and time zone for the set schedule to operate.

(2-2) The collector sets the schedule to collect data. 

<br>
<br>

There are two ways for schedule settings:

![collector-schedule-type](/docs/guides/asset-inventory/collector-img/collector-schedule-type.png)

- Set by time: If you enter the time you want to repeat, data will be collected at the interval you enter. This would repeat every day.
- Set by repeated cycle: Collect data by the time period you enter. The input time will also vary depending on the time units (hours, minutes, seconds) supported by the plugin.

{{<alert title="If you do not see repeated cycle settings">}}
Depending on what type of **Plugin** the selected collector is, the repeated cycle setting form may sometimes not be visible, or the time unit (hours, minutes, seconds) input form may be different.

The collector's data collection relies entirely on the collector plugin. Now, if there is a large amount of data the plugin collects, setting a repeated cycle can be highly dangerous. To avoid this problem, the repeated cycle setting is not provided by default.

Then, there are other plugins that need to collect data rather frequently. For such plugins, a form for setting the repeated cycle according to the conditions supported by the plugins can be displayed on the screen.

For a detailed description of the plugin, see [here](/docs/guides/plugins/asset-inventory-collector).

{{</alert>}}

(3) Click the [OK] button to create a collector.

### Changing a schedule

(1) Select an item to change from a list of schedules.

(2) Select [Change] from the [Action] dropdown.

![collector-schedule-edit-menu](/docs/guides/asset-inventory/collector-img/collector-schedule-edit-menu.png)

(2-1) Enter the content to be changed in the [Schedule change] modal dialog. Since it is the same as the schedule adding form, see the above "Add schedule" (link).

![collector-schedule-edit-modal](/docs/guides/asset-inventory/collector-img/collector-schedule-edit-modal.png)

(3) Click the [OK] button to complete the change.

### Deleting a schedule

(1) Select an item to change from a list of schedules.

(2) Select the [Delete] menu from the [Action] dropdown.

![collector-schedule-delete-menu](/docs/guides/asset-inventory/collector-img/collector-schedule-delete-menu.png)

(3) In the [Delete schedule] modal dialog, check the content of the schedule to be deleted, and click the [OK] button to complete the deletion.

![collector-schedule-delete-modal](/docs/guides/asset-inventory/collector-img/collector-schedule-delete-modal.png)

## Checking data collection history

You can check your data collection history on the **Collector history** page.

You can move to the collector history page by clicking the [Collector history] button at the top of the collector page.

If you want to check only the data collection history of a specific collector, you can go to where you can check that information by clicking the [View details] button from a list of collectors.

![collector-history-at-table](/docs/guides/asset-inventory/collector-img/collector-history-at-table.png)

### Viewing data collection list

Through the chart at the top of the collector history page, you can quickly check data collection status by date.

The list at the bottom displays a list of data collections that meet the criteria for an advanced search and status filter. For a detailed description of advanced search, see [here](/docs/guides/advanced/search/).

For items in the process of data collection, you can check the collection status through the status bar of the job progress field.

![collector-history-full-page](/docs/guides/asset-inventory/collector-img/collector-history-full-page.png)

### Checking the details of data collection history

If you select a collection history from the list of data collections above, you will be taken to the collection history details page.

You can check data collection status, basic information, and **Collection history by service account**.

![collector-history-detail-full-page](/docs/guides/asset-inventory/collector-img/collector-history-detail-full-page.png)

#### Checking collection history for each service account

When you run the collector, each collection is performed for each associated service account.

Here you can find information about how the collection was performed by the service account.

{{<alert title="">}}
When collecting data, the collector accesses the cloud provider's account through the service account to get the data.
{{</alert>}}

![collector-history-detail-table](/docs/guides/asset-inventory/collector-img/collector-history-detail-table.png)

###### Key field Information
- Created Count: The number of newly added resources
- Updated Count: The number of imported resources
- Disconnected Count: The number of resources that were not fetched
- Deleted Count: Number of deleted resources (in case of a resource failing to fetch multiple times, it is considered deleted.)

#### Check the content of collection errors

(1) Select the item you want to check for error details from a list of collections for each account.

(2) You can check the details of errors in the [Error list] tab below.

![collector-history-error-list](/docs/guides/asset-inventory/collector-img/collector-history-error-list.png)

## Manage collector tag

You can manage it by adding tags to the collector.

(1) Click the [Edit] button inside the [Tag] tab.

![collector-tag-edit](/docs/guides/asset-inventory/collector-img/collector-tag-edit.png)

(2) After entering the tag in the form of ‘key:value’ on the tag page, click the [Save] button to complete this process.

![collector-tag-filled](/docs/guides/asset-inventory/collector-img/collector-tag-filled.png)

