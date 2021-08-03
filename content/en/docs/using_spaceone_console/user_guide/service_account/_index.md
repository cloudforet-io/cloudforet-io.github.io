---
title: "Service Account"
linkTitle: "Service Account"
weight: 9
url_dash_board: "" 
date: 2021-06-10
description: >
    Credential information for each cloud providers.
---
# Service Account

## Overall

Using service account page, Users can manage credentials easily for each  cloud providers. Multi cloud resources are collected based on this credentials

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/service_account_img_01.png)

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/service_account_img_02.png)


* Adding _**Service Account**_
* Deletion of _**Service Account**_ /Changing _**project**_
* Link to AWS Console

SpaceONE supports providers belows. 

* AWS
* Google Cloud
* Microsoft Azure
* MEGAZONE
* SpaceONE

## Adding Service Account

Users can add _**Service Account**_ by select cloud provider and clicking _**+ Add**_ button

In the user guide, we will focus on AWS\`s IAM

_**Service Account**_ will be easily added by fill out items marked with \*.

### Base Information

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/2020-08-07-5.44.58.png)

* Name : Name of Service Account
* Account ID : Root Account ID.\(12-digits\)
* Tag : Additional _**Service Account**_\`s tag

### Credentials

Two types of Service Accounts are available. \(aws\_access\_key, aws\_assume\_role\)

Input parameters for each types. 

#### aws\_access\_key  

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/2020-08-07-5.48.28.png)

* Region\(Option\) : Target regions to be collected. Empty will be considered all regions \(Collectors will scan all regions resources\).
* AWS Access Key\(Required\) : Access Key from IAM. Read Only policy is strongly recommended.
* AWS Secret Key\(Required\) : Secret key from IAM.

#### aws\_assume\_role

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/2020-08-07-5.53.33.png)

* Region\(Option\) : Target regions to be collected. Empty will be considered all regions \(Collectors will scan all regions resources\).
* AWS Access Key\(Required\) : Access key from IAM to be assumed.
* AWS Secret Key\(Required\) : Secret key from IAM to be assumed.
* Role ARN\(Required\) : Role ARN of assume role from IAM.

### Selecting Project

Select the project to which the _**Service Account**_ will be placed. Collected resources from that _**Service Account**_ will be belongs to the projects automatically

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/2020-08-07-6.02.19.png)

* To create _**Project**_. By clicking _**+ Create Project ,**_ new tab will be opened to create project. 
* To check detailed process about creating project, refer to following link.

<div class="my-4">
<a class="btn btn-secondary"
    href="/docs/guides/user_guide/project/project_group_management/"
    target="_blank"
    rel="noopener"
    >Project Group Management</a>
</div>

* Select projects you need then click _**Save**_ button.

## Deletion of Service Account /Changing Project 

User can delete Service Account or change project that was linked.

Select target _**Service Account**_, then click _**Action &gt; Delete/Change Project**_

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/2020-08-07-6.17.37.png)

#### Deletion of Service Account

Enter name of Service Account, then click _**Confirm**_

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/2020-08-07-6.21.27.png)

#### Changing Project

Like picture below, Select project to be changed then click _**Confirm.**_

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/2020-08-07-6.22.47.png)

## Link to AWS Console

Select target Service Account then, click _**Action &gt; Console.**_

User can move to AWS Console. User need to login to AWS Console previously\(AWS Console SSO is not available\)

## Detailed Status Tab

Using detailed status tab, Checking detailed parameter of _**Service Account**_ or managing members are available.

#### Detail 

Detailed parameter of _**Service Account**_.

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/2020-08-07-6.33.27.png)

#### Tag

By clicking _**Edit**_ button, Tag for Service Accounts will be added or deleted.

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/2020-08-07-6.54.13.png)

#### Credentials

Credentials that contains key information can be added/removed

####  


