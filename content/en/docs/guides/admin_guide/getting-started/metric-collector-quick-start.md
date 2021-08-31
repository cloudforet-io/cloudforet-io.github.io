---
title: "Metric Collector Quick Start"
linkTitle: "Metric Collector Quick Start"
weight: 4
date: 2021-07-31
description: >
    Quick Guide for user to set up Monitoring Metric Collectors for Servers over Clouds.
---

## How to Set up

Collect monitoring metric data through the following steps:

* [Prerequisites](metric-collector-quick-start.md#prerequisites)
* [Get API Key for SpaceONE Service Account](metric-collector-quick-start.md#get-api-key-for-spaceone-service-account)
* [Register SpaceONE Service Account](metric-collector-quick-start.md#register-spaceone-service-account-ex-metric-collector)
* [Monitoring Metric Information](metric-collector-quick-start.md#monitoring-metric-information) 
* [Collecting Monitoring Metric Type](metric-collector-quick-start.md#collecting-monitoring-metric-type)

## PREPARATION

To use SpaceONE's Metric Collector, you need the SpaceONE Service Account provided by Provider. Please refer to below for the registration process.

## Get API Key for Service Account

Before add Service Account \(SpaceONE\), You need API Key for SpaceONE Service Provider.

<br>

![](/docs/guides/admin_guide/getting-started/metric-collector_img/metric-collector-api_key.png)

<!-- {% hint style="info" %} -->
API-Key is provided through the system administrator. If you don't have an API-Key for SpaceONE Service Account, you will need to contact your domain administrator or email support@spaceone.dev.
<!-- {% endhint %} -->

## Assign SpaceOne Service Account \(Ex. Metric Collector\)
 
You can register Service Account on SpaceONE at **Identity** &gt; **Service Account**.
Select Service Provider, Click **+Add** button.

<br>

![](/docs/guides/admin_guide/getting-started/metric-collector_img/metric-collector_image_01.png)

You can register SpaceONE Service Account following the procedure below.
1. Service Account name
2. Fill out User ID
3. Fill out Credential \(API Key information\)

<br>

![](/docs/guides/admin_guide/getting-started/metric-collector_img/metric-collector_image_02.png)

After filling out the Service Account name and user ID, set the Credential obtained from the domain administrator.‌

Credential input values are shown below.‌

1. _API Key_
2. _API Key ID_
3. _Identity Endpoint_

All values are required.

<br>

![](/docs/guides/admin_guide/getting-started/metric-collector_img/metric-collector_image_03.png)

<!-- {% hint style="info" %} -->
The Monitoring Metric collector service should not assign a project.

You can skip this procedure.
<!-- {% endhint %} -->

## Monitoring Metric Information

You can check Monitoring Metric information at **Inventory** &gt; **Server**<br>
**Note: Collection of Monitoring-metric-collectors is recommended once a day.** 

<br>

![](/docs/guides/admin_guide/getting-started/metric-collector_img/metric-collector_image_04.png)
 
After the Collector Job is complete, the Monitoring metric is updated.

<br>

![](/docs/guides/admin_guide/getting-started/metric-collector_img/metric-collector_image_05.png)

You can check collected data on the **"Raw Data"** tab of **Data -&gt; Monitoring**.
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
