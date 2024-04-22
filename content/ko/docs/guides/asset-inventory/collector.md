---
linkTitle: 컬렉터
weight: 4
date: '2022-06-07T00:00:00.000Z'
description: >
  클라우드포레는 **컬렉터**를 통해 [클라우드 리소스](/ko/docs/guides/asset-inventory)들을 수집하며, 스케줄링을
  통해 수집 시기를 결정할 수 있습니다.
title: 컬렉터
---

## 개요

컬렉터로 데이터를 수집하기 위해서는 다음 두 가지 요소가 필요합니다.

### 1. 컬렉터 플러그인

[클라우드 프로바이더](/ko/docs/guides/asset-inventory)로부터 어떤 리소스들을 수집할지, 수집한 데이터들을 어떻게 화면에 보여줄지에 대한 스펙이 정의된 요소입니다.

프로바이더 별로 가지고 있는 데이터의 구조와 내용이 상이하므로 컬렉터는 철저히 **컬렉터 플러그인**에 의존하여 리소스들을 수집합니다.

이에 대한 자세한 설명은 [여기](/ko/docs/guides/plugins/asset-inventory-collector)를 참고 하십시오.

### 2. 서비스 어카운트

리소스를 수집하기 위해서는 클라우드 프로바이더(ex. AWS, GCP, Azure)의 계정에 연결이 필요합니다.

[서비스 어카운트](/ko/docs/guides/asset-inventory/service-account/)는 프로바이더의 계정에 연결하기 위한 계정 정보입니다.

컬렉터는 기존에 프로바이더 별로 만들어져 있는 서비스 어카운트를 통해 프로바이더 계정에 접근합니다.

이에 대한 자세한 설명은 [여기](/ko/docs/guides/asset-inventory/service-account)를 참고 하십시오.

<br> <br>

## 컬렉터 생성하기

(1) 왼쪽 상단의 \[+ 생성] 버튼을 클릭합니다.

![collector-create-button](/ko/docs/guides/asset-inventory/collector-img/collector-create-button_ko.png)

(2) \[신규 컬렉터 생성‌] 페이지에서 아래 단계를 거칩니다.

(2-1) 플러그인 목록 페이지에서 원하는 컬렉터 플러그인을 찾아 \[선택] 버튼을 클릭합니다.

![collector-plugin-create](/ko/docs/guides/asset-inventory/collector-img/collector-create-step1_2_ko.png)

(2-2) 컬렉터의 이름 작성 및 버전을 선택한 후 \[계속하기] 버튼을 클릭합니다.

(컬렉터에 따라 특정 클라우드 프로바이더 선택이 필요할 수도 있습니다.)

![collector-plugin-create](/ko/docs/guides/asset-inventory/collector-img/collector-create-step2_2_ko.png)

{{<alert title="버전 및 자동 업그레이드">}}
버전은 앞에서 선택한 컬렉터 플러그인의 버전을 의미하며, 자동 업그레이드를 비활성화하면 선택할 수 있습니다. 이 경우에는 항상 지정한 버전의 플러그인으로 데이터가 수집됩니다.

반면, 자동 업그레이드를 활성화하면 항상 최신 버전의 플러그인으로 데이터가 수집됩니다.
{{</alert>}}

<br>

(2-3) 컬렉터의 추가 옵션을 선택한 후 \[계속하기] 버튼을 클릭합니다.

(2-3-1) 서비스 어카운트: 전체 또는 특정 서비스 어카운트를 선택합니다. 전체일 경우, 컬렉터와 관련 있는 프로바이더의 서비스 어카운트가 자동으로 선택되어 수집을 진행합니다.

(2-3-2) 추가 옵션: 컬렉터별 추가 옵션은 상이하기 때문에 경우에 따라 없을 수도 있습니다.

![collector-plugin-create](/ko/docs/guides/asset-inventory/collector-img/collector-create-step3_2_ko.png)

(2-4) 매일 자동으로 데이터 수집을 진행할 수 있도록 스케줄링을 설정할 수 있습니다.(선택사항)\
모든 단계를 거쳤다면, \[신규 컬렉터 생성] 버튼을 클릭하여 컬렉터 생성을 완료합니다.

![collector-plugin-create](/ko/docs/guides/asset-inventory/collector-img/collector-create-step4_2_ko.png)

(2-5) 컬렉터 생성이 완료되었다면, 즉시 `데이터 수집`을 시작할 수 있습니다.

![collector-plugin-create](/ko/docs/guides/asset-inventory/collector-img/collector-create-step5_ko.png)

<br>

## 컬렉터 목록 조회하기

컬렉터 페이지에서 생성되어 있는 모든 컬렉터 목록을 조회할 수 있습니다.

**고급 검색**을 통해 세밀한 조건으로 목록을 필터링할 수 있습니다. 상세 설명은 [여기](/ko/docs/guides/advanced/search/)를 참고 하십시오.

(1) 워크스페이스 내에 직접 생성한 컬렉터 목록

