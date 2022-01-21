---
title: "Email Protocol"
linkTitle: "Email Protocol"
weight: 3
date: 2021-08-12
description: >
    Notification plugin Email protocol configuration guide
---

## Overview
You can receive email _**alert**_ message and return _**acknowledge**_ .

## Prerequisites
There are not any requirements.
Email Protocol will be supported by _**AWS SES**_ in future release.

## Add Email Channel to your Project / User in SpaceONE
Go to _**`SpaceONE Console > Project > Notifications`**_ which you want to get alerts.

### Basic Information
![Email Protocol Channel Create](/docs/guides/alert_manager/notification/notification_img/email_protocol_01.png)

|Item|Descriptions|
|:--:|:--|
|Channel Name|Notification channel name|
|Notification Level|Which level to be placed in escalation policy, see [Escalation Policy for details](/docs/guides/alert_manager/escalation_policy/)|
|Email Address|Email address to receive alert message. Multiple email address can be registered(ex. test1@test.com,test2@test.com)|


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

