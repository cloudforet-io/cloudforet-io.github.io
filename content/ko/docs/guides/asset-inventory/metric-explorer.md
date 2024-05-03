---
linkTitle: 리소스 분석
weight: 4
date: '2024-05-03T00:00:00.000Z'
description: |
  워크스페이스에서 사용 중인 리소스 지표를 빠르고 직관적인 방식으로 탐색하고, 모든 데이터를 시각화된 차트로 쉽게 확인할 수 있습니다.  
title: 리소스 분석
---

## 데이터 탐색

특정 워크스페이스 환경 선택 → \[에셋 인벤토리 > 리소스 분석] 메뉴로 이동합니다.

<br>

##### **1. 네임스페이스 선택**

좌측 사이드바에 위치한 '네임스페이스' 영역에서 검색어를 입력하거나, 리스트 중에 하나를 선택합니다.

![](/guides/asset_inventory/metric-explorer-01-ko.png)

<br>

##### **2. 메트릭(지표) 선택**

분석하고자 하는 메트릭을 선택합니다.

![](/guides/asset_inventory/metric-explorer-02-ko.png)

<br>

##### **3. 옵션 활용**

![](/guides/asset_inventory/metric-explorer-view-01-ko.png)

➊ 연산자: 총합(Sum) / 평균값(Average) / 최대값(Max) / 최소값(Min)중에 하나를 선택합니다.

➋ 세부 기준: 일별 또는 월별 데이터 확인이 가능합니다.

➌ 기간: 선택한 '세부 기준'에 따라 그에 맞는 기간을 선택할 수 있습니다.

➍ 필터: 다양한 옵션을 활용하여, 원하는 데이터로 필터하여 확인할 수 있습니다.

➎ 그룹별 통계: 다중의 Group-by를 클릭하여 주요 데이터를 빠르게 확인할 수 있습니다.

<br>

##### **4. 차트 타입 활용**

* 선(Line) 그래프/ 바(Bar) 차트 / 트리맵 / 도넛 차트 등 다양한 차트 타입으로 데이터를 확인해 볼 수 있습니다.

![](/guides/asset_inventory/metric-explorer-view-02.png)

* 소스 코드 아이콘 클릭 시, 해당 메트릭의 쿼리를 확인할 수 있습니다.

![](/guides/asset_inventory/metric-explorer-view-02_2.png)

<br>

##### **5. 테이블 데이터 확인**

선택한 옵션과 지표에 맞는 상세 데이터를 확인할 수 있으며, 엑셀로 파일 내보내기가 가능합니다.

![](/guides/asset_inventory/metric-explorer-view-03.png)

<br><br>

## 사용자 정의 메트릭(지표)

제공하는 메트릭 외에도 사용자가 직접 정의한 지표를 추가할 수 있습니다.

<br>

**방법 1) 기존의 메트릭을 '복제' 하여 새로 생성**

우측 상단 \[복제] 버튼을 통해서 기존의 메트릭을 복제할 수 있습니다.

![](/guides/asset_inventory/metric-explorer-duplicate-ko.png)

**방법 2) 쿼리를 통한 직접 생성**

좌측 사이드바의 \[+] 버튼을 통해 사용자 쿼리를 입력하고 새로운 지표를 생성할 수 있습니다.

![](/guides/asset_inventory/metric-explorer-add-query-01-ko.png)

![](/guides/asset_inventory/metric-explorer-add-query-02-ko.png)

위와 같이 직접 생성 또는 복제된 메트릭의 경우, 쿼리를 수정할 수 있습니다.

![](/guides/asset_inventory/metric-explorer-edit-query-ko.png)

<br><br>

## 샘플 데이터 생성/관리

메트릭 별로 연산자, 기간, 필터 등과 같은 옵션값을 가지는 샘플 데이터를 생성할 수 있습니다.

<br>

##### **1. 샘플 데이터 추가**

특정 메트릭 페이지의 '`연산자`', '`세부 기준`', '`기간`', '`필터`', '`그룹별 통계`' 값을 지정한 후, 우측 상단에 **\[+ 샘플 추가]** 버튼을 통해 저장 시, 세부 설정값들이 데이터에 모두 포함되어 저장됩니다.

![](/guides/asset_inventory/metric-explorer-add-example-ko.png)

* 추가된 샘플은 해당 메트릭의 하위에 위치하게 됩니다.

![](/guides/asset_inventory/metric-explorer-add-02-example-ko.png)

* 생성 후에도 여러 설정 값을 변경하여 바로 **\[저장]** 하거나, **\[다른 이름으로 저장]** 할 수 있습니다.

![](/guides/asset_inventory/metric-explorer-add-04-example-ko.png)

* 메트릭 샘플의 이름 수정 및 삭제가 가능합니다.

![](/guides/asset_inventory/metric-explorer-add-03-example.png)
