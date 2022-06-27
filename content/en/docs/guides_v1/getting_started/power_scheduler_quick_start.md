---
title: "Power Scheduler Quick Start"
linkTitle: "Power Scheduler Quick Start"
weight: 2
url_dash_board: "" 
date: 2021-05-11
description: >
    Quick Guide for user easier to set up Power Scheduler
---

![](/docs/guides_v1/getting_started/power/ps1.png)

## How to Set up
Start your Power Scheduler after completing the following steps
* [Prerequisites](#prerequisites)
* [Set up Basic Scheduler Info](#set-up-basic-scheduler-info)
* [Configure Scheduler Runtime](#configure-scheduler-runtime)
* [Define Resource Group](#define-resource-group)

## Prerequisites
You can set up your IAM policy for power scheduler in SpaceONE with pre-defined credentials per cloud-provider to control resources with safety and prevent others to access resources without permission.<br>
Please, assign corresponding access policies to SpaceONE from each provider's console as mentioned below, prior to create a Power Scheduler.

{{< link-button background-color="navy500" url="/docs/guides_v1/service_account/aws_service_account_policy_management/" text="(AWS) Service Account Policy Management" />}}
{{< link-button background-color="navy500" url="/docs/guides_v1/service_account/google_cloud_service_account_policy_management/" text="(Google Cloud) Service Account Policy Management" />}}

## Set up Basic Scheduler Info

### STEP 1
Select `Automation` &gt; `Power Scheduler` on top header menu 
![Select Power Scheduler on menu](/docs/guides_v1/getting_started/power/ps2.png)

### STEP 2
Select a project to set up Power Scheduler on the dashboard. 
![Select a Project on Dashboard](/docs/guides_v1/getting_started/power/ps3.png)

### STEP 3
Click `+ New Scheduler`  button at the top left corner. It is automatically changed to the creation mode if there is no previously created scheduler in the project.
![](/docs/guides_v1/getting_started/power/ps4.png)

### STEP 4
Set the scheduler's name to create a scheduler. You can enter a string including letters and  `-` . Scheduler name is required and blank spaces are not allowed.
![](/docs/guides_v1/getting_started/power/ps5.png)

## Configure scheduler runtime
![](/docs/guides_v1/getting_started/power/ps6.png)

Set the time for applying a scheduler.<br>
The calendar grid breaks the week down by day on the horizontal axis and has 24-hour basis segments in portrait orientation.  You can click `This week` button to set the scheduled time for this week.<br>  
You can move between month through  `< >` at the upper right of the graph.<br>
There are three types of scheduler mode.<br>

|  Mode | State | Description | Color |
| :-----: | :-----: | :---- | :---: |
| Repeated Schedule |  | Timer repeated by every week. Selected area became On, Otherwise\(Non selected\) became Off. | <img src="/docs/guides_v1/getting_started/power/ps7.png" width="200px"> |
| One Time Schedule | ON | Created specified time range. Resource became On selected area. | <img src="/docs/guides_v1/getting_started/power/ps8.png" width="200px"> |
|  | OFF | Created specified time range. Resource became Off selected area. | <img src="/docs/guides_v1/getting_started/power/ps9.png" width="200px"> |



### STEP 1
Click&drag to select certain time segments to set time for the scheduler to run.
![](/docs/guides_v1/getting_started/power/ps10.png)

{{% alert title="Please, be advised" %}}
Without any setting of Scheduler Time, it recognizes scheduler as `Turn Off All` which causes all resource to stop working immediately.
{{% /alert%}}

## Define Resource Group
Set the resource group for applying defined schedule  
![](/docs/guides_v1/getting_started/power/ps11.png)
By clicking **`+ Add Resource Group`**, user can move to **Create a resource group** page. 
![](/docs/guides_v1/getting_started/power/ps12.png)
The Naming Rules of Resource Group is below.

{{% alert title="" %}}
Max 128 character <br>
Start with character <br>
Character, Number, & Hyphen`-`  available <br> 
{{% /alert %}}

Select resource type
![](/docs/guides_v1/getting_started/power/ps13.png)
Then, Targeting resource is needed.<br>
Enter search keyword to grouping resources. By clicking search bar available search properties pops up. Default property is name.<br>
Supported search filter is listed here. Usually name or tag filter is preferred.
![](/docs/guides_v1/getting_started/power/ps14.png)
To apply search filter, You need to press _**Enter**_. Then filtered resources will be appeared. 
![](/docs/guides_v1/getting_started/power/ps15.png)
Enter all information, then click the save button below. 
![](/docs/guides_v1/getting_started/power/ps16.png)
Get _**creating success**_ message pops up when all creation process is done successfully. 



<br>

![](/docs/guides_v1/getting_started/power/ps17.png)

![](/docs/guides_v1/getting_started/power//ps18.png)

## Limitation & Restriction

Some type of resources are not controlled by power scheduler services. They are [listed here](/docs/guides_v1/advanced/automation/power_scheduler/#limitation--restrictions).

