---
title: "비용 분석"
linkTitle: "비용 분석"
weight: 2
date: 2022-06-23
description: >
    **비용 분석**은 클라우드 제공자로부터 수신되는 비용 데이터를 상세하게 분석합니다.
    <br>
    <br>
    다양한 조건으로 데이터를 그룹화 혹은 필터링하여, 원하는 비용 데이터를 한눈에 볼 수 있습니다.
---

## 비용 분석 확인하기

### 데이터 소스 선택하기 

1개 이상의 빌링 데이터 소스가 연결된 경우, 각각의 데이터 소스 별 비용 상세 분석이 가능합니다.  데이터 소스는 좌측 메뉴 비용 분석’ 부분에서 드랍다운을 통해 선택할 수 있습니다. 

{{<alert>}}
비용 데이터 왜곡을 방지하기 위하여, 각각의 데이터 소스 별로 가진 original(원본) 통화는 고정됩니다.   
{{</alert>}}

![cost-analysis-data-source](/ko/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-data-source_ko.png)


### 세부기준 선택하기

**세부 기준**은 데이터를 어떤 방식으로 보여줄 것인가에 대한 기준입니다. 세부 기준에 따라 제공되는 차트나 테이블의 형태가 달라집니다.

![cost-analysis-granularity](/ko/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-granularity_ko.png)

- `일별 데이터`: 특정 월 기준으로 일별 누적 데이터를 확인할 수 있습니다. 
- `월별 데이터`: 특정 기간(최대 12개월)동안의 월별 데이터를 확인할 수 있습니다.
- `연도별 데이터`: 최근 3개년동안의 연도별 데이터를 확인할 수 있습니다.

<br>

### 기간 설정하기
세부 기준에 따라 선택할 수 있는 기간 메뉴가 다르게 나타납니다. [기간] 드롭다운에서 메뉴를 선택하거나, [기간 선택] 메뉴를 통해 직접 설정합니다.

![cost-analysis-period](/ko/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-period_ko.png)


<br>

### 그룹별 통계 설정하기
유저가 선택한 값을 기준으로 데이터를 그룹화합니다. 차트에서는 선택한 그룹 중 하나만 보여지며, 차트 바로 우측에 드랍다운에서 차트에 표시할 그룹을 변경할 수 있습니다. 하단 테이블에서는 선택한 그룹별 통계를 모두 볼 수 있습니다.

{{<alert>}}
그룹별 통계는 최대 3개 까지만 선택이 가능합니다. 
{{</alert>}}

![cost-analysis-groupby](/ko/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-groupby_ko.png)

![cost-analysis-groupby](/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-cost_usage.png)

<br>


### 필터 설정
필터는 그룹별 통계와 마찬가지로 한 개 이상 선택 가능하며, 유저가 설정한 값을 and 조건으로 필터링합니다.

(1) 페이지 상단에 [필터] 버튼을 클릭합니다.

(2) [필터 세팅]창이 열리면 원하는 필터를 선택할 수 있으며, 선택시 바로 차트와 테이블에 반영됩니다.

![cost-analysis-filter](/ko/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-filter_ko.png)

<br>


## 커스텀 비용 분석 페이지 생성/관리 하기 

### 커스텀 분석 페이지 생성하기

[비용 관리 > 비용 분석] 페이지에 진입할 때마다 세부 기준과 기간 등을 다시 설정해야 하는 번거로움을 해소하기 위해, 자주 사용하는 설정들을 분석 페이지로 저장할 수 있는 기능이 제공됩니다.

{{<alert>}}
데이터 소스 별 기본으로 제공되는 3개의 분석 페이지외에도 직접 커스텀 비용 분석 페이지를 생성할 수 있습니다. 
{{</alert>}}

(1) 특정 비용 분석 페이지의 우측 상단 [다른 이름으로 저장] 버튼 클릭합니다. 

![cost-analysis-save_as](/ko/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-save_as_ko.png)

(2) 이름 입력후 [확인]버튼 클릭시, 새로운 분석 페이지가 생성됩니다. 

![cost-analysis-save_to](/ko/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-save_to_ko.png)

![cost-analysis-saved](/ko/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-saved_ko.png)

(3) 커스텀 비용 분석 페이지는 이름/필터/그룹별 통계등의 설정을 바로 [저장]할 수 있으며, 기본으로 제공되는 분석 페이지와 마찬가지로 [다른 이름으로 저장]을 통해 새로운 페이지로 생성할 수도 있습니다. 

![cost-analysis-save_saveas](/ko/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-save_saveas_ko.png)

<br>

### 커스텀 분석 페이지 이름 편집하기

페이지 상단 [편집] 버튼을 클릭하여 이름을 변경할 수 있습니다.

![cost-analysis-edit](/ko/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-edit_ko.png)

![cost-analysis-edit_name](/ko/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-edit_name_ko.png)

<br>

### 커스텀 분석 페이지 삭제하기 

페이지 상단 [삭제] 버튼을 클릭하여 삭제할 수 있습니다.

![cost-analysis-delete](/ko/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-delete_ko.png)

