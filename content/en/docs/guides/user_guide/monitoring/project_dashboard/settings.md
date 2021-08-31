---
title: "Settings"
linkTitle: "Settings"
weight: 4
date: 2021-08-24
description: >
    Setting up detailed policy for managing alerts
---

## Overview
각 Project에 수신되는 Alert을 관리하기 위한 상세 옵션을 관리 합니다. 

<br>

![Settings main](/docs/guides/user_guide/monitoring/project_dashboard/settings_img/settings_img_01.png)


## Notification Policy
알람의 민감도를 설정 합니다. _**All Notifications**_ 인 경우 수신된 모든 Alert에 대해 알람을 발생합니다. 
_**High Urgency Notifications**_ 인 경우 _**High**_ 상태인 Alert에 대해서만 알람을 발생합니다.

<br>

![Settings Set Notification Policy](/docs/guides/user_guide/monitoring/project_dashboard/settings_img/settings_img_02.png)


## Auto Recovery
담당자가 매번 수동으로 Alert의 상태를 관리해 주지 않아도, 외부의 Monitoring System 으로부터 _**정상**_ Alert를 수신한 경우 
자동으로 _**Resolved**_ 상태로 전환 됩니다. 

<br>

![Settings Set Auto Recovery](/docs/guides/user_guide/monitoring/project_dashboard/settings_img/settings_img_03.png)


## Event Rule
수신된 Alert이 조건을 만족할 경우, 자동으로 지정된 동작을 수행할 수 있도록 정의 합니다.
Alert Event를 수작업으로 관리해야 하는 어려움을 줄여줄 수 있습니다. 

<br>

![Settings Event Rule](/docs/guides/user_guide/monitoring/project_dashboard/settings_img/settings_img_04.png)

정의할 수 있는 항목은 아래와 같습니다. 

|항목|설명|
|:--:|:--:|
|No Notifications|Notification에서 제외 합니다. 해당 Alert 발생시 Notification이 발생하지 않습니다.|
|Project Routing|다른 Project Alert로 등록 합니다. 현재의 Project에는 등록되지 않습니다.|
|Project Dependency|자동으로 _**Project Dependency**_ 설정을 추가 합니다. Alert 수신시 지정된 Project에도 전달됩니다.|
|Urgency|자동으로 Urgency가 지정 됩니다. _**low**_, _**high**_ 를 지정할 수 있습니다.|
|Additional Responder|자동으로 _**Additional Responder**_ 에 지정된 사용자가 추가 됩니다.|
|Additional Information|입력된 Alert Event에 추가적인 정보를 입력 합니다. |


### Add Event Rule
Event Rule 편집 화면에서 화면 하단의 _**`Add Event Rule`**_ 버튼을 클릭하여 Rule을 추가할 수 있습니다. 

<br>

![Settings Event Rule Add](/docs/guides/user_guide/monitoring/project_dashboard/settings_img/settings_img_05.png)

### Edit Event Rule
Event Rule 편집 화면에서 각 Event Rule 우측의 _**`Edit`**_ 버튼을 클릭하여 입력된 Rule을 변경할 수 있습니다.

### Delete Event Rule
Event Rule 편집 화면에서 각 Event Rule 우측의 _**`Delete`**_ 버튼을 클릭하여 입력된 Rule을 삭제할 수 있습니다.



## Escalation Policy
각 Project 별로 Notification 발생에 대한 세부 정책을 설정할 수 있습니다.

<br>

정책의 각 항목별 상세 설명은 [Escalation Policy Admin Guide](/docs/guides/admin_guide/monitoring/alert_manager/escalation-policy/#create-escalation-policy) 를 참고 해주세요.
Escalation Policy의 _**Name**_ 의 링크를 클릭 했을 경우, 대상 _**Escalation Policy**_ 관리 메인 화면으로 이동 합니다. 
 
### Update Existing Policy
_**Update**_ 버튼을 클릭하여 현재 지정된 Escalation Policy를 편리하게 편집할 수 있습니다.
_**`Monitoring > Alert Manager > Escalation Policy`**_ 내에서도 동일하게 변경이 가능합니다.

<br>

![Escalation Policy Update](/docs/guides/user_guide/monitoring/project_dashboard/settings_img/settings_img_06.png)

### Change Existing Policy
Project에 연결된 Escalation Policy를 변경할 수 있습니다. 
 
<br>

![Escalation Policy Change](/docs/guides/user_guide/monitoring/project_dashboard/settings_img/settings_img_07.png)

_**`Create New Policy`**_ 버튼을 클릭하여, 신규 Policy를 생성후 즉시 Project에 연결할 수도 있습니다.

<br>

![Escalation Policy Create](/docs/guides/user_guide/monitoring/project_dashboard/settings_img/settings_img_08.png)


{{% alert title="Escalation Policy 생성" color="info" %}}
새로운 Policy 생성에 대한 상세한 안내는 [Creating New Escalation Policy](/docs/guides/admin_guide/monitoring/alert_manager/escalation-policy/#create-escalation-policy)를 참고 해주세요.
{{% /alert %}}