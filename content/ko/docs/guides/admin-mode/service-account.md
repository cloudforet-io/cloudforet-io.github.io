---
weight: 8
description: |
  클라우드 프로바이더별 최상위 조직 계정을 추가/관리하고, 자동으로 동기화할 수 있어 빠른 워크스페이스/프로젝트 생성이 가능합니다. 
title: 서비스 어카운트 관리
---

## 메뉴 진입하기

(1) Admin 모드로 전환하기

![](/guides/admin/admin_mode/admin-mode-01-ko.png)

(2) \[에셋 인벤토리 > 서비스 어카운트]로 이동

<br> <br>

## Trusted Account를 활용한 계정 관리

Admin 모드에서는 전체 워크스페이스에서 `General Account`와 연결 가능한 **Global** `Trusted Account`를 생성할 수 있습니다.

💡 `Trusted Account`는 다음과 같은 목적으로 사용됩니다.

1\) 다른 어카운트 추가 생성 시, 주요 키 값 없이 연결하여 생성할 수 있는 상위 레벨 어카운트

* 신규 `General Account` 생성 시, 암호화 키 입력 대신 `Trusted Account`를 참조하여 쉽게 생성할 수 있어 조직의 체계에 맞는 계정 보안을 유지할 수 있습니다.

2\) 계정 자동 동기화

* 개별 어카운트를 일일이 입력 하는 대신, Auto Sync(자동 동기화)기능을 활용하여 클라우드 프로바이더에서 구성한 조직 체계를 Cloudforet 시스템에 자동으로 연동할 수 있습니다. 계정 자동 동기화 설정은 아래에서 자세히 확인할 수 있습니다.

<br> <br>

## Trusted Account 자동 동기화 설정

**\[ 자동 동기화 기본 구조 ]**

SpaceONE은 `Workspace > Project Group > Project - Service Account`의 관리 체계(구조)를 가지고 있습니다.
하나의 Cloud 자원을 수집했을 때 Project에 매핑되어 관리되어 목적에 맞게 Grouping 용도로 사용할 수 있습니다.

![](/guides/admin/service_account/project-hierarchy-ko.png)

➊ Workspace

: 가장 상위 관리 체계로 작업 공간을 구분합니다. 이는 회사 별 또는 사내 조직별로 작업 공간을 구분할 수 있습니다.

➋ Project Group

: 세분화된 부서를 표현할 수 있는 체계에 해당합니다. 흔히 볼 수 있는 폴더 구조를 가지고 있습니다.

➌ Project

: 실제 Cloud 자원이 매핑되는 하위 관리 체계입니다. 프로젝트 단위를 의미하며 해당 프로젝트에 사용되는 한 개 또는 여러 개의 계정(Service Account)을 매핑할 수 있습니다.

* Service Account: 실제 수집에 사용되는 계정을 의미하며 Project에 종속되어 있습니다.

<br>

**\[ 자동 동기화 등록 ]**

1\) 특정 클라우드 프로바이더 선택 후, \[+ 생성] 버튼 클릭하여 생성 페이지로 이동

![](/guides/admin/service_account/create-trusted-account-01-ko.png)

2\) 기본정보 및 암호화 키 입력

3\) 자동 동기화 세부 설정

* 자동 동기화 켜기(ON)

![](/guides/admin/service_account/create-trusted-account-02-ko.png)

* 매핑 방식 선택

![](/guides/admin/service_account/create-trusted-account-03-ko.png)

* 시간 수집 스케줄 설정: 일일 계정 자동 동기화 시간대를 최대 2개 선택할 수 있습니다.

![](/guides/admin/service_account/create-trusted-account-04-ko.png)

<br>

**\[ 클라우드 프로바이더별 자동 동기화 설정 ]**

* [AWS 계정 자동 동기화](/ko/docs/guides/account-hierarchy/aws/)
* [Azure 계정 자동 동기화](/ko/docs/guides/account-hierarchy/azure/)
* [GCP 계정 자동 동기화](/ko/docs/guides/account-hierarchy/gcp/)

<br> <br>

## 생성된 Trusted Account 상세 확인 및 수정/삭제

1\) Admin Center의 \[에셋 인벤토리 > 서비스 어카운트] 페이지 목록에서 생성된 Trusted Account 클릭

![](/guides/admin/service_account/view-trusted-account-01-ko.png)

2\) 기본 정보 확인 및 수정

![](/guides/admin/service_account/view-trusted-account-02-ko.png)

3\) 연결된 General Account 목록 확인

💡 자동 동기화가 설정된 경우,

* 해당 CSP(클라우드 프로바이더)의 계층 구조가 자동으로 반영되어 있음을 확인할 수 있습니다.
* 설정된 자동 동기화 스케줄 시간 외에도 \[동기화] 버튼을 클릭하여 즉시 계정을 업데이트 할 수 있습니다.

![](/guides/admin/service_account/view-trusted-account-03-ko.png)

4\) 자동 동기화 설정 확인 및 수정

* 자동 동기화 ON/OFF를 비롯해 동기화 스케줄등의 세부 설정이 가능합니다.

![](/guides/admin/service_account/view-trusted-account-04-ko.png)

5\) 서비스 어카운트 이름 수정 또는 삭제 

* 맨 상단 컬렉터 이름 옆 \[✏️] 편집 버튼을 통해 컬렉터 이름 수정 가능
* 맨 상단 컬렉터 이름 옆 \[🗑️] 삭제 버튼을 통해 컬렉터 삭제 가능

![](/guides/admin/service_account/delete-service-account.png)
