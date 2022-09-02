---
title: "Dashboard"
linkTitle: "Dashboard"
weight: 2
date: 2022-06-07
description: >
    It is on dashboards that you can view alerts that have occurred to the currently logged-in users at a glance.
---

You can check alerts for each of the three main parts, as follows:

## Check alerts by state

At the top of the dashboard, you can view alerts by [State](/docs/guides/alert-manager/alert/#state).
<br>
Click each item to go to the [Alert details page](/docs/guides/alert-manager/alert/#alert-explore), where you can check detailed information or implement detailed settings.

![view-alert-by-status](/docs/guides/alert-manager/dashboard-img/view-alert-by-status.png)

## Alerts history

Alert history occurred in [Project](/docs/guides/project/project/) is displayed.
<br>
You can see the daily data on the chart, and the increase/decrease in alerts on the card compared to the previous month.

![alert-history-1](/docs/guides/alert-manager/dashboard-img/alert-history-1.png)

## Project dashboard

[Project dashboard] shows the alert information of each project related to a user.

In the case of [Top 5 project activities], projects are displayed in the order of having the most alerts in the [Open] state.

![project-board-1](/docs/guides/alert-manager/dashboard-img/project-board-1.png)

At the bottom of the search bar, the alerted projects are displayed in the order of highest activity.
<br>
Only projects marked with an `issue` status are visible, and when all the alerts reach a `cleared` status, they are changed to `normal` status and are no longer visible on the dashboard.

![project-board-2](/docs/guides/alert-manager/dashboard-img/project-board-2.png)

