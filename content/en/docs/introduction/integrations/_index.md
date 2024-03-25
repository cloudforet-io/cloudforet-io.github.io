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
The supported plugins are listed in

### Managed Plugins (Compatible with Cloudforet Version 1.x)

Managed Plugins are pre-registed plugins that are compatible with Cloudforet Version 1.x.

| name                                      | plugin_id                                | service_type             | provider |
|-------------------------------------------| ----------------------------------------- | ----------------------- | -------------- |
| API Direct                                | plugin-api-direct-mon-webhook            | monitoring.Webhook       | |
| AWS Cloud Service Collector               | plugin-aws-cloud-service-inven-collector | inventory.Collector      | aws |
| AWS CloudTail Log DataSource              | plugin-aws-cloudtrail-mon-datasource     | monitoring.DataSource    | aws |
| AWS CloudWatch Metric DataSource          | plugin-aws-cloudwatch-mon-datasource     | monitoring.DataSource    | aws |
| AWS Cost Explorer Data Source             | plugin-aws-cost-explorer-cost-datasource | cost_analysis.DataSource | aws |
| AWS EC2 Collector                         | plugin-aws-ec2-inven-collector           | inventory.Collector      | aws |
| AWS Personal Health Dashboard Collector   | plugin-aws-phd-inven-collector           | inventory.Collector      | aws |
| AWS SNS                                   | plugin-aws-sns-monitoring-webhook        | monitoring.Webhook       | aws |
| AWS Trusted Advisor Collector             | plugin-aws-ta-inven-collector            | inventory.Collector      | aws |
| Azure Activity Log DataSource             | plugin-azure-activity-log-mon-datasource | monitoring.DataSource    | azure |
| Azure Cost Management Data Source         | plugin-azure-cost-mgmt-cost-datasource   | cost_analysis.DataSource | azure |
| Azure Collector                           | plugin-azure-inven-collector             | inventory.Collector      | azure |
| Azure Monitoring Metric DataSource        | plugin-azure-monitor-mon-datasource      | monitoring.DataSource    | azure |
| Email Notification Protocol               | plugin-email-noti-protocol               | notification.Protocol    | email |
| Google Cloud Collector                    | plugin-google-cloud-inven-collector      | inventory.Collector      | google_cloud |
| Google Cloud Log DataSource               | plugin-google-cloud-log-mon-datasource   | monitoring.DataSource    | google_cloud |
| Google Cloud Monitoring                   | plugin-google-monitoring-mon-webhook     | monitoring.Webhook       | google_cloud |
| Google Cloud Monitoring Metric DataSource | plugin-google-stackdriver-mon-datasource | monitoring.DataSource    | google_cloud |
| Grafana                                   | plugin-grafana-mon-webhook               | monitoring.Webhook       | |
| Keycloak OIDC                             | plugin-keycloak-identity-auth            | identity.Domain          | |
| MS Teams Notification Protocol            | plugin-ms-teams-noti-protocol            | notification.Protocol    | microsoft |
| Prometheus                                | plugin-prometheus-mon-webhook            | monitoring.Webhook       | |
| Slack Notification Protocol               | plugin-slack-noti-protocol               | notification.Protocol    | slack |
|  Telegram Notification Protocol           | plugin-telegram-noti-protocol            | notification.Protocol    | telegram |

### Additional Plugins

There are more plugins in the 
[Github Plugin Project](https://github.com/orgs/cloudforet-io/projects/5)
