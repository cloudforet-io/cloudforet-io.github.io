---
linkTitle: 사용자 관리
weight: 2
date: '2024-01-08T00:00:00.000Z'
description: |
  새로운 사용자를 초대할 수 있으며, 도메인 전체 사용자를 한눈에 확인하고 관리할 수 있습니다.
title: 사용자 관리
---

## 메뉴 진입하기

(1) Admin 모드로 전환하기

![](/guides/admin/admin_mode/admin-mode-01-ko.png)

(2) \[관리 > 사용자 및 권한 관리 > 사용자]로 이동

<br> <br>

## 사용자 초대하기

(1) 상단의 \[+ 생성] 버튼 클릭

![](/guides/admin/iam_user/user-create-01-ko.png)

(2) 초대하고자 하는 사용자 계정 추가 및 워크스페이스 & 역할(Role) 할당

![](/guides/admin/iam_user/user-create-02-ko.png)(2-1) 사용자 계정 추가

* Local: E-mail 포멧으로 입력
* 이외 Google, Keyloak 등의 SSO가 도메인에 추가 설정되어 있다면 해당 포멧에 맞춰 입력

(2-2) Admin 역할(Role) 여부 선택

* Admin 역할(Role) ON: 도메인 전체에 접근이 가능하기 때문에 워크스페이스 선택 불필요
* Admin 역할(Role) OFF:  하나 이상의 워크스페이스를 선택하고, 해당 워크스페이스(들)에서의 역할(Role) 선택이 필수

(2-3) \[확인] 버튼을 누르고 사용자 초대 완료

{{<alert>}}
역할에 대한 자세한 내용은 [이곳](/ko/docs/guides/admin-mode/role/)에서 확인할 수 있습니다.
{{</alert>}}

<br>

(3) 초대된 사용자 목록에서 확인

![](/guides/admin/iam_user/user-create-03-ko.png)

특정 사용자 클릭 시 사용자 상세 정보를 비롯해 사용자가 속한 워크스페이스 목록 또한 확인이 가능합니다.

![](/guides/admin/iam_user/user-detail-01-ko.png)![](/guides/admin/iam_user/user-detail-02-ko.png)

{{<alert>}}
초대 후 아직 한 번도 접속하지 않은 사용자의 경우, State가 'Pending'인 상태로 표시 됩니다.
{{</alert>}}

<br><br>

## 사용자 수정하기

(1) 특정 사용자를 클릭하고, \[작업 > 수정] 버튼 클릭

![](/guides/admin/iam_user/use-edit-01-ko.png)

(2) 사용자 정보 수정

* 이름 변경: 관리자가 사용자 이름을 변경할 수 있습니다.
* 알림 전용 이메일 변경: 관리자가 이메일 주소를 변경하고 임의로 인증을 처리할 수 있습니다.
* 비밀번호 변경: 직접 비밀번호를 설정해서 사용자에게 전달해주거나, 이메일로 비밀번호 재설정 링크를 보낼 수 있습니다.

![](/guides/admin/iam_user/use-edit-02-ko.png)

(3) 사용자 활성/비활성화

1개 이상의 사용자를 선택하고, \[작업 > 활성화] 또는 \[작업 > 비활성화] 버튼 클릭하여 활성 상태를 변경할 수 있습니다.

![](/guides/admin/iam_user/use-enable-disable-01-ko.png)
