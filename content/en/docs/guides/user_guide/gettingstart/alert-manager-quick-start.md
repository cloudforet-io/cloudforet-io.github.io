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

SpaceONE Alert Manager는 다양한 모니터링 시스템에서 발생하는 Event를 체계적으로 통합관리할 수 있는 Tool 입니다. 자세한 설명은 링크를 참고해주세요. 
[Alert Manager 소개](/docs/guides/user_guide/monitoring/)

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

---

## 사전 준비

Alert Manager를 사용하기 위해서는 사전에 아래와 같은 준비가 필요 합니다. 

### Project를 선택 
Event를 수신 받을 Project를 지정해야 합니다. 
Alert Manager는 지정된 _**Endpoint**_ 로 수신되는 Event를 Project의 _**Alert**_ 으로 등록 합니다.
그러므로, 사전에 Event를 수신 받고자 하는 Project를 지정해 두어야 합니다.  
또한, Project 내에 Alert로 인한 Alarm을 수신받기 위한 사용자들도 _**Member**_ 로서 추가 되어 있어야 합니다.

[Project에 사용자 추가하기](/docs/guides/user_guide/project/project_management/#add-member)

### Event를 전달하기 위한 Monitoring Tool을 선택
Event를 감지하여 Alert Manager에게 전달하기 위한 Monitoring Tool이 필요합니다. SpaceONE은 주요 Monitoring Tool을 지원하는 Webhook Plugin을 지원하고 있습니다. 
현재 MarketPlace에 등록된 Monitoring Webhook Plugin List는 링크를 참고해주세요.

[Webhook Plugin List 보러가기](/docs/references/supported_technologies/#webhook)


### Notification 을 수신받기 위한 매체를 선택

Alert이 등록된 후 정해진 규칙에 따라 Alarm 이 발생합니다. 발생된 Alarm은 지정된 Level에 따라 Notification Plugin 을 통해 사용자 채널에 발송됩니다. 
현재 MarketPlace에 등록된 Notification Protocol Plugin List는 링크를 참고해주세요.

[Notification Protocol List 보러가기](/docs/references/supported_technologies/#notification)


---

## Event 수신 설정

### Alert Manager Enable
Alert를 수신하고자 하는 Project를 선택하여 _**`Project Dashboard > Alert`**_ 탭을 클릭 합니다. 

_**Activate Alert**_ 를 클릭하여 Project내의 Alert을 활성화 합니다. 

![Alert Manager Enable](/docs/guides/user_guide/gettingstart/alert_manager_img/alert_manager_img_01.png)

### Configure Webhook Plugin
_**`Project Dashboard > Alert > Webhook`**_ 탭을 클릭 합니다. 

_**Add**_ 버튼을 클릭합니다. 

![Alert Manager Webhook Add](/docs/guides/user_guide/gettingstart/alert_manager_img/alert_manager_img_02.png)

Event를 수신받고자 하는 Monitoring Tool을 선택 하고 _**Name**_ 과 _**Version**_ 을 입력 후, _**Confirm**_ 버튼을 클릭 합니다.  

![Alert Manager Webhook Plugin Select](/docs/guides/user_guide/gettingstart/alert_manager_img/alert_manager_img_03.png)

아래와 같이 _**Webhook List**_ 에 정상적으로 추가 되었다면, Monitoring Tool에서 생성한 Plugin으로 Event를 보낼 수 있도록 설정이 필요합니다.

![Alert Manager Webhook Plugin List](/docs/guides/user_guide/gettingstart/alert_manager_img/alert_manager_img_06.png)

{{% alert title="Webhook Plugin Details" color="info" %}}
각 Tool 별로 설정을 위한 방법은 [Monitoring Tool Webhook Plugin Configuration Guide](/docs/guides/user_guide/monitoring/webhook_settings/) 를 참고해주세요.
{{% /alert %}}



## Alarm 수신 설정

_**Alert**_ 에 대하여 지정된 조건시 다양한 채널을 통해 _**Alarm**_ 을 발생시킬 수 있도록 설정 합니다.


### Notifications Channel 설정

_**`Project Dashboard < Notifications`**_ 로 이동합니다. 

추가 하고자 하는 Channel 을 선택 합니다. 

![Notification Channel Select](/docs/guides/user_guide/gettingstart/alert_manager_img/alert_manager_img_05.png)

각 입력 항목의 내용을 입력 후 _**`Save`**_ 버튼을 클릭 하여 생성을 완료 합니다.
![Notification Channel Save](/docs/guides/user_guide/gettingstart/alert_manager_img/alert_manager_img_07.png)

아래와 같이 추가된 _**Notification Channel**_ 을 확인할 수 있습니다.  
![Notification Channel List](/docs/guides/user_guide/gettingstart/alert_manager_img/alert_manager_img_08.png)


{{% alert title="Notification Plugin Details" color="info" %}}
각 Plugin별 Channel 설정에 대한 상세한 방안은 [Notification Protocol Plugin 설정 가이드](/docs/guides/user_guide/notification/protocol/)를 참고 해주세요.
{{% /alert %}}



### Escalation Policy 설정

_**`Project Dashboard > Alert > Settings`**_ 로 이동합니다. 

_**Escalation Policy**_ 의 _**Change**_ 버튼을 클릭 합니다. 

![Notification Escalation Policy Change](/docs/guides/user_guide/gettingstart/alert_manager_img/alert_manager_img_04.png)

_**Create New Policy**_ 버튼을 클릭 합니다. 

아래와 같이 _**Name**_ , _**Finish Condition**_ , _**Escalation Rules**_ 을 선택한 뒤 _**Confirm**_ 을 클릭 하여 완료 합니다. 

![Notification Escalation Policy Create](/docs/guides/user_guide/gettingstart/alert_manager_img/alert_manager_img_09.png)

적용된 Policy를 확인 합니다. 

![Notification Escalation Policy List](/docs/guides/user_guide/gettingstart/alert_manager_img/alert_manager_img_10.png)

{{% alert title="Escalation Policy Details" color="info" %}}
Escalation Policy의 상세 설명은  [Escalation Policy 상세 설정 가이드](/docs/guides/admin_guide/monitoring/alert_manager/escalation-policy/)를 참고 해주세요.
{{% /alert %}}

## Alert Test







