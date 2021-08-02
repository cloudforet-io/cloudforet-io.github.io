---
title: "Custom Table"
linkTitle: "Custom Table"
weight: 1
date: 2021-07-31
description: >
    표시하고 싶은 테이블의 필드를 관리합니다.
---


# Custom Table

## 개요

자원 목록 테이블에 표시하고 싶은 필드를 개인화할 수 있습니다.

이를 설정하면, 이후에 해당 테이블의 자원을 표시할 때에는, 설정된 필드를 기준으로 보여집니다.

### 필드 설정하기

필드를 변경하고자 하는 테이블의 우측 상단의 '설정' 버튼을 클릭하여 **필드 개인화 모달**을 띄웁니다.

![](/docs/using_spaceone_console/advanced_topics/img/01_server_page.png)

{% hint style="info" %}
현재 필드 개인화가 지원되는 테이블은 아래와 같습니다.

* Inventory &gt; Server - Main Table
* Inventory &gt; Cloud Service Detail - Main Table
* Identity &gt; Service Account - Main Table
  {% endhint %}

#### 필드 선택하기

필드 개인화 모달의 좌측의 '필드 속성'에는 기본적으로 제공되는 필드 목록이 보여집니다.   
그리고 현재 선택된 필드들이 선택된 상태로 표시됩니다.   
이 곳에서 원하는 필드를 선택할 수 있습니다.

![](/docs/using_spaceone_console/advanced_topics/img/02_field_select.png)

#### 태그 필드 추가하기

우측에서 태그를 선택하면, 선택한 태그가 필드로 추가됩니다.

![](/docs/using_spaceone_console/advanced_topics/img/03_add_tag_field.png)

#### 태그 필드 삭제하기

추가된 태그 필드는 우측에서 개별 삭제 버튼을 눌러 삭제하거나, 우측 상단의 '모두 지우기' 버튼을 통해 전체 태그 필드를 삭제할 수 있습니다.  
혹은 좌측 '필드 속성'의 목록에서 선택 해제하여 삭제할 수도 있습니다.

![](/docs/using_spaceone_console/advanced_topics/img/04_delete_tag_field.png)

#### 필드 검색하기

필드 목록이 많아서 스크롤하여 찾기가 어려운 경우, 검색하여 원하는 필드로 찾아갈 수 있습니다.

![](/docs/using_spaceone_console/advanced_topics/img/05_field_search.png)

#### 필드 순서 변경하기

선택된 필드를 끌어서 순서를 변경할 수 있습니다.

![](/docs/using_spaceone_console/advanced_topics/img/06_field_drag.png)

#### 기본 필드\(추천 필드\)로 돌아가기

SpaceONE에서 추천하는 필드 목록의 상태로 돌아가고 싶은 경우, 상단의 '기본 설정으로' 버튼을 눌러 초기화 해줍니다.

#### 필드 저장하기

원하는 필드와 그 순서의 변경을 마쳤으면, '확인' 버튼을 눌러 저장합니다.  
필드는 반드시 1개 이상 선택하여야 필드 변경을 마칠 수 있습니다.

### 개인화된 필드로 자원 목록 보기

![](/docs/using_spaceone_console/advanced_topics/img/07_server_page_after_custom.png)

