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

For companies that are using **Google Workspace**, you can use `SpaceONE's oAuth plug-in` to simplify user login procedures. To do this, you need to work on the following in advance.

* [Create OAuth Client ID](oauth-plugin-requirements.md#create-oauth-client-id)
* [Domain Verification](oauth-plugin-requirements.md#domain-verification)

## Create OAuth Client ID

SpaceONE needs the OAuth Client ID to access companies Google workspace. To do this, you need to add the followings to your Google workspace in advance.

* Create OAuth Client ID
* Add JavaScript Origin
* Add Redirect URL

**STEP 1: Log in Google Cloud Console &gt; API**

Go to _Credentials_ and click **`+CREATE CREDENTIALS`**

![](../.gitbook/assets/image%20%281%29.png)



**STEP 2: Select the** _**Application type**_ **as `Web application` and fill the name of your web client ID.**

![](../.gitbook/assets/image%20%286%29.png)



**STEP 3: Add Authorized JavaScript origins**

This is for use with requests from your browser with _SpaceONE_  URI. Write according to your company's own _SpaceONE URI_ received from _SpaceONE admin_. URI is likely to be in format of`https://xxx.console.spaceone.dev`

![](../.gitbook/assets/image%20%2814%29.png)

**STEP 4 : Add Authorized redirect URIs.**

This step is for use with redirect from your browser to SPACEONE Sign-in page. Write according to your company's own SpaceONE Sign-in URI. URI is likely to be in format of `https://xxx.console.spaceone.dev/sign-in`

![](../.gitbook/assets/image%20%2811%29.png)

After you create your OAuth client, you will get your Client ID and Client Secret. 

![](../.gitbook/assets/image%20%283%29.png)



## Domain Verification

You should proceed with domain authentication to allow API requests from `spaceone.dev` domains.

**STEP 1: Go to** _**Domain Verification**_ **and click `+Add domain`**

![](../.gitbook/assets/image%20%2813%29.png)

**STEP 2: Enter SpaceONE console URI**

You should allow webhook notifications for SpaceONE Domain console URI. Write according to your company's own _SpaceONE URI_ received from _SpaceONE admin_. URI is likely to be in format of`https://xxx.console.spaceone.dev`

![](../.gitbook/assets/image%20%2816%29.png)



**STEP 3: Verify Ownership** 

Before you register SpaceONE domain, you should verify ownership in advance. The process holds on _Google Search Console_. Click `TAKE ME THERE`

![](../.gitbook/assets/image%20%287%29.png)

\*\*\*\*

**STEP 4: To complete verifying domain ownership of SpaceONE, Click `Confirm` on two pages below.** 

![](../.gitbook/assets/image%20%2810%29.png)

![](../.gitbook/assets/image%20%288%29.png)









