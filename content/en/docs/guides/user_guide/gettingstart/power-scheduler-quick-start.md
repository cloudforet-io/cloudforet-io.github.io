---
title: "Power Scheduler Quick Start"
linkTitle: "Power Scheduler Quick Start"
weight: 6
url_dash_board: "" 
date: 2021-05-11
description: >
    Quick Guide for user easier to set up Power Scheduler
---

# Power Scheduler Quick Start

![](/img/doc/guides/power/ps1.png)

## How to Set up

Start your Power Scheduler after completing the following steps: 

* [Prerequisites](power-scheduler-quick-start.md#prerequisites)
* [Set up Basic Scheduler Info](power-scheduler-quick-start.md#set-up-basic-scheduler-info)
* [Configure Scheduler Runtime](power-scheduler-quick-start.md#configure-scheduler-runtime)
* [Define Resource Group](power-scheduler-quick-start.md#define-resource-group)

## Prerequisites

You can set up your IAM policy for power scheduler in SpaceONE with pre-defined credentials per cloud-provider to control resources with safety and prevent others to access resources without permission.

Please, assign corresponding access policies to SpaceONE from each provider's console as mentioned below, prior to create a Power Scheduler.

{% page-ref page="identity/service-account/service-account-policy-management.md" %}

{% page-ref page="identity/service-account/google-cloud-service-account-policy-management.md" %}



## Set up Basic Scheduler Info

**STEP 1:** Select `Automation` &gt; `Power Scheduler` on top header menu 


![Select Power Scheduler on menu](/img/doc/guides/power/ps2.png)



**STEP 2:** Select a project to set up Power Scheduler on the dashboard. 

![Select a Project on Dashboard](/img/doc/guides/power/ps3.png)



**STEP 3:**  Click `+ New Scheduler`  button at the top left corner. It is automatically changed to the creation mode if there is no previously created scheduler in the project.

![](/img/doc/guides/power/ps4.png)



**STEP 4:**  Set the scheduler's name to create a scheduler. You can enter a string including letters and  `-` . Scheduler name is required and blank spaces are not allowed.

![](/img/doc/guides/power/ps5.png)

## Configure scheduler runtime

![](/img/doc/guides/power/ps6.png)


Set the time for applying a scheduler.   
  
The calendar grid breaks the week down by day on the horizontal axis and has 24-hour basis segments in portrait orientation.  You can click `This week` button to set the scheduled time for this week.  

You can move between month through  `< >` at the upper right of the graph. 



There are three types of scheduler mode.

|  Mode | State | Description | Color |
| :---: | :---: | :--- | :---: |
| Repeated Schedule |  | Timer repeated by every week. Selected area became On, Otherwise\(Non selected\) became Off. | ![](/img/doc/guides/power/ps7.png) |
| One Time Schedule | ON | Created specified time range. Resource became On selected area. | ![](/img/doc/guides/power/ps8.png) |
|  | OFF | Created specified time range. Resource became Off selected area. | ![](/img/doc/guides/power/ps9.png) |



**STEP 1:** Click&drag to select certain time segments to set time for the scheduler to run.

![](/img/doc/guides/power/ps10.png)

> **Please, be advised**   
> Without any setting of Scheduler Time, it recognizes scheduler as `Turn Off All` which causes all resource to stop working immediately.

## Define Resource Group

Set the resource group for applying defined schedule  

![](/img/doc/guides/power/ps11.png)

By clicking **`+ Add Resource Group`**, user can move to **Create a resource group** page. 

![](/img/doc/guides/power/ps12.png)

The Naming Rules of Resource Group is below.

> * Max 128 character 
> * Start with character
> * Character, Number, & Hyphen`-`  available



Select resource type

![](/img/doc/guides/power/ps13.png)



Then, Targeting resource is needed.

Enter search keyword to grouping resources. By clicking search bar available search properties pops up. Default property is name.

Supported search filter is listed here. Usually name or tag filter is preferred.

![](/img/doc/guides/power/ps14.png)

To apply search filter, You need to press _**Enter**_. Then filtered resources will be appeared. 

![](/img/doc/guides/power/ps15.png)

Enter all information, then click the save button below. 

![](/img/doc/guides/power/ps16.png)

Get _**creating success**_ message pops up when all creation process is done successfully. 



![](/img/doc/guides/power/ps17.png)

![](/img/doc/guides/power/ps18.png)

## Limitation & Restriction

Some type of resources are not controlled by power scheduler services. They are [listed here](automation/power-scheduler.md#limitation-and-restrictions).

