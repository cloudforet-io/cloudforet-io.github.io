---
title: "(Azure) Access Control (IAM) Policy Management"
linkTitle: "(Azure) Access Control (IAM) Policy Management"
weight: 12
url_dash_board: "" 
date: 2021-06-10
description: >
    Details of API Security policy to use SpaceONE plugin
---

## Access Control Policy
**SpaceONE** highly recommends, setting appropriate permissions to Resource groups for each purpose. <br> 
Please set service accounts to Create APIs for each Use Case:
* [General Collector](#general-collector)

## Prerequisites
### App registration in Azure AD
Create an app registration in Azure AD for ```SpaceONE``` to be used as an application in Azure AD.

**Step 1. Create and register new application** <br>
From the portal menu, select Azure Active Directory, then go to the ```App registrations``` tab and select ```New registration```

**Step 2. Copy the following information** <br>
Name the application, and copy the following information for later: 
- Client ID 
- Tenant ID 

**Step 3. Create a client secret**
SpaceONE service account requires client secret for registering service account.
Select ```Certificates & secrets``` > ```Client secrets``` > ```New client secret```.  After, copy the client secret value shown in the page.

**Step 4. Confirm again that you have copied the authentication information in this page.**
As you create your app creation, make sure to save the following information which you will need later when you register ```SpaceONE Service Account```.
- Client ID
- Tenant ID
- Client Secret

For more information, Look at [Microsoft Azure App Service Documentation](https://docs.microsoft.com/en-us/azure/app-service/configure-authentication-provider-aad#-create-an-app-registration-in-azure-ad-for-your-app-service-app).

## General Collector
Collectors require appropriate authorities to collect cloud resources. We strongly recommend limiting the collector's service account permission to **`read only access`**. Or you can add more restrictions per resources or actions. One useful example is to restrict its rights within region.

### Prerequisites
This user guide tutorial assumes that a **`subscription id`** and **`App registration`** are ready. Assuming that the **`subscription id`** and **`App registration`** are created, you now need to allow permission from Azure Resources so SpaceONE can collect them. <br>


If you want to know more about Azure's access control policies, visit this [Microsoft RBAC document](https://docs.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal) . <br>


### Granting Roles
  _SpaceONE_ needs the **`Reader role`** to be granted to the```scope you want(subscription or resource group)``` where resources are located. <br>
  For example, if you give a role to the subscription, _SpaceONE_ will collect resources from all the resource groups in this subscription. <br>

### **STEP 1. Move to Azure Portal > Resource groups / Subscriptions** 
Select a Resource Group or Subscription for which the Collector will collect resources from.
![](/docs/guides/service_account/service_account_img/azure/image(104).png)

### **Step 2. (Optional) Create Custom Roles**

  If you want to create a custom role for `SpaceONE App`, rather than using Azure built-in reader role, create a custom role using the following JSON file:
  ```
    {
      "properties": {
          "roleName": "Spaceone_reader_role",
          "description": "View all resources, but does not allow you to make any changes.",
          "assignableScopes": [
              "/subscriptions/CHANGE_HERE_TO_YOUR_SUBSCRIPTION_ID (or the scope you want)" 
          ],
          "permissions": [
              {
                  "actions": [
                      "*/read"
                  ],
                  "notActions": [],
                  "dataActions": [],
                  "notDataActions": []
              }
          ]
      }
    }
  ```

### **STEP 3. Add Access Control (IAM)**
Click `Access control (IAM)` from the Navigation tab, and then select the `+Add` button.
![](/docs/guides/service_account/service_account_img/azure/image(102).png)

### **STEP 4: Assign `Reader role` or `created custom role`**
Assign the **Reader Role** or **Created custom role** to the _SpaceONE_ App. The app will have read-only access permission in this subscription or resource group.
![](/docs/guides/service_account/service_account_img/azure/image(103).png)

<br>

## Troubleshooting
If you face error messages when following the steps above, please follow this TroubleShooting Guide.

### Authorization

#### **1.** \(AuthorizationFailed\) Client does not have authorization 

{{% alert title="" %}}
The client \(`client_id`\) with object id \(`object_id`\) does not have authorization to perform action 'Microsoft.Resources/subscriptions/resourcegroups/read' over scope \(`subscription_id`\), or the scope is invalid. If access was recently granted, please try refreshing your credentials.
{{% /alert %}}

### **STEP 1: Log in to the Azure Portal and move to Subscriptions**
![](/docs/guides/service_account/service_account_img/azure/screen-shot-2021-04-15-at-18.55.14.png)

### **STEP 2: Click on the subscription Name where the resources are located.**
![](/docs/guides/service_account/service_account_img/azure/image(114).png)

### **STEP 3: Click the `+Add role assignment` button.**
![](/docs/guides/service_account/service_account_img/azure/image-2-.png)

### **STEP 4: Add role assignments**
Add the Role Assignments like the following description and image.

* **Role**
  * `Reader`
* **Assign access to**
  * `User, group, or service principal`
* **Select**
  * `App that has registered on Active directory` at **Azure ActiveDirectory > Registered App**

![](/docs/guides/service_account/service_account_img/azure/image-azure-subscription.png)

{{% alert title="Note" %}}
  'Service Account names' and 'Registered App names' are easily confused.   
  Please, Select Registered App as shown below \(Check the Icon Differences\).  
{{% /alert %}}

![](/docs/guides/service_account/service_account_img/azure/screen-shot-2021-04-16-at-12.38.16.png)

