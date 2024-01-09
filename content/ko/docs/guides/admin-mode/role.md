---
linkTitle: 역할 관리
weight: 4
date: '2024-01-08T00:00:00.000Z'
description: |
  사용자 역할(Role) 타입, 페이지별 접근 여부 및 API 연결 등을 통해 세부적인 역할관리가 가능합니다.
title: 역할 관리
---

## 메뉴 진입하기

(1) Admin 모드로 전환하기

![](/guides/admin/admin_mode/admin-mode-01-ko.png)

(2) \[관리 > 사용자 및 권한 관리 > 역할]로 이동

<br> <br>

## Managed 역할

* 역할에 대해 쉽게 확인하고 사용자에게 빠르게 할당할 수 있도록 `Domain Admin`, `Workspace Owner`, `Workspace Member`라는 'Managed' 역할을 기본적으로 제공합니다. ( Managed 역할의 경우 수정/삭제가 불가합니다. )
* 페이지 접근관련 보다 세부적인 역할 관리가 필요할 경우, 커스텀 역할을 직접 생성할 수 있습니다.

![](/guides/admin/iam_role/role-managed-01-ko.png)

<br> <br>

## 역할 생성하기

(1) 상단의 \[+ 생성] 버튼 클릭

![](/guides/admin/iam_role/role-create-00-ko.png)

(2) 역할 이름 입력 

![](/guides/admin/iam_role/role-create-01-ko.png)

(3) 역할 타입 선택 

{{<alert>}}
역할 타입(기본 권한 체계)에 대해서는 [이곳](/ko/docs/guides/permission/)에서 자세히 확인할 수 있습니다.
{{</alert>}}

![](/guides/admin/iam_role/role-type-ko.png)

(4) 페이지 접근 설정 

* Admin 역할 타입은 도메인 전체에 접근이 가능하여 별도의 페이지 접근 권한 설정이 없습니다. 
* Workspace Owner | Workspace Member는 각각에 맞는 페이지 접근 여부를 선택할 수 있습니다. 

![](/guides/admin/iam_role/role-create-03-ko.png)

(5) \[생성] 버튼 클릭하여 역할 생성 완료하기

![](/guides/admin/iam_role/role-create-05-ko.png) 

<br> <br>

## 역할 수정/삭제 하기 

(1) 특정 역할 선택 

(2) 상단 \[작업 > 수정] 또는 \[작업 > 삭제] 클릭 

![](/guides/admin/iam_role/role-edit-delete-01-ko.png)

(3) '수정' 클릭 시, 아래와 같이 해당 역할 편집 페이지로 이동합니다. 

![](/guides/admin/iam_role/role-edit-ko.png)

{{<alert>}}
역할 수정 시 역할 타입은 변경할 수 없습니다. 
{{</alert>}}
