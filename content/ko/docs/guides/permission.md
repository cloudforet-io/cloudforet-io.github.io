---
linkTitle: 권한 체계
weight: 2
date: '2024-01-08T00:00:00.000Z'
description: >
  조직의 구성과 목적에 맞게 사용자별 접근 권한을 부여 하고 체계적으로 관리 시스템을 운영할 수 있도록 역할(Role) 타입이라는 기본적인
  권한 체계를 제공합니다.
title: 권한 체계
---

## 역할 타입

총 세 개의 타입을 기준으로 역할이 구성됩니다.

* Admin: 도메인 설정을 포함하여 모든 워크스페이스에 대한 접근 권한이 있으며, Admin 모드를 포함합니다.
* Workspace Owner: 워크스페이스 내의 모든 프로젝트에 대한 접근 권한이 있습니다.
* Workspace Member: 워크스페이스 내의 초대받은 프로젝트에만 접근 권한이 있습니다.

![](/guides/admin/iam_role/role-type-ko.png)

역할 타입별 기본 권한에 대해서는 아래 자세히 확인할 수 있습니다.

<br> <br>

## Admin 역할 타입

* 도메인 전체 사용자 관리 권한
  * 도메인, 전체 워크스페이스 내 사용자 초대 및 관리
  * Admin, Workspace Owner, Workspace Member 역할(Role) 부여
  * 역할(Role)별 서비스 세부 메뉴 접근 제한 설정
  * 사용자 계정에 대한 복구
* 워크스페이스 환경 관리 권한
  * 워크스페이스 생성 및 삭제
  * 전체 워크스페이스별 환경 접근 
* 앱(Client Secret) 관리 권한
  * 도메인 전체 접근 전용 앱(Client Secret) 생성 및 삭제
  * Admin 역할(Role)별 앱(Client Secret) 부여
* 도메인 설정 권한
  * 도메인 표시, 아이콘 등의 화이트 라벨링 설정 
  * 도메인 전체 타임존&언어 설정
* 이외 도메인 내 특정 서비스별 관리 권한  
  * 데이터 수집기 또는 비용 예산 등을 Global 범위로 생성

<br> <br>

## Workspace Owner 역할 타입

* 특정 워크스페이스 사용자 관리 권한
  * 워크스페이스 내 사용자 초대 및 관리 
  * Workspace Owner, Workspace Member 역할(Role) 부여 
* 앱(Client Secret) 관리 권한
  * 워크스페이스 접근 전용 앱(Client Secret) 생성 및 삭제
  * Workspace Owner 역할(Role)별 앱(Client Secret) 부여
* 신규 프로젝트 생성 및 전체 프로젝트 접근 권한
* 이외 워크스페이스 내 각 서비스별 관리 권한 

<br> <br>

## Workspace Member 역할 타입

* 특정 워크스페이스에 기본 서비스 접근 권한 
* 접근 가능한 일부 프로젝트 관리 권한 

<br> <br>

## Workspace Owner | Workspace Member 역할 타입 비교표

{{<alert>}}
Workspace Owner, Workspace Member는 본인이 속한 Workspace에 대한 접근만 가능합니다.
{{</alert>}}

![](/guides/admin/iam_role/role-type-comparison-ko.png)

<br> <br>

{{<alert>}}
[**이곳**](/ko/docs/guides/admin-mode/role/)에서 역할을 생성 및 관리에 대해 자세히 알아볼 수 있습니다. 
{{</alert>}}
