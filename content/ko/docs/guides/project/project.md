---
linkTitle: 프로젝트
weight: 2
date: '2022-06-07T00:00:00.000Z'
description: |
  **프로젝트**는 특정 워크스페이스 내 리소스를 관리하기 위한 묶음 단위입니다. <br> <br>
title: 프로젝트
---

## 특정 워크스페이스로 전환

* 관리하고자 하는 워크스페이스를 선택하여 환경 전환
* 프로젝트 메뉴로 이동

![](/guides/admin/workspaces/workspace-switching-ko.png)

{{<alert>}}
※ 프로젝트 관리 및 세부 데이터 연결은 워크스페이스 환경 내에서만 가능하며, Admin 모드에서는 지원되지 않습니다.
{{</alert>}}

<br> <br>

## 프로젝트 생성하기

(1) 우측 상단 \[+ 생성] > \[프로젝트] 버튼 클릭

![](/guides/project/project-create-01-ko.png)

(2) 프로젝트 이름 입력, 접근 방식 선택

프로젝트의 관리 목적에 따라 아래 두 가지 접근 방식 중 선택하여 생성할 수 있습니다.

* 초대된 사용자만 접근 - 워크스페이스 내 Workspace Member 역할 타입의 사용자 접근 제한을 위해 선택
* 워크스페이스 내 모든 사용자 접근

{{<alert>}}
Workspace Owner의 경우 해당 워크스페이스 내에 모든 프로젝트 전체 접근 및 관리가 가능한 반면,

Workspace Member의 경우 '워크스페이스 내 모든 사용자 접근 가능 프로젝트' 또는 '초대된 프로젝트'만 접근이 가능합니다.

권한 체계에 대한 자세한 설명은 [이곳](/ko/docs/guides/permission/)에서 확인할 수 있습니다.
{{</alert>}}

![](/guides/project/project-create-02-ko.png)![](/guides/project/project-create-03-ko.png)

(3) \[확인] 버튼 클릭하여 프로젝트 생성 완료

![](/guides/project/project-create-04-ko.png)

(4) (선택사항) 프로젝트 그룹 생성

* \[+ 생성] > \[프로젝트 그룹] 버튼 클릭해서 그룹을 생성하고, 특정 프로젝트별로 묶음(카테고리)을 설정할 수도 있습니다.

![](/guides/project/project-create-01-ko.png)

<br> <br>

## 프로젝트 설정 변경하기

(1) 특정 프로젝트 클릭 하여 상세 페이지로 이동 > 상단의 설정 버튼 클릭

![](/guides/project/project-settings-01-ko.png)

(2) 프로젝트 이름, 접근 방식 변경 후 \[확인] 버튼 클릭

![](/guides/project/project-settings-02-ko.png)

<br> <br>

## 프로젝트 위치 이동하기

(1) 특정 프로젝트 클릭 하여 상세 페이지로 이동 >  상단의 이동 버튼 클릭

![](/guides/project/project-moving-01-ko.png)

(2) 이동할 위치(프로젝트 그룹) 선택 후 \[확인] 버튼 클릭

![](/guides/project/project-moving-02-ko.png)

<br> <br>

## 프로젝트 삭제하기

(1) 특정 프로젝트 클릭 하여 상세 페이지로 이동 >  상단의 삭제 버튼 클릭

![](/guides/project/project-delete-ko.png)

<br> <br>

## 프로젝트에 데이터 연결하기

* [에셋인벤토리 > 서비스 어카운트](/ko/docs/guides/asset-inventory/service-account/) 추가

<br> <br>

## 프로젝트 세부 관리하기

* [멤버 초대/관리](ko/docs/guides/project/member/)
* 얼럿 생성/관리
  * [얼럿](/ko/docs/guides/alert-manager/alert/)
  * [웹훅](/ko/docs/guides/alert-manager/webhook/)
  * [이벤트 규칙](/ko/docs/guides/alert-manager/event-rule/)
  * [알림 채널](/ko/docs/guides/alert-manager/notification/)
  * [에스컬레이션 정책](/ko/docs/guides/alert-manager/escalation-policy/)
* 태그 생성/관리
