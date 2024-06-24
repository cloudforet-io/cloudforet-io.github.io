---
linkTitle: 메트릭 분석
weight: 4
date: '2024-05-03T00:00:00.000Z'
description: |
  워크스페이스에서 사용 중인 리소스 지표를 빠르고 직관적인 방식으로 탐색하고, 모든 데이터를 시각화된 차트로 쉽게 확인할 수 있습니다.  
title: 리소스 분석
---

## 데이터 탐색

특정 워크스페이스 환경 선택 → \[에셋 인벤토리 > 메트릭 분석] 메뉴로 이동합니다.

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

![](/guides/asset_inventory/metric-explorer-view-01-02_ko.png)

➊ **연산자**: 총합(Sum) / 평균값(Average) / 최대값(Max) / 최소값(Min)중에 하나를 선택합니다.

➋ **세부 기준**: 일별 또는 월별 데이터 확인이 가능합니다.

➌ **기간**: 선택한 '세부 기준'에 따라 그에 맞는 기간을 선택할 수 있습니다.

➍ **필터**: 다양한 옵션을 활용하여, 원하는 데이터로 필터하여 확인할 수 있습니다.

➎ **그룹별 통계**: 다중의 Group-by를 클릭하여 주요 데이터를 빠르게 확인할 수 있습니다.

<br>

##### **4. 차트 타입 활용**

* 선(Line) 그래프/ 바(Bar) 차트 / 트리맵 / 도넛 차트 등 다양한 차트 타입으로 데이터를 확인해 볼 수 있습니다.

![](/guides/asset_inventory/metric-explorer-view-02-02_ko.png)

<br>

##### **5. 테이블 데이터 확인**

선택한 옵션과 지표에 맞는 상세 데이터를 확인할 수 있으며, 엑셀로 파일 내보내기가 가능합니다.

![](/guides/asset_inventory/metric-explorer-view-03.png)

<br><br>

## 예제 추가/관리

메트릭 별로 연산자, 기간, 필터 등과 같은 옵션값을 가지는 예제 데이터를 생성할 수 있습니다.

<br>

##### **1. 예제 추가**

특정 메트릭 페이지의 '`연산자`', '`세부 기준`', '`기간`', '`필터`', '`그룹별 통계`' 값을 지정한 후, 우측 상단에 **\[+ 예제 추가]** 버튼을 통해 저장 시, 세부 설정값들이 데이터에 모두 포함되어 저장됩니다.

![](/guides/asset_inventory/metric-explorer-add-example-02-ko.png)

* 추가된 예제는 해당 메트릭의 하위에 위치하게 됩니다.

![](/guides/asset_inventory/metric-explorer-add-02-example-ko.png)

* 생성 후에도 여러 설정 값을 변경하여 바로 **\[저장]** 하거나, **\[다른 이름으로 저장]** 할 수 있습니다.

![](/guides/asset_inventory/metric-explorer-add-04-example-ko.png)

* 예제는 이름 수정 및 삭제가 가능합니다.

![](/guides/asset_inventory/metric-explorer-add-03-example.png)

<br><br>

## 사용자 정의 메트릭(지표)

제공하는 메트릭 외에도 사용자가 직접 정의한 지표를 추가할 수 있습니다.

<br>

**방법 1) 기존의 메트릭을 '복제' 하여 새로 생성**

기본 제공하는 메트릭의 경우 쿼리 수정이 불가합니다. 대신, 메트릭을 복제하게 되면 직접 쿼리를 수정할 수 있습니다.

우측 상단 \[복제] 버튼을 통해서 기존의 메트릭을 복제할 수 있습니다.

![](/guides/asset_inventory/metric-explorer-duplicate-02-ko.png)

**방법 2) 쿼리 입력을 통한 직접 생성**

특정 네임스페이스 선택시, 좌측 사이드바의 **\[+]** 버튼을 확인할 수 있습니다. 이는 해당 네임스페이스에 **사용자 정의 메트릭**을 추가하기 위한 버튼입니다.

