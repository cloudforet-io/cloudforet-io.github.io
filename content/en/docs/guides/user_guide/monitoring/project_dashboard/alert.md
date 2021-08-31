---
title: "Alert"
linkTitle: "Alert"
weight: 1
date: 2021-08-10
description: >
    Managing alert message for each project
---

## Overview
Project에 수신된 모든 Alert를 관리할 수 있습니다.

![Alert list_main](/docs/guides/user_guide/monitoring/project_dashboard/project_dashboard_img/alert_manager_project_dashboard_img_01.png)

## Alert List
Alert 리스트를 다양한 필터를 사용하여 조회할 수 있습니다.

![Alert List](/docs/guides/user_guide/monitoring/project_dashboard/project_dashboard_img/alert_manager_project_dashboard_img_02.png)

### Assigned to me
기본적으로 프로젝트에 수신된 모든 Alert List를 조회할 수 있습니다.  
담당자가 _**나**_ 로 직접 지정된 경우, 해당 Alert만 조회 할 수 있습니다.

### Using Filters
Alert에 다양한 필터를 적용하여, 효율적인 조회가 가능 합니다.

설정가능한 Filter는 _**`State`**_ _**`Urgency`**_ 두 종류 입니다.

#### Alert State

|State|설명|
|:--:|:--:|
|Open||
|Acknowledged|등록된 Alert에 담당자가 할당되어 처리중인 상태|
|Triggered|Alert이 최초 등록된 상태|
|Resolved|Alert 등록된 사항이 처리 완료된 상태|
|Error|Alert이 수신 되었으나, Param 오류 등으로 정상적으로 등록되지 않은 상태|
|All|모든 Alert 상태|

#### Alert Urgency
Urgency는 _**High**_, _**Low**_ 로 구분 됩니다.

### Export
조회 가능한 모든 Alert List를 _**`Excel Export`**_ 가능합니다.

## Alert Details
수신된 Alert의 상세 상태를 조회하고 처리 이력을 관리할 수 있습니다.
상세 설명은 [Alert Manager Alert Details](/docs/guides/user_guide/monitoring/alert_manager/alert/#alert-details) 을 참고해 주세요.

## Alert Status Change
_**`Alert Detail`**_ 을 통하지 않고 수신된 Alert의 상태를 간편하게 변경할 수 있습니다.
여러개의 Alert를 복수로 지정하여 한번에 상태 변경도 가능 합니다. [Alert Status Change](/docs/guides/user_guide/monitoring/alert_manager/alert/#alert-status-change) 를 참고해주세요.


