---
title: "대시보드 편집"
linkTitle: "대시보드 편집"
weight: 5
date: 2023-10-16
description: >
    대시보드 [편집] 모드에서 대시보드 이름, 레이아웃, 위젯 등을 수정할 수 있습니다. 

---

## 대시보드 편집하기 

### 편집 모드 이동하기 

대시보드 페이지에서 오른쪽의 [편집] 버튼을 클릭하면 대시보드 편집 페이지로 이동합니다.

![dashboard-edit-intro-01](/ko/docs/guides/dashboards/dashboard-img/dashboard-edit-intro-01.png)

<br>

### 이름 편집하기

대시보드 제목 옆의 [편집] 아이콘 버튼을 클릭해서 변경할 수 있습니다.

![dashboard-edit-name-01](/ko/docs/guides/dashboards/dashboard-img/dashboard-edit-name-01.png)

<br>

### 레이블 추가하기 

상단 대시보드 이름 바로 하단에서 레이블을 추가/삭제 할 수 있습니다. 레이블은 대시보드 관련 카테고리, 특징 등을 구분하는데 이용되며, 이후 대시보드 검색시 유용하게 활용될 수 있습니다. 

![dashboard-edit-label-01](/ko/docs/guides/dashboards/dashboard-img/dashboard-edit-label-01.png)

<br>

### 기간 적용하기 

(1) [기간 적용 옵션]을 활성화할 경우, 해당 대시보드에 기간을 설정할 수 있는 드랍다운 버튼이 보여집니다. 

![dashboard-edit-duration-01](/ko/docs/guides/dashboards/dashboard-img/dashboard-edit-duration-01.png)

(2) 기간 드롭다운에서 특정 월을 선택하거나, [커스텀] 메뉴를 통해 최근 3개년 기간 중에 특정 월을 선택할 수 있습니다. 

![dashboard-edit-duration-02](/ko/docs/guides/dashboards/dashboard-img/dashboard-edit-duration-02.png)

{{<alert>}}
기간 적용 옵션을 활성화 하더라도, 모든 위젯에 기간이 적용되지는 않습니다. 위젯 특성에 따라 기간을 적용할 수 있는 위젯, 적용할 수 없는 위젯으로 나뉩니다.
{{</alert>}}

<br>

### 데이터 새로고침 설정하기

대시보드 우측 상단의 [새로고침] 드롭다운에서 데이터 갱신 주기를 선택할 수 있습니다.  

![dashboard-edit-refresh-01](/ko/docs/guides/dashboards/dashboard-img/dashboard-edit-refresh-01.png)

<br>

### 위젯 추가하기

(1) 오른쪽의 대시보드 편집 페이지의 [위젯 추가] 버튼을 클릭합니다.

![dashboard-edit-add-widget-01](/ko/docs/guides/dashboards/dashboard-img/dashboard-edit-add-widget-01.png)

<br>

(2) 좌측 위젯 목록 중 특정 위젯을 선택하여 추가합니다. 

![dashboard-edit-add-widget-02](/ko/docs/guides/dashboards/dashboard-img/dashboard-edit-add-widget-02.png)

{{<alert>}}
[비용], [에셋], [얼럿] 목록에 따라 다양한 위젯을 선택할 수 있습니다. (위젯은 지속적인 업데이트가 진행될 예정입니다.)
{{</alert>}}


(2-2) 특정 위젯을 선택했다면, [이름] 입력 후 세부 옵션을 설정합니다. 

![dashboard-edit-add-widget-03](/ko/docs/guides/dashboards/dashboard-img/dashboard-edit-add-widget-03.png)

{{<alert>}}
**[상속받기] On/Off:** 위젯 별로 제공하는 옵션들의 경우, 대부분 대시보드의 Variable(변수)을 기본적으로 상속받도록 초기 설정이 되어있습니다. ‘대시보드로부터 상속받는다’는 것은 해당 변수의 옵션을 대시보드에서 변경 시 이를 상속받고 있는 옵션을 가진 위젯 들에 일괄 반영이 된다는 것을 의미합니다. 이와 반대로 특정 옵션이 비상속 상태의 경우, 대시보드에서 해당 변수를 변경하더라도 해당 위젯에는 영향을 미치지 않습니다.

e.g. Cost Map 위젯에 `Project` 옵션이 ‘상속받기’로 설정되어 있으며, 대시보드에서 `Project`를 ‘Project A’로만 필터를 걸었다면? 해당 위젯은 이제 ‘Project A’에 해당하는 데이터로만 표시가 됩니다. 
{{</alert>}}

{{<alert>}}
**초기 설정으로 돌아가기:** 위젯 별로 해당 대시보드의 Variable(변수)와 상응하는 기본 옵션 값들이 기본적으로 설정되어 있습니다. 대시보드를 구성하는 과정에서 위젯에 옵션 값을 여러 번 변경했더라도, [초기 설정으로 돌아가기] 버튼을 클릭하면 초기에 설정된 기본 옵션 값으로 쉽게 되돌릴 수 있습니다. 
{{</alert>}}


(2-3) 추가하고자 하는 옵션이 없을 경우, [+옵션 추가] 버튼을 클릭하여 추가할 수 있습니다.

![dashboard-edit-add-widget-04](/ko/docs/guides/dashboards/dashboard-img/dashboard-edit-add-widget-04.png)

(2-4) 설정이 마무리되었다면, [확인] 버튼을 클릭하여 대시보드에 위젯 추가를 완료합니다.


<br>

### 위젯 순서 변경하기

우측 패널의 위젯 목록에서 위젯 이름 버튼을 드래그 & 드롭하여 순서를 변경할 수 있습니다.

![dashboard-edit-change-widget-01](/ko/docs/guides/dashboards/dashboard-img/dashboard-edit-change-widget-01.png)


<br>

### 위젯 크기 조정하기

전체화면으로 보고 싶은 위젯 오른쪽 상단의 [전체화면] 아이콘 버튼을 클릭합니다. 

![dashboard-edit-full-screen-01](/ko/docs/guides/dashboards/dashboard-img/dashboard-edit-full-screen-01.png)

![dashboard-edit-full-screen-02](/ko/docs/guides/dashboards/dashboard-img/dashboard-edit-full-screen-02.png)


<br>

### 위젯 편집하기

(1) 위젯 우측 상단에 있는 [편집] 아이콘 버튼을 클릭합니다.

![dashboard-update-widget-01](/ko/docs/guides/dashboards/dashboard-img/dashboard-update-widget-01.png)

(2) 위젯 이름 및 옵션을 수정하고, [확인] 버튼을 클릭하여 저장합니다. (단, [편집] 모드에서 대시보드 [저장]을 하지 않을 경우, 저장한 위젯은 최종 반영되지 않습니다.) 

- 위젯 옵션 설정 관련 내용은 [**여기**](/ko/docs/guides/dashboards/edit/#위젯-추가하기)를 참고하십시오. 

![dashboard-update-widget-02](/ko/docs/guides/dashboards/dashboard-img/dashboard-update-widget-02.png)
