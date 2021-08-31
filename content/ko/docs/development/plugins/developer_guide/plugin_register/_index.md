---
title: "Plugin Register"
linkTitle: "Plugin Register"
weight: 2
date: 2021-08-04
description: 

---

Plugin 개발이 완료되었다면, Plugin 배포를 준비해야 한다.  
SpaceONE 의 모든 Plugin 은 Container 로 배포되기 때문에, 개발이 완료된 Plugin 코드는 Container 배포를 위한 Image 로 빌드해야 한다.  
Container 빌드는 Dockerfile 을 활용해 docker build 를 수행 한 후,  
결과물인 Image 는 Docker hub 와 같은 이미지 저장소에 업로드하도록 한다.  
이때, 이미지 저장소는 SpaceONE 의 Microservice 인 Repository 서비스에서 관리하는 저장소에 업로드하도록 한다. 

<br/>
![](/docs/development/plugins/developer_guide/developer_guide_img/plugin_container_build.png)

<br/>
이미지를 저장소에 업로드 하였다면, Microservice 중 Repository 서비스에 해당 이미지를 등록해야 한다.   
등록 API 는 Repository.plugin.register 를 사용하도록 한다. ([SpaceONE API - (Repository) Plugin.Register](https://spaceone-dev.gitbook.io/spaceone-apis/repository/v1/plugin#register))

![](/docs/development/plugins/developer_guide/developer_guide_img/repository_plugin_register.png)


아래 예제는 Notification 의 Protocol Plugin 등록시 전달된 Parameter 내용이다. 
image 값에는 이전에 빌드된 이미지 주소를 넣어준다. 
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

이미지 등록의 경우, 아직 Web Console 에서 지원되지 않기 때문에 직접 gRPC API 를 사용하거나 spacectl 을 사용하도록 한다.  
위와 같은 yaml 형태의 파일을 생성 후, 아래와 같이 spacectl 명령어로 이미지 등록이 가능하다. 

~~~bash
> spacectl exec register repository.Plugin -f plugin_slack_notification_protocol.yml
~~~

이미지가 Repository 에 등록 완료되면 아래와 같이 확인 가능하다.

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


spacectl 의 자세한 사용 방법은 해당 페이지에서 확인 가능하다.  
[Spacectl CLI Tool](/docs/guides/spaceone_cli) 
