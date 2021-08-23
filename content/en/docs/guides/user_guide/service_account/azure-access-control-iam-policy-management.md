---
title: "(Azure) Access Control (IAM) Policy Management"
linkTitle: "(Azure) Access Control (IAM) Policy Management"
weight: 12
url_dash_board: "" 
date: 2021-06-10
description: >
    Details of API Security policy to use SpaceONE plugin
---

# \(Azure\) Access Control \(IAM\) Policy Management

## Access Control Policy

**SpaceONE** highly recommends, setting appropriate permissions to Resource groups for each purpose. 

Please set service accounts to Create APIs for each Use Case:

* [General Collector](#general-collector)

<br/>



## General Collector 

Collectors require appropriate authorities to collect cloud resources. We strongly recommend limiting the collector's service account permission to **`read only access`**. Or you can add more restrictions per resources or actions. One useful example is to restrict its rights within region.

<br/>



### Prerequisites

This user guide tutorial assumes that a **`subscription id`** is already created. Assuming that the **`subscription id`** is created, you now need to allow permission from Azure Resources so SpaceONE can collect them.

There are two ways to do so.

* **Grant _Reader role_ to Resource Groups**
  * Grant **`Reader role`** to Resource Groups where the resources are located. If you give a role to the resource group, _SpaceONE_ will only collect resources located in this resource group.

<br/>

* **Grant _Reader role_ to Subscriptions**
  * Grant **`Reader role`** to Subscriptions where resources are located. If you give a role to the subscription, _SpaceONE_ will collect resources from all the resource groups in this subscription.

<br/>

If you want to know more about Azure's access control policies, visit this [link](https://docs.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal) .

<br/>



### Granting Roles

**Grant Roles to Resource Groups**

{{% pageinfo color="300" %}}
**STEP 1. Sign in and move to Azure Portal > Resource groups** 

Select a Resource Group for which the Collector will collect resources from.
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/azure/image(104).png)

{{% pageinfo color="300" %}}
**STEP 2. Add Access Control (IAM)**

Click `Access control (IAM)` from the Navigation tab, and then select the `+Add` button.
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/azure/image(102).png)


{{% pageinfo color="300" %}}
**STEP 3: Assign `Reader role`**

Assign the **Reader Role** to the account. The account should have access permission in this resource group.
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/azure/image(103).png)

<br/>
<br/>


## Troubleshooting

If you face Error messages when following the steps above, please follow this TroubleShooting Guide.

<br/>

### Authorization
#### **1.** \(AuthorizationFailed\) Client does not have authorization 

{{% alert title="" color="warning" %}}
The client \(`client_id`\) with object id \(`object_id`\) does not have authorization to perform action 'Microsoft.Resources/subscriptions/resourcegroups/read' over scope \(`subscription_id`\), or the scope is invalid. If access was recently granted, please try refreshing your credentials.
{{% /alert %}}

{{% pageinfo color="300" %}}
**STEP 1: Log in to the Azure Portal and move to Subscriptions** 
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/azure/screen-shot-2021-04-15-at-18.55.14.png)

{{% pageinfo color="300" %}}
**STEP 2: Click on the subscription Name where the resources are located.**
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/azure/image(114).png)

{{% pageinfo color="300" %}}
**STEP 3: Click the `+Add role assignment` button.**
{{% /pageinfo %}}

![](/docs/guides/user_guide/service_account/service_account_img/azure/image-2-.png)

{{% pageinfo color="300" %}}
**STEP 4: Add role assignments**

Add the Role Assignments like the following description and image.

* **Role**
  * `Reader`
* **Assign access to**
  * `User, group, or service principal`
* **Select**
  * `App that has registered on Active directory` at **Azure ActiveDirectory > Registered App**  
{{% /pageinfo %}}
  
  ![](/docs/guides/user_guide/service_account/service_account_img/azure/image-azure-subscription.png)

{{% alert title="Note" color="info" %}}
  'Service Account names' and 'Registered App names' are easily confused.   
  Please, Select Registered App as shown below \(Check the Icon Differences\).  
{{% /alert %}}

![](/docs/guides/user_guide/service_account/service_account_img/azure/screen-shot-2021-04-16-at-12.38.16.png)

