---
title: "Domain Admin"
linkTitle: "Domain Admin"
weight: 2
date: 2021-07-31
description: >
    The role of Domain Admin creates the top-level project group, creates users, and sets the main collector.
---

# Domain Admin

## Sign-in

**`Domain Admin`** log-in through the normal login page. E-mail received from the **`Root Account`** has stated detailed the connection methods such as Single Sign On, ID/PW, or Google Oauth2.

**`Domain Admin`** 은 최상위 프로젝트 그룹을 만들고, 사용자를 생성하며, 주요 **`Collector`** 를 설정합니다.



**STEP 1: `Domain Admin`Role 이 부여된 User로 Log-in 합니다.** 

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_01.png)

## 프로젝트 그룹 생성

SpaceONE의 모든 자원은 특정 **`Project`** 에 소속되어 있습니다. 또한,  **`Project Group`** 은 **`Project`** 를 그룹화합니다. 

Domain Admin은 회사의 관리 정책에 따라서 최상위 **`Project Group`** 을 생성합니다. 

**`Project`** 생성 권한은 **`Project Admin`** 으로 지정된 **`General User`** 에게 있습니다. 


**STEP 1: 상단 Navigation에서 Project 선택 후, `Landing Zone`라는 이름으로 `Project Group`을 생성합니다.** 

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_02.png)
![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_03.png)

**STEP 2: `Services` 라는 이름으로 `Project Group`을 생성합니다.**

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_04.png)

**STEP 3: `Business Support System` 이라는 `Project Group`을 생성합니다.** 

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_05.png)

**STEP 4: SpaceONE console의 좌측 navigation 에서 생성된 `Project Group`을 확인할 수 있습니다.**

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_06.png)

## Create User

일반 사용자를 생성하여 **`Project Group`**에 할당합니다. 

{% hint style="info" %}
일반 사용자는 자신이 소속된 **`Project Group`** 의 리소스에만 접근 가능합니다. 
{% endhint %}

**STEP 1: 상단 네비게이션에 `Identity > User`** 로 이동합니다.

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_07.png)

  
**STEP 2: `Add` 버튼을 클릭합니다.** 

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_08.png)

**STEP 3: Project Admin 사용자 정보를 입력 한  추가합니다.** 

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_09.png)

**STEP 4: User를 Services 프로젝트 그룹에 매핑합니다.**

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_10.png)

**STEP 5: User Management 화면에서 Role과 Authorization Type이 매핑된 것을 확인할 수 있습니다.**

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_user_role.png)


## Cloud Resource Collectors

**`Collector`**는 AWS, Google Cloud, Azure 등 클라우드 서비스의 자원을 수집하는 Plugin입니다. 

**`Domain Admin`**이 **`Collector`**에 대한 정보를  설정합니다. 



SpaceONE 상단 navigation의 **`Plugin` -`Collector`** 를 선택한 후, **`Create`** 버튼을 클릭해 Collector를 생성합니다.

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_14.png)



### **AWS EC2 Collector 생성**

**STEP 1: Market place 에서 `aws-ec2` 플러그인을 선택합니다.**

\*\*\*\*

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_15.png)

**STEP 2: AWS EC2 `collector` 를 생성합니다.**

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_16.png)



### **AWS Cloud Services Collector 생성**

**STEP 1: Market-place 에서 `aws-cloud-services` 플러그인을 선택합니다.**

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_17.png)

  
**STEP 2: AWS Cloud Service Collector 를 생성합니다.** 

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_18.png)

\*\*\*\*

### **AWS  Cloud Service Collector 생성**

**STEP 1: Market-place 에서 `aws-cloud-services` 플러그인을 선택합니다.**

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_19.png)

**STEP 2: AWS trusted advisor `collector`를 생성합니다.** 

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_20.png)

\*\*\*\*

### **AWS Health Dashboard Collector 생성**

**STEP 1: Market-place 에서 `aws-cloud-services` 플러그인을 선택합니다.**

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_21.png)

**STEP 2: AWS Personal Health Dashboard `collector`를 생성합니다.** 

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_22.png)

\*\*\*\*

### **AWS Metric Collector 생성**

**STEP 1: Market-place 에서 `aws-cloud-services` 플러그인을 선택합니다.**

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_23.png)

**STEP 2: Spaceone-Monitoring Metric `Collector`를 생성합니다.** 

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_24.png)

생성된 전체 **`collector`** 목록을 확인합니다.

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_25.png)

## Update Schedule

Schedule 설정을 통해, 생성된 **`Collector`** 들의 수집주기를 설정하고 주기적으로 클라우드 자원을 수집합니다.   



**STEP 1: Schedule을 설정하고 싶은 `Collector`를 선택한 뒤, 하단 `Schedule` 탭의 `Add` 버튼을 클릭합니다.** 

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_26.png)

**STEP 2: 매 4시간 마다 수집하는 `Collector`를 생성합니다.**

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_27.png)

![](/docs/using_spaceone_console/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_28.png)

