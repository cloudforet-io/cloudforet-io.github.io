---
title: "Cloud service"
linkTitle: "Cloud service"
weight: 2
date: 2022-06-07
description: >
    [**Collector**](/docs/guides/asset-inventory/collector) allows you to integratively view diverse cloud resources and understand their usage status. 
---

## Viewing a list of cloud services

The cloud service page displays the status of cloud service usage by **Provider**.

[Advanced Search](/docs/guides/advanced/search) and filter settings allow you to filter the list by refined criteria.

### Choosing a Provider

Select a provider to view cloud services provided through a certain provider only.

![cloud-service-provider-menu](/docs/guides/asset-inventory/cloud-service-img/cloud-service-provider-menu.png)

### Filter settings

You can search with more detailed conditions by setting service classification and region filters.

(1) Click the [Settings] button to open the [Filter Settings] modal dialog.

![cloud-service-filter-button](/docs/guides/asset-inventory/cloud-service-img/cloud-service-filter-button.png)

(2) After selecting the desired filter, click the [OK] button to apply it.

![cloud-service-filter-modal](/docs/guides/asset-inventory/cloud-service-img/cloud-service-filter-modal.png)


## Exploring Cloud Service

You can check the details of certain cloud services on the cloud service detail page.

Click a card on the cloud service page to go to the detail page.

![cloud-service-select](/docs/guides/asset-inventory/cloud-service-img/cloud-service-select.png)

You can check detailed information about the selected cloud service in the cloud service list on the left.

![cloud-service-list-lnb](/docs/guides/asset-inventory/cloud-service-img/cloud-service-list-lnb.png)

### Viewing a list of resources in cloud services

You can enter a search word to see a list of cloud resources that match your criteria.

See [here](/docs/guides/advanced/search) for a detailed description of **Advanced search**.

Click the [Excel] icon button to [Export as an Excel file] for a list of resources (/ko/docs/guides/advanced/excel-export) or click the [Settings] icon button to [Personalize table fields](/ko/ docs/guides/advanced/custom-table).

![cloud-sevice-detail-full-page](/docs/guides/asset-inventory/cloud-service-img/cloud-sevice-detail-full-page.png)

### Viewing the status of cloud service usage

You can check statistical information about the selected cloud service.

![cloud-service-single-select](/docs/guides/asset-inventory/cloud-service-img/cloud-service-single-select.png)

For more detailed information, click the [View chart] button on the right.

![cloud-service-chart-modal](/docs/guides/asset-inventory/cloud-service-img/cloud-service-chart-modal.png)

### Opening cloud resources console

Sometimes you need to work in a console provided by a cloud resources provider.

(1) Select the cloud resource to which you want to connect the console.

(2) Click the [Console connection] button.

![cloud-service-connect-console](/docs/guides/asset-inventory/cloud-service-img/cloud-service-connect-console.png)

(3) By clicking the button, open the provider's console in a new tab where you can continue working with the cloud resource.

Below is an example of the AWS EC2 Instance console that was opened.

![cloud-service-console-opened](/docs/guides/asset-inventory/cloud-service-img/cloud-service-console-opened.png)

## Exploring resources in cloud services

If you select an item you want to look at in the list of cloud resources, you can check information about that resource at the bottom.

