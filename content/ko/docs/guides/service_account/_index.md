---
title: "Service Account"
linkTitle: "Service Account"
weight: 7
url_dash_board: "" 
date: 2021-06-10
description: >
    Credential information for each cloud providers.
---
# Service Account

## Overall

On the service account page, you can easily manage credentials for each service provider. Multi cloud resources are collected based on these credentials.

![](/ko/docs/guides/service_account/service_account_img/service_account_img_01.png)

![](/ko/docs/guides/service_account/service_account_img/service_account_img_02.png)


**1.** A list of **Service Providers**  
**2.** Adding  **Service Account**  
**3.** Deleting **Service Account** /Changing **Project**/Connecting to **Console**  
**4.** **Details**, **Tag**/**Credentials** Management, **Member**  
<br>
**SpaceONE** supports the following service providers:  
<br>
* Alibaba Cloud
* AWS
* Azure
* Google 
* Hyper Billing
* Oracle Cloud
* SpaceONE

## Add Service Account

You can add a **Service Account** simply by selecting a service provider and clicking the **+ Add** button.

For the upcoming steps, we will focus on AWS\`s IAM.

To add a **Service Account**, you need to enter a **Name** and an **Account ID** first.

### Base Information

![](/ko/docs/guides/service_account/service_account_img/service_account_img_03.png)

* Name : Name of **Service Account**
* Account ID : Root Account ID \(12-digits\)
* Tags : Additional **Service Account**\`s tag

### Credentials

Two types of **Service Accounts** are available: aws\_access\_key, aws\_assume\_role\.

#### aws\_access\_key  

![](/ko/docs/guides/service_account/service_account_img/service_account_img_04.png)

* AWS Access Key \(Required\) : Access Key from IAM (Read Only policy is strongly recommended).
* AWS Secret Key \(Required\) : Secret key from IAM

#### aws\_assume\_role

![](/ko/docs/guides/service_account/service_account_img/service_account_img_05.png)

* AWS Access Key \(Required\) : Access key from IAM to assume a role
* AWS Secret Key \(Required\) : Secret key from IAM to assume a role
* Role ARN \(Required\) : Role ARN from IAM to assume a role

### Select Project

Select a project in which a **Service Account** will be placed. Collected resources from the **Service Account** will be included to the project automatically.

![](/ko/docs/guides/service_account/service_account_img/service_account_img_06.png)

* To create a **Project**, click the **+ Create Project** button.

* For a more detailed process on creating a project, refer to the link below.

<div class="my-4">
<a class="btn btn-secondary"
    href="/ko/docs/guides/project/project_group_management/"
    target="_blank"
    rel="noopener"
    >Project Group Management</a>
</div>

* Select a project you want, then click the **Save** button.

## Delete Service Account/Change Project 

You can delete a **Service Account** or change a **Project** linked to a certain **Service Account**.

Select the target **Service Account**, then click **Action &gt; Delete/Change Project**.

![](/ko/docs/guides/service_account/service_account_img/service_account_img_07.png)

### Delete Service Account

Enter a name of a **Service Account** you want to delete, then click the **Confirm** button.

![](/ko/docs/guides/service_account/service_account_img/service_account_img_08.png)

### Change Project

Select a project you want to newly link a **Service Account**, then click the **Confirm** button.

![](/ko/docs/guides/service_account/service_account_img/service_account_img_09.png)

## Link to AWS Console

Select the target **Service Account**, then click **Action &gt; Connect to Console**.

![](/ko/docs/guides/service_account/service_account_img/service_account_img_10.png)

To access AWS console, you must be logged into AWS console in advance. \(AWS Console SSO is not available.\)

## Status Tab

Using the **Status** tab, you can browse details of a **Service Account**.

### Details 

You can see detailed information of a **Service Account** on the **Details** tab. 

![](/ko/docs/guides/service_account/service_account_img/service_account_img_11.png)

### Tag

By clicking the **Edit** button, **Tags** for a **Service Account** can be added or deleted.

![](/ko/docs/guides/service_account/service_account_img/service_account_img_12.png)

Afer clicking the **+ Add Tags** button, enter a **Key** and a **Value**, then click the **Save** button. 

![](/ko/docs/guides/service_account/service_account_img/service_account_img_13.png)

### Credentials

**Credentials** that contain key information can be added or deleted.

![](/ko/docs/guides/service_account/service_account_img/service_account_img_14.png)

### Member

On the **Member** tab, you can see who is participating in the project.

![](/ko/docs/guides/service_account/service_account_img/service_account_img_15.png)
