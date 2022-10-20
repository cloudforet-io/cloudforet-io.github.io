---
title: "클라우드 서비스"
linkTitle: "클라우드 서비스"
weight: 2
date: 2022-06-07
description: >
    [**컬렉터**](/ko/docs/guides/asset-inventory/collector)를 통해 수집된 여러 클라우드 리소스들을 통합적으로 조회하고 이용 현황을 파악할 수 있습니다.
---

## 클라우드 서비스 목록 조회하기

클라우드 서비스 페이지에서는 **프로바이더**별 클라우드 서비스 이용 현황을 보여줍니다.

[고급 검색](/ko/docs/guides/advanced/search)과 필터 설정을 통해 세밀한 조건으로 목록을 필터링할 수 있습니다.

### 프로바이더 선택

프로바이더를 선택하여 특정 프로바이더를 통해 제공되는 클라우드 서비스만을 조회합니다.

![cloud-service-provider-menu](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-service-provider-menu.png)

### 필터 설정

서비스 분류와 리전 필터를 설정하여 보다 세부적인 조건 검색이 가능합니다.

(1) [설정] 버튼을 클릭하면 [필터 설정] 모달이 열립니다.

![cloud-service-filter-button](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-service-filter-button.png)

(2) 원하는 필터를 선택한 후 [확인] 버튼을 클릭해 적용합니다.

![cloud-service-filter-modal](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-service-filter-modal.png)


## 클라우드 서비스 살펴보기

클라우드 서비스 상세 페이지에서 특정 클라우드 서비스의 상세 정보를 확인할 수 있습니다.

클라우드 서비스 페이지에서 카드를 클릭하면 상세 페이지로 이동합니다.

![cloud-service-select](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-service-select.png)

왼쪽의 클라우드 서비스 목록에서 선택된 클라우드 서비스에 대한 상세 정보를 확인할 수 있습니다.

![cloud-service-list-lnb](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-service-list-lnb.png)

### 클라우드 서비스의 리소스 목록 조회하기

검색어를 입력하여 조건에 부합하는 클라우드 리소스 목록을 확인할 수 있습니다.

**고급 검색**에 대한 상세 설명은 [여기](/ko/docs/guides/advanced/search)를 참고 하십시오.

[엑셀] 아이콘 버튼을 클릭하여 리소스 목록을 [엑셀 파일로 내보내기](/ko/docs/guides/advanced/excel-export) 하거나, [설정] 아이콘 버튼을 클릭하여 [테이블 필드 개인화](/ko/docs/guides/advanced/custom-table)를 할 수 있습니다.

![cloud-sevice-detail-full-page](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-sevice-detail-full-page.png)

### 클라우드 서비스 이용 현황 보기

선택한 클라우드 서비스에 대한 통계 정보를 확인할 수 있습니다.

![cloud-service-single-select](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-service-single-select.png)

더욱 자세한 내용을 확인하려면, 오른쪽의 [차트 보기] 버튼을 클릭하여 확인할 수 있습니다.

![cloud-service-chart-modal](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-service-chart-modal.png)

### 클라우드 리소스 콘솔 열기

때로는 클라우드 리소스의 프로바이더에서 제공하는 콘솔에서 작업을 해야 하는 경우가 있습니다.

(1) 콘솔을 연결하려는 클라우드 리소스를 선택합니다.

(2) [콘솔 연결] 버튼을 클릭합니다.

![cloud-service-connect-console](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-service-connect-console.png)

(3) 버튼을 클릭하면 해당 클라우드 리소스에 대한 작업을 이어나갈 수 있는 프로바이더의 콘솔이 새 탭으로 열립니다.

아래는 AWS의 EC2 Instance의 콘솔이 열린 예시입니다.

![cloud-service-console-opened](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-service-console-opened.png)

## 클라우드 서비스의 리소스 살펴보기

클라우드 리소스 목록에서 살펴보고자 하는 항목을 선택하면, 하단에서 해당 리소스에 대한 정보를 확인할 수 있습니다.

