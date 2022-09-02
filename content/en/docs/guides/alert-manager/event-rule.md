---
title: "Event rule"
linkTitle: "Event rule"
weight: 5
date: 2022-06-07
description: >
    By setting an **Event rule**, an alert that occurs triggers specific actions to perform automatically, reducing the hassle of manually managing alerts.
---


Event rules are project dependent and can be managed on the project detail page.

![event-rule-full-page](/docs/guides/alert-manager/event-rule-img/event-rule-full-page.png)

## Create event rules

(1) In the [Settings] tab found in the [Alert] tab of the project detail page, click the [Edit] button of the event rule.

![create-event-rule-1](/docs/guides/alert-manager/event-rule-img/create-event-rule-1.png)

(2) Click the [Add event rule] button.

![create-event-rule-2](/docs/guides/alert-manager/event-rule-img/create-event-rule-2.png)

(3) Enter desired setting values ​​on the event rule page.

![create-event-rule-3](/docs/guides/alert-manager/event-rule-img/create-event-rule-3.png)

(3-1) Set the conditions to perform additional actions on the received alert.

At least one condition must be written, and you can add conditions by clicking the [Add] button on the right or delete them by clicking the [Delete] icon button.

![create-event-rule-3-1](/docs/guides/alert-manager/event-rule-img/create-event-rule-3-1.png)


(3-2) Specify the action to be performed on the alert that meets the conditions defined above.

![create-event-rule-3-2](/docs/guides/alert-manager/event-rule-img/create-event-rule-3-2.png)


#### List of event rules settings

| Property            | Description                                                                                                                                                                    |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Stop notifications | Suppress [Notification](/docs/guides/alert-manager/notification/) for alerts for the corresponding conditions                                                                                             |
| Project routing | Alerts of the corresponding conditions are not received by current project but by project selected under project routing (no alert is created in the current project)  |
| Project Dependencies | Alerts of the corresponding conditions can be viewed from the projects registered in project dependency.                                                                                                                            |
| Urgency | Automatically assign urgency to alerts of the corresponding conditions<br/>`High,` `low,` or `none-set` can be specified and in case of `none-set,` rules are applied as follows<br/>• External monitoring alert: [Urgency of an object](/docs/guides/alert-manager/alert/#urgency)<br/>• Direct creation: High (default) |
| Person in charge | Automatically assign a person in charge of the alert for the corresponding condition(s): |
| Additional recipients | When [Notification](/docs/guides/alert-manager/notification/) occurs with the alert of the corresponding condition(s), send a notification to specified users together |
| Additional information | Automatically add information to alerts for the corresponding conditions |
| Stop executing further actions | If the event rule is executed, subsequent event rules are ignored (See [Ways and order of event rules action](/docs/guides/alert-manager/event-rule/#ways-and-orders-of-event-rules-action)) |


## Edit event rules

(1) Click the [Edit] button on the event rules page.

![update-event-rule-1](/docs/guides/alert-manager/event-rule-img/update-event-rule-1.png)

(2) Enter the setting values you want​for the event rule.

![update-event-rule-2](/docs/guides/alert-manager/event-rule-img/update-event-rule-2.png)

(3) Click the [Save] button to complete editing the event rules.






## Delete event rules

(1) Click the [Delete] button on the event rules page.

![delete-event-rule-1](/docs/guides/alert-manager/event-rule-img/delete-event-rule-1.png)

(2) In the [Delete event rule] modal dialog, click the [OK] button to complete the deletion.

![delete-event-rule-2](/docs/guides/alert-manager/event-rule-img/delete-event-rule-2.png)





## Ways and order of event rules action

Event rules set by a user for when an alert occurs will be executed sequentially.

![event-working-system](/docs/guides/alert-manager/event-rule-img/event-working-system.png)

If event rules are created as in the example above, they are executed in the order of [#1], [#2], etc., starting from the highest event rule.
<br>
You can easily change the order of the event rules by clicking the [↑] and the [↓] buttons.

{{<alert>}}
If [Stop executing further actions] is checked when creating an event rule, event rules with a lower priority than the event rule are not executed.
{{</alert>}}
