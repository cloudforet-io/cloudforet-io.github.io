---
weight: 9
description: |
  도메인 내 전체 워크스페이스의 비용을 확인하고 세부 기능을 이용할 수 있습니다.
title: 전체 비용 관리
---

## 메뉴 진입하기

(1) Admin 모드로 전환하기

![](/guides/admin/admin_mode/admin-mode-01-ko.png)

<br> <br>

## 전체 비용 분석

전체 워크스페이스에서 발생한 비용을 한번에 확인할 수 있습니다.

(1) Admin 모드 - \[비용 관리 > 비용 분석]으로 이동

(2) 그룹별 통계(Group-by) 에서 'Workspace' 탭 클릭 하여 워크스페이스별 비용 확인

![](/guides/admin/cost/cost-analysis-01-ko.png)

(3) \[필터] 설정을 통한 세부 분석

![](/guides/admin/cost/cost-analysis-02-ko.png)

(4) 비용 분석 저장 가능

* 기본 제공 분석 페이지(예: Monthly cost by workspace): **\[다른 이름으로 저장]** 만 가능
* 커스텀 비용 분석 페이지: 바로 **\[저장]** 또는 **\[다른 이름으로 저장]**, **\[수정/삭제]** 모두 가능

![](/guides/admin/cost/cost-analysis-03-ko.png)

{{<alert>}}
개별 워크스페이스 환경에서도 각각 발생한 비용을 확인할 수 있습니다.  세부 내용은 [이 곳](/ko/docs/guides/cost-explorer/cost-analysis/ "이 곳")을 참고하십시오.
{{</alert>}}

<br> <br>

## 워크스페이스별 예산 설정/관리

전체 발생한 비용 대비 워크스페이스 기준의 예산 생성 및 관리가 가능합니다.

(1) Admin 모드 - \[비용 관리 > 예산]으로 이동

**\[예산 설정 방법]**

a. \[+ 예산 생성] 버튼 클릭

b. 특정 워크스페이스와 빌링 데이터 소스에 맞는 예산 설정

* 이름 입력
* 워크스페이스 선택
* 데이터 소스 선택
* 예산 계획 선택 (총 예산 또는 월별 예산)
* \[확인] 버튼 클릭

![](/guides/admin/cost/cost-analysis-04-ko.png)

{{<alert>}}
개별 워크스페이스 환경에서도 프로젝트 기준의 예산 생성 및 관리가 가능합니다.  세부 내용은 [이 곳](/ko/docs/guides/cost-explorer/budget/ "이 곳")을 참고하십시오.
{{</alert>}}

<br> <br>

## 비용 리포트 설정/관리

전체 워크스페이스에서 발생한 비용의 리포트를 한 번에 확인할 수 있도록 세부 설정을 진행할 수 있습니다.

(1) Admin 모드 - \[비용 관리 > 비용 리포트]로 이동

(2) '다음 리포트' 위젯에서 \[설정] 버튼 클릭하여 리포트 설정

* 언어/통화/발행일 선택

![](/guides/admin/cost/cost-analysis-05-ko.png)
![](/guides/admin/cost/cost-analysis-06-ko.png)

(3) '리포트 수신처' 위젯에서 수선처 설정

* 리포트 자동 발송을 위한 수신처 활성화

![](/guides/admin/cost/cost-analysis-07-ko.png)

(4) 전체 리포트 확인

* 비용 트렌드
* 월별 총 비용 요약

![](/guides/admin/cost/cost-analysis-08-ko.png)

(5) 특정 리포트 클릭하여 상세 확인

![](/guides/admin/cost/cost-analysis-09-ko.png)

![](/guides/admin/cost/cost-analysis-10.png)

{{<alert>}}
개별 워크스페이스 환경에서도 각각에 발행된 비용 리포트를 확인할 수 있습니다. 세부 내용은 [이 곳](/ko/docs/guides/cost-explorer/cost-report/ "이 곳")을 참고하십시오.
{{</alert>}}
