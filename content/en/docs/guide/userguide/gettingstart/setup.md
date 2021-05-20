---
title: "Basic Setup"
linkTitle: "Basic Setup"
weight: 6
url_dash_board: "" 
date: 2021-05-11
description: >
    General user can manage resources by creating a project under the project group and registering a cloud account(service account) to created project.
---
# Basic Setup

## Sign-in

**STEP 1:** Drive to the domain of **SpaceONE** on the browser and type the given ID and Password.

![](/img/doc/guides/setup/setup1.png)



## Create My Project Group and Project

{% hint style="info" %}
**General User** has a permission to control only the project group/project which they belong to. 
{% endhint %}

**STEP 1:** Drive to menu **`Project`** at top bar and click **`+ Create`** button as below.

![](/img/doc/guides/setup/setup2.png)


---


**STEP 2:** Name **`Group`** at top bar and click **`Confirm`** button as below.

![](/img/doc/guides/setup/setup3.png)

**STEP 3:** Select Project Group that you created in the previous step and click **`+ Create Project`** at the top right corner of the page. Name project and then click the**`Confirm`** button. \(sample case: **SpaceONE-DEV**\)

![](/img/doc/guides/setup/setup4.png)

**STEP 4:**  Click **`+ Create Project`** at the top right corner of the page and then name project with a different name for your own use and then click **`Confirm`** button. \(sample case: **SpaceONE-PRO**\)

![](/img/doc/guides/setup/setup5.png)

**STEP 5:**  Check 2 sample Projects \(**SpaceONE-DEV, SpaceONE-PRO**\) have created under **SpaceONE** project group. 

desc 

![](/img/doc/guides/setup/setup6.png)

## Register Service Account

Service accounts must be registered to run collectors which getting cloud resources from public clouds.

  
**STEP 1:** Drive to menu **`Identity > Service Account`** from the top bar and Click AWS from the provider panel on the left side menu.  
Click **`+ Add`** button to add AWS service account. 
![](/img/doc/guides/setup/setup7.png)

**STEP 2:** Fill out the name of Service Account and Account ID on base information fields. Please, fill out your **AWS Access Key** and **AWS Secret Key** as well. 


{{% alert title="" color="" %}}
Please, Click links at Help for AWS Users panel if you have any issue to get Account id, Assume role, and AWS access key. 
{{% /alert %}}


![](/img/doc/guides/setup/setup8.png)

**STEP 3:** Please, select a project that you want to map with your service account.   
We highly recommend mapping a project with Service Account for cloud resource management purposes.

![](/img/doc/guides/setup/setup9.png)

All cloud resources under the Service Account that you registered above will be shown on the selected project and  I**nventory** menu.

## Collect Resources

**STEP 1:** Drive to menu **`Plugin > Collector`**  at the top menu bar. 
![](/img/doc/guides/setup/setup10.png)

**STEP 2:**  Select collector and  Select collect data from drop down option on Action. 

![](/img/doc/guides/setup/setup11.png)

**STEP 3:**  Click **`Confirm`** button on **Collect Data** pop-up window.

![](/img/doc/guides/setup/setup12.png)

