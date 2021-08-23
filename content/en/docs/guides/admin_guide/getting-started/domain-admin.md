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

**`Domain Admin`** creates top-level project groups, creates users, and sets key **`Collector`**.

{{% pageinfo color=“300” %}}
**STEP 1: Log-in the user with the `Domain Admin` Role.**
{{% /pageinfo %}}

![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_01.png)

## Create Project Group

All cloud resources of SpaceONE must belong to a certain **`Project`**. Also, You can group **`Project`** with **`Project Group`**.

Domain Admin creates top-level **`Project Group`** based on the company's management policy.
**`General User`** ( **`Project Admin`** ) has creation rights of **`Project`**. 

{{% pageinfo color=“300” %}}
**STEP 1: Drive to Project menu and create `Project Group` named `Landing Zone`.** 
{{% /pageinfo %}}


![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_02.png)
![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_03.png)

{{% pageinfo color=“300” %}}
**STEP 2: Create `Project Group` named `Services`.**
{{% /pageinfo %}}

![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_04.png)

{{% pageinfo color=“300” %}}
**STEP 3: Create `Project Group` named `Business Support System`.**
{{% /pageinfo %}}
![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_05.png)

{{% pageinfo color=“300” %}}
**STEP 4: Check all `Project Group` have created on left navigation.**
{{% /pageinfo %}}
![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_06.png)

## Create User

Create **`General User`** and assign the **`Project Group`** to the created user.

General users can access only the **`Project Group`** to which they are belonged to.

{{% pageinfo color=“300” %}}
**STEP 1: Drive to menu `Identity > User`** at the top navigation bar.
{{% /pageinfo %}}
![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_07.png)

{{% pageinfo color=“300” %}}
**STEP 2: Click `Add` button.** 
{{% /pageinfo %}}
![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_08.png)

{{% pageinfo color=“300” %}}
**STEP 3: Fill out Project Admin information.** 
{{% /pageinfo %}}
![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_09.png)

{{% pageinfo color=“300” %}}
**STEP 4: Map the User to a Services project group.**
{{% /pageinfo %}}
![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_10.png)

{{% pageinfo color=“300” %}}
**STEP 5: Add members to Project Group.**
{{% /pageinfo %}}
![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_11.png)
![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_12.png)

{{% pageinfo color=“300” %}}
**STEP 6: On the User Management page, you can check that the Role and Authorization Type are mapped.**
{{% /pageinfo %}}
![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_13.png)


## Cloud Resource Collectors
 
**`Collector`** is a plugin that collects resources from cloud services such as AWS, Google Cloud and Azure.

**`Domain Admin`** sets information about **`Collector`**.



Select **`Plugin`-`Collector`** on the navigation at the top of SpaceONE, then click the **`Create`** button to create a collector.

![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_14.png)



### **Create AWS EC2 Collector**
{{% pageinfo color=“300” %}}
**STEP 1: Select `aws-ec2` plug-in from market place.**
{{% /pageinfo %}}
\*\*\*\*

![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_15.png)
{{% pageinfo color=“300” %}}
**STEP 2: Create AWS EC2 `Collector`.**
{{% /pageinfo %}}
![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_16.png)



### **Create AWS Cloud Services Collector**
{{% pageinfo color=“300” %}}
**STEP 1: Select `aws-cloud-services` plug-in from market place**
{{% /pageinfo %}}
![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_17.png)

{{% pageinfo color=“300” %}}  
**STEP 2: Create AWS Cloud Service `Collector`** 
{{% /pageinfo %}}
![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_18.png)

\*\*\*\*

### **Create AWS Trusted Advisor**
{{% pageinfo color=“300” %}}
**STEP 1: Select `aws-trusted-advisor` plug-in from market place.**
{{% /pageinfo %}}
![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_19.png)
{{% pageinfo color=“300” %}}
**STEP 2: Create AWS trusted advisor `Collector`.** 
{{% /pageinfo %}}
![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_20.png)

\*\*\*\*

### **Create AWS Health Dashboard Collector**
{{% pageinfo color=“300” %}}
**STEP 1: Select `aws-health-dashboard` plugin from market place.**
{{% /pageinfo %}}
![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_21.png)
{{% pageinfo color=“300” %}}
**STEP 2: Create AWS Personal Health Dashboard `Collector`** 
{{% /pageinfo %}}
![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_22.png)

\*\*\*\*

### **Create AWS Metric Collector**

#### Preparation

Before using metric collector, you need Service Account first. <br>
Please refer to the link. <a href ="/docs/guides/admin_guide/getting-started/metric-collector-quick-start">Metric Collector Service Account</a> 

{{% pageinfo color=“300” %}}
**STEP 1: Select `monitoring-metric-collector` plugin from market place.**
{{% /pageinfo %}}
![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_23.png)
{{% pageinfo color=“300” %}}
**STEP 2: Create Spaceone-Monitoring Metric `Collector`** 
{{% /pageinfo %}}
![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_24.png)

Check the complete **`Collector`** list generated.

![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_25.png)

## Update Schedule
   
Through the Schedule setting, set the collection time so that the **`Collector`** collect cloud resources periodically.

{{% pageinfo color=“300” %}}
**STEP 1: Select the `Collector` you want to set up, and then click the `Add` button on the bottom `Schedule` tab**.
{{% /pageinfo %}}
![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_26.png)

{{% pageinfo color=“300” %}}
**STEP 2: Create `Collector` that collects every 4 hours.**
{{% /pageinfo %}}
![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_27.png)

![](/docs/guides/admin_guide/getting-started/Domain-Admin_img/Domain-Admin_image_28.png)
