---
title: "Cloud Service"
linkTitle: "Cloud Service"
weight: 2
date: 2022-06-07
description: >
    [**컬렉터**](/ko/docs/guides/asset-inventory/collector)를 통해 수집된 여러 클라우드 리소스들을 통합적으로 조회하고 이용 현황을 파악할 수 있습니다.
---

## 클라우드 서비스 목록 조회하기

클라우드 서비스 페이지에서는 **프로바이더**별 클라우드 서비스 이용 현황을 보여줍니다.

[**고급 검색**](/ko/docs/guides/advanced/search)과 필터 설정을 통해 세밀한 조건으로 목록을 필터링할 수 있습니다.

### 프로바이더 선택

프로바이더를 선택하여 특정 프로바이더를 통해 제공되는 클라우드 서비스만을 조회합니다.

![01 cloud service provider select.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/28e5ed75-50ca-4573-9740-914f70950f58/01_cloud_service_provider_select.png)

### 필터 설정

서비스 분류와 리전 필터를 설정하여 보다 세부적인 조건 검색이 가능합니다.

(1) [설정] 버튼을 클릭하면 [필터 설정] 모달이 열립니다.

![03 cloud service filter button.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e48a9d8a-7d93-48fc-857e-64bbe8b5c9b0/03_cloud_service_filter_button.png)

(2) 원하는 필터를 선택한 후 [확인] 버튼을 클릭해 적용합니다.

![04 cloud service filter setting.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b369e0ae-945c-4b2d-8fcc-e883d19be451/04_cloud_service_filter_setting.png)

---

## 클라우드 서비스 살펴보기

클라우드 서비스 페이지에서 카드를 클릭하면, 해당하는 서비스에 대한 상세 정보를 확인할 수 있는 클라우드 서비스 상세 페이지로 이동합니다.

![06 cloud service type select.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c7222afb-6585-46b7-8a84-e6f6c65cd61b/06_cloud_service_type_select.png)

클라우드 서비스 상세 페이지에서는 왼쪽의 클라우드 서비스 목록에서 선택된 클라우드 서비스에 대한 상세 정보를 확인할 수 있습니다.

클라우드 서비스 목록에서 다른 클라우드 서비스를 선택하여, 해당 클라우드 서비스에 대한 상세 정보를 빠르게 확인할 수 있습니다.

![07 cloud service detail type select.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fdfb803d-d495-4bca-8072-678e043c7294/07_cloud_service_detail_type_select.png)

### 클라우드 서비스의 리소스 목록 조회하기

검색어를 입력하여 조건에 부합하는 클라우드 리소스 목록을 확인할 수 있습니다.

**고급 검색**에 대한 상세 설명은 [여기](/ko/docs/guides/advanced/search)를 참고하세요.

[엑셀] 아이콘 버튼을 클릭하여 리소스 목록을 셀를 하거나, [설정] 아이콘 버튼을 클릭하여 [**테이블 필드 개인화**](/ko/docs/guides/advanced/custom-table)를 할 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/976b9d19-ea15-4b6d-b65a-88851b03f29a/Untitled.png)

### 클라우드 서비스 이용 현황 보기

선택한 클라우드 서비스에 대한 통계 정보를 확인할 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/97e86b7b-7ba6-49c7-b48d-aaf9c0ced3ab/Untitled.png)

더욱 자세한 내용을 확인하려면, 오른쪽의 [차트 보기] 버튼을 클릭하여 확인할 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/073f6735-7cc6-4eb0-a94b-4cfbce9449f5/Untitled.png)

### 클라우드 리소스 콘솔 열기

때로는 클라우드 리소스의 프로바이더에서 제공하는 콘솔에서 작업을 해야 하는 경우가 있습니다.

(1) 콘솔을 연결하려는 클라우드 리소스를 선택합니다.

(2) [콘솔 연결] 버튼을 클릭합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/892d63e6-8b1f-4ffc-b03b-eea5145f8bc9/Untitled.png)

(3) 버튼을 클릭하면 해당 클라우드 리소스에 대한 작업을 이어나갈 수 있는 프로바이더의 콘솔이 새 탭으로 열립니다.

아래는 AWS의 EC2 Instance의 콘솔이 열린 예시입니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/85148aef-7e00-45eb-b007-f392bfc91eea/Untitled.png)

## 클라우드 서비스의 리소스 살펴보기

클라우드 리소스 목록에서 살펴보고자 하는 항목을 선택하면, 하단에서 해당 리소스에 대한 정보를 확인할 수 있습니다.

