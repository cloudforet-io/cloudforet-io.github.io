---
title: "(Google Cloud) Service Account Policy Management"
linkTitle: "(Google Cloud) Service Account Policy Management"
weight: 11
url_dash_board: "" 
date: 2021-06-10
description: >
    Details of API Security policy to use SpaceONE plugin
---

## Service Account Policy
**SpaceONE** highly recommends, setting appropriate permissions to **Service Accounts** for each purpose. 

* **General Collector** 
  : \(Retrieve Google Cloud Resources into **SpaceONE** Inventory\)
    * Google Compute VM Collector - **google-cloud compute**
    * Google Cloud Service Collector - **google-cloud-services**
    * Google power state Collector - **google-cloud-power-state**

* **Power-scheduler** 
  : \(Post Action to Google Cloud resources to turn on/off for following resources :  Compute VMs, Instance group, Cloud SQL\) with [Power-scheduler > Scheduler Management](/docs/guides/user_guide/automation/power_scheduler/)
    * Google Cloud power Controller 

### **STEP 1. Please, Set Service Accounts** to Create API for each Use Case
* [**General Collector**](#general-collector) &sol; [**Special Roles**](#special-roles)
* [**Power Controller**](#power-controller)

### **STEP 2. Register Your Service Account into SpaceONE** 
* [**Register Service Account into SpaceONE**](#register-your-service-account-into-spaceone)

## General Collector 
Collectors require appropriate authorities to collect cloud resources. We strongly recommend limiting the collector's service account permission to **`read only access`**. Or you can add more restrictions per resources or actions. One useful example is to restrict its rights within region.

### **STEP 1. Sign in to Google Cloud Console > IAM** 
Go to **IAM >  Service Account** and click **`+ CREATE SERVICE ACCOUNT`**.
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-16.00.20.png)

### **STEP 2. Set Service account details**
Enter _**Service account name**_, and _**Service account description**_.
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-16.16.10.png)

### **STEP 3: Grant Service account to Project**
Set Permission to Viewer \(Role\): Read Access to All Resources, and click **`CONTINUE`**.
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-16.27.10.png)

### **STEP 4: Grant Users access to this service Account \(Optional\)** 
_**You can skip this process**_ and move to the next. <br>
Set _Service account users role_ and _Service account admin role_. <br>
Click **`DONE`** when everything is finished.
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-16.36.25.png)

### **STEP 5: CREATE KEY**
Find the Service account that you created in the previous step. <br>
Click the Action button and Select **`Create Key`**. <br>
Select a Key Type and click the **`CREATE`** button. We recommend type JSON.
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-16.44.34.png)
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-17.01.11.png)

### **STEP 6: Review**
After step 5, you'll be able to see the Key ID on the list and also its service account JSON on your local. <br> 
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-17.05.55.png)
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-17.07.16.png)

### Special Roles
_**SpaceONE**_'s _**General Collector**_ requires permission to access the following services:

{{% alert title="" %}}
**Google Cloud APIs are categorized as its types, and therefore it is essential to set up a Special Role that collects others types, rather than just the general cloud services.**  
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

### **Step 1. Create Role**
Go to **IAM > Role >** **`+ Create Role`**.
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-04-07-at-18.09.05.png)

### **Step 2. Add Permissions to Role**
**Please, find an appropriate permission within the cloud service.**

* storage.buckets.get
* storage.buckets.getIamPolicy
* storage.buckets.list
* storage.objects.get
* storage.objects.getIamPolicy
* storage.objects.list

Then click the **`ADD`** button.
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-04-07-at-18.18.42.png)

### **STEP 3: Review Permissions** 
Review the permissions once you've created a role.
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-04-07-at-18.20.27.png)

### **STEP 4: Set Created Role into the Service Account**
Move to menu **IAM > IAM**.
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-19.02.52.png)
Click the _**pencil icon**_ to move to **Edit permissions**. Then add the New Role created from the previous step.
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-04-07-at-18.24.41.png)

### **STEP 5: Set BigQuery Permission into the Service Account** 
Use the **`+ ADD ANOTHER ROLE`** and add BigQuery roles. <br>
When you are done, click the **`Save`** button.
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-04-07-at-18.26.14.png)

## Power Controller
_**SpaceONE**_'s _**Power Scheduler**_ requires editing permissions to update the following Cloud Services: 

* **VM Instance**
* **Instance Group**
* **Cloud SQL**

### **Step 1. Create Role**
Go to **IAM > Role >** **`+ Create Role`**.
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-18.09.00.png)

### **Step 2. Add Permissions to Role**
**Please, find an appropriate permission within the cloud services** then click the **`ADD`** button.

* VM Instance 
  * Start
  * Stop
  * Reset
* Instance Group \(Manager\)
  * Resize
  * Autoscaler
    * Update
* Cloud SQL
  * Update

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-18.23.13.png)

### **STEP 3: Review Permission** 
Review the permissions in the role you've created.
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-18.57.43.png)

### **STEP 4: Set Created Role into the Service Account** 
Drive to menu **IAM > IAM**. 
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-19.02.52.png)

Click the _**pencil icon**_ to move to **Edit permissions**. Then add the New Role created from the previous step. <br>
After finishing the edit click the **`Save`** button.
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-19.05.18.png)
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-19.05.26.png)

## Register Your Service Account into SpaceONE
### **Step 1: Please, **`Sign In`** to the SpaceONE portal.**
![](/docs/guides/user_guide/service_account/service_account_img/google/google_01.png)

### **Step 2: Move to the menu's Service Account** 
Follow **`Identity`** > **`Service Account`** from the Top Menu bar.
![](/docs/guides/user_guide/service_account/service_account_img/google/google_02.png)

### **Step 3: Select Provider and Add Service Account**
Select Google for the Service Provider and then click the **`+ Add`** Button
![](/docs/guides/user_guide/service_account/service_account_img/google/google_04.png)
![](/docs/guides/user_guide/service_account/service_account_img/google/google_03.png)

### **Step 4: Fill out the Base Information and Credentials**
Please, fill out all required fields. Use your Service Account JSON that you issued at [**General Collector Step**](#general-collector) . <br>
You can also just simply copy and paste the JSON.
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-04-16-at-16.06.09.png)

### **Step 5: Select a Project to Map the Service Account**
Select a Project that you want to map the service account on. <br>
Then click the **`Save`** button.
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-04-16-at-16.11.11.png)

### **Step 6: Confrim your Registration**
Finally check the Service Account's **Google Account List** to confirm your registration.
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-04-16-at-16.14.44.png)