---
title: "AWS SNS Webhook"
linkTitle: "AWS SNS Webhook"
weight: 1
date: 2021-08-10
description: >
    Set up a Topic and Subscription at AWS SNS Service
---

# AWS SNS

## Set up a SNS topic and Subscription

To ****Connect **SpaceONE's Alert Manager,** Set up AWS SNS's Topic and its Subscriptions

Please, Set SNS Topic and its Subscription for following Steps

* [Set up a Topic on AWS SNS](aws-sns.md#set-up-a-topic-on-aws-sns)
* [Set up a Subscription on AWS SNS](aws-sns.md#set-up-a-subscription-on-aws-sns)

### Set up a Topic on AWS SNS

**Step 1. Log in AWS Console &gt; SNS &gt; Topics**

![](../../../.gitbook/assets/screen-shot-2021-06-28-at-13.54.56.png)

**Step 2. Click `Create topic`**  **Button**

![](../../../.gitbook/assets/screen-shot-2021-06-28-at-13.57.52.png)

**Step 3. Select `Standard`**  **options and Give name for new topic as below**

![](../../../.gitbook/assets/screen-shot-2021-06-28-at-14.02.27.png)

**Step 4. Check Topic is created successfully.**

![](../../../.gitbook/assets/screen-shot-2021-06-29-at-11.41.33.png)

### Set up a Subscription on AWS SNS

Once Topic has created, as above. Please, set subscription.

**Step 1. Log in AWS Console &gt; SNS &gt; Topics &gt; Select Topic that you would like to set up a subscription and then Click  `Create subscription`**

![](../../../.gitbook/assets/screen-shot-2021-06-29-at-11.48.57.png)

**Step 2.  Type or select each required fields and Click `Create subscription`** **button to** **Create subscription**

* Protocol : HTTPS
* Endpoint : Webhook URL that you create from [**SpaceONE**](./#webhook-list)\*\*\*\*

![](../../../.gitbook/assets/screen-shot-2021-06-29-at-13.32.56.png)

**Step 3.  Check created subscription under  AWS Console &gt; SNS &gt; Topics &gt; AWS-SNS \(Created Topic\)**

![](../../../.gitbook/assets/screen-shot-2021-06-29-at-14.03.08.png)


**Step 4. Check Status has changed after create a new subscription from `Pending confirmation`** to  **`Confirmed`** as below

![](../../../.gitbook/assets/screen-shot-2021-06-29-at-14.07.24.png)

![](../../../.gitbook/assets/screen-shot-2021-06-29-at-14.14.36.png)

**Step 5. You are ready to get SNS message through Webhook once status updated as `Confirmed`**

![](../../../.gitbook/assets/screen-shot-2021-06-29-at-14.16.38.png)