- [Details] (#check-cloud-resources-details)
- [Tag] (#manage-cloud-resources-tag)
- [Associated member] (#check-cloud-resource-associated-member)
- [Change history] (#check-cloud-resource-associated-member)
- [Monitoring] (#check-cloud-resource-monitoring-information)

![cloud-resource-single-select](/docs/guides/asset-inventory/cloud-service-img/cloud-resource-single-select.png)

### Checking cloud resource details

Detailed information about the selected resource is displayed.

The information displayed here is divided into a **Basic tab** and a **More information tab**.

- **Basic tab**: This is provided as default in the cloud resources details, and the [Basic information] and [Original data] tabs are applicable.
- **More information Tab**: All tabs except the main tab are determined by the collector plugin that gathers resources. For detailed information, see [here](/docs/guides/plugins/asset-inventory-collector).

<br>

![cloud-resource-info-tab](/docs/guides/asset-inventory/cloud-service-img/cloud-resource-info-tab.png)

The image above is an example of cloud resources details.

Except for the [Basic information] tab and [Original data] tabs, all other tabs (AMI, Permissions, Tags) offer information added by the collector plugin.

### Managing cloud resources tags

There are two types of tags for cloud resources: `Managed` and `Custom`.
For each cloud resource, you can either view the `Managed` tags added from the provider or add `Custom` tags.
<br>

Each tag in the form of `key: value` can be useful when searching for specific resources.

![cloud-resource-tag-tab](/docs/guides/asset-inventory/cloud-service-img/cloud-service-list-tag-search-en.png)


**[ Viewing Managed Tags ]**

- The `Managed` tags can't be directly edited or removed in Cloudforet.

![cloud-resource-tag-tab](/docs/guides/asset-inventory/cloud-service-img/cloud-service-list-view-managed-tag-en.png)


**[ Creating & Viewing Custom Tags ]**

(1) Click the [Edit Custom Tags] button

![cloud-resource-tag-tab](/docs/guides/asset-inventory/cloud-service-img/cloud-service-list-custom-tag-btn-en.png)

(2) After entering the tag in the form of `key:value` on the tag page, click the [Save] button to complete this process.

![cloud-resource-tag-tab](/docs/guides/asset-inventory/cloud-service-img/cloud-service-list-custom-tag-edit-en.png)



### Checking members associated with cloud resources

In the [Associated members] tab, you can check user information that meets the conditions below:

- A user who has access to the cloud resource as a [Project member](/docs/guides/project/member)

![cloud-resource-member-tab](/docs/guides/asset-inventory/cloud-service-img/cloud-resource-member-tab.png)

### Viewing history of changing cloud resources

In the [Change history] tab, you can quickly identify changes by date/time of the selected cloud resource.

(1) You can select a certain date or search for the content you want to check.

![cloud-resource-changes-tab](/docs/guides/asset-inventory/cloud-service-img/cloud-resource-history-changes-tab.png)

(2) When you click a certain key value or time period, you can check the details of the corresponding history of changes.

(2-1) Contents of changes: You can check the details of which key values ​​of the resource were updated and how.

![cloud-history-diff-tab](/docs/guides/asset-inventory/cloud-service-img/cloud-history-diff-tab.png)

(2-2) Logs: As we support detailed logs by providers such as AWS CloudTrail, you can check which detailed events have occurred within/without of the selected time. This has a great advantage when identifying users who have made changes to a particular resource.

![cloud-history-log-tab](/docs/guides/asset-inventory/cloud-service-img/cloud-history-log-tab.png)

You can check the detailed log by clicking the value key you want to check.

![cloud-history-log-modal](/docs/guides/asset-inventory/cloud-service-img/cloud-history-log-modal.png)

(2-3) Notes: By adding/managing notes at a selected time, you can freely manage the workflow for each company, such as which person in charge is related to the change, which process you will choose to solve the issue, etc.

![cloud-history-note-tab](/docs/guides/asset-inventory/cloud-service-img/cloud-history-note-tab.png)

### Checking cloud resource monitoring information

The [Monitoring] tab shows various metrics for cloud resources.

![cloud-resource-monitoring-tab](/docs/guides/asset-inventory/cloud-service-img/cloud-resource-monitoring-tab.png)

You can also view metrics for different criteria by changing the [Time range] filter, or by selecting a different statistical method from the [Statistics] dropdown.

If you select multiple resources by clicking the checkbox on the left from the list of cloud resources at the top, you can compare and explore metric information for multiple resources.

![cloud-resource-multi-monitoring](/docs/guides/asset-inventory/cloud-service-img/cloud-resource-multi-monitoring.png)

Metrics information is collected by the **Monitoring plugin**, and for detailed information, see [here](/docs/guides/plugins/asset-inventory-collector).
