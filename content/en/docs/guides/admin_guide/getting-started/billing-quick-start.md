---
title: "Billing Quick Start"
linkTitle: "Billing Quick Start"
weight: 3
date: 2021-07-31
description: >
    Quick Guide to help Users easily set up Billing Services
---

![](/docs/guides/admin_guide/getting-started/billing_quick_start_img/billing_quick_start_img_01.png)

<br/>



## How to Set up

You can view and use the **`Billing Service`** after completing the following steps:

* [Prerequisites](#prerequisites)
* [Getting API Key from the Billing Service Provider](#getting-api-key-from-the-billing-service-provider)
* [Registering the Billing Service Account](#registering-the-billing-service-account)
* [Veiwing Billing Informations](#billing-information)

<br/>



## Prerequisites

Billing informations can be provided by various vendors like **`AWS`**, **`Google Cloud`**, **`Azure`** or **`Hyperbilling`**.

To enable billing service, contact your domain administrator at SpaceONE.

{{% alert title="" %}}
**In the Version 1.5.3, Hyperbilling backend is enabled by default.**
{{% /alert %}}

<br/>

Supported billing backends are :

| Version | Backend |
| :--- | :--- |
| 1.5.3 | Hyperbilling for AWS |

<br/>



## Getting API Key from the Billing Service Provider

Before adding a Billing Service Account, you need the API Key. 

Contact your vendor for this information.

<br/>

The contact point of billing backends are :

| Backend | Contact |
| :--- | :--- |
| Hyperbilling for AWS | MEGAZONE CLOUD \(Innoworks Team\) |

<br/>



## Registering the Billing Service Account

### How to Register

Register **Billing Service Accounts** by following the next steps :

1. [Select and Add Hyper Billing](#1-hyper-billing)
2. [Fill in Base Informations](#2-base-information)
3. [Fill in Credentials \(API Key\)](#3-credentials-api-key)
4. [Assigning Projects](#4-assigning-projects)

<br/>



#### 1. Hyper Billing

You can register the Billing service account at the menu, **`Identity`** > **`Service Account`**.

Select your **Hyper Billing** Service Provider, then click **Add**.

{{% alert title="" %}}
**If _`Hyper Billing` does not appear_ in your Service Providers List, please contact the SpaceONE Domain Administrator.**
{{% /alert %}}

![Register billing service account](/docs/guides/admin_guide/getting-started/billing_quick_start_img/billing_quick_start_img_02.png)

<br/>



#### 2. Base Information
Fill in Base Informations, like 'Name' and 'Tags'.

<br/>

![Name of service account](/docs/guides/admin_guide/getting-started/billing_quick_start_img/billing_quick_start_img_03.png)

<br/>



#### 3. Credentials \(API Key\)

After filling out the base information, you now have to configure **`Credentials`**.

The **`Credentials`** can be received from the Billing Service Provider. 

(In this example, the Credentials were given by the Megazone Hyperbilling team.)

The Credentials given by Billing Service Provider, will be consisted with **"Account", "Email" and "Key"** informations. Fill out those informations correctly.

<br/> 

![](/docs/guides/admin_guide/getting-started/billing_quick_start_img/billing_quick_start_img_04.png)

<br/>



#### 4. Assigning Projects

{{% alert title="" %}}
**PLEASE, DO NOT SKIP THIS STEP.**
{{% /alert %}}

Assigning a Project is **mandatory** when using the Billing Service.

Select one of your projects that match the service account, and billing service. 

When you're done please **`Save`**. 

<br>

![](/docs/guides/admin_guide/getting-started/billing_quick_start_img/billing_quick_start_img_05.png)

{{% alert title="" %}}
**If you have several billing accounts, simply repeat the steps from :**

**"Registering the Billing Service Account >** [How to Register](#how-to-register)
{{% /alert %}}

<br/>



## Billing Information

When all the steps above are finished, 

you will be able to see the **`Billing Information`** from the **main dashboard** and also the seperate **project pages**.

* **Main Dashboard** > Overall Billing information
    * An integrated summation of all the billing accounts will be shown on the main dashboard.

<br>

![](/docs/guides/admin_guide/getting-started/billing_quick_start_img/billing_quick_start_img_06.png)

<br/>

* **Seperate Project Pages** > Project Billing information
    * Each project page will provides its own billing information after you've registered a billing service account and assigned it to a project.

<br>

![](/docs/guides/admin_guide/getting-started/billing_quick_start_img/billing_quick_start_img_07.png)

