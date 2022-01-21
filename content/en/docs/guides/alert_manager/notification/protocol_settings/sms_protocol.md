---
title: "SMS Protocol"
linkTitle: "SMS Protocol"
weight: 2
date: 2021-08-12
description: >
    Notification Plugin SMS Protocol Configuration Guide
---

## Overview
You can receive SMS alert message and return acknowledge via mobile.

## Prerequisites
There are not any requirements.
SMS Protocol will be supported by AWS SNS in future release.

## Add SMS Channel to your Project / User in SpaceONE
Go to _**`SpaceONE Console > Project > Notifications`**_ which you want to get alerts.

### Basic Information
![sms protocol create](/docs/guides/alert_manager/notification/notification_img/sms_protocol_01.png)

|Item|Descriptions|
|:--:|:--|
|Channel Name|Notification channel name|
|Notification Level|Which level to be placed in escalation policy, see [Escalation Policy for details](/docs/guides/alert_manager/escalation_policy/)|
|Phone Number|Mobile phone number to receive sms message|

### Notification Schedule
You can select when to receive alarm. There two options
![Notification Schedule](/docs/guides/alert_manager/notification/notification_img/notification_img_01.png)

|Setting Mode|Descriptions|
|:--:|:--|
|All Time|Receive alert notification any time|
|Custom|Receive alert notification within designated time period|

### Topic
Notification subscribes topics to check which alarm to send

{{% alert title="About Notification Topics" %}}
Now only monitoring.Alert topics are available. Other topics will be created in future release.
Just pin _**Setting Mode**_ to _**Receive all notifications**_
{{% /alert %}}

|Setting Mode|Descriptions|
|:--:|:--|
|Receive all notifications|Allow notification channel to send all alert messages from _**any topics**_|
|Receive notifications based on selected topics|Allow notification channel to send alert message from _**selected topics**_|

