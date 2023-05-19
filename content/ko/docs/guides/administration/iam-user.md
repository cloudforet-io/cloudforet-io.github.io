---
title: "[IAM] 사용자"
linkTitle: "[IAM] 사용자"
weight: 1
date: 2022-06-23
description: >
    **사용자**에서는 클라우드포레의 사용자를 생성/삭제하거나 활성화/비활성화 할 수 있습니다.
    <br>
    <br>
    또한 사용자에게 역할을 할당하여 도메인에 대한 권한을 부여할 수 있습니다.
---

{{<alert>}}
[관리 > 사용자] 페이지에서 사용자에게 할당할 수 있는 역할은 `Admin` 타입입니다. `User` 타입은 프로젝트의 멤버에게 할당할 수 있습니다.
프로젝트 멤버에게 역할을 부여하는 방법은 [여기](/ko/docs/guides/project/project-group/#프로젝트-그룹-멤버-초대하기)를 참고 하십시오.
{{</alert>}}
<br>

## 사용자 추가하기
[관리 > 사용자 및 권한 관리 > 사용자] 페이지에서 [+ 생성] 버튼을 클릭합니다.

![user-create-button](/ko/docs/guides/administration/iam-user-img/user-create-button.png)
<br>

추가할 수 있는 사용자의 종류는 세 가지입니다.
- **내부 사용자**: 로그인 페이지에서 아이디와 비밀번호를 사용해 로그인 할 수 있는 사용자
- **외부 사용자**: 도메인이 가지고 있는 외부 사용자 인증을 따름
- **API Only**: 오직 API만 사용 가능하며 클라우드포레 콘솔 접근이 불가함
<br>

### 1. 내부 사용자 추가하기
내부 사용자는 로그인 페이지에서 아이디와 비밀번호를 사용해 로그인 할 수 있는 사용자입니다.

(1-1) [사용자 추가] 모달이 열린 뒤, 내부 사용자 추가를 위해 [Local] 탭을 선택합니다.

![user-create-modal-local](/ko/docs/guides/administration/iam-user-img/user-create-modal-local_ko.png)

(1-2) 신규 사용자의 아이디를 입력한 뒤, [아이디 확인] 버튼을 클릭합니다. 사용자 아이디는 이메일 형식이어야 하며, 기존 사용자 목록에 없는 아이디어야 합니다.

(1-3) 사용자의 이름과 알림 전용 이메일(시스템관련 중요 공지 또는 비밀번호 재설정 관련 내용 수신을 위한 이메일)을 선택적으로 입력합니다.

(1-4) 사용자에게 비밀번호 재설정 이메일 발송을 요청하거나, 사용자를 추가하는 관리자가 대신 비밀번호를 설정해줄 수 있습니다. (※ 대신 설정할 경우, 해당 사용자에게 직접 비밀번호 전달이 필요합니다) 

(1-5) 어드민 역할 할당이 필요한 경우, 모달창 하단에 '어드민 역할(Role)' 부분을 활성화 하여 특정 역할을 부여해줄 수 있습니다. 

![user-create-local-admin-role](/ko/docs/guides/administration/iam-user-img/user-create-local-admin-role_ko.png)

{{<alert>}}
사용자에게 할당된 역할에 따라, 페이지 접근 권한이나 API 정책이 상이하게 적용됩니다. 역할에 대한 자세한 사항은 [여기](/ko/docs/guides/administration/iam-role)를 참고 하십시오.
{{</alert>}}

(1-6) [확인] 버튼을 클릭하여, 사용자 추가를 완료합니다. 
<br>

### 2. 외부 사용자 추가하기
외부 사용자 추가는 해당 도메인이 가지고 있는 외부 사용자 인증을 따릅니다. 만약 인증된 외부 사용자가 아닐 경우 사용자로 추가할 수 없습니다.

(2-1) [사용자 추가] 모달이 열린 뒤, 외부 사용자 추가를 위해 특정 SSO 탭을 선택합니다. ex. Google OAuth

![user-create-modal-oauth](/ko/docs/guides/administration/iam-user-img/user-create-modal-oauth_ko.png)

(2-2) 기존에 인증된 외부 사용자 계정을 입력합니다.

{{<alert>}}
외부 사용자 인증에 대한 자세한 설명은 [여기](/ko/docs/guides/plugins/iam-authentication/)를 참고해 주십시오.
{{</alert>}}

(2-3) 사용자의 이름과 알림 전용 이메일(시스템관련 중요 공지 또는 비밀번호 재설정 관련 내용 수신을 위한 이메일)을 선택적으로 입력합니다.

(2-4) 어드민 역할 할당이 필요한 경우, 모달창 하단에 '어드민 역할(Role)' 부분을 활성화 하여 특정 역할을 부여해줄 수 있습니다. 

(2-5) [확인] 버튼을 클릭하여, 사용자 추가를 완료합니다. 
<br>

### 3. API Only 사용자 추가하기
API 사용자는 클라우드포레 콘솔 접근이 불가하며, 오직 API만 사용할 수 있습니다.

(3-1) [사용자 추가] 모달이 열린 뒤, [API Only] 탭을 선택합니다.

![user-create-modal-apionly](/ko/docs/guides/administration/iam-user-img/user-create-modal-apionly_ko.png)

(3-2) 신규 사용자의 아이디를 입력한 뒤, [아이디 확인] 버튼을 클릭합니다. 기존 사용자 목록에 없는 아이디어야 합니다.

(3-3) 사용자의 이름을 선택적으로 입력합니다.

(3-4) 어드민 역할 할당이 필요한 경우, 모달창 하단에 '어드민 역할(Role)' 부분을 활성화 하여 특정 역할을 부여해줄 수 있습니다. 

(3-5) [확인] 버튼을 클릭하여, 사용자 추가를 완료합니다. 
<br>
<br>

## 사용자 상세 보기
사용자 페이지의 테이블에서 특정 사용자를 선택하면, 해당 사용자에 대한 상세한 정보를 볼 수 있습니다.

![user-single-select](/ko/docs/guides/administration/iam-user-img/user-single-select.png)
<br>
<br>

## 사용자 정보 업데이트 하기
사용자 페이지의 테이블에서 특정 사용자를 선택한 후 [작업 > 수정]클릭하면 해당 사용자의 정보를 관리자가 수정할 수 있습니다. 

![user-update-modal](/ko/docs/guides/administration/iam-user-img/user-update-modal_ko.png)

- 사용자의 아이디, 이름, 알림 전용 이메일, 비밀번호, 어드민 역할(Role), 태그를 수정할 수 있습니다. 
- 해당 사용자가 알림 전용 이메일 인증에 어려움이 있을 경우, 관리자가 직접 인증 처리를 해줄 수 있습니다.  
- Local 사용자의 경우, 관리자가 비밀번호를 변경해 주거나, 사용자가 직접 변경할 수 있도록 재설정 링크를 발송해 줄 수도 있습니다.  