![collector-list-inquiry](/ko/docs/guides/asset-inventory/collector-img/collector-list_2_ko.png)

(2) Admin(관리자)가 생성한 컬렉터 목록

* Admin 모드에서 생성된 Global 컬렉터의 경우 특정 워크스페이스 내에서는 스케줄 수정이 불가하며, 데이터 수집은 가능합니다.
* Admin 역할을 가진 사용자만이 `Admin 모드`로 전환하여 Global 범위의 컬렉터를 생성하고 관리할 수 있습니다.

![](/guides/collector/collector-admin-only-02-ko.png) ![](/guides/collector/collector-admin-only-ko.png)

{{<alert title="Admin 모드란 ?">}}
Admin 역할 타입을 가진 사용자만 접근할 수 있는 별도의 관리자 전용 모드입니다.
관리자 가이드는 [이곳](/ko/docs/guides/admin-mode/)을 참고해주세요.
{{</alert>}}

<br>

## 컬렉터 상세 정보 확인 및 수정/삭제하기

### (1) 컬렉터 상세 정보 확인

(1-1) 컬렉터 목록에서 특정 컬렉터 카드 영역을 선택하여 상세 페이지로 이동합니다.

![collector-list-select](/ko/docs/guides/asset-inventory/collector-img/collector-list-select2_ko.png)

(1-2) 기본 정보, 스케줄, 컬렉터 옵션 및 연결된 서비스 어카운트를 확인할 수 있습니다.

![collector-detail-info-tab](/ko/docs/guides/asset-inventory/collector-img/collector-detail2_ko.png)

<br>

### (2) 컬렉터 수정/삭제하기

(2-1) 상단의 \[편집] 아이콘을 클릭하여 컬렉터 이름을 수정할 수 있습니다.

![collector-detail-edit](/ko/docs/guides/asset-inventory/collector-img/collector-detail-name-edit2_ko.png)

(2-2) 기본 정보, 스케줄, 컬렉터 옵션, 서비스 어카운트와 같은 세부 수정 필요시, 해당 영역의 \[수정] 버튼을 클릭합니다.

![collector-detail-edit](/ko/docs/guides/asset-inventory/collector-img/collector-detail-edit_01_2_ko.png)

(2-3) 값을 변경한 후 \[변경 저장] 버튼을 클릭하여 수정을 완료합니다.

![collector-detail-edit](/ko/docs/guides/asset-inventory/collector-img/collector-detail-edit_02_2_ko.png)

(2-4) 컬렉터 삭제하기
상단의 \[삭제] 아이콘을 클릭하여 컬렉터를 삭제할 수 있습니다.

![collector-detail-delete](/ko/docs/guides/asset-inventory/collector-img/collector-detail-name-delete_2_ko.png)

<br>

## 자동 수집 설정하기

컬렉터 생성 후에도 각 컬렉터 별 자동 수집 스케줄을 변경할 수 있습니다.

(1) 컬렉터 목록 페이지의 각 컬렉터 카드 영역에 스케줄 토글 버튼을 통해 자동 수집 활성화/비활성화가 가능하며, \[수정] 버튼을 클릭하여 빠르게 시간 주기를 설정하고 변경할 수 있습니다.

![collector-edit-schedule](/ko/docs/guides/asset-inventory/collector-img/collector-edit-schedule_01_2_ko.png)

![collector-edit-schedule](/ko/docs/guides/asset-inventory/collector-img/collector-edit-schedule_02_2_ko.png)

![collector-edit-schedule](/ko/docs/guides/asset-inventory/collector-img/collector-edit-schedule_03_2_ko.png)

(2) 각 컬렉터의 상세 페이지로 이동해서 스케줄을 변경할 수도 있습니다.

![collector-edit-schedule](/ko/docs/guides/asset-inventory/collector-img/collector-detail-schedule_2_ko.png)

<br>

## 일회성 데이터 수집하기

자동 수집 설정 없이 일회성으로 데이터를 수집할 수 있습니다.

이 기능을 사용하면 컬렉터에 자동 수집 스케줄이 없는 상태여도 데이터 수집이 이뤄집니다.

데이터 수집은 두 가지 방식으로 동작합니다.

