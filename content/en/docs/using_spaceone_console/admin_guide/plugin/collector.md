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

![](../.gitbook/assets/2020-08-06-7.48.58-.png)



## Create Collector

Available plugin list is printed by select _**Official Marketplace.**_

Select plugin to install, Click _**+ Create**_ button will starts collector creation wizard.

![](../.gitbook/assets/2020-08-07-10.23.39.png)

Fill out name of collector and choose version of plugin. Higher plugin version is generally suggested.

![](../.gitbook/assets/2020-08-07-11.10.04.png)

Selecting credentials information for collector. This step will be done automatically.

![](../.gitbook/assets/2020-08-07-11.10.58.png)

User can add tags for collector. Tags can be added by clicking _**+ Add**_ button

You don\`t need to delete existing tags\(For system use\)

![](../.gitbook/assets/2020-08-07-11.14.05.png)

If creation is not proceeds, Check red marked steps in _**Collector creation wizards**_

![](../.gitbook/assets/2020-08-07-11.16.29.png)



## Collector Update/Delete/Enable/Disable

Controlling _**Collector**_ can be done by _**Action**_ list menu. 

Select _**Collector**_ then click _**Action button**_. Available list of actions will be shown.

![](../.gitbook/assets/2020-08-07-11.18.32.png)

#### Update 

Change items to be updated, then click _**Confirm**_ button. 

![](../.gitbook/assets/2020-08-07-11.20.18.png)

#### Delete 

Deletion pop up will be printed, Proceeds through _**Confirm**_ button

![](../.gitbook/assets/2020-08-07-2.06.46.png)

#### Enable

Changing Collector status from _**DISABLE**_ status to _**ENABLE**_. This allows collecting job with _**collector.**_

![](../.gitbook/assets/2020-08-07-2.10.04.png)



#### DISABLE 

Changing _**ENABLE**_ to _**DISABLE**_. This will block collecting job with _**collector**_.

![](../.gitbook/assets/2020-08-07-2.09.45.png)



## Collector Listing

![](../.gitbook/assets/2020-08-07-2.16.13.png)

In Collector list, Collector informations and status can be checked.

* Name : Name of Collector
* State : Availability of collection\(_**Enable**_/_**Disable**_\).
* Priority : Determination priority of duplicated parameters from multi collector. Lower number gets higher priority.
* Last Collected : Last timestamp of collector action
* Created : Timestamp of collector creation.



### Detail

Detailed information of each collector

Tables of items collected by _**Collector**_.

![](../.gitbook/assets/2020-08-07-2.25.22.png)

### Tag

Managing Collector tags. Modification through _**Edit**_ button.

![](../.gitbook/assets/2020-08-07-2.27.56.png)

User can add/delete item using _**Add Tag**_ button and _**x**_ button. After editing page click _**Save**_ button right down of page.

![](../.gitbook/assets/2020-08-07-3.25.03.png)

### Credentials

Lists of credentials used by collectors. This credentials are linked to _**Service Account**_ of SpaceONE.

By clicking _**Collector Data**_ button, User can start collecting job for target account immediately.

![](../.gitbook/assets/2020-08-07-3.28.14.png)

![](../.gitbook/assets/2020-08-07-3.34.33.png)

### Schedules

Specifies the frequency of data collection.

When a schedule is specified, Cloud Resource collection is performed through Collector at a specified time every day.

![](../.gitbook/assets/2020-08-07-3.39.39.png)

**Add** 

By clicking _**+ Add**_ button. _**Add Schedule**_ appears

User can select _**Name/Timezone/Collection Time**_

Collecting Time can be set by 24-hour base. Can be selected in 1-hour increments

![](../.gitbook/assets/2020-08-07-3.46.11.png)

#### Update/Delete Schedule 

After setting schedule, Schedule modification or deleting is available using _**Action**_ **&gt; Update/Delete** button.

![](../.gitbook/assets/2020-08-07-3.58.22.png)



## Collecting Cloud Resource

With Collector, Collection of cloud resource is available any time. User can get update to date status of each cloud resources in various ways.

### Collecting Immediately

Select collector click  _**Action &gt; Collect Data.**_

![](../.gitbook/assets/2020-08-07-4.02.39%20%281%29.png)

Collector Data confirmation screen appears, Proceeds with _**Confirm**_ button.

![](../.gitbook/assets/2020-08-07-4.03.34.png)

Status of collecting can be checked in _**Main Dashboard**_.

![](../.gitbook/assets/2020-08-07-4.04.46.png)

### Collecting Schedule

With the schedule registered in the _**schedule**_ above, Cloud Resource collection is automatically performed by SpaceONE.

Final collected timestamp can be checked through collector list.

![](../.gitbook/assets/2020-08-07-4.08.17-.png)

