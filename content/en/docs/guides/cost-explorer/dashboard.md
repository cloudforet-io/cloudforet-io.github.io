---
title: "Dashboard"
linkTitle: "Dashboard"
weight: 2
date: 2022-06-22
description: >
    In **Cost dashboard**, users can view cost data at a glance through a default dashboard or a custom dashboard with any combination of widgets.
---

## Default Dashboard
Below is a dashboard that is currently provided by default:

### Monthly cost statistics
This is a dashboard that charts costs that occurred in the cloud and that shows the status of budget use based on diverse group statistics.

![cost-dashboard-intro-01](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-intro-01.png)

### CDN and traffic cost
This is a dashboard that charts data transfers and the status of costs that occurred status of AWS Data-Transfer and AWS CloudFront.

![cost-dashboard-intro-02](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-intro-02.png)


## Creating a dashboard
(1) Click the [Create dashboard] icon button in the left menu list on the [Cost management > Dashboard] page.

![cost-dashboard-create-01](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-create-01.png)

(2) Enter the [Create dashboard] page and select a template to be applied to a new dashboard.

(2-1) You can select the default template provided by Cloudforet or clone an existing dashboard.

![cost-dashboard-create-02](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-create-02.png)

(2-2) When duplicating an existing dashboard, you can choose whether to include filters applied to that dashboard as well.

![cost-dashboard-create-03](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-create-03.png)

(3) Select exposure method. `My dashboard` is visible only to a user, and `public` is visible to all users with `view` permission on the [Cost management > Dashboard] page.

![cost-dashboard-create-04](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-create-04.png)

{{<alert title="If the public option is not visible">}}
If you have `manage` permission on the [Cost management > Dashboard] page, you can create both public and my dashboards. However, if you have only `view` permission as a user, you can only create my dashboard.

