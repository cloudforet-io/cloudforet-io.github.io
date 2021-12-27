---
title: "Understanding Policy"
linkTitle: "Understanding Policy"
weight: 2
date: 2021-11-17
description: >
    이 페이지에서는 Policy에 대해 상세하게 살펴봅니다. 
---


## Policy

Policy는 SpaceONE 자원에 대해 특정한 동작을 수행할 수 있도록 정의된 permissions의 set 입니다.
Permission은 Cloud Resource에 대해 관리할 수 있는 범위를 정의 합니다. 
권한관리 체계에 대한 전반적인 설명은 [Role Based Access Control](/ko/docs/concepts/rbac/)을 참고 해주세요. 


## Policy Type

한번 정의된 Policy는 다른 도메인의 Role에서 사용할 수 있도록 공유 할 수 있습니다. 이것의 가능 여부에 따라 Policy는 두 가지 타입으로 구분 됩니다.
- MANAGED : Repository 서비스에 Global하게 정의된 Policy로서, Policy를 전체 시스템 Admin이 직접 관리 하여 공유합니다. 대부분의 사용자들이 활용하기 편리한 공통 policy 입니다.
- CUSTOM : 도메인별로 Permission을 자체 정의한 Policy를 사용할 수 있습니다. 각 도메인별로 세부적인 permission을 관리 하기에 유용합니다.

{{< alert title="Note" >}}
*MANAGED Policy* 는 *Official Marketplace*에 게시되어 SpaceONE팀이 관리합니다.

*Custom Policy*는 *Private Repository*에 게시되어 각 도메인의 관리자가 관리합니다.
{{< /alert >}}

## Managed Policy

아래의 Policy는 SpaceONE 팀에 의해 관리되는 Managed Policy의 전체 리스트 입니다.
상세 Permission은 필요시 자동으로 업데이트 됩니다. Policy는 조직내의 주요 역할에 따라 분류하여 생성 하였습니다.

| Policy Type |          Policy Name          |               Policy Id               | Permission Description                                                                                                                                                                                                                              |                 Reference                 |
|:-----------:|:-----------------------------:|:-------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------:|
|   MANAGED   |      Domain Admin Access      |      policy-managed-domain-admin      | <br> 아래를 제외한 모든 권한을 가짐 <br> Domain을 생성/삭제 <br> api_type이 SYSTEM/NO_AUTH <br>DomainOwner를 관리(생성/변경/삭제) <br>플러그인 관리 identity.Auth Plugin 관리(변경)                                                                                                       |      [policy-managed-domain-admin]()      |
|   MANAGED   |     Domain Viewer Access      |     policy-managed-domain-viewer      | Domain Admin Access 권한중 읽기 권한                                                                                                                                                                                                                       |     [policy-managed-domain-viewer]()      |
|   MANAGED   |     Project Admin Access      |     policy-managed-project-admin      | Domain Admin Access Policy에서 아래 Permission 제외 <br> Provider를 관리(생성/변경/조회/삭제) <br> Role/Policy를 관리(생성/변경/삭제) <br> 플러그인 관리 inventory.Collector (생성/변경/삭제) <br> 플러그인 관리 monitoring.DataSource (생성/변경/삭제) <br> 플러그인 관리 notification.Protocol (생성/변경/삭제) |     [policy-managed-project-admin]()      |
|   MANAGED   |     Project Viewer Access     |     policy-managed-project-viewer     | Project Admin Access Policy의 Permission중 읽기 권한을 포함                                                                                                                                                                                                  |     [policy-managed-project-viewer]()     |
|   MANAGED   |     Billing Admin Access      |     policy-managed-billing-admin      | Billing 모든 기능에 대한 권한을 포함 <br> Notification 에 대한 모든 권한                                                                                                                                                                                               |     [policy-managed-billing-admin]()      |
|   MANAGED   |    Billing Operator Access    |    policy-managed-billing-operator    | Billing 모든 기능에 대한 Viewer 권한중 아래 권한을 추가 <br> billing v2 에 대한 일부 Write <br> Notification 에 대한 조회                                                                                                                                                      |    [policy-managed-billing-operator]()    |
|   MANAGED   | Alert Manager Operator Access | policy-managed-alert-manager-operator | Project Viewer Access 권한중 아래 Resource에 대한 일부 Write 권한을 가짐 <br> monitoring.Alert monitoring.Note                                                                                                                                                     | [policy-managed-alert-manager-operator]() |


## Custom Policy

도메인 자체적 으로 Policy를 관리 하고자 할 경우, [Custom Policy 관리하기](/ko/docs/guides/spaceone_cli/managing_role_policy/) 문서를 참고 해 주세요. 


