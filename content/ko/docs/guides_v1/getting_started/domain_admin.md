---
title: "Domain Admin"
linkTitle: "Domain Admin"
weight: 2
date: 2021-07-31
description: >
    Domain Admin 역할은 최상의 프로젝트 그룹과 사용자를 생성하며, 주요 Collector를 셋팅 합니다. 
---

## Sign-in

**`Domain Admin`** 은 일반 로그인 페이지를 통해 로그인 합니다. E-mail received from the **`Root Account`** 관리자로부터 부여 받은 E-mail과 password를 입력하여 로그인이 가능합니다. 회사내의 계정과 SSO 연동이 된 경우, 하단의 버튼을 클릭하여 편리하게 로그인이 가능 합니다. 

**`Domain Admin`** 은 상위 레벨의 프로젝트 그룹과, 사용자를 생성할 수 있으며, **`Collector`** 셋팅도 가능 합니다. 

{{% pageinfo color=“300” %}}
**STEP 1: `Domain Admin` 역할을 부여 받은 사용자로 로그인 합니다.**
{{% /pageinfo %}}

![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_01.png)

## Create Project Group

SpaceONE의 모든 클라우드 자원들은 반드시 특정 **`Project`**에 속해 있어야 합니다. 또한, **`Project`**를 **`Project Group`**으로 그룹화 할 수 있습니다. 

도메인 관리자는 **`Project Group`**를 회사 내의 관리 정책에 따라 생성할 수 있습니다.
**`일반 사용자`**( **`프로젝트 관리자`** )는 **`Project`**를 생성할 수 있는 권한을 가지고 있습니다.

{{% pageinfo color=“300” %}}
**STEP 1: 프로젝트 메뉴로 이동하여 `Landing Zone` 이라는 이름으로 `Project Group`을 생성 합니다.**
{{% /pageinfo %}}


![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_02.png)
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_03.png)

{{% pageinfo color=“300” %}}
**STEP 2: `Services` 라는 이름으로 `프로젝트 그룹` 생성 합니다.**
{{% /pageinfo %}}

![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_04.png)

{{% pageinfo color=“300” %}}
**STEP 3: `Business Support System` 라는 이름으로 `프로젝트 그룹`을 생성 합니다.**
{{% /pageinfo %}}
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_05.png)

{{% pageinfo color=“300” %}}
**STEP 4: 좌측 네비게이션 바에 생성된 모든 `프로젝트 그룹`을 확인 합니다.**
{{% /pageinfo %}}
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_06.png)

## Create User

**`일반 사용자`**를 생성한 후 생성된 사용자 **`프로젝트 그룹`** 에 할당 합니다.

일반 사용자는 소속된 **`프로젝트 그룹`** 에만 접속 가능 합니다.

{{% pageinfo color=“300” %}}
**STEP 1: 상단 네비게이션 바의 `Identity > User`** 로 이동하세요.
{{% /pageinfo %}}
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_07.png)

{{% pageinfo color=“300” %}}
**STEP 2: `Add` 버튼을 클릭 하세요.** 
{{% /pageinfo %}}
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_08.png)

{{% pageinfo color=“300” %}}
**STEP 3: 프로젝트 관리자 정보를 입력 하세요.** 
{{% /pageinfo %}}
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_09.png)

{{% pageinfo color=“300” %}}
**STEP 4: 사용자가 연결되어야 할 프로젝트 그룹을 선택 합니다.**
{{% /pageinfo %}}
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_10.png)

{{% pageinfo color=“300” %}}
**STEP 5: 프로젝트 그룹에 사용자를 추가 합니다.**
{{% /pageinfo %}}
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_11.png)
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_12.png)

{{% pageinfo color=“300” %}}
**STEP 6: 사용자 관리 페이지에서, 각 사용자별 연결된 역할과 권한을 확인할 수 있습니다.**
{{% /pageinfo %}}
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_13.png)


## Cloud Resource Collectors

**`Collector`**는 스페이스원의 플러그인 중 하나로서, AWS, Google Cloud와 Azure 등의 클라우드 서비스로부터 자원을 수집하는 역할을 합니다.

**`도메인 관리자`**는 **`Collector`**의 정보를 설정합니다.

스페이스원 상단 네비게이션의 **`Plugin`-`Collector`**를 선택한 후, **`Create`** 버튼을 클릭하여 collector를 생성 합니다.

![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_14.png)


### **Create AWS EC2 Collector**
{{% pageinfo color=“300” %}}
**STEP 1: 마켓 플레이스의 `aws-ec2` 플러그인을 선택 합니다.**
{{% /pageinfo %}}
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_15.png)

{{% pageinfo color=“300” %}}
**STEP 2: AWS EC2 `Collector`를 생성 합니다.**
{{% /pageinfo %}}
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_16.png)


### **Create AWS Cloud Services Collector**
{{% pageinfo color=“300” %}}
**STEP 1: 마켓 플레이스의 `aws-cloud-services` 플러그인을 선택 합니다.**
{{% /pageinfo %}}
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_17.png)
{{% pageinfo color=“300” %}}  
**STEP 2: AWS Cloud Service `Collector`를 생성 합니다.** 
{{% /pageinfo %}}
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_18.png)


### **Create AWS Trusted Advisor**
{{% pageinfo color=“300” %}}
**STEP 1: 마켓 플레이스의 `aws-trusted-advisor` 플러그인을 선택 합니다**
{{% /pageinfo %}}
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_19.png)
{{% pageinfo color=“300” %}}
**STEP 2: AWS trusted advisor `Collector`를 생성 합니다.** 
{{% /pageinfo %}}
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_20.png)


### **Create AWS Health Dashboard Collector**
{{% pageinfo color=“300” %}}
**STEP 1: 마켓 플레이스의 `aws-health-dashboard` 플러그인을 선택 합니다.**
{{% /pageinfo %}}
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_21.png)
{{% pageinfo color=“300” %}}
**STEP 2: AWS Personal Health Dashboard `Collector`를 생성 합니다.** 
{{% /pageinfo %}}
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_22.png)


### **Create AWS Metric Collector**

#### Preparation

Metric Collector를 사용하기 전에, 이를 위한 Service Account를 먼저 생성 해야 합니다.
링크를 참조 해주세요. [Metric Collector Service Account](/ko/docs/guides_v1/getting_started/metric-collector-quick-start/)


{{% pageinfo color=“300” %}}
**STEP 1: 마켓 플레이스 에서 `monitoring-metric-collector` 플러그인을 생성 합니다.**
{{% /pageinfo %}}
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_23.png)
{{% pageinfo color=“300” %}}
**STEP 2: Spaceone-Monitoring Metric `Collector`를 생성 합니다.** 
{{% /pageinfo %}}
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_24.png)

리스트에서 생성된 **`Collector`** 리스트를 확인 합니다.

![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_25.png)

## Update Schedule

스케줄 설정을 통해, **`Collector`**가 클라우드 자원들을 주기적으로 수집할 수 있도록 시간을 설정할 수 있습니다.

{{% pageinfo color=“300” %}}
**STEP 1: 셋팅 하고 싶은 `Collector`를 선택하고 하단의 `Schedule` 탭에서 `Add` 버튼을 클릭 하세요.**
{{% /pageinfo %}}
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_26.png)

{{% pageinfo color=“300” %}}
**STEP 2: `Collector` 가 매 4시간마다 수집하도록 하는 스케줄을 생성 합니다.**
{{% /pageinfo %}}
![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_27.png)

![](/ko/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_28.png)
