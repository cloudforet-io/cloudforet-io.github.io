---
title: "Metric Collector Quick Start"
linkTitle: "Metric Collector Quick Start"
weight: 4
date: 2021-07-31
description: >
    사용자가 Cloud의 서버들의 Monitoring Metric Collector를 설정하기 위한 퀵 가이드 입니다.  
---

## How to Set up

아래의 과정을 통해 Monitoring Metric Data를 수집할 수 있습니다 : 

* [Prerequisites](#preparation)
* [Get API Key for SpaceONE Service Account](#get-api-key-for-service-account)
* [Register SpaceONE Service Account](#assign-spaceone-service-account-ex-metric-collector)
* [Monitoring Metric Information](#monitoring-metric-information) 
* [Collecting Monitoring Metric Type](#metric-items-monitoring-collection)

## PREPARATION

SpaceONE의 Metric Collector를 사용하기 위해, Service Account가 필요 합니다. 아래의 등록 프로세스를 참고 해주세요.

## Get API Key for Service Account

Service Account \(SpaceONE\)를 추가 하기전에, SpaceONE의 API Key가 필요 합니다. 

![](/ko/docs/guides/getting_started/metric-collector_img/metric-collector-api_key.png)

<!-- {% hint style="info" %} -->
API-Key는 사용자 관리 메뉴에서 발급이 가능합니다. [사용자 API Key 관리하기](/ko/docs/guides/my_account/api_key/)를 통해 API Key를 발급 합니다. 
<!-- {% endhint %} -->

## Assign SpaceOne Service Account \(Ex. Metric Collector\)
 
SpaceONE의 Service Account를 등록하기 위해 **Identity** &gt; **Service Account**로 이동 합니다. 

SpaceONE Service Provider를 선택한 후, **+Add** 버튼을 클릭 합니다. 

![](/ko/docs/guides/getting_started/metric-collector_img/metric-collector_image_01.png)

아래의 순서로 SpaceONE Service Account를 등록 합니다. 
1. Service Account 이름 입력
2. User ID 입력
3. Credential \(API Key information\) 입력

![](/ko/docs/guides/getting_started/metric-collector_img/metric-collector_image_02.png)

Service Account 이름과 user ID를 입력한 후, [Get API Key for Service Account](#get-api-key-for-service-account)에서 받은 정보를 Credentials에 입력 합니다.

Credentials 입력 정보는 아래와 같습니다.

1. _API Key_
2. _API Key ID_
3. _Identity Endpoint_

모든 정보가 반드시 입력 되어야 합니다.

![](/ko/docs/guides/getting_started/metric-collector_img/metric-collector_image_03.png)

<!-- {% hint style="info" %} -->
Monitoring Metric collector service는 프로젝트 정보를 입력하지 않아야 합니다.
프로젝트 정보를 입력하는 부분을 생략 합니다.
<!-- {% endhint %} -->

## Monitoring Metric Information

입력된 Monitoring Metric 정보는 **Inventory** &gt; **Server** 에서 확인할 수 있습니다.

**Note: Monitoring-metric-collectors의 수집은 하루에 한번을 권장 합니다.**

![](/ko/docs/guides/getting_started/metric-collector_img/metric-collector_image_04.png)

Collector Job이 완료된 이후에는, 모니터링 메트릭 정보가 업데이트 됩니다. 

![](/ko/docs/guides/getting_started/metric-collector_img/metric-collector_image_05.png)

수집된 데이터를 **"Raw Data"** tab of **Data -&gt; Monitoring** 에서 확인할 수 있습니다.

## Metric items \(Monitoring Collection\)

<!-- {% hint style="info" %} -->
**Note: 모니터링 메트릭 항목들은 지속적으로 업데이트 됩니다.**
<!-- {% endhint %} -->

### Default Metric Stat

| Stat for Metric | Key | Description |
| :---: | :---: | :---: |
| MAX | max | Maximum value per day |
| AVERAGE | avg | Average value per day |

### Collecting Metrics

|Collecting Metric Type	|Collecting Metric Type	|
|:--:|:--|
|**CPU**|utilization (%)|
|**Memory**|usage (%) </br> total (bytes) </br> used (bytes)|
|**Disk**|write_iops (counts) </br> write_throughput (bytes) </br> read_iops (counts) </br> read_throughput (bytes)|
|**Network**|received_throughput (bytes) </br> received_pps (counts) </br> sent_throughput (bytes) </br> sent_pps (counts)|

