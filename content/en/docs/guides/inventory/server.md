---
title: "Server"
linkTitle: "Server"
weight: 1
url_dash_board: "/user_guide/invetory/server/" 
date: 2021-06-10
description: >
    Managing server resources
---

## Overview
You can integrate server resources scattered by various regions or projects.<br>
Through this page, Users can easily check detail status of servers without login to cloud console repeatedly nor connect to terminal.
![Server List](/docs/guides/inventory/server_img/server_image_01.png)
![Server Detail](/docs/guides/inventory/server_img/server_image_02.png)

Server page is consist of several functions.
* Search Bar : Easy to search servers by query.
* Server List : Full list of servers that meet the conditions.
* Detailed Status Tab : Checking detailed informations for each server.

## Search Bar
User can query server easily by suggested keywords.<br>
SpaceONE classify automatically based on major keywords. This allows users to conveniently search through the collected information.
![Server search bar](/docs/guides/inventory/server_img/server_image_03.png)
Supported keywords contains all parameters defined for server.
![searching keyword list](/docs/guides/inventory/server_img/server_image_04.png)

## Server list
Server information collected based on multi clouds.
![Server Example](/docs/guides/inventory/server_img/server_image_05.png)
List of supported information is as follows.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Item</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Name</td>
      <td style="text-align:left">
        <p></p>
        <p>Name of server. This refer to name tag parameter supported by each cloud
          provider</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Instance Type</td>
      <td style="text-align:left">Describes server specification. This refer to specific name provided each
        clouds compute services.</td>
    </tr>
    <tr>
      <td style="text-align:left">Core/Memory</td>
      <td style="text-align:left">Core/Memory(GB).</td>
    </tr>
    <tr>
      <td style="text-align:left">Provider</td>
      <td style="text-align:left">Cloud Provider (aws, azure, gcp, openstack, vmware, etc...)</td>
    </tr>
    <tr>
      <td style="text-align:left">Instance State</td>
      <td style="text-align:left">Power status of server. Each status refers to definitions of each cloud
        providers.(Running/ Stopped)</td>
    </tr>
    <tr>
      <td style="text-align:left">Availability Zone</td>
      <td style="text-align:left">Server region name</td>
    </tr>
    <tr>
      <td style="text-align:left">OS</td>
      <td style="text-align:left">Server OS type(ubuntu/amazonlinux/centos/win2018/etc..)</td>
    </tr>
    <tr>
      <td style="text-align:left">Primary IP</td>
      <td style="text-align:left">System used when it originates traffic to the default route</td>
    </tr>
    <tr>
      <td style="text-align:left">Public IP</td>
      <td style="text-align:left">Attached public ip to instance(AWS EIP).</td>
    </tr>
    <tr>
      <td style="text-align:left">Account ID</td>
      <td style="text-align:left">Root account id</td>
    </tr>
    <tr>
      <td style="text-align:left">Project</td>
      <td style="text-align:left">Name of project</td>
    </tr>
    <tr>
      <td style="text-align:left">Collection State</td>
      <td style="text-align:left">
        <p>Collecting status by collectors(ACTIVE/DISCONNECTED).</p>
        <p>Indicates whether collecting information of target server is ok</p>
        <ul>
          <li>Disconnected status shows not available to collect.</li>
          <li>The persistence of 'Disconnected' is considered deletion of server(Delete
            from server list)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Last Collected</td>
      <td style="text-align:left">Latest timestamp of collectors</td>
    </tr>
  </tbody>
</table>

### Action
By clicking _**Action**_ button after selection of server, you can manage server status.
![Action](/docs/guides/inventory/server_img/server_image_06.png)
* Delete : Remove from server list. Server will not be deleted physically. They will be added after re-collected by collectors.
* Change Project : Change project which server is belong to. 
* Connect to Console : Link to AWS Console.

### Export
All information within tables will be exported (Excel format).
![Excel Export](/docs/guides/inventory/server_img/server_image_07.png)

### Custom Table
You can personalize the fields that you want to display in the Resource List table.
![](/docs/guides/inventory/server_img/server_image_08.png)
You can check details of Cumstom Table here. <a href ="/docs/guides/advanced_topics/custom_table">Custom Table Details.</a>

## Tab
Provides detailed information about the server. They are consists of tabs below.

### Details
Additional information provided\(Machine image, Security group, etc..\)
![Details tab](/docs/guides/inventory/server_img/server_image_09.png)

### Tag
Grouping servers by tagging.
![Details tab](/docs/guides/inventory/server_img/server_image_10.png)

### Member
List of server managers.
![Details tab](/docs/guides/inventory/server_img/server_image_11.png)

### History
History of resources collected.
![Details tab](/docs/guides/inventory/server_img/server_image_12.png)

### Monitoring
Monitoring metric informations provided by external monitoring sources\(CloudWatch, Azure Monitor, StackDriver..\).
![Monitoring tab](/docs/guides/inventory/server_img/server_image_13.png)