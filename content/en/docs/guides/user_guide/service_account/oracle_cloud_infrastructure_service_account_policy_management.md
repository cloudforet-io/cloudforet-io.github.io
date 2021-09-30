---
title: "(Oracle Cloud Infrastructure) Identity and Access Management(IAM) Policy Management"
linkTitle: "(Oracle Cloud Infrastructure) Identity and Access Management(IAM) Policy Management"
weight: 13
url_dash_board: "" 
date: 2021-06-10
description: >
    Details of API Security policy to use SpaceONE plugin
---

## IAM Policy
**SpaceONE** highly recommends to set appropriate permissions to access your _**cloud resources**_ for each purpose.<br> 
Please, Set service account,  To Create API for each use case

* [General Collector](#general-collector)

## General Collector
Collector requires appropriate authorities to collect cloud resources. We strongly recommend to limit collector's service account its permission to **read only access**.<br>
Otherwise, you can add more restrictions per resources or actions. One of the useful example is to restrict its rights within region.

### **STEP 1. Log in Oracle Cloud Infrastructure Console &gt; Identity**
Go to Identity &gt; Users and Click   `CREATE USER`
![](/docs/guides/user_guide/service_account/service_account_img/oracle/create_user_button.png)

### **STEP 2. Set IAM User details**
Click  `IAM User`and Enter  _**User name**_ and _**Description**_ <br>
![](/docs/guides/user_guide/service_account/service_account_img/oracle/create_iam_user.png)

### **STEP 3. Set API Keys to IAM User**
Go to Identity &gt; Users &gt; User &gt; Details &gt; API Keys. Click  `Add API Key`  and add or Generate API Key.<br>
![](/docs/guides/user_guide/service_account/service_account_img/oracle/add_or_generate_api_key.png)


### **STEP 4. Create Group for IAM User** 
Go to Identity &gt; Groups and Click   `Create Group` Button. Enter _**Name**_ and _**Description**_.
![](/docs/guides/user_guide/service_account/service_account_img/oracle/create_group.png)

### **STEP 5. Add IAM User to Group**
Go to Group that you made and Click  `Add User to Group`  Button and add IAM User. <br>
![](/docs/guides/user_guide/service_account/service_account_img/oracle/add_user_to_group.png)

### **STEP 6. Set Policies to Group**
Go to Identity &gt; Policies and Click  `Create Policy` Button.<br>
![](/docs/guides/user_guide/service_account/service_account_img/oracle/move_to_policies.png)

{{% pageinfo color=“300” %}}
Enter _**Name**_ and _**Description**_ and _**Policies**_ by manually. 

Entering statements directly in the text box, ensure that you follow the [Policy Syntax](https://docs.oracle.com/en-us/iaas/Content/Identity/Concepts/policysyntax.htm#Policy_Syntax) rules.

When using General Collector, the **following two policies are required**:
{{% /pageinfo %}}

```text
Allow group {group_name} to inspect compartments in tenancy
Allow group {group_name} to inspect tenancies in tenancy
```

![](/docs/guides/user_guide/service_account/service_account_img/oracle/create_policies.png)