- [상세 정보](#클라우드-리소스-상세-정보-확인하기)
- [태그](#클라우드-리소스-태그-관리하기)
- [연관된 멤버](#클라우드-리소스에-연관된-멤버-확인하기)
- [변경 기록](#클라우드-리소스에-연관된-멤버-확인하기)
- [모니터링](#클라우드-리소스-모니터링-정보-확인하기)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/644e02f9-a896-4d98-9ce0-99657b8313ee/Untitled.png)

### 클라우드 리소스 상세 정보 확인하기

선택한 리소스에 대한 자세한 정보를 보여줍니다.

여기에 표시되는 정보는 **기본 탭**과 **추가 정보 탭**으로 나뉩니다.

- **기본 탭**: 클라우드 리소스 상세 정보에 기본적으로 제공되는 것으로, [기본 정보], [원본 데이터] 탭이 이에 해당됩니다.
- **추가 정보 탭**: 기본 탭을 제외한 모든 탭들은 해당 리소스를 수집한 컬렉터의 플러그인에 의해 결정됩니다. 자세한 설명은 [여기](/ko/docs/guides/plugins/asset-inventory-collector)를 참고하세요.

<br>

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a7fb105a-504d-4dae-a957-84a93f3f86a3/Untitled.png)

위의 이미지는 클라우드 리소스 상세 정보 예시입니다.

[기본 정보] 탭과 [원본 데이터] 탭을 제외한 나머지 탭들(AMI, Permission, Tags)은 모두 컬렉터의 플러그인에 의해 추가된 정보입니다.

### 클라우드 리소스 태그 관리하기

클라우드 리소스에 태그를 추가하여 관리할 수 있습니다.

(1) [태그] 탭을 선택합니다.

(2) [편집] 버튼을 클릭합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d3c58e2b-f08c-468a-b758-f89b844b4669/Untitled.png)

(2-1) [태그] 페이지에서 [태그 추가] 버튼을 클릭합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc422be2-b162-4528-b2a1-8e1e84aca3a2/Untitled.png)

(2-2) 추가하고자 하는 값을 `키: 값` 형태로 입력합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a474e2eb-0f29-46c7-94db-b6abd07077b3/Untitled.png)

(2-3) 태그를 더 추가하고자 한다면, 원하는 개수만큼 [태그 추가] 버튼을 클릭합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/86e6ac95-2234-4664-a494-ddcdd3484f42/Untitled.png)

(2-4) 추가한 태그 입력 창을 삭제하고자 한다면, 값 입력 창 오른쪽의 [삭제] 아이콘 버튼을 클릭하여 삭제합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/22196a6f-78f8-4339-b6bd-fc8cd9f66851/Untitled.png)

(2-5) [저장] 버튼을 클릭하여 태그 추가를 완료한 후, [태그] 탭에서 확인합니다.

### 클라우드 리소스에 연관된 멤버 확인하기

[연관된 멤버] 탭에서는 아래의 조건에 해당되는 사용자 정보를 확인할 수 있습니다.

- 해당 클라우드 리소스에 접근 권한을 가진 사용자
- `User` 타입의 역할(Role)(링크)을 가진 사용자

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4f341bb6-6b6d-460b-ab93-c6337fe1c70d/Untitled.png)

### 클라우드 리소스 변경 기록 확인하기

[변경 기록] 탭에서 선택한 클라우드 리소스의 변경사항을 확인할 수 있습니다.

어떤 데이터에 대한 변경이 일어난 것인지는 Key 필드를 통해 확인할 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/05b85535-4b12-43d7-8e0e-46b96b279fff/Untitled.png)

### 클라우드 리소스 모니터링 정보 확인하기

[모니터링] 탭에서는 클라우드 리소스에 대하여 다양한 메트릭을 보여줍니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ef790f81-bbf7-4a2d-aace-11a70f7b9d65/Untitled.png)

[시간 범위] 필터를 변경하거나, [통계] 드롭다운에서 다른 통계 방식을 선택하여 다른 기준에 대한 메트릭을 확인할 수도 있습니다.

상단의 클라우드 리소스 목록에서 왼쪽의 체크박스를 클릭하여 여러 개의 리소스를 선택하면, 다수의 리소스에 대한 메트릭 정보를 비교하여 살펴볼 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f0544fdd-9f36-4103-a67b-e5e38c588e43/Untitled.png)

메트릭 정보는 **메트릭 컬렉터**에 의해 수집되며, 자세한 내용은 [여기](/ko/docs/guides/plugins/asset-inventory-collector)를 참고하세요.
