---
title: "웹훅"
linkTitle: "웹훅"
weight: 4
date: 2022-06-07
description: >
    클라우드포레의 **얼럿 매니저**는 외부 모니터링 서비스에서 발생한 이벤트들을 **웹훅**을 통해 받아올 수 있습니다.
    <br/>
    <br/>
    웹훅은 다양한 외부 모니터링 서비스별로 존재하는 [**웹훅 플러그인**](/ko/docs/guides/plugins/alert-manager-webhook/)을 활용하여 생성할 수 있습니다.
    <br/>
    생성한 웹훅 URL을 통해 모니터링 서비스로부터 이벤트를 수신할 수 있으며, 수신한 이벤트 메시지를 정제하여 [얼럿](/ko/docs/guides/alert-manager/alert/)을 발생시킵니다.
---

## 웹훅 생성하기

외부 모니터링 서비스로부터 발생하는 로그를 수신하는 웹훅을 생성해야 합니다.

웹훅은 프로젝트별로 생성이 가능하며, 프로젝트 상세 페이지에서 생성할 수 있습니다.

[프로젝트 생성하기](/ko/docs/guides/project/project/#프로젝트-생성하기)

(1) 프로젝트 상세 페이지의 [얼럿] 탭으로 이동 후, [웹훅] 탭을 선택합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9cc07d60-4f24-4511-b59c-14db3630f0f2/Untitled.png)

(2) [추가] 버튼을 클릭합니다.

(3) [웹훅 추가] 모달에서 이름을 작성하고, 연동할 외부 모니터링 서비스의 [웹훅 플러그인](/ko/docs/guides/plugins/alert-manager-webhook/)을 선택합니다.

![스크린샷 2022-06-14 오후 10.32.24.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/25f4506a-02c0-4b98-8b2c-1eefb76042fe/스크린샷_2022-06-14_오후_10.32.24.png)

(4) [확인] 버튼을 클릭하여 설정을 완료합니다.

## 웹훅 연동하기

생성된 웹훅의 URL을 통해 외부 모니터링 서비스와 연동할 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f39e7d87-4d05-4898-9dd8-4b6d3981f51b/Untitled.png)

외부 모니터링 서비스별로 연동 방식이 상이하며, 모니터링 서비스별 연동 가이드는 [여기](/ko/docs/guides/plugins/alert-manager-webhook/)에서 확인할 수 있습니다.

## 웹훅 목록 조회하기

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f39e7d87-4d05-4898-9dd8-4b6d3981f51b/Untitled.png)

### 상세 검색

검색 창에 검색어를 입력하여 조건에 부합하는 웹훅 목록을 확인할 수 있습니다. 고급 검색에 대한 상세 설명은 [여기](/ko/docs/guides/advanced/search/)를 참고하세요.

## 웹훅 수정 및 삭제하기

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eb3b5dad-6e76-4269-94be-b7c31c1113f6/Untitled.png)

목록에서 조회한 웹훅을 선택하여 활성화, 비활성화, 변경, 삭제가 가능합니다.

### 웹훅 활성화하기

웹훅을 활성화하면, **웹훅 URL**로부터 수신한 이벤트를 [**얼럿**](/ko/docs/guides/alert-manager/alert/)으로 발생시킵니다.

(1) 활성화할 웹훅을 선택하고 [작업] 드롭다운에서 [활성화] 메뉴를 선택합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eb3b5dad-6e76-4269-94be-b7c31c1113f6/Untitled.png)

(2) [웹훅 활성화] 모달에서 내용을 확인하고 [확인] 버튼을 눌러 활성화합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d8e80c79-6caa-442d-ba7c-4de868d4f596/Untitled.png)

### 웹훅 비활성화하기

웹훅을 비활성화하면 해당 **웹훅 URL**로부터 수신되는 이벤트는 무시되어, [**얼럿**](/ko/docs/guides/alert-manager/alert/)을 발생시키지 않습니다.

(1) 비활성화할 웹훅을 선택하고 [작업] 드롭다운에서 [비활성화] 메뉴를 선택합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eb3b5dad-6e76-4269-94be-b7c31c1113f6/Untitled.png)

(2) [웹훅비 활성화] 모달에서 내용을 확인하고 [확인] 버튼을 눌러 비활성화합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2eec5479-dd72-40f2-a520-35dd6038b105/Untitled.png)

### 웹훅 변경하기

웹훅은 이름만 변경할 수 있습니다.

(1) 목록에서 변경할 웹훅을 선택하고, [작업] 드롭다운에서 [변경] 메뉴를 선택합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eb3b5dad-6e76-4269-94be-b7c31c1113f6/Untitled.png)

(2) 변경할 이름을 작성하고 [확인] 버튼을 눌러 변경을 완료합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e5ba0d90-6338-46e3-8793-eaae11f58ac2/Untitled.png)

### 웹훅 삭제하기

웹훅은 삭제 시 복구할 수 없습니다. 신중히 확인하고 제거해 주십시오.

(1) 목록에서 삭제할 웹훅을 선택하고, [작업] 드롭다운에서 [삭제] 메뉴를 선택합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eb3b5dad-6e76-4269-94be-b7c31c1113f6/Untitled.png)

(2) 삭제 확인을 위해 선택한 웹훅의 이름을 정확히 입력해야 [삭제] 버튼이 활성화됩니다. 

다시 한번 신중히 확인 후, 정말로 삭제를 원한다면 [삭제] 버튼을 눌러 완료합니다.
