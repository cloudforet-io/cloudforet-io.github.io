---
title: "Maintenance Window"
linkTitle: "Maintenance Window"
weight: 2
date: 2021-08-10
description: >
    Register system maintenance window to avoid sending wrong notification
---

# Overview
정기, 비정기적인 시스템 작업일정을 등록합니다. Project Dashboard를 통해 작업을 안내하고, 작업간 발생하는 알람이 Disable 됩니다.  

![Maintenance Window Main]()


# Managing Maintenance Window
작업 일정을 등록, 변경, 종료 할 수 있습니다. 

## Create Maintenance Window
작업 일정을 등록합니다. 작업명과 작업 일정을 등록합니다. 
작업 일정에 대한 세부 옵션설명은 아래와 같습니다.

![Maintenance Window Create]()

|항목|설명|
|:--:|:--:|
|Start now and end in|지금 즉시 지정된 시간까지 작업 일정을 등록 합니다. 15분, 30분, 1시간, 2시간, 3시간 중 선택할 수 있습니다.|
|Start at scheduled time|향후 예정된 작업 일정을 예약할 수 있습니다. 시작시간과 종료 시간을 선택할 수 있습니다. |


## List Maintenance Window
작업 일정을 조회할 수 있습니다. 

![Maintenance Window List]()

작업 일정의 각 Parameter에 대한 상세 설명은 아래와 같습니다. 
|항목|설명|
|:--:|:--:|
|Title|작업명|
|State|작업 진행 상태. 현재 작업 중인 경우 _**Open**_ 작업이 완료된 경우 _**Closed**_|
|Start Time, End Time|작업의 시작, 종료 시간|
|Create By|작업 일정을 등록한 사람|
|Created|작업 일정을 등록한 시간|

검색 창을 통해 다양한 parameter 기반으로 작업 일정에 대한 조회가 가능합니다. 

## Update Maintenance Window
작업 일정을 변경할 수 있습니다. 

![Maintenance Window Update]()

{{% alert title="Info" %}}
예정된 작업의 내용을 변경할 수 있습니다. 작업 시간이 지나서 _**Closed**_ 상태인 작업 일정은 변경할 수 없습니다. 
{{% /alert %}}

## Close Maintenance Window
진행중인 작업 일정을 강제로 종료할 수 있습니다. 

![Maintenance Window Close]()



