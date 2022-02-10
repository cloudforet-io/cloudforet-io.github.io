---
title: "Plugin Register"
linkTitle: "Plugin Register"
weight: 2
date: 2021-08-04
description: Plugin Register

---

If plugin development is completed, you need to prepare plugin distribution.
Since all plugins of SpaceONE are distributed as containers, the plugin code that has been developed must be built as an image for container distribution.
Container build is done after docker build using Dockerfile,
The resulting Image is uploaded to an image repository such as Docker hub.
At this time, the image storage is uploaded to the storage managed by the Repository service, which is a microservice of SpaceONE.

<br>

![](/docs/developers/plugins/developer_guide/developer_guide_img/plugin_container_build.png)


If you have uploaded an image to the repository, you need to register the image in the Repository service among Microservices.
Registration API uses Repository.plugin.register. ([SpaceONE API - (Repository) Plugin.Register](https://spaceone-dev.gitbook.io/spaceone-apis/repository/v1/plugin#register))

<br>

![](/docs/developers/plugins/developer_guide/developer_guide_img/repository_plugin_register.png)


The example below is the parameter content delivered when registering the Notification Protocol Plugin.
The image value contains the address of the previously built image.
~~~yaml
name: Slack Notification Protocol
service_type: notification.Protocol
image: pyengine/plugin-slack-notification-protocol_settings
capability:
  supported_schema:
  - slack_webhook
  data_type: SECRET
tags:
  description: Slack
  "spaceone:plugin_name": Slack
  icon: 'https://spaceone-custom-assets.s3.ap-northeast-2.amazonaws.com/console-assets/icons/slack.svg'
provider: slack
template: {}
~~~

In the case of image registration, directly use gRPC API or use spacectl because it is not yet supported in Web Console.
After creating the yaml file as above, you can register the image with the spacectl command as shown below.

~~~bash
> spacectl exec register repository.Plugin -f plugin_slack_notification_protocol.yml
~~~

When the image is registered in the Repository, you can check it as follows.

~~~bash
> spacectl list repository.Plugin -p repository_id=<REPOSITORY_ID>  -c plugin_id,name
plugin_id                              | name
----------------------------------------+------------------------------------------
 plugin-aws-sns-monitoring-webhook      | AWS SNS Webhook
 plugin-amorepacific-monitoring-webhook | Amore Pacific Webhook
 plugin-email-notification-protocol_settings     | Email Notification Protocol
 plugin-grafana-monitoring-webhook      | Grafana Webhook
 plugin-keycloak-oidc                   | Keycloak OIDC Auth Plugin
 plugin-sms-notification-protocol_settings       | SMS Notification Protocol
 plugin-voicecall-notification-protocol_settings | Voicecall Notification Protocol
 plugin-slack-notification-protocol_settings     | Slack Notification Protocol
 plugin-telegram-notification-protocol_settings  | Telegram Notification Protocol
 
 Count: 9 / 9
~~~


Detailed usage of spacectl can be found on this page.
[Spacectl CLI Tool](/docs/guides/advanced/spaceone_cli/) 
