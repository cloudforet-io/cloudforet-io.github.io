---
title: "Collector History"
linkTitle: "Collector History"
weight: 1
date: 2021-07-31
description: >
    생성한 Collector의 월별 변화 history를 조회하고 관리합니다.
---

# Collector History

## 둘러보기

Collector History 페이지에서는 SpaceONE의 Collector Plugin을 통해 수집된 다양한 Resource의 월별 변화를 조회할 수 있습니다. 



## Collector History 조회

아래 화면과 같이 Collector가 수집한 월별 Job 현황을 보여줍니다. 여기서 Job이란 생성한 Collector의 작업을 설정한 Schedule에 따라 수행한 결과를 의미합니다. 

![](/docs/using_spaceone_console/admin_guide/management/collector-history_img/collector-history_image_01.png)

메인 그래프는 수집된 Job의 개수 현황을 표현합니다. 성공, 실패한 Job의 개수가 각각 그래프에 표시되며, 점을 클릭하면 상세 내역이 아래 표 형식의 Job 목록에 표시됩니다. 

그래프 오른쪽 상단의 `< >`  를 통해 달을 이동할 수 있습니다.  



#### Collector History 상세 조회



![](/docs/using_spaceone_console/admin_guide/management/collector-history_img/collector-history_image_02.png)

 Job의 3가지 상태에 따라 성공/실패한 Job의 목록을 각각 조회할 수 있습니다. 

검색 바를 이용 Collector History를 통해 수집된 job을 Job ID, Status, Start Time 별로 검색할 수 있습니다.  

![](/docs/using_spaceone_console/admin_guide/management/collector-history_img/collector-history_image_03.png)



Collector History 페이지에서 조회할 수 있는 Job의 정보는 다음과 같습니다.

| Title | Description |
| :--- | :--- |
| Job ID | Job의 id |
| Collector Name | 해당 job을 수행한 collector의 이름 |
| Status | collector의 job 수행 결과를 나타내는 상태  |
| Task \(completed / total\) | 전체 정의된 task 중 완료된 task의 개수 |
| Start Time | 해당 Job이 시작된 시간  |
| Duration | Job이 실행된 시 |



## Job 상세조

![](/docs/using_spaceone_console/admin_guide/management/collector-history_img/collector-history_image_04.png)

Collector history 페이지에의 Job목록에서 개별 Job을 클릭하면 Job management 페이지에서 상세 정보를 조회합니다. 

페이지 상단에 Job을 수집한 collector와 cloud provider가 표시됩니다. 



#### Task 검색

Collector History를 통해 수집된 job의 task를 service account, project, status 별로 검색할 수 있습니다.  

![](/docs/using_spaceone_console/admin_guide/management/collector-history_img/collector-history_image_05.png)

#### 

#### Task 목록 조회

페이지 하단에 Job status에 따라 Task 목록이 표시됩니다. 이 페이지에서 조회할 수 있는 Task의 정보는 다음과 같습니다. 

| item | Description |
| :--- | :--- |
| No | task 순번 |
| Service account | task가 속한 Service Account  |
| Project | task가 속한 프로젝트 |
| Status | task의 수행 상태 |
| Created | create 된 resource 개수 |
| Updated | update 된 resource 개수 |
| Error | task 실패 원 |
| Start time | task 시작 시간  |
| Duration | task 가 수행된 시간 |



상태가 Failure 인 Job의 경우 task가 실패한 원인을 하단의 Error list에서 확인할 수 있습니다. 

![](/docs/using_spaceone_console/admin_guide/management/collector-history_img/collector-history_image_06.png)



