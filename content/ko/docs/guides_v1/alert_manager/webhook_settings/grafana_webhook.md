---
title: "Grafana Webhook"
linkTitle: "Grafana Webhook"
weight: 2
date: 2021-08-10
description: >
    Monitoring Service
---

## Set up a Webhook at Grafana
To Connect your Grafana with **SpaceONE's Alert Manager**, Set up Grafana's Notification Channels. <br>
Please set the alerting channel with following steps
* [**Set up a Notification Channel**](#set-up-a-notification-channels)

## Set up a Notification Channels

### Step 1
Drive to Grafana on Browser
![](/ko/docs/guides_v1/alert_manager/webhook_settings/grafana_webhook_img/grafana_webhook_img_01.png)

### Step 2
Drive to Notification Channel on Browser
![](/ko/docs/guides_v1/alert_manager/webhook_settings/grafana_webhook_img/grafana_webhook_img_02.png)

### Step 3
**Click `New Channel`**  **button**
![](/ko/docs/guides_v1/alert_manager/webhook_settings/grafana_webhook_img/grafana_webhook_img_03.png)

### Step 4
Type name, [**Webhook URL\(from SpaceONE\)**](./#webhook-list) **and Select Type of Channel as webhook**
![](/ko/docs/guides_v1/alert_manager/webhook_settings/grafana_webhook_img/grafana_webhook_img_04.png)
**Grafana** Webhook URL accepts only **HTTP** Protocol**.** <br>
Created Webhook ****URL from **SpaceONE** is **HTTPS** but **HTTP** works as well**.<br>
Please,** type ****URL ****as **HTTP  like`http://monitoring-webhook.dev.spaceone.dev/monitoring/v1/webhook/...`**<br>

### Step 5 
Please, Test URL by clicking Test button and then you will see pop up message that says Test Notification Sent.
![](/ko/docs/guides_v1/alert_manager/webhook_settings/grafana_webhook_img/grafana_webhook_img_05.png)

### Step 6
Click Save button and Check Notification Channel has successfully created.
![](/ko/docs/guides_v1/alert_manager/webhook_settings/grafana_webhook_img/grafana_webhook_img_06.png)
