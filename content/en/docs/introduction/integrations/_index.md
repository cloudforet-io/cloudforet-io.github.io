---
title: "Integrations"
linkTitle: "Integrations"
weight: 3
date: 2022-01-07
description: >
    Supported Technologies
---

## Overview
Cloudforet supports the Plugin Interfaces, which supports to extend Core Services.
The supported plugins are below

## Inventory
_**Inventory.Collector**_ supports Collection of Assets.
Integrate all your cloud service accounts and scan all existing resources. All cloud resources are collected through 
Cloudforet collector plugins based on the Plugin Interfaces.

### [AWS Cloud Service Plugin](https://github.com/cloudforet-io/plugin-aws-ec2-inven-collector)

### [MS Azure Cloud Service Plugin](https://github.com/cloudforet-io/plugin-azure-cloud-service-inven-collector)

### [Google Cloud Service Plugin](https://github.com/spaceone-dev/plugin-google-cloud-service-inven-collector)

## Identity
_**Identity.auth**_ supports user management.
Choonho various authentication options. Cloudforet supports from local ID / password to external identity services
including Google OAuth2, Active Directory and Keycloak.

### [Google oAuth Identity Plugin](https://github.com/cloudforet-io/plugin-googleoauth2-identity-auth)
### [KeyCloak Identity Plugin](https://github.com/cloudforet-io/plugin-keycloak-identity-auth)
<!-- {{< cardpane >}}
{{< card header="**Google oAuth2**" title="Google oAuth Identity Plugin" subtitle="" footer="[See Google Auth Plugin]()" >}}
![Google oAuth](/docs/references/supported_technologies/supported_technologies_img/google_img.png)
{{< /card >}}
{{< card header="**KeyCloak**" title="KeyCloak Identity Plugin" subtitle="" footer="[See KeyCloak Auth Plugin]()" >}}
![Keycloak](/docs/references/supported_technologies/supported_technologies_img/keycloak_img.png)
{{< /card >}}
{{< /cardpane >}} -->

## Monitoring

### DataSource

### [AWS CloudWatch DataSource Plugin](https://github.com/cloudforet-io/plugin-aws-cloudwatch-mon-datasource)
### [Azure Monitor DataSource Plugin](https://github.com/cloudforet-io/plugin-azure-monitor-mon-datasource)
### [Google Cloud Monitor DataSource Plugin](https://github.com/cloudforet-io/plugin-google-stackdriver-mon-datasource)
<br>
<!-- {{< cardpane >}}
{{< card header="**AWS CloudWatch**" title="AWS CloudWatch DataSource Plugin" subtitle="" footer="[See AWS CloudWatch DataSource Plugin]()" >}}
![AWS CloudWatch DataSource](/docs/references/supported_technologies/supported_technologies_img/aws_cloudwatch_img.png)
{{< /card >}}
{{< card header="**Azure Monitor**" title="Azure Monitor DataSource Plugin" subtitle="" footer="[See Azure Monitor DataSource Plugin]()" >}}
![Azure Monitor DataSource](/docs/references/supported_technologies/supported_technologies_img/azure_monitor_img.png)
{{< /card >}}
{{< card header="**Google StackDriver**" title="Google Cloud Monitor DataSource Plugin" subtitle="" footer="[See Google Monitor DataSource Plugin]()" >}}
![Google Cloud Monitor DataSource](/docs/references/supported_technologies/supported_technologies_img/google_cloud_monitor_img.jpg)
{{< /card >}}
{{< /cardpane >}} -->

### Webhook

### [AWS Simple Notification Webhook Plugin](https://github.com/cloudforet-io/plugin-aws-sns-mon-webhook)
### [Zabbix Webhook Plugin](https://github.com/cloudforet-io/plugin-zabbix-mon-webhook)
### [Grafana Webhook Plugin](https://github.com/cloudforet-io/plugin-grafana-mon-webhook)
<br>
<!-- {{< cardpane >}}
{{< card header="**AWS SNS**" title="AWS Simple Notification Webhook Plugin" subtitle="" footer="[See AWS Simple Monitoring Webhook Plugin]()" >}}
![AWS Simple Notification Webhook Plugin](/docs/references/supported_technologies/supported_technologies_img/aws_sns_img.png)
{{< /card >}}
{{< card header="**Zabbix**" title="Zabbix Webhook Plugin" subtitle="" footer="[See Zabbix Monitoring Webhook Plugin]()" >}}
![Zabbix Webhook Plugin](/docs/references/supported_technologies/supported_technologies_img/zabbix_img.png)
{{< /card >}}
{{< card header="**Grafana**" title="Grafana Webhook Plugin" subtitle="" footer="[See Grafana Monitoring Webhook Plugin]()" >}}
![Grafana Webhook Plugin](/docs/references/supported_technologies/supported_technologies_img/grafana_img.png)
{{< /card >}}
{{< /cardpane >}} -->

### Notification

### [API Direct Connect Protocol Plugin](https://github.com/cloudforet-io/plugin-api-direct-mon-webhook)
### [AWS SNS Protocol Plugin](https://github.com/cloudforet-io/plugin-aws-sns-mon-webhook)
### [Slack Protocol Plugin](https://github.com/cloudforet-io/plugin-slack-noti-protocol)
### [Telegram Protocol Plugin](https://github.com/cloudforet-io/plugin-telegram-noti-protocol)
### [Email Protocol Plugin](https://github.com/cloudforet-io/plugin-email-noti-protocol)
<!-- {{< cardpane >}}
{{< card header="AWS Direct Connect" title="AWS Direct Connect Protocol Plugin" subtitle="" footer="[See AWS Direct Connect Protocol Plugin]()" >}}
![AWS Direct Connect Protocol Plugin](/docs/references/supported_technologies/supported_technologies_img/aws_direct_connect_img.png)
{{< /card >}}
{{< card header="AWS SES" title="AWS SES Protocol Plugin" subtitle="" footer="[See AWS SES Protocol Plugin]()" >}}
![AWS SES Protocol Plugin](/docs/references/supported_technologies/supported_technologies_img/aws_simple_email_service_img.png)
{{< /card >}}
{{< card header="AWS SNS" title="AWS SNS Protocol Plugin" subtitle="" footer="[See AWS SNS Protocol Plugin]()" >}}
![AWS SNS Protocol Plugin](/docs/references/supported_technologies/supported_technologies_img/aws_simple_notification_service_img.png)
{{< /card >}}
{{< card header="Slack" title="Slack Protocol Plugin" subtitle="" footer="[See Slack Protocol Plugin]()" >}}
![Slack Protocol Plugin](/docs/references/supported_technologies/supported_technologies_img/slack_img.png)
{{< /card >}}
{{< card header="Telegram" title="Telegram Protocol Plugin" subtitle="" footer="[See Telegram Protocol Plugin]()" >}}
![Telegram Protocol Plugin](/docs/references/supported_technologies/supported_technologies_img/telegram_img.png)
{{< /card >}}
{{< /cardpane >}} -->

## Billing

### [Megazone Hyperbilling Billing Service](https://github.com/cloudforet-io/plugin-aws-hyperbilling-bill-datasource)
<!-- {{< cardpane >}}
{{< card header="**Megazone Hyperbilling**" title="Megazone Hyperbilling Billing Service" subtitle="" footer="[See Hyperbilling DataSource Plugin]()" >}}
![Hyperbilling DataSource Plugin](/docs/references/supported_technologies/supported_technologies_img/megazone_img.png)
{{< /card >}}
{{< /cardpane >}} -->

