---
title: "Customize Dashboard"
linkTitle: "Customize Dashboard"
weight: 5
date: 2023-10-16
description: >
    In the dashboard [Customize] mode, you can modify the dashboard name, layout, widgets, and more.

---

## Customizing your dashboard

### Switch to 'Customize' mode

Clicking the [Customize] button on the right side of a dashboard page will take you to the dashboard editing page.

![dashboard-edit-intro-01](/docs/guides/dashboards/dashboard-img/dashboard-edit-intro-01.png)

<br>

### Rename the dashboard

You can click the [Edit] icon button next to the dashboard title to make changes.

![dashboard-edit-name-01](/docs/guides/dashboards/dashboard-img/dashboard-edit-name-01.png)

<br>

### Manage labels

You can add or remove labels just below the dashboard title at the top. Labels are used to categorize and differentiate dashboard-related categories and features, making them useful for dashboard searches.

![dashboard-edit-label-01](/docs/guides/dashboards/dashboard-img/dashboard-edit-label-01.png)

<br>

### Apply a period range

(1) When you activate the [Date Range Selector] option from the right side panel, a dropdown button for setting the period will be displayed on the dashboard.

![dashboard-edit-duration-01](/docs/guides/dashboards/dashboard-img/dashboard-edit-duration-01.png)

(2) You can select a specific month from the drop-down or choose a specific month within the last 3 years using the [Custom] menu.

![dashboard-edit-duration-02](/docs/guides/dashboards/dashboard-img/dashboard-edit-duration-02.png)

{{<alert>}}
Even when you activate the date range selector option, it doesn't apply to all widgets. Depending on the widget's characteristics, some widgets allow applying the date range, while others do not.
{{</alert>}}

<br>

### Configure auto data refresh

You can choose the data refresh interval from the [Refresh] dropdown in the upper right corner of the dashboard.

![dashboard-edit-refresh-01](/docs/guides/dashboards/dashboard-img/dashboard-edit-refresh-01.png)

<br>

### Add widgets

(1) Click the [+ Add Widget] button on the right-hand dashboard editing page.

![dashboard-edit-add-widget-01](/docs/guides/dashboards/dashboard-img/dashboard-edit-add-widget-01.png)

<br>

(2) Select a specific widget from the list on the left and add it.

![dashboard-edit-add-widget-02](/docs/guides/dashboards/dashboard-img/dashboard-edit-add-widget-02.png)

{{<alert>}}
You can choose from a variety of widgets based on the [Cost], [Assets], and [Alert] categories. (More widgets will be continuously updated)
{{</alert>}}


(2-2) If you have selected a specific widget, you can enter the [Name] and set the detailed options.

![dashboard-edit-add-widget-03](/docs/guides/dashboards/dashboard-img/dashboard-edit-add-widget-03.png)

{{<alert>}}
**[Inherit] On/Off:** Options provided for each widget are, for the most part, initially set to inherit the dashboard's variables as the default. 'Inheriting from the dashboard' means that when you change the options of a variable at the dashboard level, those changes are automatically applied to the widgets that have options that inherit from it. Conversely, when a specific option is set to non-inherited, changes to the variable at the dashboard level won't affect that widget.
<br>
e.g. In the Cost Map widget, the `Project` option is set to 'Inherit' and if you filter `Project` to 'Project A' at the dashboard level, the widget will now display data relevant to 'Project A' only.
{{</alert>}}

{{<alert>}}
**Return to initial settings:** Each widget comes with default option values corresponding to the dashboard's variables by default. Even if you've made multiple changes to widget options during the dashboard configuration process, clicking the [Return to initial settings] button will easily revert to the initially set default option values.
{{</alert>}}


(2-3) If there are no additional options you want, you can click the [+Add Option] button to add them.

![dashboard-edit-add-widget-04](/docs/guides/dashboards/dashboard-img/dashboard-edit-add-widget-04.png)

(2-4) When you've finished the configuration, click the [Confirm] button to complete adding widgets to the dashboard.


<br>

### Rearrange the widget order

You can change the order by drag & drop the widget name button from the widget list in the right panel.

![dashboard-edit-change-widget-01](/docs/guides/dashboards/dashboard-img/dashboard-edit-change-widget-01.png)


<br>

### Enlarge widget size

If you want to view a widget in full-screen, click the [Full Screen] icon button in the top right corner of the widget.

![dashboard-edit-full-screen-01](/docs/guides/dashboards/dashboard-img/dashboard-edit-full-screen-01.png)

![dashboard-edit-full-screen-02](/docs/guides/dashboards/dashboard-img/dashboard-edit-full-screen-02.png)


<br>

### Edit a widget

(1) Click the [Edit] icon button in the top right corner of the widget to edit it.

![dashboard-update-widget-01](/docs/guides/dashboards/dashboard-img/dashboard-update-widget-01.png)

(2) You can edit the widget name and options, then click the [Confirm] button to save your changes. However, if you don't [Save] the dashboard in [Customize] mode, the edited widget won't be reflected in the final version.

- For information on widget option settings, please refer to [**here**](/docs/guides/dashboards/edit/#Add-widgets). 

![dashboard-update-widget-02](/docs/guides/dashboards/dashboard-img/dashboard-update-widget-02.png)
