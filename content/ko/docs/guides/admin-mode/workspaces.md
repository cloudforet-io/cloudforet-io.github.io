---
linkTitle: 워크스페이스 관리
weight: 5
date: '2024-01-08T00:00:00.000Z'
description: |
  조직의 규모와 구조에 맞게 분리된 워크스페이스 환경을 설계하여 관리하세요. 도메인 내 전체 워크스페이스 생성, 관리가 가능합니다.
title: 워크스페이스 관리
---

## 메뉴 진입하기

(1) Admin 모드로 전환하기

![](/guides/admin/admin_mode/admin-mode-01-ko.png)

(2) \[관리 > 환경설정 > 워크스페이스]로 이동

<br> <br>

## 워크스페이스 생성 & 사용자 초대

### 워크스페이스 생성

(1) 상단의 \[+ 생성] 버튼 클릭

![](/guides/admin/workspaces/workspace-create-workspace-01-ko.png)

(2) 이름, 설명 입력 후 \[확인] 버튼 클릭

![](/guides/admin/workspaces/workspace-create-workspace-02-ko.png)

워크스페이스 생성 완료 시, 바로 사용자를 초대할 수 있습니다.

<br> <br>

### 신규 워크스페이스에 사용자 즉시 초대

{{<alert>}}
즉시 초대는 필수는 아니며, 이후에도 해당 워크스페이스에 사용자를 추가할 수 있습니다.
{{</alert>}}

(1) 사용자 계정 입력하여 목록에 추가

![](/guides/admin/workspaces/workspace-create-workspace-03-ko.png)

(2) 역할(Role) 선택

![](/guides/admin/workspaces/workspace-create-workspace-04-ko.png)

(3) \[확인] 버튼 클릭하여 초대 완료하기

* 생성된 워크스페이스 선택 시, 하단에 사용자 목록 확인이 가능합니다.

![](/guides/admin/workspaces/workspace-create-workspace-05-ko.png)

<br> <br>

## 워크스페이스 수정/관리

특정 워크스페이스 선택 후 상단 \[작업] 버튼 클릭 하여 다음과 같은 변경이 가능합니다.

* `수정`: 워크스페이스 이름, 설명 수정이 가능합니다.
* `삭제`: 워크스페이스 삭제가 가능합니다.
  * 삭제 시, 해당 워크스페이스에 속해 있던 사용자 모두 접근이 불가합니다.
* `활성` or `비활성화`: 워크스페이스 활성 상태를 변경할 수 있습니다.
  * 비활성화 시, 해당 워크스페이스에 속해 있던 사용자 모두 접근이 불가합니다.

![](/guides/admin/workspaces/workspace-enable-disable-ko.png)

<br> <br>

## 워크스페이스로 전환하기

* 특정 워크스페이스 명을 클릭하면 해당 워크스페이스 환경으로 전환됩니다.
* 워크스페이스 환경으로 전환 시, Admin 모드는 해제됩니다.

![](/guides/admin/workspaces/workspace-create-workspace-06.png)

![](/guides/admin/workspaces/workspace-create-workspace-07-ko.png)
