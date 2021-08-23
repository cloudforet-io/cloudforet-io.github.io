---
title: "(Alibaba Cloud) Service Account Policy Management"
linkTitle: "(Alibaba Cloud) Service Account Policy Management"
weight: 14
url_dash_board: "" 
date: 2021-06-10
description: >
    Details of API Security policy to use SpaceONE plugin
---

# \(Alibaba Cloud\) Service Account Policy Management

## Service Account Policy

**SpaceONE** highly recommends to set appropriate permissions to **Service Account** for each purpose. 

Please, Set service account, To Create API for each use case:

* [General Collector](#general-collector)

## General Collector 

Collector requires appropriate authorities to collect cloud resources. We strongly recommend to limit collector's service account its permission to **read only access**. 

Otherwise, you can add more restrictions per resources or actions. One of the useful example is to restrict its rights.

{{% pageinfo color=“300” %}}

**STEP 1. Create RAM users**

1. Log on to the [RAM console](https://ram.console.aliyun.com/) by using your Alibaba Cloud account.
2. In the left-side navigation pane, click `Users` under `Identities`.
3. Click `Create User`.
   * To create multiple RAM users at a time, click `Add User`.
4. Specify the _**Logon Name**_ and _**Display Name**_ parameters.
5. Click **`OK`** and return to _Create User screen_.

{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/alibaba/image(110).png)

{{% pageinfo color=“300” %}}

**STEP 2. Create AccessKey pairs for RAM users**

You need AccessKey pairs to enter Alibaba Cloud Credentials in the SpaceOne. If you have authorized a RAM user under your Alibaba Cloud account to manage their own AccessKey pairs, the RAM user can create an AccessKey pair in the RAM console.

1. In the left-side navigation pane, click `Users` under `Identities`.
2. In the User Logon Name/Display Name column, click the username of the _**target**_ RAM user.
3. In the User AccessKey Pairs section, click `Create AccessKey`.
   * You must enter a verification code if you are creating an AccessKey pair for the first time.
4. Click `OK`.
   * The AccessKey Secret is displayed only once when you first create it. You cannot retrieve the AccessKey Secret if you forget it. We recommend that you save the AccessKey Secret for subsequent use.
   * If the AccessKey pair is disclosed or lost, you must create a new one. Currently, you can create a maximum of two AccessKey pairs.
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/alibaba/image(105).png)

{{% pageinfo color=“300” %}}

**STEP 3-1: Authorize RAM users to access data as read-only. \(via console\)**

1. In the left-side navigation pane, click `Users` under `Identities`.
2. In the User Logon Name/Display Name column, click the username of the _**target**_ RAM user.
3. Click `Add Permissions`. On the page that appears, the principal is automatically filled in.
4. In the Policy Name column, select `ReadOnlyAccess` policy for its _**System Policy**_.
   * You can click X in the section on the right side of the page to delete the selected policy.
5. Click `OK`.
6. Click `Complete`.
7. You will return to _Create User screen_, and can check you _**AccessKey ID**_ and _**AccessKey Secret**_. Alibaba Cloud generates AccessKey Pair by default when you create a user. Click **`Copy`** to copy your authentication information. Go to step 5 if you miss this step.

{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/alibaba/image(108).png)

{{% pageinfo color=“300” %}}

**STEP 3-2: Authorize RAM users to access data as read-only. \(via API call\)**

You can attach a policy to a RAM user by calling an [AttachPolicyToUser](https://www.alibabacloud.com/help/doc-detail/28725.htm?spm=a2c63.p38356.879954.6.d7591b28E3RsUP#doc-api-Ram-AttachPolicyToUser) API.

* Action: AttachPolicyToUser
* PolicyName: ReadOnlyAccess
* PolicyType: System
* UserName: the target RAM user name
{{% /pageinfo %}}

{{% pageinfo color=“300” %}}

**STEP 4: Generate Your AccessKey Pair. \(optional\)**

Go to [RAM Console](https://ram.console.aliyun.com/) &gt; Identities &gt; Users &gt; Choose the user you created for General Collector.

Click **`Create AccessKey`** in the _Authentication_ tap.

{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/alibaba/image(106).png)

{{% pageinfo color=“300” %}}
You will receive _Create AccessKey popup_, and click **`Copy`** below the blue box to copy your _**AccessKey Pair**_ information. Click **`Close`** to close the popup window.
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/alibaba/image(109).png)

### 
