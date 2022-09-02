---
title: "[IAM] Policy"
linkTitle: "[IAM] Policy"
weight: 3
date: 2022-06-07
description: >
    **Policy** refers to the scope of privileges that APS can perform, and is used when you create a [Role](/docs/guides/administration/iam-role) to assign to a user.
---

## What is policy?

Policy refers to the scope of privileges that APIs can perform. There are managed/custom types of policies.

|            | Managed                                                                                                                | Custom                                                          |
|------------|------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| Definition         | This is a globally defined policy in a repository service, <br />and it is managed and shared directly by the overall system administrator.<br />This is a common policy that is convenient for most users. | It is a self-defined policy per domain,<br />and is useful when managing detailed privileges for each domain. |
| Create, edit, delete  | X (Possible)                                                                                                                | O (Impossible)                                                          |
| Read         | O (Possible)                                                                                                                 | O (Possible)                                                          |

{{<alert>}}
The repository service refers to a shared storage service for connecting to marketplaces.
{{</alert>}}

For detailed information, see [Understanding policy]
(/ko/docs/concepts/identity/rbac/understanding-policy).


{{<alert>}}
You might need to check a policy type first before using the relevant features, for only a custom policy can be created, modified, and/or deleted.
{{</alert>}}

## Viewing policy

After clicking the policy type you want to check, you can enter the policy detail page through an ID field linked to a table.

![policy-full-page](/docs/guides/administration/iam-policy-img/policy-full-page.png)

## Creating policy

Enter the page to create a policy by using the [Create] button on the right.

![policy-create-button](/docs/guides/administration/iam-policy-img/policy-create-button.png)

You can create a policy after entering a name, description, and privileges.

Multiple privileges can be entered, separated by newlines.

Examples of privileges are as follows, and they have a ‘{service}.{resource}.{action}’ format:

| Example                      | Description of examples                  |
|-------------------------|----------------------------|
| identity.Project.*      | Full privileges to take whatever types of actions over project resources      |
| identity.ProjectGroup.* | Full privileges over all project group resources |
| identity.User.get       | Privilege to obtain user resources        |
| identity.User.update    | Privilege to update user resources     |
| identity.User.list      | Privilege to list user resources       |

For detailed information on services, resources, etc., see [here].

## Editing policy

Enter the page of the policy you want to edit

### Editing policy name

After clicking the edit icon button on the right side of a title, you can edit the name of the policy in a created modal dialog.

![policy-edit-icon-button](/docs/guides/administration/iam-policy-img/policy-edit-icon-button.png)

### Editing policy content

You can edit the description of a policy in the input box of a description field.

You can edit privileges from code blocks at the bottom. Multiple privileges are separated by newlines.

![policy-detail-page-with-new-permission](/docs/guides/administration/iam-policy-img/policy-detail-page-with-new-permission.png)

## Removing policy

Enter the policy page you want to delete.

After clicking the delete icon button, you can delete the policy from a created modal dialog.

![policy-delete-icon-button](/docs/guides/administration/iam-policy-img/policy-delete-icon-button.png)

Since a policy connected to a role is impossible to remove, visit and review the role page if you have any issues removing a policy.

![policy-cannot-delete-modal](/docs/guides/administration/iam-policy-img/policy-cannot-delete-modal.png)
