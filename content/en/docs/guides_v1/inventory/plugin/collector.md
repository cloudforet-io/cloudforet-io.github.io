---
title: "Collector"
linkTitle: "Collector"
weight: 1
date: 2021-07-31
description: >
    Creating Collectors. Collecting Cloud Resources.
---

## Overview
Using _**Collector Plugins**_ in the SpaceONE marketplace, users can easily collect Cloud resources from various cloud providers.

Plugins are offered by both choices below : 
* _Private Repositories_ 
* _Official SpaceONE Marketplace_

![](/docs/guides_v1/inventory/plugin/collector_img/collector_01.png)

## Creating Collectors
Users can reach the available plugin list by selecting **`+ Create`** > **`Official Marketplace`**.<br>
Select a plugin you want to install, then click the **`+ Create`** button. This will start the _Collector Creation Wizard_.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_02_1.png)
![](/docs/guides_v1/inventory/plugin/collector_img/collector_02.png)
Fill out the 'Name' and 'Priority' for the collector and choose a version of the plugin.<br> 
Latest Versions of plugins are normally recommended.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_03.png)
Confirm credential informations for the collector.<br>
This step will be done automatically, so simply confirm all the information that has been filled out.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_04.png)
Users can add **Tags** on a collector. (This step is optional.)<br> 
Tags can be added by clicking the **`+ Add`** button.<br>
If there are exsisting Tags, there's no need to delete them. \(They are for system uses.\)
![](/docs/guides_v1/inventory/plugin/collector_img/collector_img_05.png)

{{% alert title="" %}}
**If you've failed to create a Collector, please check for steps that are _marked red_.**
{{% /alert %}}

For example, if you try to give identical names to collectors the **Collector Creation Wizard** will mark this process and ask you to try a different name. 
![](/docs/guides_v1/inventory/plugin/collector_img/collector_06.png)

## Editing Collectors
Editing and Controling _**Collectors**_ can be done by the **`Action`** list menu.<br> 
(This is located next to the **`+ Create`** button.)<br>
Select a _**Collector**_ you want to edit, then click **`Action`**. A list of available actions will be shown.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_07_1.png)
![](/docs/guides_v1/inventory/plugin/collector_img/collector_img_07.png)

### Update 
Select a Collector you want to **update**, then click **`Action > Update`**.<br>
You can update the 'Name', 'Priority', and 'Version' of the Collector.<br>
After you've made your changes click **`Confirm`** to save the changes.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_08.png)

### Delete 
Select a Collector you want to **delete**, then click **`Action > Delete`**.<br>
Confirm the collector you've selected through the pop up, and delete by clicking the **`Confirm`** button.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_09.png)

### Enable
Change your Collectors' status from **`DISABLE`** to **`ENABLE`**.<br> 
This allows the Collectors to collect resources.<br>
![](/docs/guides_v1/inventory/plugin/collector_img/collector_10.png)

### Disable
Change your Collectors' status from **`ENABLE`** to **`DISABLE`**.<br>
This will block the Collector from collecting resources.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_11.png)

## Collector List
From the list of Collectors, you can check Collector informations and statuses.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_12.png)

* **Name** : Name of Collector.
* **State** : Availability of Collection. (Enable/Disable).
* **Priority** : Determination priority of duplicated parameters from the multi collector. 
<br>
(Lower numbers will have higher priorities.)
* **Plugin** : Plugin type for the Collector.
* **Version** : Plugin Version.
* **Collector History** : Click  **`View detail >`** to see the Collector History page. (Details of all collecting jobs.)
* **Last Collected** : Timestamp of the latest collecting job.

### Detail
By selecting a Collector you can veiw the **`Details`**.<br>
Tables of items collected by the **Collector** are shown like the following image.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_img_13.png)

### Tag
Managing Collector tags with the **`Edit`** button.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_img_14.png)
Users can Add / Delete items by using the **`+ Add Tag`** button and the **`x`** button.<br>
After editing the tags, click **`Save`** at the bottom right corner of the page.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_img_15.png)

### Credentials
Veiw the Credentials used by collectors.<br>
These Credentials are linked to the **Service Accounts** from SpaceONE.<br>
Select Collectors of which you'd like to see the details, then click **`Credentials`**.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_16.png)

### Schedules
Set the Collectors to collect resources on your schedule.<br>
By setting a **Schedule**, users can set Collectors to perform _Cloud Resource Collection_ at a specified time, daily.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_18.png)

#### Add Schedules
When clicking the **`+ Add`** button, the **`Add Schedule`** appears.<br>
Users can select the _**Name / Timezone / Collection Time**_ for Collectors.<br>
The scheduled collecting time can be set _Hourly_ on a 24-hour base.<br>
Select **`Confirm`** to save your schedule.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_18_1.png)

#### Update/Delete Schedules
After the schedules have been created, they can be modified or deleted by the menu **`Action`** > **`Update/Delete`**.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_20_2.png)
Users can update informations and confirm.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_20.png)
Or Users can delete selected schedules.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_20_1.png)

## Collecting Cloud Resources
By using the **Collector**, collecting cloud resources are available at any time.<br>
Users can _Collect Resources_ from each cloud, immediately or according to schedules.

### Collecting Immediately
Choose a Collector and click the menu, **`Action > Collect Data`**.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_21.png)
A confirmation pop up will appear, check and proceed by clicking the **`Confirm`** button.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_22.png)
After you've started collecting, the Status of **Collecting Jobs** can be checked at the bottom right corner of the **Main Dashboard**.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_23.png)
Click **`More >`** to see the detailed history.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_23_1.png)

### Collecting by Schedule
By adding a **Schedule** (If you need help adding Schedules follow this [link](#add-schedules).)<br>
the Collectors automatically perform Cloud Resource Collection through SpaceONE.<br>
You can also check the _timestamps_ of the _latest collection job_ from the collector list.
![](/docs/guides_v1/inventory/plugin/collector_img/collector_24.png)
