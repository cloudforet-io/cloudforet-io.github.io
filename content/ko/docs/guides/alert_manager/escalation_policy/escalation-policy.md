---
title: "Escalation Policy"
linkTitle: "Escalation Policy"
weight: 4
date: 2021-08-10
description: >
    모니터링 서비스의 Escalation Policy를 관리 합니다. 
---


# Overview  

수신된 Alert을 프로젝트의 구성원들에게 효과적으로 전달하기 위해, Escalation Policy를 생성,변경,삭제 합니다.
Escalation Policy는 발생된 Alert을 다양한 매체를 통 알람 발생시 어떠한 방식으로 전달할 것인가를 상세하게 정의 합니다.
![Escalation Policy Main](/ko/docs/guides/alert_manager/escalation_policy/escalation_policy_img/escalation_policy_admin_img_01.png)

# Create Escalation Policy
화면 내 _**Create**_ 버튼을 통해 Policy를 생성할 수 있습니다.
![Escalation Policy Create](/ko/docs/guides/alert_manager/escalation_policy/escalation_policy_img/escalation_policy_admin_img_02.png)

설정 가능한 각 정책에 대한 설명은 아래와 같습니다.

| 정책 | 설명 |
| :--- | :--- |
| Escalation Rules | 전체 Level을 정의 합니다. LV1 ~ LV5 까지 추가 가능합니다. |
| Repeat Time | Alert 알림을 몇회 반복할 것인지 정의 합니다. 최대 9회까지 반복 가능 합니다. |
| Finish Condition | 발생된 알람이 중지되는 조건을 정의 합니다. |
| Scope | Escalation Policy를 사용할 수 있는 범위를 나타냅니다. Global인 경우 도메인내 모든 프로젝트에서 사용 가능하고, Project인 경우 지정된 Project내에서만 사용 가능합니다. |
| Project | Scope이 Project인 경우 대상이 되는 Project를 나타냅니다.  |

{{% alert title="Info" %}}
상위 Level로 Alert이 Escalation 되기 위한 Interval을 충분히 설정하는 것이 좋습니다. (Monitoring Service 내에서는 최소 1분 간격까지 설정 가능)
{{% /alert %}}

# Update Escalation Policy
_**Alert 선택**_ > _**Action**_ > _**Update**_ 를 통해 정책을 변경할 수 있습니다.
![Escalation Policy Update](/ko/docs/guides/alert_manager/escalation_policy/escalation_policy_img/escalation_policy_admin_img_03.png)

# Delete Escalation Policy
_**Alert 선택**_ > _**Action**_ > _**Update**_ 를 통해 정책을 변경할 수 있습니다.
![Escalation Policy Delete](/ko/docs/guides/alert_manager/escalation_policy/escalation_policy_img/escalation_policy_admin_img_04.png)

{{% alert title="Info" %}}
Default로 설정된 정책, 사용중인 Policy는 삭제할 수 없습니다.
{{% /alert %}}

# Search Escalation Policy
검색창을 통해 생성된 Escalation Policy를 검색할 수 있습니다.
![Escalation Policy Search](/ko/docs/guides/alert_manager/escalation_policy/escalation_policy_img/escalation_policy_admin_img_05.png)

# Set As Default

Default Policy를 정의할 수 있습니다. Alert 수신 설정 하는 모든 메뉴에서 기본 값으로 설정되게 됩니다.

![Escalation Policy Default](/ko/docs/guides/alert_manager/escalation_policy/escalation_policy_img/escalation_policy_admin_img_06.png)

{{% alert title="Info" %}}
_**Global Scope**_ 으로 생성되어야 설정 가능합니다. 
{{% /alert %}}



