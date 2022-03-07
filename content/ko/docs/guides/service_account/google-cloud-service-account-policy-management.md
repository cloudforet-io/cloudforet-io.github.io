---
title: "(Google Cloud) Service Account Policy Management"
linkTitle: "(Google Cloud) Service Account Policy Management"
weight: 11
url_dash_board: ""
date: 2021-06-10
description: >
    SpaceONE의 inventory 플러그인에 적용하기 위한 Google IAM 정책을 안내 합니다.
---

## Service Account Policy
SpaceONE의 Inventory Collector Plugin이 정상적으로 동작하기 위한 IAM Service Account 설정 방안은 아래와 같습니다.

* **General Collector**
  : \(**SpaceONE** Google Inventory Collector Plugin을 통해 Google Cloud 리소스 정보를 수집 합니다. \)
    * Google Compute VM Collector - **google-cloud compute**
    * Google Cloud Service Collector - **google-cloud-services**

### **STEP 1. Service Account 설정** API사용을 위한 Service Account를 설정
* [**General Collector**](#general-collector) &sol; [**Additional Roles**](#additional-roles)

### **STEP 2. SpaceONE에 Service Account를 등록**
* [**Register Service Account into SpaceONE**](#register-your-service-account-into-spaceone)

## General Collector
Collector는 cloud 자원을 수집하기 위해 적절한 권한을 필요로 합니다. 또한, service account의 권한을 **`read only access`**로 설정하시는 것을 강력히 권고 드립니다. 


### **STEP 1. Google Cloud Console에 로그인 후 IAM 으로 이동**
**IAM >  Service Account** 로 이동 후 **`+ CREATE SERVICE ACCOUNT`** 를 클릭 합니다.
![](/docs/guides/service_account/service_account_img/google/screen-shot-2021-02-10-at-16.00.20.png)

### **STEP 2. Set Service account 를 상세 설정 합니다.**
_**Service account name**_ 과 _**Service account description**_ 를 입력 합니다.
![](/docs/guides/service_account/service_account_img/google/screen-shot-2021-02-10-at-16.16.10.png)

### **STEP 3: Role을 지정 합니다.**
Viewer Role(모든 Compute 서비스에 대한 읽기 권한)을 할당 합니다. 그리고 **`CONTINUE`**를 클릭 합니다.
![](/docs/guides/service_account/service_account_img/google/screen-shot-2021-02-10-at-16.27.10.png)

### **STEP 4: Service Account에 접근 가능한 사용자를 지정 합니다.(Optional)**
_**해당 step은 생략 가능합니다.**_ 다음 Process로 이동 합니다. <br>
_Service account uer role_ 과 _Service account admin role_ 을 선택할 수 있습니다 <br>
완료 후 **`DONE`** 을 클릭 합니다.
![](/docs/guides/service_account/service_account_img/google/screen-shot-2021-02-10-at-16.36.25.png)

### **STEP 5: CREATE KEY**
앞에서 생성한 Service account 선택 후 _**Actions > Create key**_ 를 클릭 합니다. 
Key Type은 JSON을 선택 합니다.
![](/docs/guides/service_account/service_account_img/google/screen-shot-2021-02-10-at-16.44.34.png)
![](/docs/guides/service_account/service_account_img/google/screen-shot-2021-02-10-at-17.01.11.png)

### **STEP 6: Review**
Create Key를 클릭하면, 자동으로 API Credential 정보가 Local 환경에 다운로드 됩니다.
![](/docs/guides/service_account/service_account_img/google/screen-shot-2021-02-10-at-17.05.55.png)
![](/docs/guides/service_account/service_account_img/google/screen-shot-2021-02-10-at-17.07.16.png)

### Additional Roles
_**SpaceONE**_'s _**General Collector**_ 는 아래의 cloud resource에 접근 하기 위해 추가적인 접근 권한을 필요로 합니다.: 

{{% alert title="" %}}
**Google Cloud API는 각 서비스 Category로 구분되어 있어 Compute 서비스 이외의 자원들은 추가적인 Role을 필요로 합니다.** 
{{% /alert %}}

* Cloud Storage
    * Object
        * list
        * get
        * getIamPolicy
    * Bucket
        * list
        * get
        * getIamPolicy
* Big Query
    * Resource Viewer
    * Data Viewer

### **Step 1. Role 생성**
**IAM > Role >** 로 이동 후 **`+ Create Role`** 을 클릭 합니다.
![](/docs/guides/service_account/service_account_img/google/screen-shot-2021-04-07-at-18.09.05.png)

### **Step 2. Role에 Permission을 추가.**
**Please, find an appropriate permission within the cloud service.**
아래와 같은 permision을 추가 합니다.

* storage.buckets.get
* storage.buckets.getIamPolicy
* storage.buckets.list
* storage.objects.get
* storage.objects.getIamPolicy
* storage.objects.list

**`ADD`** 버튼을 클릭 합니다.
![](/docs/guides/service_account/service_account_img/google/screen-shot-2021-04-07-at-18.18.42.png)

### **STEP 3: Review Permissions**
Role을 생성 후 permission을 확인 합니다.
![](/docs/guides/service_account/service_account_img/google/screen-shot-2021-04-07-at-18.20.27.png)

### **STEP 4: Service Account에 Role을 설정 **
**IAM > IAM** 으로 이동.
![](/docs/guides/service_account/service_account_img/google/screen-shot-2021-02-10-at-19.02.52.png)
_**pencil icon**_ 을 클릭 후 **Edit permissions** 으로 이동 합니다. 그리고 앞에서 생성한 Role을 추가 합니다.
![](/docs/guides/service_account/service_account_img/google/screen-shot-2021-04-07-at-18.24.41.png)

### **STEP 5: Service Account에 BigQuery Role추가**
**`+ ADD ANOTHER ROLE`** 을 클릭 후 BigQuery Role을 추가 합니다.
추가를 완료한 후 **`Save`** 버튼을 클릭하여 완료 합니다.
![](/docs/guides/service_account/service_account_img/google/screen-shot-2021-04-07-at-18.26.14.png)

