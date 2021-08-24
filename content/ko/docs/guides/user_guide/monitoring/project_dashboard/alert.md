---
title: "Alert"
linkTitle: "Alert"
weight: 1
date: 2021-08-10
description: >
    Managing alert message for each project
---

# Overview
Project에 수신된 모든 Alert를 관리할 수 있습니다.

![Alert list_main]()


# List Alert
Alert 리스트를 다양한 필터를 사용하여 조회할 수 있습니다.


## Assigned to me
기본적으로 프로젝트에 수신된 모든 Alert List를 조회할 수 있습니다.  
담당자가 _**나**_ 로 직접 지정된 경우, 해당 Alert만 조회 할 수 있습니다.

![Alert_assign_to_me]()


## Using Filters
Alert에 다양한 필터를 적용하여, 효율적인 조회가 가능 합니다.

설정가능한 Filter는 _**`State`**_ _**`Urgency`**_ 두 종류 입니다.

### Alert State

![Alert State]()

|State|설명|
|:--:|:--:|
|Open||
|Acknowledged|등록된 Alert에 담당자가 할당되어 처리중인 상태|
|Triggered|Alert이 최초 등록된 상태|
|Resolved|Alert 등록된 사항이 처리 완료된 상태|
|Error|Alert이 수신 되었으나, Param 오류 등으로 정상적으로 등록되지 않은 상태|
|All|모든 Alert 상태|

### Alert Urgency
Urgency는 _**High**_, _**Low**_ 로 구분 됩니다.

![Alert Urgency]()

## Export
조회 가능한 모든 Alert List를 _**`Excel Export`**_ 가능합니다.

![Alert Export]()

# Alert Details
수신된 Alert의 상세 상태를 조회하고 처리 이력을 관리할 수 있습니다.

![Alert Details]()

각 상세 항목에 대한 설명은 아래와 같습니다.
|상세항목|설명|
|:--:|:--:|
|State|Alert의 진행 상황. _**Triggered**_,_**Acknowledged**_,_**Resolved**_ 로 표시됩니다.|
|Urgency|Alert의 긴급도. _**High**_, _**Low**_|
|Assigned to|Alert의 담당자.|
|Duration|Alert이 지속된 시간.|
|Description|Alert의 기타설명.|
|Rule|Alert 발생 조건.|
|Severity|Alert의 심각도, Alert이 발생된 Data Source에서 측정된 기준 입니다.|
|Escalation Policy|적용된 Escalation Policy|
|Project|Alert이 발생된 Project|
|Triggered By|Alert를 전송한 모니터링 시스템|
|Resource Name|Alert 발생 대상|


## Changing Details
Alert의 담당자는 할당받은 Alert의 상태를 변경하고, 처리 이력을 정리할 수 있습니다.

### Changing Urgency
Alert의 시급도를 변경 합니다.

![Alert Changing Urgency]()

### Assign Member
Alert 처리 담당자를 지정합니다.

![Alert Assigning Member]()

### Changing Project
Alert이 소속된 Project를 변경 합니다.

![Alert Changing Project]()

### Status Update
Alert 처리 단계별 진행상황 혹은 변화된 상태가 있는 경우 상세히 기록합니다.

![Alert Status Update]()

## Pushed Event
같은 Event가 중복으로 수신된 경우, Pushed Event에서 시간대별 상세 수신 이력을 확인할 수 있습니다.

![Alert Pushed Event]()

### Details
수신된 Event의 원문을 확인할 수 있습니다.

![Alert Event Details]()

## Responder

Alert을 수신받는 확인하고, 추가 대상자가 있는 경우 등록 합니다.
기본적으로 Project에 연결된 Escalation Policy에 정의된 Subscriber에게 전달 됩니다.

![Alert Responder]()

### Additional Responder
기본 등록된 Escalation Policy의 각 Level별 사용자 이외에 추가 사용자에게 Alert 전파가 필요할 경우 등록할 수 있습니다.

![Alert Additional Responder]()

## Note
Alert에 대해 구성원들이 Comment를 남겨 처리 중 문의사항과 이에 대한 답변을 등록할 수 있도록 합니다.

![Alert Note]()

## Project Dependency
수신된 Alert이 다른 Project에서도 관리되어야 할 필요가 있을 경우(ex. 장애가 다른 프로젝트에도 연관이 있는 경우)
Project간 Dependency 설정이 가능합니다. 이러한 경우, Project A로 수신된 Alert를 다른 Project에서도 조회 및 처리가 가능합니다.
Escalation Policy적용 되어 타 Project의 Member에도 알람이 전파 됩니다.

![Alert Project Dependency]()


#Processing Alert Message
_**`Alert Detail`**_을 통하지 않고 수신된 Alert의 상태를 간편하게 변경할 수 있습니다.
여러개의 Alert를 복수로 지정하여 한번에 상태 변경도 가능 합니다.

![Alert Status Change]()


##Delete
등록된 Alert를 삭제할 수 있습니다.

##Create Alert Manually
시스템 외부에서 발생된 Alert 이외에 Console에서도 직접 Alert을 발생 시킬 수 있습니다.
관리자가 자체 기준에 의해 Alert를 등록하여 처리할 수 있도록 합니다.

![Alert Manual Create]()



