---
title: "Understanding Policy"
linkTitle: "Understanding Policy"
weight: 2
date: 2021-11-17
description: >
    Policy는 SpaceONE 자원에 대해 특정한 동작을 수행할 수 있도록 정의된 permissions의 set 입니다.
---


## Policy

Policy는 Permission의 모음 입니다. Permission은 Cloud Resource에 대해 관리할 수 있는 범위를 정의 합니다. 



## Policy Type

한번 정의된 Policy는 다른 도메인의 Role에서 사용할 수 있도록 공유 할 수 있습니다. 이것의 가능 여부에 따라 Policy는 두 가지 타입으로 구분 됩니다.
- MANAGED : Repository 서비스에 Global하게 정의된 Policy로서, Policy를 전체 시스템 Admin이 직접 관리 하여 공유합니다. 대부분의 사용자들이 활용하기 편리한 공통 policy 입니다.
- CUSTOM : 도메인별로 Permission을 자체 정의한 Policy를 사용할 수 있습니다. 각 도메인별로 세부적인 permission을 관리 하기에 유용합니다.


### Managed Policy List

Marketplace 서비스에 사전 정의된 Policy List 입니다. 

| Policy Type | Policy Name | Policy Id | Permission |
|:---:|:---:|:---:|:---:|
|MANAGED|Domain Admin Access|policy-managed-domain-admin |아래를 제외한 모든 권한을 가짐 Domain을 생성/삭제 api_type이 SYSTEM/NO_AUTH DomainOwner를 관리(생성/변경/삭제) 플러그인 관리 identity.Auth Plugin 관리(변경)|
|MANAGED|Domain Viewer Access|policy-managed-domain-viewer|Domain Admin Access 권한중 api_type=READ|
|MANAGED|Project Admin Access|policy-managed-project-admin|아래를 제외한 모든 권한을 가짐 Domain Admin 권한에서 아래 권한 더 빠짐 Provider를 관리(생성/변경/조회/삭제) Role/Policy를 관리(생성/변경/삭제) 플러그인 관리 inventory.Collector (생성/변경/삭제) monitoring.DataSource (생성/변경/삭제) notificatoin.Protocol (생성/변경/삭제)|
|MANAGED|Project Viewer Access|policy-managed-project-viewer|Project Admin Access 권한중 api_type=READ|
|MANAGED|Billing Admin Access|policy-managed-billing-admin|Billing 모든 메뉴에 대한 모든 권한을 가짐 Notification 에 대한 모든 권한을 가짐|
|MANAGED|Billing Operator Access|policy-managed-billing-operator|Billing 모든 메뉴에 대한 Project Viewer 권한중 billing v2 에 대한 일부 Write 권한을 가짐 Notification 에 대한 조회 권한을 가짐|
|MANAGED|Alert Manager Operator Access|policy-managed-alert-manager-operator|Project ReadOnly Access 권한중 아래 Resource에 대한 일부 Write 권한을 가짐 monitoring.Alert monitoring.Note |

