---
title: "Server"
linkTitle: "Server"
weight: 10
url_dash_board: "" 
date: 2021-06-10
description: >
    Managing server resources
---

# Server

## Overview  

You can integrate server resources scattered by various regions or projects

Through this page, Users can easily check detail status of servers without login to cloud console repeatedly nor connect to terminal.

![](/docs/guides/user_guide/invetory/server_ficture/2020-08-05-5.50.33-.png)

Server page is consist of several functions.

* Server list : Full list of servers that meet the conditions
* Detailed status tab : Checking detailed informations for each servers
* Searching bar : Easy to search servers by query

## Server list

Server information collected based on multi clouds

![](/docs/guides/user_guide/invetory/server_ficture/2020-08-05-5.50.33-2.png)

List of supported information

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
      <td style="text-align:left">Availability Zone</td>
      <td style="text-align:left">Server region name</td>
    </tr>
    <tr>
      <td style="text-align:left">Instance State</td>
      <td style="text-align:left">Power status of server. Each status refers to definitions of each cloud
        providers.</td>
    </tr>
    <tr>
      <td style="text-align:left">Collection State</td>
      <td style="text-align:left">
        <p>Collecting status by collectors(ACTIVE/DISCONNECTED).</p>
        <p>Indicates whether collecting information of target server is ok</p>
        <ul>
          <li>Disconnected status shows not available to collect.</li>
          <li>The persistence of this state is considered deletion of server(Delete
            from server list)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">OS</td>
      <td style="text-align:left">Server OS type(ubuntu/amazonlinux/centos/win2018/etc..)</td>
    </tr>
    <tr>
      <td style="text-align:left">Public IP</td>
      <td style="text-align:left">Attached public ip to instance(AWS EIP).</td>
    </tr>
    <tr>
      <td style="text-align:left">Provider</td>
      <td style="text-align:left">Cloud Provider (aws, azure, gcp, openstack, vmware, etc...)</td>
    </tr>
    <tr>
      <td style="text-align:left">Account ID</td>
      <td style="text-align:left">Root account id</td>
    </tr>
    <tr>
      <td style="text-align:left">Project</td>
      <td style="text-align:left">Name of projects</td>
    </tr>
    <tr>
      <td style="text-align:left">Updated at</td>
      <td style="text-align:left">Latest timestamp of collectors</td>
    </tr>
  </tbody>
</table>

### Action

Clicking _**action**_ button after selection of server, you can manage server status

![Action &#xB9AC;&#xC2A4;&#xD2B8;](/docs/guides/user_guide/invetory/server_ficture/2020-08-06-4.13.08.png)

* Delete : Removes from server list. Server will not be deleted physically. They will be added after re-collected by collectors.
* Set In-Service/Maintenance/Close : Changing server status.
* Change Project : Changing projects servers is belong to. 
* Console : Link to AWS Console.

### Export

All information within tables will be exported excel format.

![Excel Export](/docs/guides/user_guide/invetory/server_ficture/2020-08-06-4.11.27-.png)



## Tab

Provides detailed information about the server. They are consists of tabs below

* Details : Additional information provided\(Machine image, Security group, etc..\)

![Details tab](/docs/guides/user_guide/invetory/server_ficture/2020-08-06-5.09.53.png)

* Tag : Grouping server by tagging.
* Member : List of server managers
* History : Chang management of server.
* Monitoring : Monitoring metric informations provided by external monitoring sources\(CloudWatch, Azure Monitor, StackDriver..\)

![Monitoring tab](/docs/guides/user_guide/invetory/server_ficture/2020-08-06-5.11.19.png)

## Search Bar

User can query server easily by suggested keywords.

SpaceONE classify automatically based on major keywords. This allows users to conveniently search through the collected information 

![Server search bar](/docs/guides/user_guide/invetory/server_ficture/2020-08-06-5.12.57-.png)

Supported keywords contains all parameters defined for server

![searching keyword list](/docs/guides/user_guide/invetory/server_ficture/2020-08-06-5.16.04.png)

