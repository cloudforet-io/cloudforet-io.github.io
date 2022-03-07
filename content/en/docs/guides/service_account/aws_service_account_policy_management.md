---
title: "(AWS) Service Account Policy Management"
linkTitle: "(AWS) Service Account Policy Management"
weight: 10
url_dash_board: "" 
date: 2021-06-10
description: >
    Details of API Security policy to use SpaceONE plugin
---

## Service Account Policy
Before creating a **Service Account**, you can modify your existing API policies.<br>
This will guarantee that your resources are isolated from other non power-scheduled items. It can also prevent malfunctions caused by misconfigurations of power scheduling.<br>
To create API for each use case, follow directions below.

| Collector Plugin                                  | Policy Setting Guide                                                                                 |
|:--------------------------------------------------|:-----------------------------------------------------------------------------------------------------|
| aws-cloud-services/aws-ec2                        | [General Collector](#general-collector)                                                              |
| aws-trusted-advisor/aws-personal-health-dashboard | [Personal Health Dashboard/Trusted Advisor Collector](#aws-personal-health-dashboardtrusted-advisor) |

<br>


## General Collector
Collectors do not require any types of permissions, except for the read permission. So we strongly recommend you to restrict permissions to **read-only access**.<br> 
Or, you can add more restrictions based on regions and resources. One of the useful examples is to restrict permissions within regions.<br>
In order to experience more powerful functions of SpaceONE collectors, we highly recommend using managed **read-only policies**.

### Step 1
Log into AWS Console &gt; IAM** <br>
Go to IAM &gt; Users &gt; Add user.
![](/docs/guides/service_account/service_account_img/aws/aws_service_account_policy_iam_add_user.png)

### Step 2. Set User Details**
Enter _**User name**_, and set _**Access type**_ to _**Programmatic access**_.
![](/docs/guides/service_account/service_account_img/aws/aws_service_account_set_user_details.png)

### Step 3. Set API Permission
Click _**Attach existing policies directly**_, and enter "_**readonly**_" in the policy search bar.<br>
Select _**ReadOnlyAccess**_ managed policy as shown below.
![](/docs/guides/service_account/service_account_img/aws/aws_service_account_set_permissions.png)

### Step 4. Add Tags
_**You can skip this process**_ and move to the next step.<br> 
SpaceONE collectors are not related to tags in IAM. 
![](/docs/guides/service_account/service_account_img/aws/aws_service_account_iam_add_tag.png)

### Step 5. Review
Check the details you have added. Then click _**Create users**_ at the bottom of the page.
![](/docs/guides/service_account/service_account_img/aws/aws_service_account_iam_review.png)

### Step 6. Copy Key Pair
After the IAM key pair is created, _**make sure to copy the Access key ID/Secret access key and keep them safely**_. <br>
If you forget to copy them, there is no way to have them again \(you have to start over from step 1\).
![](/docs/guides/service_account/service_account_img/aws/aws_service_account_iam_add_user_copy_keypair.png)


## AWS Personal Health Dashboard/Trusted Advisor
To use AWS advanced collectors such as AWS _**Personal Health Dashboard/Trusted Advisor**_, the user account support level should be above _**business**_ and additional IAM policies need to be attached.
### Step 1. Create Policy
Go to IAM &gt; Policies &gt; Create policy.
![](/docs/guides/service_account/service_account_img/aws/aws_img_14.png)

### Step 2. Attach Policy Definitions
Move to the JSON tab, and attach the policy definition as shown below. Then click _**Review policy**_.
![](/docs/guides/service_account/service_account_img/aws/2021-02-09-6.44.48.png)

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "support:DescribeAttachment",
                "support:DescribeCaseAttributes",
                "support:DescribeCases",
                "support:DescribeCommunications",
                "support:DescribeIssueTypes",
                "support:DescribeServices",
                "support:DescribeSeverityLevels",
                "support:DescribeSupportLevel",
                "support:DescribeTrustedAdvisorCheckRefreshStatuses",
                "support:DescribeTrustedAdvisorCheckResult",
                "support:DescribeTrustedAdvisorChecks",
                "support:DescribeTrustedAdvisorCheckSummaries",
                "support:SearchForCases"
            ],
            "Resource": "*"
        }
    ]
}
```
### Step 3. Review Policy
Enter policy _**Name**_ and _**Description**_. Then click _**Create policy**_.
![](/docs/guides/service_account/service_account_img/aws/2021-02-09-6.46.08.png)
 
### Step 4. Log into AWS Console &gt; IAM
Go to IAM &gt; Users &gt; Add user.
![](/docs/guides/service_account/service_account_img/aws/aws_service_account_policy_iam_add_user.png)

### Step 5. Set User Details
Enter _**User name**_, set _**Access type**_ to _**Programmatic access**_.
![](/docs/guides/service_account/service_account_img/aws/aws_service_account_set_user_details.png)

### Step 6. Set API Permission
Add all policies below. They should be included to guarantee successful actions.
![](/docs/guides/service_account/service_account_img/aws/aws_service_account_phd_set_api_permission.png)

### Step 7. Review
Make sure to include all policies from Step 4. Then click _**Create user**_.
![](/docs/guides/service_account/service_account_img/aws/aws_service_account_powerscheduler_review.png)

### Step 8. Copy Key Pair
After the IAM key pair is created, _**make sure to copy the Access key ID/Secret access key and keep them safely**_. <br>
If you forget to copy them, there is no way to have them again \(you have to start over from step 1\).
![](/docs/guides/service_account/service_account_img/aws/aws_service_account_iam_add_user_copy_keypair.png)






