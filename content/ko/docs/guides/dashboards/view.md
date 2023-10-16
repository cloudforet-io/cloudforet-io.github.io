---
title: "대시보드 확인 및 빠른 설정"
linkTitle: "대시보드 확인 및 빠른 설정"
weight: 6
date: 2023-10-16
description: >
    대시보드 [편집] 모드에서는 새로운 위젯 추가 및 상세 레이아웃 관리가 가능했다면, 대시보드 [보기] 모드에서는 데이터 확인뿐 아니라 이름, 레이블 수정 삭제 및 빠른 위젯 수정이 가능합니다. 
---

## 대시보드 이름 편집/삭제/복제 

### 이름 편집하기

(1) 대시보드 이름 옆의 [편집] 아이콘 버튼을 클릭합니다.

![dashboard-setup-edit-name-01](/ko/docs/guides/dashboards/dashboard-img/dashboard-setup-edit-name-01.png)

(2) 대시보드의 이름을 변경한 뒤 [확인] 버튼을 클릭합니다.

![dashboard-setup-edit-name-02](/ko/docs/guides/dashboards/dashboard-img/dashboard-setup-edit-name-02.png)


### 삭제하기

(1) 대시보드 이름 옆의 [휴지통] 아이콘 버튼을 클릭합니다.

![dashboard-delete-02](/ko/docs/guides/dashboards/dashboard-img/dashboard-delete-02.png)

(2) [대시보드 삭제] 모달의 [확인] 버튼을 클릭하여 대시보드를 삭제합니다.

![dashboard-delete-03](/ko/docs/guides/dashboards/dashboard-img/dashboard-delete-03.png)


### 복제하기

(1) 대시보드 이름 옆의 [복제] 아이콘 버튼을 클릭합니다.

![dashboard-setup-duplicate-01](/ko/docs/guides/dashboards/dashboard-img/dashboard-setup-duplicate-01.png)

(2) 대시보드를 복제 폼에서 다음 항목들을 설정할 수 있습니다.

![dashboard-setup-duplicate-02](/ko/docs/guides/dashboards/dashboard-img/dashboard-setup-duplicate-02.png)

- 대시보드 이름
- 공개 여부: `비공개`와 `공개` 중 하나를 선택합니다.

<br>


## 레이블 추가하기 

[**여기**](/ko/docs/guides/dashboards/edit/#레이블-추가하기) 페이지에서와 동일하게 레이블 추가/삭제가 가능합니다. 

![dashboard-setup-label-01](/ko/docs/guides/dashboards/dashboard-img/dashboard-setup-label-01.png)


<br>

## 필터 설정하기

필터를 설정하면 대시보드의 데이터를 원하는 조건으로 필터링하여 볼 수 있습니다.

(1) 대시보드 상단의 Variable(변수) 항목 중 원하는 항목의 세부 옵션을 선택합니다. 

![dashboard-setup-filter-01](/ko/docs/guides/dashboards/dashboard-img/dashboard-setup-filter-01.png)


(2) 앞전에 저장된 설정과 차이가 있을 경우, 우측에 [저장] 버튼이 활성화되며 이를 통해 빠르게 변경을 저장할 수 있습니다. 

![dashboard-setup-filter-02](/ko/docs/guides/dashboards/dashboard-img/dashboard-setup-filter-02.png)


(3) 옵션을 변경 중 최근에 저장된 값으로 되돌리고 싶을 경우, [초기화] 버튼을 클릭합니다. 

![dashboard-setup-filter-03](/ko/docs/guides/dashboards/dashboard-img/dashboard-setup-filter-03.png)


(4) [+ 추가] > [변수 관리] 버튼을 클릭하여, 변수 전체 항목에 대해 확인할 수 있으며, 커스텀 변수 추가 또한 가능합니다. 

![dashboard-setup-filter-04](/ko/docs/guides/dashboards/dashboard-img/dashboard-setup-filter-04.png)


(4-1) 커스텀 변수 추가가 필요할 경우, [변수 관리] 창의 우측 상단에 [+변수 추가] 버튼을 클릭합니다.

![dashboard-setup-filter-05](/ko/docs/guides/dashboards/dashboard-img/dashboard-setup-filter-05.png)


(4-2) 추가 원하는 변수의 기본 정보를 입력한 후, [저장] 버튼을 클릭합니다.

![dashboard-setup-filter-06](/ko/docs/guides/dashboards/dashboard-img/dashboard-setup-filter-06.png)


<br> 

## 기간 설정하기

대시보드 우측 상단의 [기간] 드롭다운에서 특정 월을 선택하거나, [커스텀] 메뉴를 통해 최근 3개년 기간 중에 특정 월을 선택할 수 있습니다. 

{{<alert>}}
[편집] 모드가 아닌 [보기] 모드에서는 기간을 변경하더라도 저장되지 않습니다.
{{</alert>}}

![dashboard-setup-duration-01](/ko/docs/guides/dashboards/dashboard-img/dashboard-setup-duration-01.png)


<br>

## 데이터 새로고침 설정하기

대시보드 우측 상단의 [새로고침] 드롭다운에서 데이터 갱신 주기를 선택할 수 있습니다. 

{{<alert>}}
[편집] 모드가 아닌 [보기] 모드에서는 해당 주기를 변경하더라도 저장되지 않습니다.
{{</alert>}}

![dashboard-setup-refresh-01](/ko/docs/guides/dashboards/dashboard-img/dashboard-setup-refresh-01.png)


<br>


## 위젯 전체보기 및 설정 편집하기

(1) 특정 위젯의 우측 상단에 있는 [전체화면] 아이콘 버튼을 클릭합니다.

![dashboard-setup-full-screen-01](/ko/docs/guides/dashboards/dashboard-img/dashboard-setup-full-screen-01.png)


(2) 전체화면에서는 상세한 위젯 데이터 확인이 가능합니다. 상단 필터 항목은 대시보드 Variable(변수)와 동일한 항목으로, 각 옵션들을 변경해보며, 해당 위젯의 데이터를 자세히 확인해 볼 수 있습니다. (단, [전체화면] 모드에서 대시보드 변수를 변경한 내역은 저장되지 않습니다.) 

![dashboard-setup-full-screen-02](/ko/docs/guides/dashboards/dashboard-img/dashboard-setup-full-screen-02.png)


(3) 위젯의 세부 수정이 필요시, 우측 상단의 [옵션 편집] 버튼을 클릭합니다.

![dashboard-setup-full-screen-03](/ko/docs/guides/dashboards/dashboard-img/dashboard-setup-full-screen-03.png)


(4) [편집] 모드에서와 동일하게, 위젯의 세부 항목을 수정하고 저장할 수 있습니다. 

- 위젯 옵션 설정 관련 내용은 [**이 곳**](/ko/docs/guides/dashboards/edit/#위젯-추가하기)을 참고하십시오. 

![dashboard-setup-full-screen-04](/ko/docs/guides/dashboards/dashboard-img/dashboard-setup-full-screen-04.png)

