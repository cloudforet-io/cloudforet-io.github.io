---
title: "Monitoring"
linkTitle: "Monitoring"
weight: 6
url_dash_board: ""
date: 2021-08-10
description: >
    SpaceONE Monitoring Service
---

## About Alert Manager

SpaceONE의 Alert Manager는 다양한 모니터링 시스템에서 발생하는 다양한 패턴의 Event(혹은 Incident) 를 통합 관리할 수 있는 Tool 입니다.

{{< imgproc monitoring_main_01.png Fit "1000x800">}}
{{< /imgproc >}}


_**Monitoring Webhook Plugin**_ 에 의해 체계적으로 Filter된 Event message를 _**Alert**_ 라고 합니다.
Alert Manager를 통해 _**Alert**_ 이 발생하여 종료되기까지의 모든 과정을 체계적으로 관리할 수 있습니다.     

## How It Works


## 용어 정의
Alert Manager에서 주로 사용하는 용어를 정리 합니다.

|용어|설명|
|:--:|:--:|
|Event/Incident|외부의 모니터링 Tool(AWS SNS, Zabbix, DataDog 등..)에서 발생되는 다양한 패턴의 메시지 입니다. 인프라 및 어플리케이션에서 감지된 다양한 정보들을 포함 합니다. |
|Alert|SpaceONE의 다양한 Monitoring Webhook Plugin에 의해 필터링 되어 체계적으로 정리된 Event Message 입니다.|
|Alarm|SpaceONE의 Notification 서비스를 통해 발송되는 다양한 안내 메시지 입니다. 상세한 설명은 [Notification 서비스 소개](/docs/guides/user_guide/notification/) 를 참고해주세요.|
