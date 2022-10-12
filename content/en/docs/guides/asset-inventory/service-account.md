---
title: "Service account"
linkTitle: "Service account"
weight: 5
date: 2022-10-12
description: >
    In the **Service account** page, you can easily integrate, manage, and track your accounts of each cloud service.
---

## Add service account

There are two types of service accounts for different needs and better security.	

{{<alert>}}
- __`General Account`__ :
    
  - Option 1) You can create account with its own credentials.	
    
  - Option 2) Create account using credentials from an existing `Trusted Account`.	
    
  - Option 3) You can also create account without credentials.	
    
- __`Trusted Account`__:
    
  - You can create an account that enables trusted access,
  
  - then other general accounts can refer to its credential key by attaching it.
{{</alert>}}


### Create General Account 

(1) On the [Asset inventory > Service account] page, select the cloud service you want to add.

![service-account-provider-menu](/docs/guides/getting-started/service-account-img/service-account-provider-menu-2.png)

(2) Click the [Add] button.

![service-account-add-button](/docs/guides/getting-started/service-account-img/service-account-add-button.png)

(3) Fill out the service account creation form.

(3-1) Select `General Account`.	

![service-account-select-general-accout](/docs/guides/asset-inventory/service-account-img/service-account-select-general-accout.png)

(3-2) Enter basic information.

![service-account-add-base-info](/docs/guides/getting-started/service-account-img/service-account-add-base-info.png)

(3-3) Specify the project to collect resources from according to the service account.

![service-account-connect-project](/docs/guides/getting-started/service-account-img/service-account-connect-project.png)

(3-4) Enter encryption key information.

- Option 1) You can create account with its own credentials.	
![service-account-add-key](/docs/guides/getting-started/service-account-img/service-account-add-key-1-1.png)
    
- Option 2) Create account using credentials from an existing `Trusted Account`.	
 - In the case of AWS, you can easily create Assume Role by attaching an exisiting `Trusted Account`. If you select a certain `Trusted Account`, its credential key will automatically get inserted, then you will only need to enter the rest of information.	
![service-account-add-key](/docs/guides/getting-started/service-account-img/service-account-add-key-1-2.png)
    
- Option 3) You can also create account without credentials.	
![service-account-add-key](/docs/guides/getting-started/service-account-img/service-account-add-key-1-3.png)


(4) Click the [Save] button to complete.



### Create Trusted Account 

(1) On the [Asset inventory > Service account] page, select the cloud service you want to add.

![service-account-provider-menu](/docs/guides/getting-started/service-account-img/service-account-provider-menu.png)

(2) Click the [Add] button.

![service-account-add-button](/docs/guides/getting-started/service-account-img/service-account-add-button.png)

(3) Fill out the service account creation form.

(3-1) Select `Trusted Account`.	

![service-account-select-trusted-accout](/docs/guides/asset-inventory/service-account-img/service-account-select-trusted-accout.png)

(3-2) Enter basic information.

![service-account-add-base-info-2-2](/docs/guides/getting-started/service-account-img/service-account-add-base-info-2-2.png)

(3-3) Specify the project to collect resources from according to the service account.

![service-account-connect-project](/docs/guides/getting-started/service-account-img/service-account-connect-project.png)

(3-4) Enter encryption key information.

![service-account-add-key-2-2](/docs/guides/getting-started/service-account-img/service-account-add-key-2-2.png)

(4) Click the [Save] button to complete.



## Viewing service account	

You can view a list of service accounts that have been added, and when you click a certain account, you can check the detailed information.	

![service-account-view-list](/docs/guides/asset-inventory/service-account-img/service-account-view-list.png)



## Editing service account		

Select a service account you want to edit from the list.	

![service-account-detail-page](/docs/guides/asset-inventory/service-account-img/service-account-detail-page.png)


### Editing each part

You can edit each part of detail information by clicking [Edit] button.

![service-account-edit-btn](/docs/guides/asset-inventory/service-account-img/service-account-edit-btn.png)
![service-account-edit](/docs/guides/asset-inventory/service-account-img/service-account-edit.png)



## Removing service account	

Select a service account you want to remove from the list.

You can delete it by clicking the delete icon button.

![service-account-delete-btn](/docs/guides/asset-inventory/service-account-img/service-account-delete-btn.png)

If the service account is `Trusted Account` type and currently attached to more than one `General Account`, it can't be removed.	

![service-account-cannot-delete](/docs/guides/asset-inventory/service-account-img/service-account-cannot-delete.png)
