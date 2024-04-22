---
weight: 8
description: |
  도메인 내 전체 워크스페이스의 자원을 확인하고 세부 기능을 이용할 수 있습니다.
title: 전체 자원 관리
---

## 메뉴 진입하기

(1) Admin 모드로 전환하기

![](/guides/admin/admin_mode/admin-mode-01-ko.png)

<br> <br>

## 컬렉터 생성 및 관리

{{<alert>}}
Admin 모드에서 생성한 컬렉터는 Global 컬렉터로 전체 워크스페이스에 일괄 생성됩니다.

Global 컬렉터는 개별 워크스페이스에서는 **데이터 수집** 외 수정/삭제가 불가합니다.
{{</alert>}}

### ➊ 컬렉터 생성

(1) Admin 모드 - \[에셋인벤토리 > 컬렉터] 로 이동

(2) \[+ 생성] 버튼 클릭

![](/guides/admin/collector/collector-01-ko.png)

(3) 수집하고자 하는 데이터에 맞는 컬렉터를 선택

![](/guides/admin/collector/collector-02-ko.png)

* 컬렉터 플러그인에 대한 자세한 설명은 [여기](http://localhost:1313/ko/docs/guides/plugins/asset-inventory-collector)를 참고 하십시오.

(4) Step 1부터 4까지 진행

* 생성 마지막 단계(Step 4)에서는 수집 스케줄 설정을 할 수 있으며, 생성 완료 후 '데이터 즉시 수집' 또한 가능합니다.

![](/guides/admin/collector/collector-03-ko.png)

<br> 

### ➋ 컬렉터 수정/삭제

(1) Admin 모드 - \[에셋인벤토리 > 컬렉터] 로 이동

(2) 생성된 컬렉터 리스트 중 수정하고자 하는 컬렉터 선택

![](/guides/admin/collector/collector-04-ko.png)

(3) 선택한 컬렉터의 상세페이지로 이동하여 영역별 \[수정] 가능

* 기본정보 / 스케줄 / 추가 옵션

![](/guides/admin/collector/collector-05-ko.png)

(4) 컬렉터 이름 수정 또는 삭제

* 맨 상단 컬렉터 이름 옆 \[✏️] 편집 버튼을 통해 컬렉터 이름 수정 가능
* 맨 상단 컬렉터 이름 옆 \[🗑️] 삭제 버튼을 통해 컬렉터 삭제 가능

![](/guides/admin/collector/collector-06.png)

<br> 

### ➌ 데이터 수집

(1) Admin 모드 - \[에셋인벤토리 > 컬렉터] 로 이동

(2) 특정 컬렉터에 마우스 오버시 나타나는 \[데이터 수집] 버튼을 통해 즉시 수집 가능

![](/guides/admin/collector/collector-07-ko.png)

(3) 특정 컬렉터를 클릭하여 상세페이지로 이동 후 상단 \[데이터 수집] 버튼을 통해 즉시 수집 가능

![](/guides/admin/collector/collector-08-ko.png)

{{<alert>}}
데이터 수집의 경우, 개별 워크스페이스내에 등록된 (클라우드) 서비스 어카운트를 기준으로 수집이 이루어집니다.

워크스페이스 환경에 서비스 어카운트 등록 및 관리는 [이 곳](/ko/docs/guides/asset-inventory/service-account/ "이 곳")을 참고하십시오.
{{</alert>}}

<br> <br>

## 도메인 내 전체 자원 확인

Admin 모드에서는 도메인 내 전체 워크스페이스에서 수집된 자원을 한번에 확인할 수 있습니다.

(1)  \[에셋인벤토리 > 클라우드 서비스]: 클라우드 서비스의 자원 전체 현황

(2)  \[에셋인벤토리 > 서버]: 클라우드 서비스의 자원 중 서버 현황

(3)  \[에셋인벤토리 > 보안]: 생성한 보안 플러그인의 프레임워크별 보안 현황 및 체크 리스트
