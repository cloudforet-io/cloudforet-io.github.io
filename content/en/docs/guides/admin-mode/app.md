---
linkTitle: App Settings
weight: 3
date: '2024-01-08T00:00:00.000Z'
description: |
  You can create and manage apps for generating Client Secrets for API/CLI access.
title: App Settings
---

## Accessing the Menu

(1) Switch to Admin Center

![](/guides/admin/admin_mode/admin-mode-01-en.png)

(2) Navigate to \[IAM > App]

<br> <br>

## Creating Apps

To use [Spacectl](https://github.com/cloudforet-io/spacectl), the CLI tool provided by Cloudforet(SpaceONE), an accessible Client Secret is required.

In Admin Center, you can create an app with admin roles and provide its Client Secret key to other users.

(1) Click the \[+ Create] button at the top right

![](/guides/iam_app/app-create-00-en.png)

(2) Enter the required information:

1. Enter a name.
2. Select an Admin role: You can find detailed information about roles here.
3. Enter tags: input in the 'key:value' format. 
4. Click the \[Confirm] button to complete the app creation.

![](/guides/admin/iam_app/app-create-02-en.png)

(3) Download the generated files

![](/guides/admin/iam_app/app-create-03-en.png)

<br> <br>

## Regenerating Client Secret

(1) Select the app that needs regeneration.

(2) Click \[Actions > Regenerate Client Secret] at the top.

* The Secret will be regenerated, and you can download the updated configuration files.

![](/guides/admin/iam_app/app-detail-01-en.png)
