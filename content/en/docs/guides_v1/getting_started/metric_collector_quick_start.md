---
title: "Metric Collector Quick Start"
linkTitle: "Metric Collector Quick Start"
weight: 4
date: 2022-04-29
description: >
    Quick Guide for user to set up Monitoring Metric Collectors for Servers over Clouds.
---

## How to Set up
Collect monitoring metric data through the following steps:

* Create API Only User
* Create API Key of API User
* Register SpaceONE Account
* Create Metric Collector

<br>

We assume that you are ***Domain Admin***, who can
* Create User
* Create API Key
* Create Collector
* Schedule collection time


## Create API Only User
Menu: ***Administration*** > ***IAM*** > ***User***

To use SpaceONE's Metric Collector, you need the SpaceONE Service Account provided by Provider. Please refer to below for the registration process.

![](/docs/guides_v1/getting_started/metric-collector_img/create_api_user.png)

1. Add User, which type is ***API Only*** named as ***monitoring-api-user***, any name is OK.
2. Assign ***Domain Admin*** role

## Create API Key of API User
Menu: ***Administration*** > ***IAM*** > ***User***

Before add Service Account \(SpaceONE\), You need API Key for SpaceONE Service Provider.

![](/docs/guides_v1/getting_started/metric-collector_img/metric-collector-api_key.png)

<!-- {% hint style="info" %} -->
API-Key is provided through the system administrator. If you don't have an API-Key for SpaceONE Service Account, you will need to contact your domain administrator or email support@spaceone.dev.
<!-- {% endhint %} -->

## Register SpaceONE Account
Menu: ***Asset Inventory*** > ***Service Account***

You can register Service Account on SpaceONE.

Select ***SpaceONE*** Provider first,
Click **+Add** button.

![](/docs/guides_v1/getting_started/metric-collector_img/metric-collector_image_01.png)

You can register SpaceONE Service Account following the procedure below.
1. Service Account name (Any name is OK).
2. Fill out User ID
3. Check ***No Project Selected*** in the Project Section

![](/docs/guides_v1/getting_started/metric-collector_img/metric-collector_image_02.png)

<br>

Open ***api_key.json*** which is downloaded at above ***Get API Key for Service Account*** step.

![](/docs/guides_v1/getting_started/metric-collector_img/api_key_json.png)


After filling out the Service Account name and user ID, set the Credential obtained from the domain administrator.‌ <br>
Credential input values are shown below.‌ <br>

1. _API Key_ : from api_key.json file
2. _API Key ID_ : from api_key.json file
3. _Identity Endpoint_: ***grpc://identity.spaceone.svc.cluster.local:50051/v1***

All values are required.
![](/docs/guides_v1/getting_started/metric-collector_img/metric-collector_image_03.png)

## Create Metric Collector
Menu: ***Asset Inventory*** > ***Collector***

To collect metric information, you need ***monitoring-metric-collector*** plugin.

![](/docs/guides_v1/getting_started/metric-collector_img/metric-collector_image_04.png)

***+Create*** monitoring-metric-collector

![](/docs/guides_v1/getting_started/metric-collector_img/metric-collector_image_05.png)

Input any name, then ***confirm***.

![](/docs/guides_v1/getting_started/metric-collector_img/metric-collector_image_06.png)

You can check new metric collector is created, and there is one credential registered.

![](/docs/guides_v1/getting_started/metric-collector_img/metric-collector_image_07.png)

If you want to test new collector, click ***Collect Data***.

You can check Monitoring Metric information at **Asset Inventory** &gt; **Server**<br>

<br>

![](/docs/guides_v1/getting_started/metric-collector_img/metric-collector_image_08.png)

**Note: Collection of Monitoring-metric-collectors is recommended once a day.** 
After the Collector Job is complete, the Monitoring metric is updated.
You can check collected data on the **"Raw Data"** tab of **Data -&gt; Monitoring**.

![](/docs/guides_v1/getting_started/metric-collector_img/metric-collector_image_09.png)

All done

## Check metric value

In a Server menu, you can check the result.
First, customize your table column.

<br>

![](/docs/guides_v1/getting_started/metric-collector_img/metric-collector_image_10.png)

<br>

You can check any attribute what you want to see. You can also adjust the column order by moving items.

![](/docs/guides_v1/getting_started/metric-collector_img/metric-collector_image_11.png)

## Metric items \(Monitoring Collection\)
<!-- {% hint style="info" %} -->
The default metric type is supported after version 1.5.3.
**Note: Monitoring Metric entries are continuously updated.**
<!-- {% endhint %} -->

### Default Metric Stat

| Stat for Metric | Key | Description |
| :---: | :---: | :---: |
| MAX | max | Maximum value per day |
| AVERAGE | avg | Average value per day |

### Collecting Metrics

<table>
  <thead>
    <tr>
      <th style="text-align:left">Collecting Metric Type</th>
      <th style="text-align:left">Metric name / (Unit)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>CPU</b>
      </td>
      <td style="text-align:left">
        <ul>
          <li>utilization (%)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Memory</b>
      </td>
      <td style="text-align:left">
        <ul>
          <li>usage (%)</li>
          <li>total (bytes)</li>
          <li>used (bytes)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Disk</b>
      </td>
      <td style="text-align:left">
        <ul>
          <li>write_iops (counts)</li>
          <li>write_throughput (bytes)</li>
          <li>read_iops (counts)</li>
          <li>read_throughput (bytes)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Network</b>
      </td>
      <td style="text-align:left">
        <ul>
          <li>received_throughput (bytes)</li>
          <li>received_pps (counts)</li>
          <li>sent_throughput (bytes)</li>
          <li>sent_pps (counts)</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
