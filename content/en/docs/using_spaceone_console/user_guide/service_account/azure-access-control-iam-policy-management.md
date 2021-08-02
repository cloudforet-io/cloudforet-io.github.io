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

## **Access Control** Policy

**SpaceONE** highly recommends to set appropriate permissions to Resource groups for each purpose. 

Please, Set service account, To Create API for each use case:

* [General Collector](#general-collector)

## General Collector 

Collector requires appropriate authorities to collect cloud resources. We strongly recommend to limit collector's service account its permission to **read only access**. 

Otherwise, you can add more restrictions per resource groups or actions. One of the useful example is to restrict its rights within resource groups.

---

**Prerequisite**

This user guide tutorial assumes that a `subscription id` is already created.

There are two options for giving permission to Azure resources which SpaceONE is going to collect.

* Grant `Reader role` to **resource group** where resources are located. If you give a role to resource group, _SpaceONE_ can only collect resources located in this resource group.
* Grant `Reader role` to **subscription** where resources are located. If you give a role to the subscription, SpaceONE can collect resources in all resource groups in this subscription.

If you want to know more about Azure's access control policies, visit the link below.

[https://docs.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal](https://docs.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal)

**Grant Roles to resource groups**

**STEP 1. Log in Azure Portal &gt; Resource groups** 

Select the resource group for which the collector will collect resources.

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/azure/image(104).png)

**STEP 2. Click `Access control (IAM)` Navigation tab, and click `+Add` button.**

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/azure/image(102).png)



**STEP 3: Assign the `Reader role`  to the account. The account should  have an access permission in this resource group.**



![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/azure/image(103).png)

## Troubleshooting

### Authorization

Please, follow the steps on troubleshooting guide below if you face any of error messages above.

#### 1. \(AuthorizationFailed\) Client does not have authorization 



{{% alert title="" color="warning" %}}
The client `client_id` with object id `object_id` does not have authorization to perform action Microsoft.Resources/subscriptions/resourcegroups/read over scope `subscription_id` or the scope is invalid. If access was recently granted, please refresh your credentials
{{% /alert %}}

**STEP 1: Log in Azure Portal and Drive to &gt; Subscriptions** 

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/azure/screen-shot-2021-04-15-at-18.55.14.png)

  
**STEP 2: Click the subscription name where resources are located.**

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/azure/image(114).png)

**STEP 3: Click `+Add role assignment` button.**

![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/azure/image-2-.png)

---

**STEP 4: Add role assignment for followings as below**

* **Role**
  * `Reader`
* **Assign access to**
  * `User, group, or service principal`
* **Select**
  * `App that has registered on Active directory` **at &gt; Azure ActiveDirectory &gt; Registered App**  


    ![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/azure/image-azure-subscription.png)



{{% alert title="Note" color="info" %}}
  Service Account name and Registered App name may be confused.   
Please, Select Registered App as below \(Different Icons\).  
****
{{% /alert %}}



![](/docs/using_spaceone_console/user_guide/service_account/service_account_img/azure/screen-shot-2021-04-16-at-12.38.16.png)