For ways to set **Access permission**, see [here](/docs/guides/administration/iam-role/#create-role).
{{</alert>}}

(4) Click the [Create] button.


## Delete dashboard

(1) Select the dashboard you want to delete from the dashboard list on the left.

![cost-dashboard-delete-01](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-delete-01.png)

(2) Click the [Settings] icon button next to the selected dashboard name, and then select [Delete] from the dropdown.

![cost-dashboard-delete-02](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-delete-02.png)

{{<alert title="If the [Delete] button is disabled">}}
If you do not have `manage` permission on the [Cost management > Dashboard] page, or the dashboard you want to delete is set as your home dashboard, you cannot delete it.
{{</alert>}}

(3) Click the [OK] button in the [Delete dashboard] modal dialog to delete the dashboard.

![cost-dashboard-delete-03](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-delete-03.png)


## Edit dashboard
If you click the [Edit] button on the right side of the dashboard page, you can enter the dashboard edit page and edit dashboard names or widgets.

![cost-dashboard-edit-01](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-edit-01.png)

{{<alert title="If the [Edit] button is disabled">}}
If you do not have `manage` permission on the [Cost management > Dashboard] page, you cannot edit dashboards.
{{</alert>}}

### Editing the dashboard name
You can edit names of dashboards in the input form at the top.

![cost-dashboard-edit-02](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-edit-02.png)

### Adding widgets
There are two widgets you can add: default and custom widgets.
Default widgets are widgets that can be created with widget templates provided by Cloudforet, and custom widgets are widgets based on queries and created on the [Cost management > Cost analysis] page.

#### Adding a default widget
(1) Click the [Add widget] button on the right.

![cost-dashboard-basic-widget-add-01](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-basic-widget-add-01.png)

(2) Select the [Basic] tab in the [Add new widget] modal dialog.

(2-1) Select a template from the [Widget template] list on the left.

![cost-dashboard-basic-widget-add-02](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-basic-widget-add-02.png)

(2-2) Enter the [Name] of the widget. Depending on the widget type, you may need to select [Group statistics].

![cost-dashboard-basic-widget-add-03](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-basic-widget-add-03.png)

(3) Click the [OK] button to finish adding the widget.

#### Adding a custom widget
{{<alert title="Cost analysis query">}}
**Cost analysis query** is required to create custom widgets.
Cost analysis queries can be created from the [Cost management > Cost analysis] page.
For detailed information, see [here](/docs/guides/cost-explorer/cost-analysis/#cost-analysis-query).
{{</alert>}}

(1) Click the [Add widget] button on the right.

![cost-dashboard-custom-widget-add-01](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-custom-widget-add-01.png)

(2) Select the [Custom] tab in the [Add new widget] modal dialog.

(2-1) In the [Cost analysis query] list at the bottom left, click the [Add to custom widget] button of the query you want to apply to the custom widget.

![cost-dashboard-custom-widget-add-02](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-custom-widget-add-02.png)

(2-2) When the added custom widget appears in the [Widget template] list at the top left, select it.

![cost-dashboard-custom-widget-add-03](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-custom-widget-add-03.png)

(2-3) Enter a name for the widget.

![cost-dashboard-custom-widget-add-04](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-custom-widget-add-04.png)

(2-4) Click the [OK] button to finish adding the widget.


### Changing the order of widgets
You can change the order by dragging and dropping the [Reorder] icon button to the left of the widget name in the widget list.

![cost-dashboard-edit-widget-order-01](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-edit-widget-order-01.png)


### Editing a widget
(1) Click the [Edit] icon button in the upper right corner of the widget.

![cost-dashboard-widget-edit-01](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-widget-edit-01.png)

(2) After editing the widget name or group statistics, click the [OK] button.

![cost-dashboard-widget-edit-02](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-widget-edit-02.png)

### Deleting a widget
(1) Click the [Delete] icon button in the upper right corner of the widget.

![cost-dashboard-widget-delete-01](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-widget-delete-01.png)

(2) When the [Delete widget] modal dialog opens, click the [OK] button.

![cost-dashboard-widget-delete-02](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-widget-delete-02.png)


## Dashboard settings
### Editing the dashboard name
(1) Click the [Edit] icon button next to the dashboard title.

![cost-dashboard-name-edit-01](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-name-edit-01.png)

(2) After changing the name of the dashboard, click the [OK] button.

![cost-dashboard-name-edit-02](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-name-edit-02.png)


### Filtering settings
By setting the filter, you can view data on the dashboard by filtering it by the criteria you want.

(1) Click the [Filter] icon button at the top of the dashboard.

![cost-dashboard-filter-01](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-filter-01.png)

(2) After selecting the desired filter, click the [OK] button.

![cost-dashboard-filter-02](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-filter-02.png)


### Setting up duration
You can select the duration menu from the [Duration] dropdown at the top right of the dashboard, or set the duration directly through the [Select duration] menu.

![cost-dashboard-period-01](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-period-01.png)

If you set the duration directly, you can set the interval on a monthly basis for up to 12 months.

![cost-dashboard-period-02](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-period-02.png)

If you check the [Fix date] option on the left of the [Duration] drop-down, the set date is maintained even when refreshed.

![cost-dashboard-period-03](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-period-03.png)

### Exchange rate settings
You can select the exchange rate from the [Exchange rate] dropdown at the top right of the dashboard. When selected, data in all charts and tables is converted to the corresponding exchange rate and displayed.

![cost-dashboard-currency-01](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-currency-01.png)

### Home dashboard settings
If you set a specific dashboard as your home dashboard, you will be taken directly to that dashboard page when you enter the [Cost management > Dashboard] page. Information at home dashboard settings is stored in your browser and not shared with other users.

![cost-dashboard-home-dashboard-01](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-home-dashboard-01.png)

## Duplicating the dashboard
You can access the [Duplicate] menu by clicking the [More] icon button next to the dashboard title.
![cost-dashboard-duplicate-dashboard-01](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-duplicate-dashboard-01.png)

You can set the following items in the dashboard duplication form.

![cost-dashboard-duplicate-dashboard-02](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-duplicate-dashboard-02.png)
- Dashboard name
- Whether to duplicate the filter: If you enable this option, data including the filter settings on the dashboard will be duplicated.
- Dashboard exposure method: Choose between `public` and `my dashboard.`

## Downloading a dashboard as a PDF
You can download a dashboard as a PDF file by clicking the [Download] icon button at the top right of the dashboard.

![cost-dashboard-pdf-download-01](/docs/guides/cost-explorer/dashboard-img/cost-dashboard-pdf-download-01.png)
