---
title: "Cost analysis"
linkTitle: "Cost analysis"
weight: 3
date: 2022-06-23
description: >
    **Cost analysis** provides detailed analyses of cost data received from cloud providers.
    <br>
    <br>
    By grouping or filtering data based on diverse conditions, you can view the desired cost data at a glance.
---

## Verifying cost analysis

### Selecting detailed criteria

**Detailed criteria** are criteria set for how data will be displayed. The form of the provided chart or table varies depending on the detailed criteria.

![cost-analysis-granularity-01](/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-granularity-01.png)

- `Accumulated data`: A pie chart is provided, and the table shows the total data for the selected period.
- `Daily data` or `monthly data`: A column chart is provided, and the table shows the selected period by day or month.
  If you activate the [Accumulated] toggle button in the daily data and monthly data charts, you can see the accumulated cost data to date.
    ![cost-analysis-granularity-02](/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-granularity-02.png)

### Setting up duration
Period menus that you can choose may appear differently depending on the detailed criteria. Select a menu from the [Duration] dropdown, or set it directly through the [Select duration] menu.

![cost-analysis-period-01](/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-period-01.png)

`Accumulated data` and `monthly data` can be customized on a monthly basis, and the period can be set up to the length of 12 months.
`Daily data` can be customized per day as a unit, and the period can be set up to 1 month maximum.

![cost-analysis-period-02](/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-period-02.png)

### Exchange rate settings
When you select the exchange rate you want to apply from the [Exchange rate] dropdown, the exchange rate is applied to the cost data in charts and tables.

![cost-analysis-currency-01](/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-currency-01.png)

### Group statistics settings
Data is grouped based on values that a user selects ​​in group statistics.

![cost-analysis-groupby-01](/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-groupby-01.png)

You can select more than one result from group statistics. In the chart, only one selected result of group statistics is displayed, and in the table, you can see all the results from group statistics that you select.

![cost-analysis-groupby-02](/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-groupby-02.png)

### Filter settings
One or more filters can be selected as with the group statistics, and the value that is set by the user is filtered by the "and" condition.

(1) Click the [Add filter] icon button.

![cost-analysis-filter-01](/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-filter-01.png)

(2) When the [Filter settings] modal dialog opens, select the desired filter and click the [OK] button.

![cost-analysis-filter-02](/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-filter-02.png)


## Cost analysis query
To eliminate the hassle of having to reset detailed criteria and period every time you enter the [Cost management > Cost analysis] page, we provide a feature of saving frequently used settings as a query.
{{<alert>}}
Exchange rates are not stored in the query.
{{</alert>}}

### Saving a query
(1) Set detailed criteria, group statistics, filters, etc.

(2) Click the [Save As] button in the upper right corner.

![cost-analysis-query-01](/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-query-01.png)

{{<alert>}}
The [Save As] button appears for the default query, and the [Save] button and the [Save As] button appear together when an existing query is modified.
{{</alert>}}

(3) After entering the query name in the [Save Query] modal, click the [OK] button.

![cost-analysis-query-02](/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-query-02.png)

### Loading a query
On the [Cost Analysis] page, click the [Query List] icon button in the upper left corner, and then select one of the saved query lists to call the corresponding query.

![cost-analysis-query-03](/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-query-03.png)

### Editing a query name
You can edit the name of a saved query by clicking the [Edit] button after calling the query on the [Cost Analysis] page or by clicking the [Edit] button in the saved query list.

![cost-analysis-query-edit-01](/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-query-edit-01.png)
![cost-analysis-query-edit-02](/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-query-edit-02.png)

### Deleting a query
A saved query can be deleted by calling the query on the [Cost Analysis] page and clicking the [Delete] button or by clicking the [Delete] button in the saved query list.

![cost-analysis-query-delete-01](/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-query-delete-01.png)
![cost-analysis-query-delete-02](/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-query-delete-02.png)
