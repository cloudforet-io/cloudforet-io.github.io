---
title: "Zabbix Webhook"
linkTitle: "Zabbix Webhook"
weight: 3
date: 2021-08-31
description: >
    Monitoring service plugin zabbix webhook configuration guide
---

## Set up a Webhook at Zabbix
**To** Connect **SpaceONE's Alert Manager,** Set up Zabbix's Webhook Media Type.<br>
Please, Set Alerting Channel for following Steps

## Set up a Zabbix Webhook Media

### Step 1. Log in to Zabbix browser as Administrator 

### Step 2. Move to Media Type menu
Administration on Left menu -> `Media Types` 

### Step 3. Create New Media Type 
Click on Create `media type` on the right-top.

### Step 4. Fill out the Webhook information
Name: SpaceONE Webhook    
Type: Webhook  
Parameter: Add parameter information as a below
| Name | Value |
|---   | ---   |
| eventDate | {EVENT.DATE} |
| eventID | {EVENT.ID} |
| eventName | {EVENT.NAME} |
| eventSeverity | {EVENT.SEVERITY} |
| eventStatus | {EVENT.STATUS} |
| eventTime | {EVENT.TIME} |
| hostConn | {HOST.CONN} |
| hostID | {HOST.ID} |
| hostname | {HOST.HOST} |
| hostVisibleName | {HOST.NAME} |
| itemID | {ITEM.ID} |
| itemKey | {ITEM.KEY} |
| itemValue | {ITEM.VALUE} |
| message | {ALERT.MESSAGE} |
| title | {ALERT.SUBJECT} |
| to | {ALERT.SENDTO} |
| triggerID | {TRIGGER.ID} |
| triggerName | {TRIGGER.NAME} |
| triggerSeverity | {TRIGGER.SEVERITY} |
| triggerStatus | {TRIGGER.STATUS} |
| webhookURL | <<YOUR_ZABBIX_WEBHOOK_URL>> |

![](/docs/guides_v1/alert_manager/webhook_settings/zabbix_webhook_img/zabbix_webhook_parameter.png)
You can check the WebhookURL in the project page -> webhook list on SpaceONE Console.
![](/docs/guides_v1/alert_manager/webhook_settings/zabbix_webhook_img/zabbix_webhook_list_page.png)
script: Copy and use the code below.
~~~javascript
var params = JSON.parse(value),
req = new CurlHttpRequest(),
resp;
req.AddHeader('Content-Type: application/json');

var params = JSON.parse(value);
payload = {};
payload.title = params.title;
payload.message = params.message;
payload.to = params.to;

payload.event = {};
payload.event.id = params.eventID;
payload.event.name = params.eventName;
payload.event.date = params.eventDate;
payload.event.time = params.eventTime;
payload.event.status = params.eventStatus;
payload.event.severity = params.eventSeverity;

payload.item = {};
payload.item.id = params.itemID;
payload.item.key = params.itemKey;
payload.item.value = params.itemValue;

payload.trigger = {};
payload.trigger.id = params.triggerID;
payload.trigger.name = params.triggerName;
payload.trigger.severity = params.triggerSeverity;
payload.trigger.status = params.triggerStatus;

payload.host = {};
payload.host.id = params.hostID;
payload.host.connection_info = params.hostConn;
payload.host.name = params.hostname;
payload.host.visible_name = params.hostVisibleName;


resp = req.Post(params.webhookURL,
JSON.stringify(payload)
	);
return resp;
~~~

![](/docs/guides_v1/alert_manager/webhook_settings/zabbix_webhook_img/zabbix_webhook_script.png)
### Step 5. Add the message templates
Move to Message templates tab and Click on Add button to add template.  
Add 3 templates.

| Message Type | Description |
|---   | ---   |
| Problem | When a problem event occurs, it is send as a message in this format. |
| Problem recovery | When the problem event is resolved, it is sent as a message in this format. |
| Problem update | When the problem event is updated, it is sent as a message in this format. |

The subject and message can be used as they are in the given format or filled in after editing the content you want.
![](/docs/guides_v1/alert_manager/webhook_settings/zabbix_webhook_img/zabbix_message_template.png)

### Step 6. Add media to Users 
If webhook setting is completed in media type, add the webhook media to user.  
Move to `Users` menu. `Administration` on Left menu -> `Users`.  
Select the user you want to set up and go to the Media tab.  
Click on `Add` button to add a webhook media.

### Step 7. Fill out the Media information  
Type: Select the Webhook media type name created above.  
Send to: Although it is a value that is not actually used, it is a required parameter, so you can use any information. (email or name)    
When active: Use the given default value without modifying it (1-7,00:00-24:00). The actual schedule will be executed by `SpaceONE's Alert manager`.  
Use if severity: Checked all    
Enabled: Checked  
![](/docs/guides_v1/alert_manager/webhook_settings/zabbix_webhook_img/zabbix_media_to_user.png)
When the setting is complete, click the `Add` button to complete the setting.  
![](/docs/guides_v1/alert_manager/webhook_settings/zabbix_webhook_img/zabbix_media_to_user_2.png)
Finally, click the update button to finish.  

### Step 8. Add Trigger Action
Up to now, the settings for the webhook itself and the settings for the user who will use the webhook have been added.  
From now on, we will set up to send a message to the user who has set up a webhook when a specific event occurs.    
<br>
Move to `Trigger actions` menu. `Configuration` on Left menu -> `Actions` -> `Trigger actions`.  

![](/docs/guides_v1/alert_manager/webhook_settings/zabbix_webhook_img/trigger_action_menu.png)
<br>

Click on `Create action` button on the right-top.  
Name: SpaceONE Webhook  
![](/docs/guides_v1/alert_manager/webhook_settings/zabbix_webhook_img/create_trigger_action.png)
<br>

Move to `Operations` tab.
Add on `Operations` and set as below.
![](/docs/guides_v1/alert_manager/webhook_settings/zabbix_webhook_img/add_trigger_action_operation.png)
<br>

Add on Recovery operations and set as below.
![](/docs/guides_v1/alert_manager/webhook_settings/zabbix_webhook_img/add_trigger_action_recovery.png)
<br>

Finally, the settings of the Operations tab.
![](/docs/guides_v1/alert_manager/webhook_settings/zabbix_webhook_img/trigger_action_operations.png)
<br>