* [연결된 전체 서비스 어카운트에 대하여 데이터 수집](/ko/docs/guides/asset-inventory/collector/#연결된-전체-서비스-어카운트에-대하여-데이터-수집하기)
* [하나의 서비스 어카운트에 대하여 데이터 수집](/ko/docs/guides/asset-inventory/collector/#하나의-서비스-계정에-대하여-데이터-수집하기)

### 연결된 전체 서비스 어카운트에 대하여 데이터 수집하기

컬렉터는 데이터 수집을 위해 [프로바이더](/ko/docs/guides/asset-inventory)의 계정 정보를 필요로 하며, 이는 [서비스 어카운트](/ko/docs/guides/asset-inventory/service-account)을 통해 등록됩니다.

(1) 데이터 수집

(컬렉터 목록 페이지)
데이터를 수집할 컬렉터 카드 영역에 마우스 오버 후, \[데이터 수집] 버튼을 클릭합니다.

![collector-collect-data](/ko/docs/guides/asset-inventory/collector-img/collector-collect-data-01_ko.png)

(컬렉터 상세 페이지)
상세 페이지 우측 상단에 \[데이터 수집] 버튼을 클릭합니다.

![collector-collect-data](/ko/docs/guides/asset-inventory/collector-img/collector-collect-data-02_ko.png)

![collector-collect-data](/ko/docs/guides/asset-inventory/collector-img/collector-collect-data-03_ko.png)

<br>

(2) 데이터 수집 진행

해당 컬렉터에 연결된 서비스 어카운트들에 대하여 데이터 수집을 시작합니다. 데이터 수집을 완료했는지 여부는 [컬렉터 히스토리](ko/docs/guides/asset-inventory/collector/#데이터-수집-내역-확인하기)에서 확인 가능합니다.
해당 컬렉터 카드 영역 아랫부분의 \[컬렉터 히스토리 전체보기] 버튼 또는 페이지 우측 상단의 \[컬렉터 히스토리] 버튼을 클릭하여 컬렉터 수집 기록 페이지로 이동할 수 있습니다.

<br>

### 하나의 서비스 어카운트에 대하여 데이터 수집하기

컬렉터로 데이터를 수집할 때에 특정한 클라우드 프로바이더 계정의 데이터만을 수집할 수도 있습니다.

(1) 컬렉터 목록에서 데이터를 수집할 컬렉터를 클릭하여 상세 페이지로 이동합니다.

(2) 페이지 하단의 \[연결된 서비스 어카운트‌] 영역에서 데이터 수집 시 사용되는 서비스 어카운트 목록 확인이 가능합니다.

![collector-service-account](/ko/docs/guides/asset-inventory/collector-img/collector-detail-service-account2_ko.png)

{{<alert title="서비스 어카운트">}}
[서비스 어카운트](/ko/docs/guides/asset-inventory/service-account)은 데이터 수집에 필요한 프로바이더 계정에 대한 접근 정보를 가지고 있습니다.

만약 여기에서 아무런 정보를 확인할 수 없다면, 프로바이더에 접근할 수 있는 계정 정보가 없는 것이므로 컬렉터가 실행되더라도 데이터 수집이 일어나지 않습니다.

따라서 컬렉터로 데이터를 수집하려면 \[서비스 어카운트] 메뉴에서 해당 프로바이더의 계정 정보를 먼저 등록해두어야 합니다.

{{</alert>}}

(3) 데이터를 수집하고자 하는 서비스 어카운트 오른쪽 \[데이터 수집] 버튼을 클릭하여 수집을 시작 합니다.

<br>

## 데이터 수집 내역 확인하기

**컬렉터 히스토리** 페이지에서 데이터 수집 내역을 확인할 수 있습니다.

컬렉터 페이지 상단의 \[컬렉터 히스토리] 버튼을 클릭하여 컬렉터 히스토리 페이지로 이동할 수 있습니다.

![collector-history-at-table](/ko/docs/guides/asset-inventory/collector-img/collector-collect-history01_ko.png)

![collector-history-at-table](/ko/docs/guides/asset-inventory/collector-img/collector-collect-history02_ko.png)

### 데이터 수집 내역 상세 정보 확인하기

위의 데이터 수집 목록에서 수집 내역을 선택하면 수집 내역 상세 페이지로 이동합니다.

데이터 수집 상태와 기본 정보, 그리고 **서비스 어카운트 별 수집 내역**을 확인할 수 있습니다.

![collector-history-detail-full-page](/ko/docs/guides/asset-inventory/collector-img/collector-history-detail-full-page.png)

#### 서비스 어카운트 별 수집 내역 확인하기

컬렉터를 실행하면 연결된 서비스 어카운트 별로 수집이 각각 이뤄집니다.

여기에서는 서비스 어카운트 별로 수집 작업이 어떻게 이뤄졌는지에 대한 정보 확인할 수 있습니다.

{{<alert title="">}}
컬렉터는 데이터 수집 시 서비스 어카운트을 통해 클라우드 프로바이더의 계정에 접근하여 데이터를 가져옵니다.
{{</alert>}}

![collector-history-detail-table](/ko/docs/guides/asset-inventory/collector-img/collector-history-detail-table.png)

###### 주요 필드 정보

* Created Count: 새롭게 추가된 리소스의 개수
* Updated Count: 가져온 리소스의 개수
* Disconnected Count: 가져오지 못한 리소스의 개수
* Deleted Count: 삭제된 리소스의 개수 (여러 번 가져오지 못하면 삭제된 것으로 간주됩니다.)

#### 수집 에러 내용 확인하기

(1) 계정 별 수집 목록에서 에러 내용을 확인하고자 하는 항목을 선택합니다.

(2) 아래의 \[에러 목록] 탭에서 오류에 대한 자세한 내역을 확인할 수 있습니다.

![collector-history-error-list](/ko/docs/guides/asset-inventory/collector-img/collector-history-error-list.png)
