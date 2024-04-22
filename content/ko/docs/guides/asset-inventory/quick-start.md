---
linkTitle: Quick Start
weight: 1
date: '2022-06-23T00:00:00.000Z'
description: |
  **에셋 인벤토리** 서비스를 빠르게 사용하기 위한 과정을 소개합니다.
title: Quick Start
---

## 메뉴 진입하기

(1) 특정 워크스페이스 선택

![](/guides/admin/workspaces/move-to-workspace-ko.png)

(2) \[에셋 인벤토리 > 서비스 어카운트]로 이동

<br> <br>

## 서비스 계정 생성하기

(1) 추가할 클라우드 서비스(프로바이더)를 선택합니다.

![](/guides/service_account/service-account-select-provider-ko.png)

(2) \[추가] 버튼을 클릭합니다.

![](/guides/service_account/service-account-select-create-01-ko.png)

(3) 서비스 어카운트 생성 폼을 작성

(3-1) 기본 정보를 입력합니다.

![service-account-add-base-info](/ko/docs/guides/asset-inventory/quick-start-img/service-account-add-base-info.png)

(3-2) 해당 서비스 계정에 따른 리소스를 수집할 프로젝트를 지정합니다.

![service-account-connect-project](/ko/docs/guides/asset-inventory/quick-start-img/service-account-connect-project.png)

{{<alert>}}
프로젝트 관리에 대한 세부 정보는 [이곳](/ko/docs/guides/project/)을 참고하세요.
{{</alert>}}

<br>

(3-3) 암호화 키 정보를 입력합니다.

![service-account-add-key](/ko/docs/guides/asset-inventory/quick-start-img/service-account-add-key.png)

<br> <br>

## 자원 수집하기

\[에셋 인벤토리 > 컬렉터] 페이지에서는 해당 워크스페이스 내에 자원 수집을 수행할 수 있는 컬렉터 목록을 확인할 수 있습니다.

(1) 특정 컬렉터에 마우스 오버 

![](/guides/collector/collector-admin-only-03-ko.png)

`Admin에 의해 관리됨` 으로 표시되는 컬렉터의 경우, <br>

Admin 모드에서 생성된 Global 범위의 컬렉터로 스케줄과 정보 수정은 불가하며, 데이터 수집만 가능합니다. ![](/guides/collector/collector-admin-only-02-ko_.png)

{{<alert title="Admin 모드란 ?">}}
Admin 역할 타입을 가진 사용자만 접근할 수 있는 별도의 관리자 전용 모드입니다.
관리자 가이드는 [이곳](/ko/docs/guides/admin-mode/)을 참고해주세요.

* Admin 역할을 가진 사용자만이 `Admin 모드`로 전환하여 Global 범위의 컬렉터를 생성하고 관리할 수 있습니다.

{{</alert>}}

<br><br>

## 컬렉터 생성하기

\[에셋 인벤토리 > 컬렉터] 페이지에서 리소스를 수집할 컬렉터를 생성합니다.

(1) \[생성] 버튼을 클릭합니다.

![collector-create-button](/ko/docs/guides/asset-inventory/quick-start-img/collector-create-button.png)

(2) 리소스 수집 시 사용할 플러그인을 선택합니다.

![collector-plugin-list](/ko/docs/guides/asset-inventory/quick-start-img/collector-plugin-list.png)

(3) 컬렉터 생성 폼을 작성합니다.
(3-1) 이름과 버전 등 기본 정보를 입력합니다.

![collector-create-base-info](/ko/docs/guides/asset-inventory/quick-start-img/collector-create-base-info.png)

(3-2) 필요 시 태그를 추가합니다.

![collector-create-tag](/ko/docs/guides/asset-inventory/quick-start-img/collector-create-tag.png)

(4) 컬렉터 실행을 위한 스케줄을 생성합니다.

(4-1) \[에셋 인벤토리 > 컬렉터] 페이지에서 테이블의 컬렉터 하나를 선택한 뒤, \[스케줄] 탭에서 \[추가] 버튼을 클릭합니다.

![collector-single-select](/ko/docs/guides/asset-inventory/quick-start-img/collector-single-select.png)

(4-2) \[스케줄 추가] 모달에서 컬렉터를 실행할 시간을 설정한 뒤 \[확인] 버튼을 클릭합니다.

![collector-schedule-modal](/ko/docs/guides/asset-inventory/quick-start-img/collector-schedule-modal.png)

## 수집된 리소스 확인하기

\[에셋 인벤토리 > 클라우드 서비스]에서 수집된 리소스를 조회할 수 있습니다.

![collector-resource-inquiry](/ko/docs/guides/asset-inventory/quick-start-img/collector-resource-inquiry.png)
