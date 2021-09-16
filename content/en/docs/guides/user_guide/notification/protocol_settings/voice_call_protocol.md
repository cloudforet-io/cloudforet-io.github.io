---
title: "Voice Call Protocol"
linkTitle: "Voice Call Protocol"
weight: 1
date: 2021-08-30
description: >
    Notification Plugin Voice Call Protocol Configuration Guide
---

## Overview

You can receive voice call _**alert**_ message and return _**acknowledge**_ via mobile.

---

## Prerequisites

There are not any requirements.
Voice Call Protocol will be supported by _**AWS direct call**_ in future release.


---
## Add Voice Call Channel to your Project / User in SpaceONE 
Go to _**`SpaceONE Console > Project > Notifications`**_ which you want to get alerts.

### Basic Information

![voice call protocol create](/docs/guides/user_guide/notification/notification_img/voice_call_protocol_01.png)

|Item|Descriptions|
|:--:|:--:|
|Channel Name|Notification channel name|
|Notification Level|Which level to be placed in escalation policy, see [Escalation Policy for details](/docs/guides/admin_guide/monitoring/alert_manager/escalation-policy/)|
|Country Code|Region code for mobile phone(Default 82)|
|Phone Number|Mobile phone number|


### Notification Schedule

You can select when to receive alarm. There two options

![Notification Schedule](/docs/guides/user_guide/notification/notification_img/notification_img_01.png)

|Setting Mode|Descriptions|
|:--:|:--:|
|All Time|Receive alert notification any time|
|Custom|Receive alert notification within designated time period|

### Topic

Notification subscribes topics to check which alarm to send

{{% alert title="About Notification Topics" %}}
Now only monitoring.Alert topics are available. Other topics will be created in future release.
Just pin _**Setting Mode**_ to _**Receive all notifications**_
{{% /alert %}}

|Setting Mode|Descriptions|
|:--:|:--:|
|Receive all notifications|Allow notification channel to send all alert messages from _**any topics**_|
|Receive notifications based on selected topics|Allow notification channel to send alert message from _**selected topics**_|

