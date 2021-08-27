---
title: "Grafana Webhook"
linkTitle: "Grafana Webhook"
weight: 2
date: 2021-08-10
description: >
    Monitoring Service
---

## Set up a Webhook at Grafana

**To** Connect **SpaceONE's** Alert Manager**,** Set up Grafana's Notification Channels.

Please, Set Alerting Channel for following Steps

* [**Set up a Notification Channel**](grafana.md#set-up-a-notification-channels) ****

### Set up a Notification Channels

**Step 1. Drive to Grafana on Browser**

![](/docs/guides/user_guide/monitoring/webhook_settings/grafana_webhook_img/grafana_webhook_img_01.png)

**Step 2. Drive to Notification Channel on Browser**

![](/docs/guides/user_guide/monitoring/webhook_settings/grafana_webhook_img/grafana_webhook_img_02.png)

**Step 3. Click `New Channel`**  **button**

![](/docs/guides/user_guide/monitoring/webhook_settings/grafana_webhook_img/grafana_webhook_img_03.png)

**Step 4. Type name,** [**Webhook URL\(from SapceONE\)**](./#webhook-list) **and Select Type of Channel as webhook**

![](/docs/guides/user_guide/monitoring/webhook_settings/grafana_webhook_img/grafana_webhook_img_04.png)

{% hint style="info" %}
**Grafana** Webhook URL accepts only **HTTP** Protocol**.**  
Created Webhook ****URL from **SpaceONE** is **HTTPS** but **HTTP** works as well**.

Please,** type ****URL ****as **HTTP  like`http://monitoring-webhook.dev.spaceone.dev/monitoring/v1/webhook/...`**
{% endhint %}

**Step 5. Please, Test URL by clicking Test button and then you will see pop up message that says Test Notification Sent.**

![](/docs/guides/user_guide/monitoring/webhook_settings/grafana_webhook_img/grafana_webhook_img_05.png)

**Step 5. Click Save button and Check Notification Channel has successfully created.**

![](/docs/guides/user_guide/monitoring/webhook_settings/grafana_webhook_img/grafana_webhook_img_06.png)

