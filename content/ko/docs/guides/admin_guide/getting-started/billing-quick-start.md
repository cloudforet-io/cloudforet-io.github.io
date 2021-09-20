---
title: "Billing Quick Start"
linkTitle: "Billing Quick Start"
weight: 3
date: 2021-07-31
description: >
    사용자들이 Billing 서비스를 쉽게 설정하도록 돕는 퀵 가이드 입니다. 
---


![](/docs/guides/admin_guide/getting-started/billing_quick_start_img/billing_quick_start_img_01.png)


## How to Set up

아래의 설정 과정을 완료한 후에 **`Billing Service`** 를 사용할 수 있습니다 :

* [Prerequisites](#prerequisites)
* [Getting API Key from the Billing Service Provider](#getting-api-key-from-the-billing-service-provider)
* [Registering the Billing Service Account](#registering-the-billing-service-account)
* [Veiwing Billing Informations](#billing-information)




## Prerequisites

비용 정보는 **`AWS`**, **`Google Cloud`**, **`Azure`** 및 **`Hyperbilling`** 과 같은 다양한 서비스 제공자들로부터 전달받을 수 있습니다.

빌링 서비스를 활성화 하기 위해서는 먼저 도메인 관리자에게 문의 하세요.

{{% alert title="" %}}
**1.5.3 버전 이후로는, Hyperbilling backend가 기본적으로 활성화 됩니다.**
{{% /alert %}}


Supported billing backends are :

| Version | Backend |
| :--- | :--- |
| 1.5.3 | Hyperbilling for AWS |


## Getting API Key from the Billing Service Provider
 
빌링 Service Account를 추가하기 전에, API Key 정보가 필요 합니다.
각 서비스 제공자에게 이 정보를 문의 하세요.

빌링 서비스 연동을 위한 컨텍 포인트는 아래와 같습니다 : 

| Backend | Contact |
| :--- | :--- |
| Hyperbilling for AWS | MEGAZONE CLOUD \(Innoworks Team\) |


## Registering the Billing Service Account

### How to Register

아래의 순서를 따라 **Billing Service Accounts**를 등록 하세요.

1. [Select and Add Hyper Billing](#1-hyper-billing)
2. [Fill in Base Informations](#2-base-information)
3. [Fill in Credentials \(API Key\)](#3-credentials-api-key)
4. [Assigning Projects](#4-assigning-projects)


#### 1. Hyper Billing

빌링 Service Account를 **`Identity`** > **`Service Account`** 메뉴를 통해 등록할 수 있습니다.

**Hyper Billing** 서비스 제공자를 선택한 후, **Add** 를 클릭 합니다.

{{% alert title="" %}}
**만약 _`Hyper Billing`이 서비스 제공자 리스트에 없는 경우, SpaceONE 도메인 관리자에게 문의 하세요.**
{{% /alert %}}

![Register billing service account](/docs/guides/admin_guide/getting-started/billing_quick_start_img/billing_quick_start_img_02.png)


#### 2. Base Information
'이름' 혹은 'Tags'와 같은 기본적인 정보를 입력 하세요.

![Name of service account](/docs/guides/admin_guide/getting-started/billing_quick_start_img/billing_quick_start_img_03.png)


#### 3. Credentials \(API Key\)

기본정보를 입력한 후, **`Credentials`** 를 설정해야 합니다.

**`Credentials`** 은 빌링 서비스 제공자로부터 전달 받아야 합니다.

Billing Service Provider로 부터 전달 받은 Credentials은 **"Account", "Email" and "Key"** 정보를 포합하고 있습니다. 해당 정보를 정확하게 입력 합니다.
![](/docs/guides/admin_guide/getting-started/billing_quick_start_img/billing_quick_start_img_04.png)


#### 4. Assigning Projects

{{% alert title="" %}}
**아래 순서는 반드시 진행되어야 합니.**
{{% /alert %}}

빌링 서비스를 설정할 때 Project를 **반드시** 추가 해야 합니다. 

Billing Service Account가 연결 되어야 하는 프로젝트를 선택 합니다.

설정이 돤료 되었다면 **`Save`** 버튼을 클릭 합니다.

![](/docs/guides/admin_guide/getting-started/billing_quick_start_img/billing_quick_start_img_05.png)

{{% alert title="" %}}
**빌링 Service Account를 여러개 가지고 있다면, 아래의 순서를 반복 합니다 :**
**빌링 Service Account 등록하기 >** [How to Register](#how-to-register)
{{% /alert %}}


## Billing Information
 
위의 모든 과정이 완료 되었다면,
**main dashboard** 및 각 **project dashboard**에서 **`Billing Information`**을 확인할 수 있습니다. 

* **Main Dashboard** > Overall Billing information
    * main dashboard에서 모든 billing account의 합산 정보가 나타납니다.

![](/docs/guides/admin_guide/getting-started/billing_quick_start_img/billing_quick_start_img_06.png)


* **Seperate Project Pages** > Project Billing information
    * 각 Project Dashboard에서는 빌링 Service Account를 등록한 이후 각각의 빌링 정보를 제공합니다. 

![](/docs/guides/admin_guide/getting-started/billing_quick_start_img/billing_quick_start_img_07.png)

