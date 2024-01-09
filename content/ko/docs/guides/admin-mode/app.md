---
linkTitle: 앱 관리
weight: 3
date: '2024-01-08T00:00:00.000Z'
description: |
  API/CLI 접근을 위한 Client Seret 발급용 앱 생성 및 관리가 가능합니다.
title: 앱 관리
---

## 메뉴 진입하기

(1) Admin 모드로 전환하기

![](/guides/admin/admin_mode/admin-mode-01-ko.png)

(2) \[관리 > 사용자 및 권한 관리 > 앱]으로 이동

<br> <br>

## 앱 생성하기

클라우드포레가 제공하는 CLI 도구인 [Spacectl](https://github.com/cloudforet-io/spacectl)을 사용하기 위해서는 접근 가능한 Client Secret이 필요합니다.

Admin 모드에서는 관리자 역할을 갖는 앱을 생성하고, 해당 앱의 Client Secret 키를 다른 사용자에게 부여할 수 있습니다.

(1) 우측 상단 \[+ 생성] 버튼 클릭

![](/guides/iam_app/app-create-00-ko.png)

(2) 정보 입력

1. 이름 입력
2. Admin 역할(Role) 선택: 역할에 대한 상세 내용은 이곳에서 자세히 확인할 수 있습니다.
3. 태그 입력: '키:값' 방식으로 입력 합니다.
4. \[확인] 버튼을 클릭하여 앱 생성을 완료합니다.

![](/guides/admin/iam_app/app-create-02-ko.png)

(3) 필수 파일 다운 받기

![](/guides/admin/iam_app/app-create-03-ko.png)

<br> <br>

## Client Secret 재생성

(1) 특정 앱 선택

(2) 상단 \[작업 > Client Secret 재생성] 클릭

* 새로운 Secret으로 재생성이 되며, 설정 파일을 다시 다운받을 수 있습니다.

![](/guides/admin/iam_app/app-detail-01-ko.png)
