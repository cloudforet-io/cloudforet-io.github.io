---
title: "Telegram Protocol"
linkTitle: "Telegram Protocol"
weight: 5
date: 2021-08-12
description: >
    Notification Plugin Telegram Protocol Configuration Guide
---

## Overview
We can also add **`Telegram`** to our list of `Notification` channels. There are few prerequisites to use Telegram Bot on SpaceONE notification service, and the following will guide you to your **SpaceONE** notification journey.

## Prerequisites
- Install the Telegram app on your phone or PC.
You will need a **BOT API TOKEN** and **CHAT ID**.
  
### How to get BOT API Token
Open `Telegram`, and create a new Bot by searching for `@BotFather` and then typing `/start` , `/token`, and `/newbot` by turns. Your interaction with BotFather will be similar as following: 
![telegram_get_http_tlken.png](/docs/guides/alert_manager/notification/notification_img/telegram_get_http_tlken.png)
Do not forget that the username must end in bot and must be unique. 
You will get given a HTTP API token which is your BOT API Token to be used in SpaceONE. It will be in the form **`XXXXXXXXX: YYYYYYYYYYYYYYYYYYYYYYYYYYYYY`**.

### How to get Chat ID
You then need the **Chat ID**. To get this, following will help you to get the Chat ID.
1. Create a group and then add the new bot to it.
![telegram_add_bot.jpeg](/docs/guides/alert_manager/notification/notification_img/telegram_add_bot.jpeg) 
2. send a message to the group, so that the group has at least 1 message.
3. Go to your browser, visit the url [https://api.telegram.org/botXXX:YYY/getUpdates](https://api.telegram.org/botXXX:YYY/getUpdates) (replace the XXX:YYY with the **BOT API token** you just got from Telegram)
4. In the JSON Response, you should see a node with a message that has the type=group, This node will also have an ID. Copy this into CHAT ID field in SpaceONE. The CHAT ID will most likely be a negative number in the form of -#########.
{{% alert title="Precautions" %}}
The chat id is likely to be a negative number, so make sure you copy the negative symbol as well when setting the chat id in the script.
   
```
Eg, If chat id = -123456789, occasionally quickly copying and pasting you may forget the - character and copy just 123456789
```
{{% /alert %}}

## Add Telegram Channel to your Project / User in SpaceONE 
Go to `SpaceONE Console` > `Project` which you want to get alerts through `Telegram`.

### Basic Information
![telegram_spaceone_console.png](/docs/guides/alert_manager/notification/notification_img/telegram_spaceone_consol.png)
Set information above.
![telegram_spaceone_console.png](/docs/guides/alert_manager/notification/notification_img/telegram_add_info.png)

|Item|Descriptions|
|:--:|:--|
|Channel Name|Notification channel name|
|Notification Level|Which level to be placed in escalation policy, see [Escalation Policy for details](/docs/guides/admin_guide/monitoring/alert_manager/escalation-policy/)|
|Chat ID| Telegram chatting room ID, see [How To get Chat ID](/docs/guides/alert_manager/notification/protocol_settings/telegram_protocol/#how-to-get-chat-id) to get information|
|BOT API Token| Telegram bot api token, see[How To get Bot API Token](/docs/guides/alert_manager/notification/protocol_settings/telegram_protocol/#how-to-get-bot-api-token) to get information|


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

Save and Test, now you are ready for SpaceONE Journey with Telegram notification channel.
`Happy SpaceONE-ing with Telegram notification!`

## Troubleshooting
If the `getUpdates` url doesn't return a node containing a group with an id, then
* Remove your bot from the group,
* and then re add your bot the the group,
* then send a message to the group again,
* then try the getUpdates url again.

Visit [Telegram API Bot](https://core.telegram.org/bots#3-how-do-i-create-a-bot) for an additional understading of Telegram API Bot services. 