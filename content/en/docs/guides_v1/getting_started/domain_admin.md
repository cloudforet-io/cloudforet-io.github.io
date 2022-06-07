---
title: "Domain Admin"
linkTitle: "Domain Admin"
weight: 2
date: 2021-07-31
description: >
    The role of Domain Admin creates the top-level project group, creates users, and sets the main collector.
---

## Sign-in
**`Domain Admin`** log-in through the normal login page. E-mail received from the **`Root Account`** has stated detailed the connection methods such as Single Sign On, ID/PW, or Google Oauth2.<br>
**`Domain Admin`** creates top-level project groups, creates users, and sets key **`Collector`**.<br>

### STEP 1
Log-in the user with the `Domain Admin` Role.
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_01.png)

## Create Project Group
All cloud resources of SpaceONE must belong to a certain **`Project`**. Also, You can group **`Project`** with **`Project Group`**.<br>
Domain Admin creates top-level **`Project Group`** based on the company's management policy.<br>
**`General User`** ( **`Project Admin`** ) has creation rights of **`Project`**. <br>

### STEP 1
Drive to Project menu and create `Project Group` named `Landing Zone`.
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_02.png)
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_03.png)

### STEP 2
Create `Project Group` named `Services`.
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_04.png)

### STEP 3
Create `Project Group` named `Business Support System`.
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_05.png)

### STEP 4
Check all `Project Group` have created on left navigation.
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_06.png)

## Create User
Create **`General User`** and assign the **`Project Group`** to the created user.<br>
General users can access only the **`Project Group`** to which they are belonged to.

### STEP 1
Drive to menu `Identity > User`** at the top navigation bar.
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_07.png)

### STEP 2
Click `Add` button. 
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_08.png)

### STEP 3
Fill out Project Admin information. 
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_09.png)

### STEP 4 
Map the User to a Services project group.
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_10.png)

### STEP 5 
Add members to Project Group.
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_11.png)
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_12.png)

### STEP 6
On the User Management page, you can check that the Role and Authorization Type are mapped.
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_13.png)

## Cloud Resource Collectors
**`Collector`** is a plugin that collects resources from cloud services such as AWS, Google Cloud and Azure.<br>
**`Domain Admin`** sets information about **`Collector`**.<br>
Select **`Plugin`-`Collector`** on the navigation at the top of SpaceONE, then click the **`Create`** button to create a collector.
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_14.png)

### Create AWS EC2 Collector

### STEP 1
Select `aws-ec2` plug-in from market place.
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_15.png)

### STEP 2
Create AWS EC2 `Collector`.
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_16.png)

### Create AWS Cloud Services Collector

### STEP 1
Select `aws-cloud-services` plug-in from market place
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_17.png)

### STEP 2
Create AWS Cloud Service `Collector` 
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_18.png)


### Create AWS Trusted Advisor

### STEP 1
Select `aws-trusted-advisor` plug-in from market place.
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_19.png)

### STEP 2
Create AWS trusted advisor `Collector`.
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_20.png)

### Create AWS Health Dashboard Collector

### STEP 1
Select `aws-health-dashboard` plugin from market place.
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_21.png)

### STEP 2
Create AWS Personal Health Dashboard `Collector`
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_22.png)

### Create AWS Metric Collector

### Preparation
Before using metric collector, you need Service Account first. <br>
Please refer to the link. <a href ="/docs/guides_v1/admin_guide/getting-started/metric-collector-quick-start">Metric Collector Service Account</a> 

### STEP 1
Select `monitoring-metric-collector` plugin from market place.
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_23.png)

### STEP 2
Create Spaceone-Monitoring Metric `Collector`
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_24.png)
Check the complete **`Collector`** list generated.
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_25.png)

## Update Schedule
Through the Schedule setting, set the collection time so that the **`Collector`** collect cloud resources periodically.

### STEP 1 
Select the `Collector` you want to set up, and then click the `Add` button on the bottom `Schedule` tab.
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_26.png)

### STEP 2 
Create `Collector` that collects every 4 hours.
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_27.png)
![](/docs/guides_v1/getting_started/domain-admin_img/Domain-Admin_image_28.png)
