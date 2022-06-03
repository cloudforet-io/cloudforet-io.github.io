---
title: "AWS SNS Webhook"
linkTitle: "AWS SNS Webhook"
weight: 1
date: 2021-08-10
description: >
    AWS SNS Webhook을 사용하기 위한 AWS EventBridge, AWS SNS 설정방법을 제공합니다.
---

## Overview
<br>

AWS SNS(Simple Notification Service)는 마이크로서비스 및 서버리스 애플리케이션을 위한 Pub/Sub 메시징 서비스입니다.
SpaceONE은 **AWS SNS webhook Plugin**을 사용하여 AWS SNS 구독을 통해 전달되는 이벤트를 수신합니다.

<br>

이때, 발생할 수 있는 이벤트 크게 **PHD(PersonalHealthDashboard) event**와 **Custom Event**로 나눌 수 있습니다.
PHD event는 AWS Health에서 발생하는 데이터를 의미하고 
Custom Event는 AWS Health 이외 AWS SNS webhook Plugin에서 제공하는 서비스를 의미합니다.
제공하는 서비스에 대한 자세한 목록은 [Supported Alert Services](https://github.com/spaceone-dev/plugin-aws-sns-mon-webhook#supported-alert-services) 에서 확인할 수 있습니다.

<br>

![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_24.png)

<br>

그림에서 볼 수 있듯이 PHD event가 발생했을 때, AWS EventBridge > AWS SNS > AWS SNS Webhook 순으로 데이터가 전달됩니다.
서로 의존 관계이기 때문에 설정은 **역순**으로 진행합니다.

<br>

따라서 **PHD event**를 받기 위해 PHD pipeline 구축은 다음과 같습니다.  
[1. Set up an AWS SNS Webhook plugin](#1-set-up-the-aws-sns-webhook-plugin)  
[2. Set up SNS Topic and Subscription](#2-set-up-sns-topic-and-subscription)  
[3. Set up AWS eventbridge](#3-set-up-aws-eventbridge)  

<br>

만약 **Custom event**를 받기 위해 AWS SNS Webhook를 설정해야 한다면 공통적인 부분에 속하는   
[2. Set up SNS Topic and Subscription](#2-set-up-sns-topic-and-subscription)을 참고하면 됩니다. 


## **1. Set up the AWS SNS Webhook Plugin**

<br>

SpaceONE console을 통해 PHD 알림을 받을 프로젝트에 AWS SNS Webhook Plugin을 설정합니다.

### step 1
`project`를 선택 > `Alert` 클릭 > `Activate Alert` 클릭  
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_18.png)

### step 2
`Webhook` 클릭 > `+ Add` 클릭
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_19.png)

### step 3
`Name` 설정 > `AWS SNS Webhook` 클릭 > `confirm` 클릭
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_20.png)

### step 4
생성된 AWS SNS Webhook을 확인하고 **`Webhook URL`을 복사**합니다.  
복사된 URL은 [2) AWS SNS의 Topic과 Subcription 설정](#2\)-AWS-SNS의-Topic과-Subscription-설정)에서 subscription 타겟을 설정하는데 사용됩니다.
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_21.png)

<br>

---

## **2. Set up SNS Topic and Subscription**

### **개요**
<br>

AWS SNS(Simple Notification Service)는 Publisher에서 subscriber로 메세지를 전송하는 관리형 서비스입니다. Publisher는 logical access point, communication channel인 Topic에 메세지를 보내 subscriber와 비동기적으로 통신합니다.  

<br>

Endpoint 타입으로 **HTTPS 프로토콜**을 사용해 SpaceONE에 AWS SNS Webhook Plugin에 PHD event를 전달합니다.
**HTTPS에 적용된 URL은 AWS SNS webhook Plugin을 생성 후 만들어지는 Webhook URL입니다.**  
Topic 설정을 통해 AWS EventBridge로부터 PHD event를 수신하며 Subscription 설정을 통해 AWS SNS Webhook으로 event를 전달할 수 있습니다.
* [2.1 Set up a Topic on AWS SNS](#21-set-up-a-topic-on-aws-sns)
* [2.2 Set up a Subscription on AWS SNS](#22-set-up-a-subscription-on-aws-sns)

<br>

### **2.1 Set up a Topic on AWS SNS**

#### Step 1
`AWS Console` 로그인 > `SNS` 검색 > `Simple Notification Service` 클릭
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_01.png)

#### Step 2
`Topics` 클릭 > `Create topic` 클릭
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_02.png)

#### Step 3
`Standard option` 클릭, `Name`과 `DisplayName` 입력 > `Create topic` 클릭 
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_03.png)

