---
title: "Plugin Deployment"
linkTitle: "Plugin Deployment"
weight: 3
date: 2021-08-04
description: 

---
등록된 Plugin 을 실제로 배포해서 사용하려면, Plugin 이미지를 바탕으로 Kubernetes 환경에 Pod 를 배포해야 한다.  
이때, Plugin 배포는 해당 plugin 을 사용하고자 하는 서비스에서 자동으로 수행하게 된다.
<br><br>
예를 들어, Notification 의 경우 발생된 Alert 을 사용자에게 전달하기 위해 Protocol 이라는 객체를 사용하여 전달하게 되는데  
이때, Notification 의 Protocol.create ([Protocol.create](https://spaceone-dev.gitbook.io/spaceone-apis/notification/v1/protocol#create)) 명령을 수행시, Notification 이 자동으로 Plugin 을 배포하게 된다.
<br><br>

아래 예제는 Notification 에 Slack 으로 알람을 전송하기 위한 Slack Protocol 생성에 대한 Protocol.create 명령 파라미터 예시이다.

~~~yaml
---
name: Slack Protocol
plugin_info:
  plugin_id: plugin-slack-notification-protocol_settings
  version: "1.0"
  options: {}
  schema: slack_webhook
tags:
  description: Slack Protocol
~~~

plugin_id 에는 Repository 에 등록한 plugin 의 ID 값을 넣고,  
version 에는 Dockerhub 와 같은 이미지 저장소에 실제 이미지 업로드시 기입했던 이미지 tag 정보를 넣어준다.  
만약 이미지 저장소에 여러 tag 를 가진 경우, 지정된 tag version 의 이미지로 plugin 배포를 수행한다.
<br><br>
위의 경우, version 을 "1.0" 으로 지정하였기 때문에
아래 tag 정보 중 "1.0" tag 이미지로 배포되기 된다. 
<br><br>

![](/docs/development/plugins/developer_guide/developer_guide_img/dockerhub_slack_protocol.png)

<br><br>
해당 API 의 경우, Kubernetes 환경에 Service 와 Pod 를 생성해 배포하는 단계를 거치기 때문에 응답까지 약간의 시간이 걸린다.  
실제 Kubernetes 환경에서 Pod 배포를 확인해 보면 아래와 같이 확인 가능하다.

~~~bash
> k get po
NAME                                                              READY   STATUS    RESTARTS   AGE
plugin-slack-notification-protocol_settings-zljrhvigwujiqfmn-bf6kgtqz   1/1     Running   0          1m
~~~







