---
title: "Webhook"
linkTitle: "Webhook"
weight: 3
date: 2021-08-24
description: >
    Install & configure monitoring webhook plugin to receive alert
---

## Overview
SpaceONE의 Monitoring Service는 외부 시스템으로부터 Alert 수신시 Webhook 방식을 사용하고, 이를 지원하는 다양한 플러그인들을 가지고 있습니다.
다양한 플러그인들을 활용하여 Webhook URL을 생성하여 알람을 수신 받을 수 있습니다.
![webhook main](/docs/guides_v1/alert_manager/project_dashboard/webhook_img/webhook_img_01.png)
Webhook Plugin 리스트 조회시 각 항목에 대한 설명은 아래와 같습니다.
|항목|설명|
|:--:|:--:|
|Name|Webhook의 수신 설정명|
|State|Webhook 가능 여부 _**Enabled**_ 인 경우, _**Webhook URL**_ 로부터 Alert이 수신 가능, _**Disabled**_ 인경우 수신되는 Alert이 무시됨|
|Type|Monitoring Webhook Plugin|
|Version|Monitoring Webhook Plugin의 Version|
|Webhook URL|Alert 수신을 위한 Endpoint, Webhook 추가시 자동으로 unique한 url 생성|

{{% alert title="Info" %}}
Webhook URL을 외부의 모니터링 시스템과 연동하기 위한 가이드는
[Monitoring System 연결가이드](/docs/guides_v1/alert_manager/webhook_settings/) 를 참조 해주세요.
{{% /alert %}}

## Managing Webhook Plugin
_**Alert**_ 를 수신받기 위한 다양한 종류의 _**Monitoring Webhook Plugin**_ 을 추가,변경,삭제할 수 있습니다.

## Add webhook plugin
MarketPlace 로부터 다양한 타입의 _**Monitoring Webhook Plugin**_ 을 선택하여 설치합니다.
![webhook add](/docs/guides_v1/alert_manager/project_dashboard/webhook_img/webhook_img_02.png)

## Update webhook plugin
Webhook의 이름과 사용되는 플러그인 버전을 변경할 수 있습니다.
![webhook update](/docs/guides_v1/alert_manager/project_dashboard/webhook_img/webhook_img_03.png)

## Disable webhook plugin
Webhook으로부터 수신되는 Alert이 무시 되도록 설정합니다.
![webhook disable](/docs/guides_v1/alert_manager/project_dashboard/webhook_img/webhook_img_04.png)

## Delete webhook plugin
Webhook을 삭제합니다.
![webhook delete](/docs/guides_v1/alert_manager/project_dashboard/webhook_img/webhook_img_05.png)