#### Step 4
Topic이 정상적으로 생성되었는지 확인
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_04.png)

<br>

### **2.2 Set up a Subscription on AWS SNS**

#### Step1
Topic을 생성한 이후 `Create subscription` 클릭
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_05.png)

#### Step 2 
Details 내부 생성한 `Topic ARN` 선택, `Protocol`은 `HTTPS`로 설정,  
**`Endpoint`는 [[1. Set up an AWS SNS Webhook plugin](#1-set-up-the-aws-sns-webhook-plugin)]에서 획득한 `Webhook URL`을 입력**   
 이후 `Create subscription` 클릭 
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_07.png)

#### Step 3
subscription이 정상적으로 생성되고 AWS SNS webhook plugin과 정상적으로 연결 되었다면`status`가 `confirmed`된 것을 확인
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_10.png)

<br>

다음으로 AWS EventBridge 설정을 통해 생성한 Topic으로 PHD event를 받을 수 있도록 설정합니다.

<br>

---

## **3. Set up AWS eventbridge**

### **개요**
<br>

Health event가 발생하면 AWS EventBridge로 Health event를 수신할 수 있습니다.
AWS EventBridge 설정시 주의할 점은 Health events를 받으려는 **각 region마다 EventRule을 설정**합니다. 그리고 Global health에 대한 Health event를 받기 위해서는 **us-east-1(US East(N. Virginia))에 EventBridge를 설정**합니다.  
또한, 각 region 마다 생성된 EventBridge를 us-east-1(N. Virginia)로 라우팅 해주기 위해 **EventBus를 사용**합니다. 이렇게 설정함으로써 AWS EventBridge의 EventRule N개, AWS SNS 1개 구조를 통해 다수의 region의 Health events를 수신할 수 있습니다.  

<br>
<br>
 
다음의 예시를 들 수 있습니다.  

<br>

서울 지역에 EC2를 운영중이며 시드니 지역에 S3 저장소를 가지고 있으며, **운영중인 지역의 PHD events를 받고 싶으며 Global PHD events도 수신하고 싶다**고 가정해볼 수 있습니다.
- Seoul region에 EC2를 운영
- Sydney region에 S3를 운영

<br>

이런 경우, 아래와 같이 **3개의 EventRule 생성**을 통해 원하는 요구조건을 충족할 수 있습니다.  
- EventRule(us-east-1)  
- EventRule(ap-northeast-2)  
- EventRule(ap-southeast-2)

<br>

이때, 다른 2종류의 타겟 설정이 필요합니다. EventRule(us-east-1)은 이미 생성된 SNS Topic을 target으로합니다. EventRule(ap-northeast-2)의 target은 SNS가 아닌 us-east-1 EventBus의 default입니다. 마찬가지로 EventRule(ap-southeast-2)의 target은 SNS가 아닌 us-east-1 EventBus의 default입니다.  

<br>

다음의 순서로 설정을 진행합니다.  
1) EventRule(us-east-1) 생성 후 AWS SNS를 target으로 설정
2) EventRule(ap-northeast-2) 생성 후 us-east-1 EventBus의 default를 target으로 설정
3) EventRule(ap-southeast-2) 생성 후 us-east-1 EventBus의 default를 target으로 설정

