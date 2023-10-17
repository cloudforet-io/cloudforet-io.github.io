---
title: "Cost analysis"
linkTitle: "Cost analysis"
weight: 2
date: 2022-06-23
description: >
    **Cost analysis** provides detailed analyses of cost data received from cloud providers.
    <br>
    <br>
    By grouping or filtering data based on diverse conditions, you can view the desired cost data at a glance.
---

## Verifying cost analysis

### Selecting a data source

If you have more than one billing data source connected, you can perform a detailed cost analysis by selecting each data source from the "Cost Analysis" section in the left menu. 

{{<alert>}}
To prevent cost data distortion, the original currency for each data source remains fixed.
{{</alert>}}

![cost-analysis-data-source](/docs/guides/dashboards/cost-analysis-img/cost-analysis-data-source_en.png)


### Selecting the granularity 

**Granularity** is criteria set for how data will be displayed. The form of the provided chart or table varies depending on the detailed criteria.

![cost-analysis-granularity](/docs/guides/dashboards/cost-analysis-img/cost-analysis-granularity_en.png)

- `Daily`: You can review daily accumulated data for a specific month.
- `Monthly`: You can check monthly data for a specific period (up to 12 months).
- `Yearly`: You can examine yearly data for the most recent three years.

<br>

### Selecting the period

The available options in the "Period" menu vary depending on a granularity you choose. You can select a menu from the [Period] dropdown or configure it directly through the "Custom" menu.


![cost-analysis-period](/docs/guides/dashboards/cost-analysis-img/cost-analysis-period_en.png)

<br>

### Group-by settings

You can select more than one result from group statistics. In the chart, only one selected result of group statistics is displayed, and in the table, you can see all the results from group statistics that you select.


{{<alert>}}
Group-by can be selected for up to a maximum of three.
{{</alert>}}

![cost-analysis-groupby](/docs/guides/dashboards/cost-analysis-img/cost-analysis-groupby_en.png)

![cost-analysis-groupby](/docs/guides/dashboards/cost-analysis-img/cost-analysis-cost_usage.png)


<br>


### Filter settings

Filters, similar to group-by, can be selected one or more at a time, and your configured values are used for filtering with an "AND" condition.

(1) Click the [**Filter**] button at the top of the page.

(2) When the "Filter Settings" window opens, you can choose the desired filters, and the selections will be immediately reflected in the chart and table.

![cost-analysis-filter](/docs/guides/dashboards/cost-analysis-img/cost-analysis-filter_en.png)

<br>


## Creating/managing custom cost analysis

### Creating a custom analysis page

To alleviate the inconvenience of having to reset granularity and period every time you enter the "Cost Analysis" page, a feature is provided that allows you to save frequently used settings as custom analysis pages.

{{<alert>}}
In addition to the three default analysis pages provided for each data source, you can also create custom cost analysis pages directly.
{{</alert>}}

(1) Click the [**Save As**] button in the upper-right corner of a specific cost analysis page.

![cost-analysis-save_as](/docs/guides/dashboards/cost-analysis-img/cost-analysis-save_as_en.png)

(2) After entering a name and clicking the [**Confirm**] button, a new analysis page is created.

![cost-analysis-save_to](/docs/guides/dashboards/cost-analysis-img/cost-analysis-save_to_en.png)

![cost-analysis-saved](/docs/guides/dashboards/cost-analysis-img/cost-analysis-saved_en.png)


(3) Custom cost analysis pages can be saved with settings like name, filters, group-by, etc., directly using the [**Save**] option, and just like the default analysis pages, you can also create new pages by using [**Save As**].

[cost-analysis-save_saveas](/docs/guides/dashboards/cost-analysis-img/cost-analysis-save_saveas_en.png)

<br>

### Editing the custom analysis name

You can edit the name by clicking the [**Edit**] button at the top of the page.

![cost-analysis-edit](/docs/guides/dashboards/cost-analysis-img/cost-analysis-edit_en.png)

![cost-analysis-edit_name](/docs/guides/dashboards/cost-analysis-img/cost-analysis-edit_name_en.png)

<br>

### Deleting the custom analysis name

You can delete the page by clicking the [**Delete**] button at the top of the page.

![cost-analysis-delete](/docs/guides/dashboards/cost-analysis-img/cost-analysis-delete_en.png)


