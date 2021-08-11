---
title: "oAuth Plugin Requirements"
linkTitle: "oAuth Plugin Requirements"
weight: 2
date: 2021-07-31
description: >
  Quick Guide for user to set up the environment settings guide to link with google oAuth plugin
---


# OAuth Plugin Requirements

## Overall Process

For companies using **Google Workspace**, `SpaceONE's OAuth plug-in` helps simplify the user sign-in process. To explore `SpaceONE's OAuth plug-in`, you need to complete the following steps in advance.

* [Create OAuth Client ID](oauth-plugin-requirements.md#create-oauth-client-id)
* [Domain Verification](oauth-plugin-requirements.md#domain-verification)

## Create OAuth Client ID

SpaceONE requires an OAuth Client ID for you to access you company's **Google Workspace**. To do this, you need to add the followings to your **Google Workspace** in advance.

* Create OAuth Client ID
* Add JavaScript Origin
* Add Redirect URL

{{% pageinfo color=“300” %}}
**STEP 1: Log into Google Cloud Console &gt; API**.

Go to **Credentials** and click the **`+CREATE CREDENTIALS`** button.
{{% /pageinfo %}}
![](/docs/using_spaceone_console/admin_guide/identity/oauth-plugin-requirements_img/oauth-plugin-requirements_img_01.png)


{{% pageinfo color=“300” %}}
**STEP 2: Select the Application type as `Web application` and enter the name of your web client ID.**
{{% /pageinfo %}}
![](/docs/using_spaceone_console/admin_guide/identity/oauth-plugin-requirements_img/oauth-plugin-requirements_img_02.png)


{{% pageinfo color=“300” %}}
**STEP 3: Add Authorized JavaScript origins.**
{{% /pageinfo %}}
This step is for requests from your browser with a **SpaceONE URI**. Enter your company's own **SpaceONE URI** received from the **SpaceONE admin**. The URI is likely to be in the following format: `https://xxx.console.spaceone.dev`.

![](/docs/using_spaceone_console/admin_guide/identity/oauth-plugin-requirements_img/oauth-plugin-requirements_img_03.png)
{{% pageinfo color=“300” %}}
**STEP 4 : Add Authorized redirect URIs.**
{{% /pageinfo %}}
This step is for redirecting from your browser to the **SpaceONE sign-in** page. Enter your company's own **SpaceONE sign-in URI**. The URI is likely to be in the following format: `https://xxx.console.spaceone.dev/sign-in`.

![](/docs/using_spaceone_console/admin_guide/identity/oauth-plugin-requirements_img/oauth-plugin-requirements_img_04.png)

After creating your OAuth client, you will get your client ID and client Secret. 

![](/docs/using_spaceone_console/admin_guide/identity/oauth-plugin-requirements_img/oauth-plugin-requirements_img_05.png)



## Domain Verification

Domain verification is required to allow API requests from **`spaceone.dev`** domains.
{{% pageinfo color=“300” %}}
**STEP 1: Go to `Domain Verification` and click the `+Add domain` button.** 
{{% /pageinfo %}}
![](/docs/using_spaceone_console/admin_guide/identity/oauth-plugin-requirements_img/oauth-plugin-requirements_img_06.png)
{{% pageinfo color=“300” %}}
**STEP 2: Enter a SpaceONE console URI.**
{{% /pageinfo %}}
You should allow webhook notifications for **SpaceONE Domain** console URIs. Enter your company's own **SpaceONE URI** received from the **SpaceONE admin**. The URI is likely to be in the following format: `https://xxx.console.spaceone.dev`.

![](/docs/using_spaceone_console/admin_guide/identity/oauth-plugin-requirements_img/oauth-plugin-requirements_img_07.png)

{{% pageinfo color=“300” %}}
**STEP 3: Verify Ownership.** 
{{% /pageinfo %}}
Before you register SpaceONE domains, you should verify ownership in advance. The process can be done in **Google Search Console**. Click `TAKE ME THERE`.

![](/docs/using_spaceone_console/admin_guide/identity/oauth-plugin-requirements_img/oauth-plugin-requirements_img_08.png)


{{% pageinfo color=“300” %}}
**STEP 4: To complete verifying domain ownership of SpaceONE, click the `Confirm` button as shown below.** 
{{% /pageinfo %}}
![](/docs/using_spaceone_console/admin_guide/identity/oauth-plugin-requirements_img/oauth-plugin-requirements_img_09.png)

![](/docs/using_spaceone_console/admin_guide/identity/oauth-plugin-requirements_img/oauth-plugin-requirements_img_10.png)