<br>

실제 서울의 EC2에 대해 Health events가 발생하면 EventRule(ap-northeast-2)에서 최초 수신 후 us-east-1 EventBus에 전달이 되며 EventRule(us-east-1)에서 수신하게 됩니다. 이후 설정된 AWS SNS로 event가 전달되며 최종적으로 AWS SNS Webhoook에 전달이되어 SpaceONE에서 Alert이 생성됩니다.  

<br>

이제, **단계별로 EventBridge의 EventRule 설정방법**을 알아보도록 하겠습니다.
* [3.1 Set up a Global rule on AWS EventBridge](#31-set-up-a-global-rule-on-aws-eventbridge)
* [3.2 Set up a Non-Global rule on AWS EventBridge](#32-set-up-a-non-global-rule-on-aws-eventbridge)

<br>

### **3.1 Set up a Global rule on AWS EventBridge**

#### step 1
AWS console 로그인 > `EventBridge` 검색 > Events > `Rules` 클릭
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_11.png)


#### step 2
`Create Rule` 클릭
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_12.png)

#### step 3
`create Rule`은 세부적으로 5단계 step 설정이 필요합니다.

<br>

- step 3-1 : Define rule detail  
`Name`과 `Description` 설정
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_13.png)

<br>
  
- step 3-2 : Build event pattern  
EventBridge가 생성되는 region에서 발생할 수 있는 `Event pattern` 설정
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_14.png)
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_15.png)

<br>

- step 3-3 : Select target  
[1) AWS SNS의 Topic과 Subscription 설정](#1\)-AWS-SNS의-Topic과-Subscription-설정)에서 생성한 Topic을 `target`으로 설정 
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_16.png)

<br>

- step 3-4 / step 3-5  
AWS console의 step4를 통해 tag정보를 기입할 수 있으며 step5를 통해 설정 정보를 리뷰 확인 후  
`create rule` 클릭  
생성된 Rule은 `Events` > `rules`에서 확인할 수 있습니다.
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_17.png)

### **3.2 Set up a Non-Global rule on AWS EventBridge**
GLOBAL EventBridge 설정의 step1, step2 그리고 step3-2까지 동일합니다.

#### step 1
AWS console 로그인 > `EventBridge` 검색 > Events > `Rules` 클릭
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_11.png)


#### step 2
`Create Rule` 클릭
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_12.png)  
#### step 3
`create Rule`은 세부적으로 5단계 step 설정이 필요합니다.

<br>

- step 3-1 : Define rule detail  
`Name`과 `Description` 설정
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_13.png)    

<br>

- step 3-2 : Build event pattern  
EventBridge가 생성되는 region에서 발생할 수 있는 `Event pattern` 설정
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_14.png)
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_15.png)  

<br>

- step 3-3 : Select target  
`EventBridge event bus` 클릭 > `Event bus in a different account or Region` 클릭 >
`Event bus as target` 설정 > `create a new role for this specific resource` 클릭  
이때, `Event bus as target`에 들어가는 arn은 us-east-1의 default EventBus입니다.(아래 그림 참조)
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_22.png)
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_23.png)  

<br>

- step 3-4 / step 3-5  
AWS console의 step4를 통해 tag정보를 기입할 수 있으며 step5를 통해 설정 정보를 리뷰 확인 후 `create rule` 클릭  
생성된 Rule은 `Events` > `rules`에서 확인
![](/ko/docs/guides/alert_manager/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_17.png)  

<br>
<br>
  
AWS SNS Webhook, AWS SNS 그리고 AWS EventBridge 설정이 모두 끝났다면 **SpaceONE에서 PHD Event에 대한 Alert을 받을 수 있습니다.**

1. test 1
2. test 2
3. test 3
  1. test 3-1
  2. test 3-2
