---
title: "Webhook"
linkTitle: "Webhook"
weight: 4
date: 2022-06-07
description: >
    You can receive events that occurred in external monitoring services through **Webhook**.
---

#### Creating a webhook

<!--This item is the same as the 'Create webhook' item in [Alert manager > quick start]. Be careful when editing -->

To receive event messages from an external monitoring service, you need to create a webhook.
<br>
Webhooks can be created on the project detail page.


(1) Go to the [Alerts] tab of the project detail page and select the [Webhook] tab.

![create-webhook-step-1](/docs/guides/alert-manager/quick-start-img/create-webhook-step-1,2.png)

(2) Click the [Add] button.

(3) Write a name in an [Add webhook] modal dialog and select the plug-in of the external monitoring service to be connected.

![create-webhook-step-3](/docs/guides/alert-manager/quick-start-img/create-webhook-step-3.png)

(4) Click the [OK] button to complete set up.

{{<alert title="Connect external monitoring service">}}
To use a webhook, you should connect to an external monitoring service through the URL of the created webhook.

For more on how to connect an external monitoring service, see [here](/docs/guides/plugins/alert-manager-webhook/).
{{</alert>}}






## Getting a list of webhooks

### Advanced search
You can enter a search word in the search bar to see a list of webhooks that match your criteria. For a detailed description on advanced search, see [here](/docs/guides/advanced/search/).

![webhook-search](/docs/guides/alert-manager/webhook-img/webhook-search.png)

## Editing and deleting webhook

You can enable, disable, change, or delete a webhook viewed from the list.

![update-webhook](/docs/guides/alert-manager/webhook-img/update-webhook.png)

### Enabling/disabling a webhook

If you enable a webhook, you can receive events from an external monitoring service connected to the webhook at [Alerts](/docs/guides/alert-manager/alert/).
<br>
On the contrary, if you disable a webhook, incoming events are ignored and no alerts are raised.

(1) Select the webhook to enable and choose the [Enable]/[Disable] menu from the [Action] dropdown.

![enable-webhook-1](/docs/guides/alert-manager/webhook-img/enable-webhook-1.png)

(2) Check the content in the [Enable/disable a webhook] modal dialog and click the [OK] button.

![enable-webhook-2](/docs/guides/alert-manager/webhook-img/enable-webhook-2.png)
![disable-webhook-2](/docs/guides/alert-manager/webhook-img/disable-webhook-2.png)


### Renaming a webhook

(1) Select the webhook to change from the webhook list, and select the [Change] menu from the [Action] dropdown.

![update-webhook-name-1](/docs/guides/alert-manager/webhook-img/update-webhook-name-1.png)

(2) Write a name to be changed and click the [OK] button to complete the change.

![update-webhook-name-2](/docs/guides/alert-manager/webhook-img/update-webhook-name-2.png)

### Deleting a webhook
    
(1) Select the webhook to delete from the webhook list, and choose the [Delete] menu from the [Action] dropdown.

![delete-webhook-1](/docs/guides/alert-manager/webhook-img/delete-webhook-1.png)

(2) After entering the accurate name of the selected webhook, click the [Delete] button to delete the webhook. 

![delete-webhook-2](/docs/guides/alert-manager/webhook-img/delete-webhook-2.png)
