---
title: "Notification"
linkTitle: "Notification"
weight: 7
date: 2022-06-07
description: >
    **Notifications** are a means to deliver alerts.


    In the **Notifications channel** page, you can set up how and when to send alerts to which users.
---

The notifications channel is project dependent and can be managed on the project detail page.

![notification-full-page](/docs/guides/alert-manager/notification-img/notification-full-page.png)

## Creating a notifications channel

In the [Notification] tab of the project detail page, you can decide whether or not to **Create a notifications channel and enable it**.

**Notifications channel** is a unit that expresses the systematic recipient area, including the method and level of notifications transmission. It helps to transmit alerts according to the level set in the escalation rule.
<br>
<br>
(1) On the project detail page, select the [Notification] tab and click the [Add channel] button of the desired notifications channel.

![notification-step-1](/docs/guides/alert-manager/notification-img/notification-step-1.png)

{{< alert title="" >}}
For a detailed description of the **Cloudforet user channel**, see [here](/docs/guides/alert-manager/notification/#Cloudforet-user-channel).
{{< /alert >}}


(2) On the notification creation page, enter the settings to create a notifications channel.

(2-1) Enter the basic information about the notifications channel you want to create, such as the required channel name and notification level. The [Channel name] and [Notification level] comprise the basic setting fields, and afterward, the remaining fields receive different information per channel.

{{<alert>}}
For detailed linkage guides for each **Notification plugin**, see [here](/docs/guides/plugins/alert-manager-notification/).
{{</alert>}}

![notification-step-2-1](/docs/guides/alert-manager/notification-img/notification-step-2-1.png)

{{<alert title="Notification level">}}
Notification levels correlate to the escalation policy (/ko/docs/guides/alert-manager/escalation-policy/) that defines rules for spreading alerts. 

![notification-escalation-menu](/docs/guides/alert-manager/notification-img/notification-escalation-menu.png)

Based on the notification level specified in the escalation policy, the alert is spread to the notifications channel belonging to that level.
{{</alert>}}

(2-2) You can set a schedule to receive notifications only at certain times.

![notification-step-2-2](/docs/guides/alert-manager/notification-img/notification-step-2-2.png)

(2-3) Notifications can be received when an alert occurs or when a threshold for budget notifications was reached. By setting up topics, you can choose which notifications you want to receive.
<br>
If you select [Receive all notifications], you will receive both types of notifications, and if you select [Receive notifications on selected topics], you will receive only notifications related to what you selected.

![notification-step-2-3](/docs/guides/alert-manager/notification-img/notification-step-2-3.png)

(3) Click the [Save] button to complete the notifications channel creation.

{{<alert>}}
Even if there is a level set up under the escalation policy, without activating the notifications channel, notifications will not go out.
{{</alert>}}

## Editing and deleting the notifications channel

### Editing the notifications channel

Created notifications channels can be checked under each notifications channel selection.

![update-notification-channel-1](/docs/guides/alert-manager/notification-img/update-notification-channel-1.png)

You can change the active/inactive status through the toggle button at the top left, and you can edit each item by clicking the [Edit] button of each notifications channel.
<br>
When you complete inputting the information, click the [Save changes] button to complete the editing.

![update-notification-channel-2](/docs/guides/alert-manager/notification-img/update-notification-channel-2.png)

### Deleting the notifications channel
You can delete the notifications channels by clicking the [Delete icon] button in the upper right corner.

![delete-notification-channel](/docs/guides/alert-manager/notification-img/delete-notification-channel.png)

## Cloudforet user channel

The [Add Cloudforet user channel] button exists in the [Notifications channel] item in the project.

![cloud-foret-user-channel-1](/docs/guides/alert-manager/notification-img/cloud-foret-user-channel-1.png)

If you add a Cloudforet user channel, an alert is spread to the personal channels of project members. Afterward, alerts are forwarded via the **Cloudforet user notifications channel** of the user who has received it.

![cloud-foret-user-channel-2](/docs/guides/alert-manager/notification-img/cloud-foret-user-channel-2.png)


### Creating a Cloudforet user notifications channel

A user notifications channel can be created in [My page > Notifications channel].

![create-user-channel](/docs/guides/alert-manager/notification-img/create-user-channel.png)

Unlike creating a project notifications channel, **there are no notification level settings**, and other creation procedures are the same as [Creating a project notifications channel](/docs/guides/alert-manager/notification/#create-notifications-channel).

