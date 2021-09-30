---
title: "oAuth Plugin Requirement"
linkTitle: "oAuth Plugin Requirement"
weight: 2
date: 2021-07-31
description: >
    Quick Guide for user to set up the environment settings guide to link with google oAuth plugin
---

## Overall Process
For companies using **Google Workspace**, `SpaceONE's OAuth plug-in` helps simplify the user sign-in process. To explore `SpaceONE's OAuth plug-in`, you need to complete the following steps in advance.  

* [Create OAuth Client ID](#create-oauth-client-id)
* [Domain Verification](#domain-verification)

## Create OAuth Client ID
SpaceONE requires an OAuth Client ID for you to access your company's **Google Workspace**. For this access, you need to create an **OAuth Client ID**, and add **JavaScript Origin** and **Redirect URL** to your **Google Workspace**.


### STEP 1
Log into Google Cloud Console &gt; API <br>
Go to **Credentials** and click the **`+CREATE CREDENTIALS`** button.
![](/docs/guides/admin_guide/identity/oauth-plugin-requirements_img/oauth-plugin-requirements_img_01.png)

### STEP 2
Select the Application type as `Web application` and enter the name of your web client ID.

![](/docs/guides/admin_guide/identity/oauth-plugin-requirements_img/oauth-plugin-requirements_img_02.png)

### STEP 3
Add Authorized JavaScript origins.<br>
This step is for requests from your browser with a **SpaceONE URI**. Enter your company's own **SpaceONE URI** received from the **SpaceONE admin**. The URI is likely to be in the following format
`https://xxx.console.spaceone.dev
![](/docs/guides/admin_guide/identity/oauth-plugin-requirements_img/oauth-plugin-requirements_img_03.png)

### STEP 4 
Add Authorized redirect URIs.<br>
This step is for redirecting from your browser to the **SpaceONE sign-in** page. Enter your company's own **SpaceONE sign-in URI**. The URI is likely to be in the following format
`https://xxx.console.spaceone.dev/sign-in
![](/docs/guides/admin_guide/identity/oauth-plugin-requirements_img/oauth-plugin-requirements_img_04.png)
After creating your OAuth client, you will get your client ID and client Secret. 
![](/docs/guides/admin_guide/identity/oauth-plugin-requirements_img/oauth-plugin-requirements_img_05.png)

## Domain Verification
Domain verification is required to allow API requests from **`spaceone.dev`** domains.

### STEP 1
Go to `Domain Verification` and click the `+Add domain` button.
![](/docs/guides/admin_guide/identity/oauth-plugin-requirements_img/oauth-plugin-requirements_img_06.png)

### STEP 2
Enter a SpaceONE console URI.<br>
You should allow webhook notifications for **SpaceONE Domain** console URIs. Enter your company's own **SpaceONE URI** received from the **SpaceONE admin**. The URI is likely to be in the following format: `https://xxx.console.spaceone.dev`.
![](/docs/guides/admin_guide/identity/oauth-plugin-requirements_img/oauth-plugin-requirements_img_07.png)

### STEP 3
Verify Ownership.<br>
Before you register SpaceONE domains, you should verify ownership in advance. The process can be done in **Google Search Console**. Click `TAKE ME THERE`.
![](/docs/guides/admin_guide/identity/oauth-plugin-requirements_img/oauth-plugin-requirements_img_08.png)

### STEP 4
To complete verifying domain ownership of SpaceONE, click the `Confirm` button as shown below. 
![](/docs/guides/admin_guide/identity/oauth-plugin-requirements_img/oauth-plugin-requirements_img_09.png)
![](/docs/guides/admin_guide/identity/oauth-plugin-requirements_img/oauth-plugin-requirements_img_10.png)