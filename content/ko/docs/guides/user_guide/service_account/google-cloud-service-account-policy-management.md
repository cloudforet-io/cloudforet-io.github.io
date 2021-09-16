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

**SpaceONE** highly recommends, setting appropriate permissions to **Service Accounts** for each purpose. 

* **General Collector** 
  : \(Retrieve Google Cloud Resources into **SpaceONE** Inventory\)
    * Google Compute VM Collector - **google-cloud compute**
    * Google Cloud Service Collector - **google-cloud-services**
    * Google power state Collector - **google-cloud-power-state**

* **Power-scheduler** 
  : \(Post Action to Google Cloud resources to turn on/off for following resources :  Compute VMs, Instance group, Cloud SQL\) with [Power-scheduler > Scheduler Management](/docs/guides/user_guide/automation/power-scheduler/)
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

Collectors require appropriate authorities to collect cloud resources. We strongly recommend limiting the collector's service account permission to **`read only access`**. Or you can add more restrictions per resources or actions. One useful example is to restrict its rights within region.

{{% pageinfo color="300" %}}
**STEP 1. Sign in to Google Cloud Console > IAM** 

Go to **IAM >  Service Account** and click **`+ CREATE SERVICE ACCOUNT`**.
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-16.00.20.png)

{{% pageinfo color="300" %}}
**STEP 2. Set Service account details**

Enter _**Service account name**_, and _**Service account description**_.
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-16.16.10.png)

{{% pageinfo color="300" %}}
**STEP 3: Grant Service account to Project**

Set Permission to Viewer \(Role\): Read Access to All Resources, and click **`CONTINUE`**.
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-16.27.10.png)

{{% pageinfo color="300" %}}
**STEP 4: Grant Users access to this service Account \(Optional\)** 

_**You can skip this process**_ and move to the next.

Set _Service account users role_ and _Service account admin role_.

Click **`DONE`** when everything is finished.
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-16.36.25.png)

{{% pageinfo color="300" %}}
**STEP 5: CREATE KEY**

Find the Service account that you created in the previous step.

Click the Action button and Select **`Create Key`**.

Select a Key Type and click the **`CREATE`** button. We recommend type JSON.
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-16.44.34.png)
![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-17.01.11.png)

{{% pageinfo color="300" %}}
**STEP 6: Review**

After step 5, you'll be able to see the Key ID on the list and also its service account JSON on your local. 
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-17.05.55.png)

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-17.07.16.png)

<br/>



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

{{% pageinfo color="300" %}}
**Step 1. Create Role**

Go to **IAM > Role >** **`+ Create Role`**.
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-04-07-at-18.09.05.png)

{{% pageinfo color="300" %}}
**Step 2. Add Permissions to Role**

**Please, find an appropriate permission within the cloud service.**

* storage.buckets.get
* storage.buckets.getIamPolicy
* storage.buckets.list
* storage.objects.get
* storage.objects.getIamPolicy
* storage.objects.list

Then click the **`ADD`** button.

{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-04-07-at-18.18.42.png)

{{% pageinfo color="300" %}}
**STEP 3: Review Permissions** 

Review the permissions once you've created a role.
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-04-07-at-18.20.27.png)

{{% pageinfo color="300" %}}
**STEP 4: Set Created Role into the Service Account** 

Move to menu **IAM > IAM**. 
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-19.02.52.png)

{{% pageinfo color="300" %}}
Click the _**pencil icon**_ to move to **Edit permissions**. Then add the New Role created from the previous step.
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-04-07-at-18.24.41.png)

{{% pageinfo color="300" %}}
**STEP 5: Set BigQuery Permission into the Service Account** 

Use the **`+ ADD ANOTHER ROLE`** and add BigQuery roles.
When you are done, click the **`Save`** button.
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-04-07-at-18.26.14.png)

<br/>



## Power Controller

_**SpaceONE**_'s _**Power Scheduler**_ requires editing permissions to update the following Cloud Services: 

* **VM Instance**
* **Instance Group**
* **Cloud SQL**

{{% pageinfo color="300" %}}
**Step 1. Create Role**

Go to **IAM > Role >** **`+ Create Role`**.
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-18.09.00.png)

{{% pageinfo color="300" %}}
**Step 2. Add Permissions to Role**

**Please, find an appropriate permission within the cloud services** then click the **`ADD`** button.
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

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-18.23.13.png)

{{% pageinfo color="300" %}}
**STEP 3: Review Permission** 

Review the permissions in the role you've created.
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-18.57.43.png)

{{% pageinfo color="300" %}}
**STEP 4: Set Created Role into the Service Account** 

Drive to menu **IAM > IAM**. 
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-19.02.52.png)

{{% pageinfo color="300" %}}
Click the _**pencil icon**_ to move to **Edit permissions**. Then add the New Role created from the previous step.

After finishing the edit click the **`Save`** button.
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-19.05.18.png)

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-02-10-at-19.05.26.png)

<br/>



## Register Your Service Account into SpaceONE

{{% pageinfo color="300" %}}
**Step 1: Please, **`Sign In`** to the SpaceONE portal.**
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/google_01.png)

{{% pageinfo color="300" %}}
**Step 2: Move to the menu's Service Account** 

Follow **`Identity`** > **`Service Account`** from the Top Menu bar.
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/google_02.png)

{{% pageinfo color="300" %}}
**Step 3: Select Provider and Add Service Account**

Select Google for the Service Provider and then click the **`+ Add`** Button
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/google_04.png)

![](/docs/guides/user_guide/service_account/service_account_img/google/google_03.png)

{{% pageinfo color="300" %}}
**Step 4: Fill out the Base Information and Credentials**

Please, fill out all required fields. Use your Service Account JSON that you issued at [**General Collector Step**](#general-collector) .

You can also just simply copy and paste the JSON.
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-04-16-at-16.06.09.png)

{{% pageinfo color="300" %}}
**Step 5: Select a Project to Map the Service Account**

Select a Project that you want to map the service account on.
Then click the **`Save`** button.
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-04-16-at-16.11.11.png)

{{% pageinfo color="300" %}}
**Step 6: Confrim your Registration**

Finally check the Service Account's **Google Account List** to confirm your registration.
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/google/screen-shot-2021-04-16-at-16.14.44.png)