- [상세 정보](#클라우드-리소스-상세-정보-확인하기)
- [태그](#클라우드-리소스-태그-관리하기)
- [연관된 멤버](#클라우드-리소스에-연관된-멤버-확인하기)
- [변경 기록](#클라우드-리소스에-연관된-멤버-확인하기)
- [모니터링](#클라우드-리소스-모니터링-정보-확인하기)

![cloud-resource-single-select](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-resource-single-select.png)

### 클라우드 리소스 상세 정보 확인하기

선택한 리소스에 대한 자세한 정보를 보여줍니다.

여기에 표시되는 정보는 **기본 탭**과 **추가 정보 탭**으로 나뉩니다.

- **기본 탭**: 클라우드 리소스 상세 정보에 기본적으로 제공되는 것으로, [기본 정보], [원본 데이터] 탭이 이에 해당됩니다.
- **추가 정보 탭**: 기본 탭을 제외한 모든 탭들은 해당 리소스를 수집한 컬렉터의 플러그인에 의해 결정됩니다. 자세한 설명은 [여기](/ko/docs/guides/plugins/asset-inventory-collector)를 참고 하십시오.

<br>

![cloud-resource-info-tab](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-resource-info-tab.png)

위의 이미지는 클라우드 리소스 상세 정보 예시입니다.

[기본 정보] 탭과 [원본 데이터] 탭을 제외한 나머지 탭들(AMI, Permission, Tags)은 모두 컬렉터의 플러그인에 의해 추가된 정보입니다.

### 클라우드 리소스 태그 관리하기

클라우드 리소스에는 `Managed` , `Custom` 두가지 타입의 태그가 존재합니다. 
개별 클라우드 리소스별로 해당 프로바이더로 부터 가져온 `Managed` 태그를 확인할 수 있으며, 별도로 `Custom` 태그를 추가하여 관리할 수 있습니다. 
<br>

`키: 값` 의 형태로 구성된 각 태그는 리소스 검색시에 유용하게 이용할 수 있습니다. 

![cloud-resource-tag-tab](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-service-list-tag-search-ko.png)


**[ Managed 태그 조회 하기 ]**

- `Managed` 태그는 Cloudforet에서 직접 수정 및 삭제가 불가합니다.

![cloud-resource-tag-tab](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-service-list-view-managed-tag-ko.png)


**[ Custom 태그 조회 하기 ]**

(1) [Custom 태그 수정] 버튼을 클릭합니다.

![cloud-resource-tag-tab](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-service-list-custom-tag-btn-ko.png)

(2) 커스텀 태그 수정 페이지에서 `키: 값` 형태로 태그를 입력 후 [저장] 버튼을 클릭하여 완료합니다.

![cloud-resource-tag-tab](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-service-list-custom-tag-edit-ko.png)



### 클라우드 리소스에 연관된 멤버 확인하기

[연관된 멤버] 탭에서는 아래의 조건에 해당되는 사용자 정보를 확인할 수 있습니다.

- [프로젝트 멤버](/ko/docs/guides/project/member)로써 해당 클라우드 리소스에 접근 권한을 가진 사용자

![cloud-resource-member-tab](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-resource-member-tab.png)

### 클라우드 리소스 변경 기록 확인하기

[변경 이력] 탭에서는 선택한 클라우드 리소스의 날짜/시간별로 변경사항을 빠르게 파악할 수 있습니다.

(1) 특정 날짜 선택 또는 검색을 통해 확인하고자 하는 세부 내역을 추려낼 수 있습니다.

![cloud-resource-changes-tab](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-resource-history-changes-tab.png)

(2) 특정 키값 또는 특정 시간대 전체 클릭시, 해당하는 변경 이력 상세를 확인할 수 있습니다.

(2-1) 변경내역: 해당 리소스의 어떤 Key값들이 어떻게 업데이트 되었는지 상세 내역을 확인할 수 있습니다.

![cloud-history-diff-tab](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-history-diff-tab.png)

(2-2) 로그: AWS CloudTrail와 같은 Provider별 상세 로그를 지원하여, 선택한 시간내/외로 어떤 세부 이벤트가 발생했는지 확인할 수 있습니다. 이에 따라, 특정 리소스를 변경한 유저를 파악할 수 있는 큰 장점이 있습니다.

![cloud-history-log-tab](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-history-log-tab.png)

확인하고자 하는 값의 키를 클릭하여 상세 로그를 확인할 수 있습니다.

![cloud-history-log-modal](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-history-log-modal.png)

(2-3) 노트: 선택한 타임에 노트를 추가/관리 함으로써, 어떤 담당자와 해당 변경이 관련이 있는지, 어떤 프로세스로 해당 이슈를 해결할지 등 기업별 워크플로우를 자유롭게 관리할 수 있습니다.

![cloud-history-note-tab](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-history-note-tab.png)

### 클라우드 리소스 모니터링 정보 확인하기

[모니터링] 탭에서는 클라우드 리소스에 대하여 다양한 메트릭을 보여줍니다.

![cloud-resource-monitoring-tab](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-resource-monitoring-tab.png)

[시간 범위] 필터를 변경하거나, [통계] 드롭다운에서 다른 통계 방식을 선택하여 다른 기준에 대한 메트릭을 확인할 수도 있습니다.

상단의 클라우드 리소스 목록에서 왼쪽의 체크박스를 클릭하여 여러 개의 리소스를 선택하면, 다수의 리소스에 대한 메트릭 정보를 비교하여 살펴볼 수 있습니다.

![cloud-resource-multi-monitoring](/ko/docs/guides/asset-inventory/cloud-service-img/cloud-resource-multi-monitoring.png)

메트릭 정보는 **모니터링 플러그인**에 의해 수집되며, 자세한 내용은 [여기](/ko/docs/guides/plugins/asset-inventory-collector)를 참고 하십시오.