![](/guides/asset_inventory/metric-explorer-add-query-01-ko.png)

![](/guides/asset_inventory/metric-explorer-add-query-02-ko.png)

위와 같이 **직접 생성** 또는 **복제**된 사용자 지정 메트릭의 경우, \[쿼리 수정] 버튼을 통해 해당 쿼리를 수정할 수 있습니다.

![](/guides/asset_inventory/metric-explorer-edit-query-02-ko.png)

<br>

다음의 가이드 대로 쿼리를 작성할 수 있습니다.

<br>


| Parameter | Type           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| unwind    | list of object | 특정 Array 타입 필드를 별도 Row로 분리.<br><br><pre lang="json">a = data.listeners = \[{…}, {…}, {…}]<br><br># 아래와 같이 변경<br>a1 = data.listeners = {…}<br>a2 = data.listeners = {…}<br>a3 = data.listeners = {…}</pre>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | <pre lang="json">{<br>  "unwind": {<br>    "path": "data.listeners"<br>  }<br>}</pre>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| group\_by | list of string | 데이터를 그룹화하는 조건으로 API 마다 지원 범위가 다름.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | <pre lang="json">{<br>  "group\_by": \[<br>    "product",<br>    "region\_code",<br>    "..."<br>  ]<br>}</pre>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| filter    | list of object | 데이터를 필터링하는 조건으로 기존 쿼리 필터와 동일함.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | <pre lang="json">{<br>  "filter": \[<br>    {<br>      "k": "...",<br>      "v": "...",<br>      "o": "..."<br>    },<br>    {<br>      "k": "...",<br>      "v": "...",<br>      "o": "..."<br>    }<br>  ]<br>}</pre>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| fields    | object         | 리턴 되는 데이터를 정의하는 항목으로 각 operator 별로 사용 방법이 다름.<br><br>\[지원되는 operator]<br><br>**sum**<br>int 또는 float 필드만 지원<br><br>**average**<br>int 또는 float 필드만 지원<br><br>**max**<br>int 또는 float 필드만 지원<br><br>**min**<br>int 또는 float 필드만 지원<br><br><font color="blue">만약 Array Data에 대한 sum, average, max, min 연산 시 `data_type: array` 추가 필요</font><br><br>**count**<br>key를 필요로하지 않음<br><font color="red">고급 operator 주의 필요!</font><br><br>**push**<br>- 일부 필드 들을 추출하여 Array of Object로 설정<br>- sub\_group 지원하지 않음<br>- key 또는 fields 지정 가능<br><pre lang="json"># key 지정 시<br>\[<value>, <value>, ...]<br><br># fields 지정 시<br>\[{<k1>: <v1>, <k2>: <v2>}, ...]</pre><br>**add\_to\_set**<br>- 선언된 필드에 대해 중복 제거하여 Array로 변경<br>- sub\_group 지원하지 않음 | <pre lang="json">{<br>  "fields": {<br>    "usd\_cost\_sum": {<br>      "key": "usd\_cost",<br>      "operator": "sum"<br>    },<br>    "usd\_cost\_avg": {<br>      "key": "usd\_cost",<br>      "operator": "average"<br>    },<br>    "usage\_quantity\_max": {<br>      "key": "usage\_quantity",<br>      "operator": "max"<br>    },<br>    "usd\_cost\_row\_count": {<br>      "operator": "count"<br>    },<br>    "total\_disk\_size": {<br>      "key": "data.disks.size",<br>      "operator": "sum",<br>      "data\_type": "array"<br>    },<br>    "cost\_tags": {<br>      "operator": "push",<br>      "fields": {<br>        "name": "tags.Name",<br>        "service": "tags.Service"<br>      }<br>    },<br>    "cost\_region\_codes": {<br>      "key": "region\_code",<br>      "operator": "push"<br>    },<br>    "cost\_product\_list": {<br>      "key": "product",<br>      "operator": "add\_to\_set"<br>    }<br>  }<br>}</pre> |
