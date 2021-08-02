---
title: "Collector"
linkTitle: "Collector"
weight: 1
date: 2021-07-31
description: >
    Creating Collector. Collecting Cloud Resources.
---


# Collector

## Overview

With _**Collector Plugins**_ in SpaceONE marketplace, Cloud resources from various cloud providers can be collected easily.

Plugins are offered by both SpaceONE Official marketplace and private repository.

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_01.png)


## Create Collector

Available plugin list is printed by select _**Official Marketplace.**_

Select plugin to install, Click _**+ Create**_ button will starts collector creation wizard.

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_02.png)

Fill out name of collector and choose version of plugin. Higher plugin version is generally suggested.

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_03.png)

Selecting credentials information for collector. This step will be done automatically.

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_04.png)

User can add tags for collector. Tags can be added by clicking _**+ Add**_ button

You don\`t need to delete existing tags\(For system use\)

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_05.png)

If creation is not proceeds, Check red marked steps in _**Collector creation wizards**_

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_06.png)


## Collector Update/Delete/Enable/Disable

Controlling _**Collector**_ can be done by _**Action**_ list menu. 

Select _**Collector**_ then click _**Action button**_. Available list of actions will be shown.

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_07.png)
#### Update 

Change items to be updated, then click _**Confirm**_ button. 

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_08.png)
#### Delete 

Deletion pop up will be printed, Proceeds through _**Confirm**_ button

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_09.png)

#### Enable

Changing Collector status from _**DISABLE**_ status to _**ENABLE**_. This allows collecting job with _**collector.**_

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_10.png)


#### DISABLE 

Changing _**ENABLE**_ to _**DISABLE**_. This will block collecting job with _**collector**_.

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_11.png)


## Collector Listing

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_12.png)

In Collector list, Collector informations and status can be checked.

* Name : Name of Collector
* State : Availability of collection\(_**Enable**_/_**Disable**_\).
* Priority : Determination priority of duplicated parameters from multi collector. Lower number gets higher priority.
* Last Collected : Last timestamp of collector action
* Created : Timestamp of collector creation.



### Detail

Detailed information of each collector

Tables of items collected by _**Collector**_.

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_13.png)
### Tag

Managing Collector tags. Modification through _**Edit**_ button.

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_14.png)

User can add/delete item using _**Add Tag**_ button and _**x**_ button. After editing page click _**Save**_ button right down of page.

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_15.png)


### Credentials

Lists of credentials used by collectors. This credentials are linked to _**Service Account**_ of SpaceONE.

By clicking _**Collector Data**_ button, User can start collecting job for target account immediately.

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_16.png)

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_17.png)

### Schedules

Specifies the frequency of data collection.

When a schedule is specified, Cloud Resource collection is performed through Collector at a specified time every day.

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_18.png)

**Add** 

By clicking _**+ Add**_ button. _**Add Schedule**_ appears

User can select _**Name/Timezone/Collection Time**_

Collecting Time can be set by 24-hour base. Can be selected in 1-hour increments

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_19.png)

#### Update/Delete Schedule 

After setting schedule, Schedule modification or deleting is available using _**Action**_ **&gt; Update/Delete** button.

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_20.png)



## Collecting Cloud Resource

With Collector, Collection of cloud resource is available any time. User can get update to date status of each cloud resources in various ways.

### Collecting Immediately

Select collector click  _**Action &gt; Collect Data.**_

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_21.png)

Collector Data confirmation screen appears, Proceeds with _**Confirm**_ button.

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_22.png)

Status of collecting can be checked in _**Main Dashboard**_.

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_23.png)

### Collecting Schedule

With the schedule registered in the _**schedule**_ above, Cloud Resource collection is automatically performed by SpaceONE.

Final collected timestamp can be checked through collector list.

![](/docs/using_spaceone_console/admin_guide/plugin/collector_img/collector_img_24.png)

