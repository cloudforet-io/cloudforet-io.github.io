---
title: "Billing Quick Start"
linkTitle: "Billing Quick Start"
weight: 3
date: 2021-07-31
description: >
    Quick Guide for user easier to set up Billing Service
---


# Billing Quick Start

![](/docs/using_spaceone_console/admin_guide/getting-started/billing_quick_start_img/billing_quick_start_img_01.png)


## How to Set up

You can see billing service after completing following steps:

* [Prerequisites](power-scheduler-quick-start.md#prerequisites)
* [Get API Key from Billing Service Provider](billing-quick-start.md#get-api-key-from-billing-service-provider)
* [Register Billing Service Account](billing-quick-start.md#register-billing-service-account-ex-hyper-billing)
* [Billing Information](billing-quick-start.md#billing-information)

## Prerequisites

Billing information can be provided by various vendor like AWS, Google Cloud, Azure or Hyperbilling.

To enable billing service, contact your domain administrator of SpaceONE.

> **In the Version 1.5.3, Hyperbilling backend is enabled by default.**


<br>
The supported billing backends are

| Version | Backend |
| :--- | :--- |
| 1.5.3 | Hyperbilling for AWS |

## Get API Key from Billing Service Provider

Before adding Billing Service Account, you needs API Key. Contact your vendor.

The contact point of billing backends are

| Backend | Contact |
| :--- | :--- |
| Hyperbilling for AWS | MEGAZONE CLOUD \(Innoworks Team\) |

## Register Billing Service Account \(Ex. Hyper Billing\)

To register billing service account, you can do in Identity &gt; Service Account.

Select **Hyper Billing** Service Provider, then click **Add**

![Register billing service account](/docs/using_spaceone_console/admin_guide/getting-started/billing_quick_start_img/billing_quick_start_img_02.png)


**If you have no "Hyper Billing" in the Service Providers, contact Domain Administrator of SpaceONE.**

Register Billing Service Account like following steps,

1. name of service account
2. Put Credentials \(API Key\)
3. Select Project

![Name of service account](/docs/using_spaceone_console/admin_guide/getting-started/billing_quick_start_img/billing_quick_start_img_03.png)

After set name of service account, you have to configure Credentials which is received from Billing Service Provider. In this example you can get Credentials from Megazone Hyperbilling team.

They will give you Credentials which are consisted with "Account", "Email" and "Key". Put the information correctly.

![](/docs/using_spaceone_console/admin_guide/getting-started/billing_quick_start_img/billing_quick_start_img_04.png)

Assigning Project is mandatory for Billing Service.

DO NOT SKIP THIS STEP.

![](/docs/using_spaceone_console/admin_guide/getting-started/billing_quick_start_img/billing_quick_start_img_05.png)

If you have multiple billing account, repeat "Register Billing Service Account".

## Billing Information

Everything is done. You can see billing information in the main dashboard and project page.

Consolidated Billing information in the main Dashboard. This is a summation-integral of all billing accounts. 

![](/docs/using_spaceone_console/admin_guide/getting-started/billing_quick_start_img/billing_quick_start_img_06.png)

Each project page provides its own billing information if you register billing service account.

![](/docs/using_spaceone_console/admin_guide/getting-started/billing_quick_start_img/billing_quick_start_img_07.png)

