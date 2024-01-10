---
linkTitle: 사용자
weight: 1
date: '2022-06-23T00:00:00.000Z'
description: |
  워크스페이스 범위의 사용자 초대/관리가 가능합니다.
title: 사용자
---

## 메뉴 진입하기

(1) 특정 워크스페이스 선택

![](/guides/admin/workspaces/move-to-workspace-ko.png)

(2) \[사용자 및 접근 관리 > 사용자]로 이동

{{<alert>}}
`Admin` 권한을 갖는 앱 생성의 경우, 'Admin 모드'에서만 가능합니다.\
상세 방법은 [여기](/ko/docs/guides/admin-mode/app/) 관리자 가이드를 참고 하십시오.
{{</alert>}}

<br> <br>

## 사용자 초대하기

(1) 상단의 \[초대] 버튼 클릭

![](/guides/iam_user/user-invite-00-ko.png)

(2) 초대하고자 하는 사용자 계정 추가 및 워크스페이스 역할(Role) 할당

![](/guides/iam_user/user-invite-01-ko.png)

(2-1) 사용자 계정 추가

도메인 내에 이미 존재하는 사용자뿐만 아니라, 외부 사용자 또한 해당 워크스페이스로 초대가 가능합니다. 

* Local: E-mail 포멧으로 입력
* 이외 Google, Keyloak 등의 SSO가 도메인에 추가 설정되어 있다면 해당 포멧에 맞춰 입력

(2-2) 워크스페이스 접근 역할(Role) 선택 

(2-3) \[확인] 버튼을 누르고 사용자 초대 완료

{{<alert>}}
역할에 대한 자세한 내용은 [이곳](/ko/docs/guides/admin-mode/role/)에서 확인할 수 있습니다.
{{</alert>}}

<br>

(3) 초대된 사용자 목록에서 확인

![](/guides/iam_user/user-invite-02-ko.png)

특정 사용자 클릭 시 사용자 상세 정보를 비롯해 사용자가 속한 `프로젝트` 목록 또한 확인이 가능합니다.

{{<alert>}}
초대 후 아직 한 번도 접속하지 않은 사용자의 경우, State가 'Pending'인 상태로 표시 됩니다.
{{</alert>}}

<br><br>

## 사용자 수정하기

Workspace Owner는 사용자의 역할(Role) 수정 및 제거만 가능하며, 사용자의 다른 정보 수정은 불가합니다. 

(1) 역할 변경

* 사용자의 Role 표시부분의 드롭다운 버튼 클릭하여 변경  

![](/guides/iam_user/user-edit-01-ko.png)

(2) 사용자 제거 

* \[제거]버튼 클릭하여 제거

{{<alert>}}

사용자 제거 시, 워크스페이스로 부터 제거가 된 상태로 도메인에는 여전히 사용자로 남게 됩니다. 

{{</alert>}}
