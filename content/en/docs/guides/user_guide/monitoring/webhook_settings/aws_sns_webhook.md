---
title: "AWS SNS Webhook"
linkTitle: "AWS SNS Webhook"
weight: 1
date: 2021-08-10
description: >
    Set up a Topic and Subscription at AWS SNS Service
---

## Set up a SNS topic and Subscription
To ****Connect **SpaceONE's Alert Manager,** Set up AWS SNS's Topic and its Subscriptions <br>
Please, Set SNS Topic and its Subscription for following Steps
* [Set up a Topic on AWS SNS](#set-up-a-topic-on-aws-sns)
* [Set up a Subscription on AWS SNS](#set-up-a-subscription-on-aws-sns)

## Set up a Topic on AWS SNS

### Step 1
Log in AWS Console &gt; SNS &gt; Topics
![](/docs/guides/user_guide/monitoring/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_01.png)

### Step 2 
Click `Create topic`  **Button**
![](/docs/guides/user_guide/monitoring/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_02.png)

### Step 3
Select `Standard`**  **options and Give name for new topic as below**
![](/docs/guides/user_guide/monitoring/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_03.png)

### Step 4
Check Topic is created successfully.
![](/docs/guides/user_guide/monitoring/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_04.png)

## Set up a Subscription on AWS SNS
Once Topic has created, as above. Please, set subscription.

### Step 1 
Log in AWS Console &gt; SNS &gt; Topics &gt; Select Topic that you would like to set up a subscription and then Click  `Create subscription`
![](/docs/guides/user_guide/monitoring/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_05.png)

### Step 2
Type or select each required fields and Click `Create subscription` **button to** **Create subscription**
* Protocol : HTTPS
* Endpoint : Webhook URL that you create from [**SpaceONE**](#webhook-list)\*\*\*\*
![](/docs/guides/user_guide/monitoring/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_06.png)

### Step 3  
Check created subscription under  AWS Console &gt; SNS &gt; Topics &gt; AWS-SNS \(Created Topic\)
![](/docs/guides/user_guide/monitoring/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_07.png)

### Step 4
Check Status has changed after create a new subscription from **`Pending confirmation`** to  **`Confirmed`** as below
![](/docs/guides/user_guide/monitoring/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_08.png)
![](/docs/guides/user_guide/monitoring/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_09.png)

### Step 5
You are ready to get SNS message through Webhook once status updated as `Confirmed`
![](/docs/guides/user_guide/monitoring/webhook_settings/aws_sns_webhook_img/aws_sns_webhook_img_10.png)