---
title: "알림"
linkTitle: "알림"
weight: 7
date: 2022-06-07
description: >
    클라우드포레에서는 얼럿을 전달하기 위한 알림 채널을 지원하고 있습니다. 
    <br/>
    알림 채널을 통해, 얼럿을 어떤 사용자에게 어떻게, 언제 전달할 것인지 등을 설정합니다.
---



알림 채널 플러그인(Jira, Slack, SMS…)과 관련된 추가 가이드는 여기를 참조하세요.

## 알림 채널 생성하기

프로젝트 상세 페이지의 [알림] 탭에서는 **알림 채널 생성** 및 **알림 채널 활성화** 여부를 관리할 수 있습니다.

**알림 채널**은 알림 전송 방식과 Level 등을 포함하여 체계적인 수신자 영역을 표현하는 단위입니다. 에스컬레이션 규칙에서 설정한 **레벨**에 맞춰 송신할 수 있도록 돕습니다.

### 프로젝트 알림 채널 생성하기

(1) 프로젝트 상세 페이지의 [알림] 탭에 진입합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/20127446-cac5-45bf-bca7-3df1c824a2d6/Untitled.png)

(2) 원하는 알림 채널을 클릭하여 알림 생성 페이지로 이동합니다.

(3) 알림 채널을 생성하기 위해 알맞은 설정들을 입력합니다.

(3-1) 기본정보

필요한 채널 이름과 알림 레벨 등 생성하려는 알림 채널에 대한 기본적인 정보들을 입력합니다.

[채널 이름]과 [알림 레벨]이 기본 설정 필드이며, 이후 나머지는 채널별로 입력받는 정보가 다릅니다.

{{< alert title="" >}}
각 **알림 플러그인**에 대한 자세한 연동 가이드는 [이곳](/ko/docs/guides/plugins/alert-manager-notification/)을 확인하십시오.
{{< /alert >}}



![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dad7e797-8330-413d-9be4-64805bcfda1a/Untitled.png)

{{< alert title="알림 레벨" >}}
알림 레벨은 얼럿 전파에 대한 규칙을 정의하는 [에스컬레이션 정책](/ko/docs/guides/alert-manager/escalation-policy/)과 관련이 있습니다. 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/40cca28a-278d-45cd-acf7-201c54d9fdcb/Untitled.png)

에스컬레이션 정책에서 지정된 알림 레벨을 기준으로, 해당 레벨에 속한 알림 채널에 얼럿을 전파합니다.

{{< /alert >}}

(3-2) 스케줄

스케줄을 설정하여 특정 시간에만 알림을 수신할 수 있도록 설정할 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d49ffe8d-e389-4018-8def-4833809f905a/Untitled.png)

(3-3) 토픽

알림은 다음 두 가지 경우에 수신할 수 있습니다.
- 얼럿이 발생한 경우
- [비용 관리 > 예산]에서 설정해둔 알림 기준이 충족되었을 경우

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/927229b8-9c24-4250-9329-e668770f6811/Untitled.png)

[모든 알림 받기]를 선택하면 두 가지 알림 모두를, [선택한 토픽 알림 받기]를 선택하면 선택한 알림만을 받을 수 있습니다.

(4) [저장] 버튼을 클릭해 알림 채널 생성을 완료합니다.

{{< alert title="" >}}
에스컬레이션 정책에서 설정된 레벨이 있더라도 알림 채널이 활성화 되어있지 않다면 알림은 발생하지 않습니다.
{{< /alert >}}


### 사용자 알림 채널 생성하기

사용자 알림 채널은 [마이페이지 > 알림 채널]에서 사용자 알림 채널을 생성할 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/247cabba-1614-4c40-b666-497b944b76a5/Untitled.png)

프로젝트 알림 채널 생성과 다르게 **알림 레벨 설정이 없으며**, 이 외에 생성 방식은 [프로젝트 알림 생성](/ko/docs/guides/alert-manager/notification/#프로젝트-알림-채널-생성하기)하기와 동일합니다.

## 알림 채널 편집/삭제하기

### 알림 채널 편집하기

생성된 알림 채널들은 각 알림 채널 선택지 아래에서 확인할 수 있습니다.

![스크린샷 2022-06-15 오후 8.23.28.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4c613c5-65cb-464a-b5a3-1d88c0664a2e/스크린샷_2022-06-15_오후_8.23.28.png)

왼쪽 상단 토글 버튼을 통해 활성/비활성 상태를 변경할 수 있으며, 각 알림 채널의 [편집] 버튼을 클릭해 각각의 항목을 편집할 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2e4e85ad-c9da-4fd7-a263-7b9e052d8728/Untitled.png)

작성이 완료되면 [변경사항 저장] 버튼을 클릭해 편집을 완료합니다.

### 알림 채널 삭제하기

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9dbfbce9-94ba-4c35-a1f9-3487e13b6a00/Untitled.png)

우측 상단의 [삭제 아이콘] 버튼을 클릭시 알림 채널 삭제가 가능합니다.

## 클라우드포레 사용자 채널

프로젝트에서 [알림 채널] 파트에는 [Cloudforet User 채널 추가] 카드가 존재합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b0b41556-7d14-428e-a2f6-0236f3364812/Untitled.png)

클라우드포레 사용자 채널을 추가하면, 프로젝트 멤버들의 개인 채널로 얼럿이 전파됩니다. 이후 전파 받은 사용자의 **개인 알림 채널**을 통해 얼럿이 전달됩니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b210bf92-ca46-441e-8643-633e873d4cea/Untitled.png)

### 개인 알림 채널 추가하기

개인 알림 채널은 [마이페이지 > 알림 채널]에서 설정할 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1bb3497c-8d01-4e05-88d5-9b042c649b19/Untitled.png)

채널 생성 방식은 프로젝트 알림 채널 방식과 동일하지만, 에스컬레이션 정책과는 관련 없이 개인 설정의 채널이기 때문에 **레벨** 속성이 존재하지 않습니다.
