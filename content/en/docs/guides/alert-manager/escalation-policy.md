---
title: "Escalation policy"
linkTitle: "Escalation policy"
weight: 8
date: 2022-06-07
description: >
    By applying stage-by-stage rules to alerts through escalation policies, alerts that have been received are effectively sent to members of the project.


    Each rule has a set level, and an alert is spread to the corresponding notifications channel for each level.
---

Whether an alert received via a webhook is to be sent as a notification to project members is determined by **Escalation policy**.
<br>
Escalation policy can be managed in two places:

- **[Alert manager > Escalation policy]** page: Manage escalation policy under the scope of `global` and `project`
- **[Project]** detail page: Manage escalation policy under the scope of `project`

## Create escalation policy

If you are a user with `manage` permission on the [Escalation policy] page, you can create an escalation policy.

### Create in an [Escalation policy] page
(1) Click the [Create] button on the [Alert manager > Escalation policy] page.

![escalation-policy-full-page](/docs/guides/alert-manager/escalation-policy-img/escalation-policy-full-page.png)

(2) Enter the settings to create an escalation policy.

![escalation-policy-create-modal](/docs/guides/alert-manager/escalation-policy-img/escalation-policy-create-modal.png)

| Policy        | Description                                                                                                  |
|-----------|-----------------------------------------------------------------------------------------------------|
| Exit condition (status) | Define the condition to stop the generated alarm.                                                                             |
| Range | Indicate the scope in which the escalation policy can be used. In case of `global,` the policy can be used in all projects within the domain, and in case of `project,` within the specified project. |
| Project | Scope defined as `project` indicates the project being targeted.                                                                  |
| Escalation rules | Define rules for sending step-by-step notifications.<br/>Alerts are sent to a notifications channel belonging to a set level, and a period between steps can be given in minutes from step 2 or higher.        |
| Number of repetitions | Define how many times to repeat an alert notification. Notifications can be repeated up to 9 times.                                                          |

{{<alert>}}
**Scope** and **Project** items only appear when you create them in the [Alert manager > Escalation policy] page.
<br>
When creating such items on the [Project] detail page, a `project` is automatically selected for the scope, and the project is designated as the target.
{{</alert>}}

### Create in a [Project] detail page
When you create an escalation policy on the [Project] detail page, the project is automatically designated as an escalation policy target.

(1) Inside the [Alert] tab of the project detail page, go to the [Settings] tab.

![create-escalation-policy-1](/docs/guides/alert-manager/escalation-policy-img/create-escalation-policy-1.png)

(2) Click the [Change] button in the escalation policy area.

![create-escalation-policy-2](/docs/guides/alert-manager/escalation-policy-img/create-escalation-policy-2.png)

(3) Click the [Create new policy] tab.

![create-escalation-policy-3](/docs/guides/alert-manager/escalation-policy-img/create-escalation-policy-3.png)

(4) Enter settings to create an escalation policy.

![create-escalation-policy-4](/docs/guides/alert-manager/escalation-policy-img/create-escalation-policy-4.png)

### Level

A level is a transmission range at which you send an alert from the stage you are in when sending the alert by stage.

You can set up a notifications channel in the project, and each notifications channel has its own level.

![escalation-policy-level](/docs/guides/alert-manager/escalation-policy-img/escalation-policy-level.png)

When defining the escalation rule, you set the [Notification level]. At each set stage, an alert is sent to the notifications channel of the corresponding level.

{{<alert>}}
We recommend you set a sufficient period for the alert to progress to a higher level.
{{</alert>}}

(5) When all settings are completed, click the [OK] button to create the escalation policy.




## Set as default policy

After selecting one from the list of escalation policies, you can set it up as a default by selecting the [Set as default] menu from the [Action] dropdown.

When a new project is created and the alert is activated, the corresponding policy is automatically applied.

![set-as-default](/docs/guides/alert-manager/escalation-policy-img/set-as-default.png)

{{< alert title="" >}}
However, only policies under the scope of `global` can be selected through the [Set as default] menu.
{{< /alert >}}




## Modify and delete escalation

Once you select a target from the escalation policy list, [Modify] and [Delete] become available from the [Action] dropdown.

![escalation-policy-update-delete](/docs/guides/alert-manager/escalation-policy-img/escalation-policy-update-delete.png)

### Edit

In the case of editing, you can use the same form as a modal dialog that is created when the [Create] button is clicked, and all items except the range can be edited.

![update-escalation-policy](/docs/guides/alert-manager/escalation-policy-img/update-escalation-policy.png)

### Delete

In case of deletion, you can proceed with deletion through the confirmation modal dialog as shown below:

![delete-escalation-policy](/docs/guides/alert-manager/escalation-policy-img/delete-escalation-policy.png)

{{<alert>}}
Policies set as default values ​​and those in use cannot be deleted.
{{</alert>}}
