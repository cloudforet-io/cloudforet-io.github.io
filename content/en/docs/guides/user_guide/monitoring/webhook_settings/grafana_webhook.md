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

![](../../../.gitbook/assets/screen-shot-2021-06-29-at-15.02.35.png)

**Step 2. Drive to Notification Channel on Browser**

![](../../../.gitbook/assets/screen-shot-2021-06-29-at-15.03.36.png)

**Step 3. Click `New Channel`**  **button**

![](../../../.gitbook/assets/screen-shot-2021-06-29-at-15.08.49.png)

**Step 4. Type name,** [**Webhook URL\(from SapceONE\)**](./#webhook-list) **and Select Type of Channel as webhook**

![](../../../.gitbook/assets/screen-shot-2021-06-29-at-15.23.34.png)

{% hint style="info" %}
**Grafana** Webhook URL accepts only **HTTP** Protocol**.**  
Created Webhook ****URL from **SpaceONE** is **HTTPS** but **HTTP** works as well**.

Please,** type ****URL ****as **HTTP  like`http://monitoring-webhook.dev.spaceone.dev/monitoring/v1/webhook/...`**
{% endhint %}

**Step 5. Please, Test URL by clicking Test button and then you will see pop up message that says Test Notification Sent.**

![](../../../.gitbook/assets/screen-shot-2021-06-29-at-15.34.10.png)

**Step 5. Click Save button and Check Notification Channel has successfully created.**

![](../../../.gitbook/assets/screen-shot-2021-06-29-at-15.36.35.png)

