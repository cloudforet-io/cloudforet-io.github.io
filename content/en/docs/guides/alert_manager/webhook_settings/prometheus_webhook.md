---
title: "Prometheus Webhook"
linkTitle: "Prometheus Webhook"
weight: 4
date: 2021-10-12
description: >
    Monitoring service plugin prometheus webhook configuration guide
---

## Set up a Webhook at Prometheus
**To** Connect **SpaceONE's Alert Manager,** Set up Prometheus's webhook configuration of Alertmanager.<br>


### Step 1. Get webhook url
Sign in to SpaceONE console, and get the `webhook url` in the `Project` page -> webhook list on it. 
![](/docs/guides/alert_manager/webhook_settings/prometheus_webhook_img/prometheus_webhook_img_01.png)
<br>
Webhook url is likely to be appeared as `https://monitoring-webhook.dev.spaceone.dev/monitoring/v1/webhook/{string}/{string}/events	`

<br>

### Step 2. Set up a prometheus alertmanager configuration. 
This guide assumes you have a basic understanding of the `Prometheus` resource. <br>
For information on configuring `Alertmanager`, see the Prometheus [Alerting Configuration Document](https://prometheus.io/docs/alerting/latest/configuration/). <br>

If your prometheus is provided by prometheus-operator helm chart, Alertmanager can be configured by [here](https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/user-guides/alerting.md) 


The configured Alertmanager is going to be used to route and send grouped notificaitons via `SpaceONE Prometheus Webhook`.


### Step 3. Trigger prometheus
Trigger prometheus alertmanager and check the alerts at the SpaceONE console.
