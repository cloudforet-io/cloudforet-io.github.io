---
weight: 2
description: |
  Azure 구독 기준의 계정 연동 가이드
title: Azure 계정 자동 동기화
---

SpaceONE(Cloudforet)이 제공하는 Account Auto Sync를 통해 **Azure 구독**을 기준으로 **Tenant** 포함 하위에 존재하는 관리 그룹의 계층을 SpaceONE에 동기화 할 수 있습니다.

<br> <br>

## 계층 구조 동기화

SpaceONE의 Trusted Service Account를 통해 Azure의 Resource 계층 구조를 자동으로 동기화할 수 있습니다.

각각의 구독을 기준으로 계층을 파악하여 동기화 되며 SpaceONE의 워크스페이스, 프로젝트 그룹, 프로젝트 그리고 서비스어카운트로 동기화가 이루어 집니다.

 <br>

**\[자동 동기화 기준]**

| Azure             | SpaceONE(Cloudforet)        |
| ----------------- | --------------------------- |
| Azure AD Tenant   | Workspace, Project Group    |
| Management Groups | Project Group               |
| Subscription      | Project and Service Account |

<br>

**\[Azure 계층 구조 참고]**

![](/guides/service_account/azure-account.png)

<br> 

Azure CSP 공급자가 관리하는 고객의 구독에 대한 동기화 과정은 아래와 같습니다.

* 먼저 관리하는 고객(customer)의 리스트를 조회합니다.
* 고객이 소유한 구독의 정보를 조회합니다.
* 만약 App이 고객의 관리 그룹의 대한 조회 권한이 있을 경우 구독이 속한 Management Group의 계층 구조를 조회합니다.

<br> 

## 권한 부여

SpaceONE에서 Service Account Auto Sync 기능을 사용하기 위해 Azure의 서비스 주체(Service Principal)에 권한을 올바르게 할당해야 합니다.

<br> 

### ➊ Management Group

[Azure의 공식 문서](https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal?tabs=delegate-condition)를 참고하여 관리그룹의 IAM에 생성한 앱을 등록해 주세요.

필요 [권한은 관리 그룹 읽기 권한자](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/management-and-governance#management-group-reader) 입니다.

<br> 

### ➋ CSP

[Azure의 공식 문서](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/understand-mca-roles#manage-billing-roles-in-the-azure-portal)를 참고하여 비용 분석의 IAM에 생성한 앱을 등록해 주세요. CSP의 권한으로 고객의 테넌트와 구독 정보를 가져옵니다.
필요 권한은 [비용 관리 읽기 권한자](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/management-and-governance#cost-management-reader) 입니다.

<br> 

### ➌ EA (지원 예정)

<br> <br>

## 자동화 결과

SpaceONE의 Account Auto Sync 기능은 Trusted Account **Scope**에 따라 다르게 적용됩니다.

<br> 

### ✔️ Domain Scope의 Trusted Account (Admin Mode에서 생성 가능)

Domain에서 생성된 Trusted Account의 경우, Tenant가 SpaceONE의 (멀티 또는 단일)Workspace가 되어 동기화가 적용됩니다.

| Azure             | SpaceONE(Cloudforet)        |
| ----------------- | --------------------------- |
| Azure AD Tenant   | Workspace                   |
| Management Groups | Project Group               |
| Subscription      | Project and Service Account |

{{<alert>}}
Admin Mode에서 Trusted Account 생성 관련 세부 내용은 [이 곳](/ko/docs/guides/admin-mode/service-account/)을 참고하십시오.
{{</alert>}}

<br> 

### ✔️ Workspace Scope의 Trusted Account

Workspace에서 생성된 Trusted Account의 경우 Workspace 하위에 동기화가 적용됩니다.

| Azure             | SpaceONE(Cloudforet)        |
| ----------------- | --------------------------- |
| Azure AD Tenant   | Project Group               |
| Management Groups | Project Group               |
| Subscription      | Project and Service Account |
