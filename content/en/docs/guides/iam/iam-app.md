---
linkTitle: App
weight: 2
date: '2024-01-10T00:00:00.000Z'
description: >
  You can create and manage apps for issuing Client Secrets for API/CLI access
  to a workspace.
title: App
---

## Accessing the Menu

(1) Select a specific workspace

![](/guides/admin/workspaces/move-to-workspace-en.png)

(2) Go to \[IAM > App]

{{<alert>}}
Creating apps with `Admin` privileges is only possible in 'Admin mode'.
For detailed instructions, refer to the [here](/docs/guides/admin-mode/app/).
{{</alert>}}

<br> <br>

## Creating an App

To use Cloudforet(SpaceONE)'s CLI tool, [Spacectl](https://github.com/cloudforet-io/spacectl), you need an accessible Client Secret.

You can create an app with the Workspace Owner role in a specific workspace and provide the Client Secret key of that app to other users.

(1) Click the \[+ Create] button in the upper right corner

![](/guides/iam_app/app-create-00-en.png)

(2) Enter Information

1. Enter a name
2. Select the Workspace Owner role: You can find detailed information about roles [here](/docs/guides/permission/).
3. Enter tags in the 'key:value' format
4. Click the \[Confirm] button to complete the app creation.

![](/guides/iam_app/app-create-01-en.png)

(3) Download the generated file

![](/guides/iam_app/app-create-02-en.png)

<br> <br>

## Regenerating Client Secret

(1) Select an app

(2) Click \[Actions > Regenerate Client Secret]

* A new secret will be generated, and you can download the configuration file again.

![](/guides/iam_app/app-create-03-en.png)
