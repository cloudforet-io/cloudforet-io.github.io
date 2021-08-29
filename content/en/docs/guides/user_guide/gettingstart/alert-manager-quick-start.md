---
title: "Alert Manager Quick Start"
linkTitle: "Alert Manager Quick Start"
weight: 3
url_dash_board: ""
date: 2021-08-10
description: >
    Quick guide for user to set up alert manager more easily.
---

## How to Set up

Alert Manager를 사용하기 위해서는 크게 두가지 설정이 필요합니다. 

첫번째는, 외부의 다양한 모니터링 시스템들이 전달하는 Event를 SpaceONE Alert Manager가 수신 받기 위한 설정이고

두번째는, Alert이 임계치를 넘었을 경우 발생되는 Alarm Message를 수신받기 위한 Notification 설정 입니다.

{{% alert title="About Notification" color="info" %}}
SpaceONE Notification 서비스는 Alarm Message를 다양한 매체를 통해 수신자들에게 전송합니다. 자세한 설명은 [Notificaiton 소개](/docs/guides/user_guide/notification/) 을 참고 하세요
{{% /alert %}}

이 페이지에서는 Alert Manager를 기본 설정하기 위한 방법에 대해 살펴 보도록 하겠습니다. 전체 순서는 아래와 같습니다.

[사전 준비](/docs/guides/user_guide/gettingstart/alert-manager-quick-start/#Prerequisites)

[Event 수신 설정]()

[Alarm 수신 설정]()

## 사전 준비

Alert Manager를 사용하기 위해서는 사전에 아래와 같은 준비가 필요 합니다. 

### Event를 수신 받을 Project를 선택 
Alert Manager는 지정된 _**Endpoint**_ 로 수신되는 Event를 Project에 발생한 _**Alert**_ 로 간주하여 Alert List로 등록 합니다.
그러므로, 사전에 Event를 수신 받고자 하는 Project를 지정해 두어야 합니다.  
또한, Project 내에 Alert로 인한 Alarm을 수신받기 위한 사용자들도 _**Member**_ 로서 추가 되어 있어야 합니다. 

### Event를 전달하기 위한 Monitoring Tool을 선택
Event를 감지하여 Alert Manager에게 전달하기 위한 Monitoring Tool이 필요합니다. 현재 Alert Manager에 Plugin으로서 등록된 Webhook Plugin List는 링크를 참고해주세요.
[Webhook Plugin List 보러가기](/docs/references/supported_technologies/)

### Notification 을 수신받기 위한 매체를 선택


### Alarm 을 수신 받을 대상과 순서를 정의




## Event 수신 설정
각각의 Project 별 Notification 수신 설정


## Alert 수신 설정



## Alert Test





