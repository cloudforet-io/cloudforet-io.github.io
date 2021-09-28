---
title: "Collector"
linkTitle: "Collector"
weight: 1
date: 2021-07-31
description: >
    Creating Collectors. Collecting Cloud Resources.
---

# Collector

## Overview

Using _**Collector Plugins**_ in the SpaceONE marketplace, users can easily collect Cloud resources from various cloud providers.

Plugins are offered by both choices below : 
* _Private Repositories_ 
* _Official SpaceONE Marketplace_

![](/docs/guides/admin_guide/plugin/collector_img/collector_01.png)

<br>



## Creating Collectors

Users can reach the available plugin list by selecting **`+ Create`** > **`Official Marketplace`**.

Select a plugin you want to install, then click the **`+ Create`** button. This will start the _Collector Creation Wizard_.

![](/docs/guides/admin_guide/plugin/collector_img/collector_02_1.png)

![](/docs/guides/admin_guide/plugin/collector_img/collector_02.png)

<br>

Fill out the 'Name' and 'Priority' for the collector and choose a version of the plugin. 

Latest Versions of plugins are normally recommended.

![](/docs/guides/admin_guide/plugin/collector_img/collector_03.png)

<br>

Confirm credential informations for the collector. 

This step will be done automatically, so simply confirm all the information that has been filled out.

![](/docs/guides/admin_guide/plugin/collector_img/collector_04.png)

<br>

Users can add **Tags** on a collector. (This step is optional.) 

Tags can be added by clicking the **`+ Add`** button.

If there are exsisting Tags, there's no need to delete them. \(They are for system uses.\)

![](/docs/guides/admin_guide/plugin/collector_img/collector_img_05.png)

<br>

{{% alert title="" %}}
**If you've failed to create a Collector, please check for steps that are _marked red_.**
{{% /alert %}}

For example, if you try to give identical names to collectors the **Collector Creation Wizard** will mark this process and ask you to try a different name. 

![](/docs/guides/admin_guide/plugin/collector_img/collector_06.png)

<br>


## Editing Collectors

Editing and Controling _**Collectors**_ can be done by the **`Action`** list menu. 

(This is located next to the **`+ Create`** button.)

Select a _**Collector**_ you want to edit, then click **`Action`**. A list of available actions will be shown.

![](/docs/guides/admin_guide/plugin/collector_img/collector_07_1.png)
![](/docs/guides/admin_guide/plugin/collector_img/collector_img_07.png)

<br>


### Update 

Select a Collector you want to **update**, then click **`Action > Update`**.

You can update the 'Name', 'Priority', and 'Version' of the Collector. 

After you've made your changes click **`Confirm`** to save the changes.

![](/docs/guides/admin_guide/plugin/collector_img/collector_08.png)

<br>


### Delete 

Select a Collector you want to **delete**, then click **`Action > Delete`**.

Confirm the collector you've selected through the pop up, and delete by clicking the **`Confirm`** button.

![](/docs/guides/admin_guide/plugin/collector_img/collector_09.png)

<br>


### Enable

Change your Collectors' status from **`DISABLE`** to **`ENABLE`**. 

This allows the Collectors to collect resources.

![](/docs/guides/admin_guide/plugin/collector_img/collector_10.png)

<br>


### Disable

Change your Collectors' status from **`ENABLE`** to **`DISABLE`**.

This will block the Collector from collecting resources.

![](/docs/guides/admin_guide/plugin/collector_img/collector_11.png)

<br>


## Collector List

From the list of Collectors, you can check Collector informations and statuses.

![](/docs/guides/admin_guide/plugin/collector_img/collector_12.png)

* **Name** : Name of Collector.
* **State** : Availability of Collection. (Enable/Disable).
* **Priority** : Determination priority of duplicated parameters from the multi collector. 
<br>
(Lower numbers will have higher priorities.)
* **Plugin** : Plugin type for the Collector.
* **Version** : Plugin Version.
* **Collector History** : Click  **`View detail >`** to see the Collector History page. (Details of all collecting jobs.)
* **Last Collected** : Timestamp of the latest collecting job.

<br>


### Detail

By selecting a Collector you can veiw the **`Details`**.

Tables of items collected by the **Collector** are shown like the following image.

![](/docs/guides/admin_guide/plugin/collector_img/collector_img_13.png)

<br>


### Tag

Managing Collector tags with the **`Edit`** button.

![](/docs/guides/admin_guide/plugin/collector_img/collector_img_14.png)

<br>

Users can Add / Delete items by using the **`+ Add Tag`** button and the **`x`** button. 

After editing the tags, click **`Save`** at the bottom right corner of the page.

![](/docs/guides/admin_guide/plugin/collector_img/collector_img_15.png)

<br>


### Credentials

Veiw the Credentials used by collectors. 

These Credentials are linked to the **Service Accounts** from SpaceONE.

Select Collectors of which you'd like to see the details, then click **`Credentials`**.

![](/docs/guides/admin_guide/plugin/collector_img/collector_16.png)

<br>


### Schedules

Set the Collectors to collect resources on your schedule.

By setting a **Schedule**, users can set Collectors to perform _Cloud Resource Collection_ at a specified time, daily.

![](/docs/guides/admin_guide/plugin/collector_img/collector_18.png)

<br>

#### Add Schedules 

When clicking the **`+ Add`** button, the **`Add Schedule`** appears.

Users can select the _**Name / Timezone / Collection Time**_ for Collectors.

The scheduled collecting time can be set _Hourly_ on a 24-hour base.

Select **`Confirm`** to save your schedule.

![](/docs/guides/admin_guide/plugin/collector_img/collector_18_1.png)

<br>


#### Update/Delete Schedules 

After the schedules have been created, they can be modified or deleted by the menu **`Action`** > **`Update/Delete`**.

![](/docs/guides/admin_guide/plugin/collector_img/collector_20_2.png)

<br>

Users can update informations and confirm.

![](/docs/guides/admin_guide/plugin/collector_img/collector_20.png)

Or Users can delete selected schedules.

![](/docs/guides/admin_guide/plugin/collector_img/collector_20_1.png)


<br>


## Collecting Cloud Resources

By using the **Collector**, collecting cloud resources are available at any time. 

Users can _Collect Resources_ from each cloud, immediately or according to schedules.

<br>


### Collecting Immediately

Choose a Collector and click the menu, **`Action > Collect Data`**.

![](/docs/guides/admin_guide/plugin/collector_img/collector_21.png)

<br>

A confirmation pop up will appear, check and proceed by clicking the **`Confirm`** button.

![](/docs/guides/admin_guide/plugin/collector_img/collector_22.png)

<br>

After you've started collecting, the Status of **Collecting Jobs** can be checked at the bottom right corner of the **Main Dashboard**.

![](/docs/guides/admin_guide/plugin/collector_img/collector_23.png)

Click **`More >`** to see the detailed history.

![](/docs/guides/admin_guide/plugin/collector_img/collector_23_1.png)

<br>


### Collecting by Schedule

By adding a **Schedule** (If you need help adding Schedules follow this [link](#add-schedules).)

the Collectors automatically perform Cloud Resource Collection through SpaceONE.

You can also check the _timestamps_ of the _latest collection job_ from the collector list.

![](/docs/guides/admin_guide/plugin/collector_img/collector_24.png)

<br>
