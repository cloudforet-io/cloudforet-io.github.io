---
weight: 3
description: |
  Google Cloud 관리 쳬계 기준의 계정 연동 가이드
title: GCP 계정 자동 동기화
---

SpaceONE(Cloudforet)이 제공하는 Account Auto Sync를 통해 **Google Cloud 계정**을 기준으로 하위에 존재하는 관리 그룹의 계층을 SpaceONE에 동기화 할 수 있습니다.

<br> <br>

## 계층 구조 동기화

SpaceONE의 Trusted Service Account를 통해 GCP의 Organization 계층 구조를 자동으로 동기화할 수 있습니다.

각각의 구독을 기준으로 계층을 파악하여 동기화 되며 SpaceONE의 워크스페이스, 프로젝트 그룹, 프로젝트 그리고 서비스어카운트로 동기화가 이루어 집니다.

 <br>

**\[자동 동기화 기준]**

| Google cloud    | SpaceONE(Cloudforet)     |
| --------------- | ------------------------ |
| Organization    | Workspace                |
| Folder          | Workspace, Project Group |
| Project         | Project                  |
| Service Account | Service Account          |

<br>

**\[GCP 계층 구조 참고]**

![](/guides/admin/service_account/gcp-org-node-setup.png)

Google Cloud의 관리 체계는 Organization > Folder > Project 구조로, SpaceONE과 동일한 구조를 가지는 것을 확인해볼 수 있습니다. 마찬가지로 Google Cloud계정은 이름이 동일한 Service Account를 가지고 있습니다.

{{<alert>}}
동일한 관리 체계를 가짐으로써 SpaceONE의 Sync 기능을 사용할 경우 Google Cloud에서 프로젝트 및 계정 관리에 있어 변동이 생기는 점을 SpaceONE에서 자동으로 반영해줄 수 있는 장점이 있습니다.
{{</alert>}}

<br> 

## 권한 부여

SpaceONE에서 Service Account Auto Sync 기능을 사용하기 위해 Organization에 사용 중인 Trusted Account 설정에 사용된 Service Account에 조직 뷰어(Organization Viewer), 폴더 뷰어(Folder Viewer)에 대한 롤을 추가해야 합니다.

![](/guides/admin/service_account/gcp-org-node-setup02.png)

<br> <br>

## 자동화 결과

SpaceONE의 Account Auto Sync 기능은 Trusted Account **Scope**에 따라 다르게 적용됩니다.

<br> 

### ✔️ Domain Scope의 Trusted Account (Admin Mode에서 생성 가능)

Domain에서 생성된 Trusted Account의 경우, 아래 두 가지로 설정이 가능합니다.

방법1) Organization이 SpaceONE의 단일 Workspace가 되어 하위의 전체 프로젝트 및 계정 동기화가 적용될 수 있습니다.

| Google Cloud    | SpaceONE(Cloudforet) |
| --------------- | -------------------- |
| Organization    | Workspace            |
| Folder          | Project Group        |
| Project         | Project              |
| Service Account | Service Account      |

방법 2) 최상위 Google Cloud Folder를 다중의 Workspace로 동기화할 수 있습니다. 이는 좀 더 관리 체계를 조직 단위로 구성함으로써 성능 및 관리에 최적화할 수 있습니다.

| Google Cloud    | SpaceONE(Cloudforet) |
| --------------- | -------------------- |
| 최상위 Folder      | Workspace            |
| 하위 Folder       | Project Group        |
| Project         | Project              |
| Service Account | Service Account      |

{{<alert>}}
Admin Mode에서 Trusted Account 생성 관련 세부 내용은 [이 곳](/ko/docs/guides/admin-mode/service-account/)을 참고하십시오.
{{</alert>}}

<br> 

### ✔️ Workspace Scope의 Trusted Account

Workspace에서 생성된 Trusted Account의 경우 Workspace 하위에 동기화가 적용됩니다.

| Google Cloud    | SpaceONE(Cloudforet) |
| --------------- | -------------------- |
| Folder          | Project Group        |
| Project         | Project              |
| Service Account | Service Account      |
