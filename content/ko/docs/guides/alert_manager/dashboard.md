---
title: "Dashboard"
linkTitle: "Dashboard"
weight: 1
date: 2021-08-10
description: >
    Monitoring Service
---

# Overview
Alert Dashboard를 통해 수신된 모든 Alert의 현황을 한눈에 확인할 수 있습니다. 

![Alert Dashboard Main](/ko/docs/guides/alert_manager/dashboard_img/alert_manager_dashboard_img_01.png)

# Dashboard

## Alert State
전체 Alert 상태를 _**Open(Triggered, Acknowledge 포함)**_, _**Resolved**_, _**All State**_ 로 구분하여 확인 가능 합니다. 

![Alert Dashboard Alert State](/ko/docs/guides/alert_manager/dashboard_img/alert_manager_dashboard_img_02.png)

<br>

- Urgency Type별로 Filter를 적용할 수 있습니다. 적용 가능한 Urgency Filter는 총 3가지(_**`All, High, Low`**_) 입니다.
- _**Assigned to me**_ 버튼을 클릭시 담당자가 _**나**_로 지정된 Alert만을 조회할 수 있습니다.

## Alert History
전체 Alert 통계를 확인할 수 있습니다. 생성되고 완료된 Alert 통계와 일별 변화량을 확인할 수 있습니다.

![Alert Dashboard Alert History](/ko/docs/guides/alert_manager/dashboard_img/alert_manager_dashboard_img_03.png)

## Project Health Board
각 프로젝트별 Alert 처리 현황을 확인할 수 있습니다. 

![Alert Dashboard Project Health Board](/ko/docs/guides/alert_manager/dashboard_img/alert_manager_dashboard_img_04.png)

<br>

- 각 Project를 클릭시 각 Project의 Alert List 화면으로 이동 합니다.
- 각 Alert를 클릭시 Alert의 상세내역을 확인할 수 있습니다.
