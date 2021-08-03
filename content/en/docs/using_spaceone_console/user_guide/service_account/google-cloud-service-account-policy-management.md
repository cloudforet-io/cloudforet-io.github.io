---
title: "(Google Cloud) Service Account Policy Management"
linkTitle: "(Google Cloud) Service Account Policy Management"
weight: 11
url_dash_board: "" 
date: 2021-06-10
description: >
    Details of API Security policy to use SpaceONE plugin
---
# \(Google Cloud\) Service Account Policy Management

## Service Account Policy

**SpaceONE** highly recommends on setting appropriate permissions to **Service Accounts** for each purposes. 

* **General Collector** 
  : \(Retrieve Google Cloud Resources into **SpaceONE** Inventory\)
    * Google Compute VM Collector - **google-cloud compute**
    * Google Cloud Service Collector - **google-cloud-services**
    * Google power state Collector - **google-cloud-power-state**

* **Power-scheduler** 
  : \(Post Action to Google Cloud resources to turn on/off for following resources :  Compute VMs, Instance group, Cloud SQL\) with [Power-scheduler > Scheduler Management](/docs/using_spaceone_console/user_guide/automation/power-scheduler/)
    * Google Cloud power Controller 

{{% pageinfo color="300" %}}
**STEP 1. Please, Set Service Accounts** to Create API for each Use Case 

* [**General Collector**](#general-collector)
  * [**Special Roles**](#special-roles)              
* [**Power Controller**](#power-controller)

**STEP 2. Register Your Service Account into SpaceONE** 

* [**Register Service Account into SpaceONE**](#register-your-service-account-into-spaceone)
{{% /pageinfo %}}

<br/>

## General Collector 

Collector requires appropriate authorities to collect cloud resources. We strongly recommend limiting the collector's service account permission to **`read only access`**. Or you can add more restrictions per resources or actions. One useful example is to restrict its rights within region.

{{% pageinfo color="300" %}}
**STEP 1. Log in Google Cloud Console > IAM** 

Go to IAM >  Service Account and Click **`+ CREATE SERVICE ACCOUNT`**
{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-16.00.20.png)

{{% pageinfo color="300" %}}
**STEP 2. Set Service account details**

Enter _**Service account name**_, and _**Service account description**_
{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-16.16.10.png)

{{% pageinfo color="300" %}}
**STEP 3: Grant Service account to Project**

Set Permission to Viewer \(Role\): Read All Access and Click **`CONTINUE`**
{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-16.27.10.png)

{{% pageinfo color="300" %}}
**STEP 4: Grant Users access to this service Account \(optional\)** 

_**You can skip this process**_ and move to the next.

Set Service account users role and Service account admin role.
Click **`DONE`** when everything is finished. 
{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-16.36.25.png)

{{% pageinfo color="300" %}}
**STEP 5: CREATE KEY**

Find a Service account that you created right before in previous step.
Click Action button and Select **`Create Key`**

Select Key Type and Click **`CREATE`** button. We suggest JSON Type  as recommended above.
{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-16.44.34.png)
![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-17.01.11.png)

{{% pageinfo color="300" %}}
**STEP 6: Review**

You will see the Key ID on the list and its service account JSON on your local. 
{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-17.05.55.png)

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-17.07.16.png)

<br/>

### Special Roles

_**SpaceONE**_'s _**General Collector**_ requires permission to access following services:


{{% alert title="" color="info" %}}
**Google Cloud APIs are categorized as its types, and therefore it is essential to set up a Special Role that Collect others rather than just general cloud services.**  
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

{{% pageinfo color="300" %}}
**Step 1. Create Role**

Go to IAM &gt; Role &gt; **+ Create Role**
{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-04-07-at-18.09.05.png)

{{% pageinfo color="300" %}}
**Step 2. Add Permissions to Role**

**Please, find an appropriate permission within cloud services**

* storage.buckets.get
* storage.buckets.getIamPolicy
* storage.buckets.list
* storage.objects.get
* storage.objects.getIamPolicy
* storage.objects.list

Then click the **`ADD`** button.

{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-04-07-at-18.18.42.png)

{{% pageinfo color="300" %}}
**STEP 3: Review Permission** 

Review permissions once you've created a role.
{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-04-07-at-18.20.27.png)

{{% pageinfo color="300" %}}
**STEP 4: Set Created Role into Service Account** 

Move to Menu IAM > IAM 
{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-19.02.52.png)

{{% pageinfo color="300" %}}
Click the pencil icon to edit and Add New Role that has been created in the previous step.
{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-04-07-at-18.24.41.png)

{{% pageinfo color="300" %}}
**STEP 5: Set BigQuery Permission into Service Account** 

Click the **`Save`** button.
{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-04-07-at-18.26.14.png)

<br/>

## Power Controller

_**SpaceONE**_'s _**Power Scheduler**_ requires editing permissions to update following Cloud Services: 

* **VM Instance**
* **Instance Group**
* **Cloud SQL**

{{% pageinfo color="300" %}}
**Step 1. Create Role**

Go to IAM &gt; Role &gt; **+ Create Role**
{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-18.09.00.png)

{{% pageinfo color="300" %}}
**Step 2. Add Permissions to Role**

**Please, find appropriate permission within cloud services** the click the **`ADD`** button.
{{% /pageinfo %}}

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

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-18.23.13.png)

{{% pageinfo color="300" %}}
**STEP 3: Review Permission** 

Review permissions in created role.
{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-18.57.43.png)

{{% pageinfo color="300" %}}
**STEP 4: Set Created Role into Service Account** 

Drive to Menu IAM &gt; IAM 
{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-19.02.52.png)

{{% pageinfo color="300" %}}
Click the pencil icon to edit and Add New Role that created in previous step. 

After finishing the edit click the **`Save`** button.
{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-19.05.18.png)

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-19.05.26.png)

<br/>

## Register Your Service Account into SpaceONE

{{% pageinfo color="300" %}}
**Step 1: Please, Sign In into SpaceONE portal**
{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/google_01.png)

{{% pageinfo color="300" %}}
**Step 2: Drive to menu Service Account : `Identity` &gt; `Service Account` from Top Menu bar**
{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/google_02.png)

{{% pageinfo color="300" %}}
**Step 3: Select Provider Google &gt; Click `+ Add` Button**
{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/google_03.png)

{{% pageinfo color="300" %}}
**Step 4: Please, fill out all required fields as below with your Service Account JSON that you issued at** [**General Collector Step**](#general-collector)**.**
{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-04-16-at-16.06.09.png)

{{% pageinfo color="300" %}}
**Step 5: Fill out Credentials Info or simply copy and paste JSON and Select Project that you want to map service account.**   
{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-04-16-at-16.11.11.png)

{{% pageinfo color="300" %}}
**Step 6: Click `Save` Button and Check if Service Account has register on the list.** 
{{% /pageinfo %}}

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/google/screen-shot-2021-04-16-at-16.14.44.png)

