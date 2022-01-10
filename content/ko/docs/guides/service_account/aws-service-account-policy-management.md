---
title: "(AWS) Service Account Policy Management"
linkTitle: "(AWS) Service Account Policy Management"
weight: 10
url_dash_board: "" 
date: 2021-06-10
description: >
    Details of API Security policy to use SpaceONE plugin
---



# \(AWS\) Service Account Policy Management

## Service Account Policy

Before creating a **Service Account**, you can modify your existing API policies.

This will guarantee that your resources are isolated from other non power-scheduled items. It can also prevent malfunctions caused by misconfigurations of power scheduling.

To create API for each use case, follow directions below.

* [General Collector](#general-collector)
* [Power Scheduler Service](#powerscheduler)
* [Personal Health Dashboard/Trusted Advisor Collector](#aws-personal-health-dashboardtrusted-advisor)




In case of internal regulations, create the policy below and attach it when creating an API user. 

* [Overall IAM Policy Superset](#overall-iam-policy-superset)

## General Collector 

Collectors do not require any types of permissions, except for the read permission. So we strongly recommend you to restrict permissions to **read-only access**. 

Or, you can add more restrictions based on regions and resources. One of the useful examples is to restrict permissions within regions.

In order to experience more powerful functions of SpaceONE collectors, we highly recommend using managed **read-only policies**. 


{{% pageinfo color=“300” %}}
**Step 1. Log into AWS Console &gt; IAM** 

Go to IAM &gt; Users &gt; Add user.
{{% /pageinfo %}}
![](/ko/docs/guides/service_account/service_account_img/aws/aws_service_account_policy_iam_add_user.png)

---
{{% pageinfo color=“300” %}}
**Step 2. Set User Details**

Enter _**User name**_, and set _**Access type**_ to _**Programmatic access**_.
{{% /pageinfo %}}
![](/ko/docs/guides/service_account/service_account_img/aws/aws_service_account_set_user_details.png)


{{% pageinfo color=“300” %}}
**Step 3. Set API Permission**

Click _**Attach existing policies directly**_, and enter "_**readonly**_" in the policy search bar.

Select _**ReadOnlyAccess**_ managed policy as shown below.
{{% /pageinfo %}}
![](/ko/docs/guides/service_account/service_account_img/aws/aws_service_account_set_permissions.png)

---
{{% pageinfo color=“300” %}}
**Step 4. Add Tags**

_**You can skip this process**_ and move to the next step. 

SpaceONE collectors are not related to tags in IAM. 
{{% /pageinfo %}}
![](/ko/docs/guides/service_account/service_account_img/aws/aws_service_account_iam_add_tag.png)




{{% pageinfo color=“300” %}}
_**Step 5. Review**_

Check the details you have added. Then click _**Create users**_ at the bottom of the page.
{{% /pageinfo %}}
![](/ko/docs/guides/service_account/service_account_img/aws/aws_service_account_iam_review.png)
{{% pageinfo color=“300” %}}
_**Step 6. Copy Key Pair**_

After the IAM key pair is created, _**make sure to copy the Access key ID/Secret access key and keep them safely**_.

If you forget to copy them, there is no way to have them again \(you have to start over from step 1\).
{{% /pageinfo %}}
![](/ko/docs/guides/service_account/service_account_img/aws/aws_service_account_iam_add_user_copy_keypair.png)





## PowerScheduler

Suggested IAM policices for each cloud provider to use _**SpaceONE Power Scheduler**_ service are described below.


{{% pageinfo color=“300” %}}
**Step 1. Create Policy**

Go to IAM &gt; Policies &gt; Create policy.
{{% /pageinfo %}}
![](/ko/docs/guides/service_account/service_account_img/aws/aws_service_account_iam_power_scheduler_create_policy.png)

---
{{% pageinfo color=“300” %}}
**Step 2. Attach Policy Definitions**

Move to the JSON tab, and attach the policy definition as shown below. Then click _**Review policy**_.
{{% /pageinfo %}}
{{<tabpane>}}
{{<tab header="AWS">}}
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "rds:StartDBCluster",
                "rds:StopDBCluster",
                "rds:StartDBInstance",
                "rds:StopDBInstance",
                "rds:RebootDBInstance",
                "ec2:StartInstances",
                "ec2:StopInstances",
                "ec2:RebootInstances",
                "autoscaling:SetDesiredCapacity",
                "autoscaling:UpdateAutoScalingGroup"
            ],
            "Resource": "*"
        }
    ]
}
{{</tab>}}
{{</tabpane>}}


{{% pageinfo color=“300” %}}
**Step 3. Review Policy** 

Enter policy _**Name**_ and _**Description**_. Then click _**Create policy**_.
{{% /pageinfo %}}
![](/ko/docs/guides/service_account/service_account_img/aws/aws_service_account_powerscheduler_review_policy.png)
{{% pageinfo color=“300” %}}
**Step 4. Log into AWS Console &gt; IAM** 

Go to IAM &gt; Users &gt; Add user.
{{% /pageinfo %}}
![](/ko/docs/guides/service_account/service_account_img/aws/aws_service_account_policy_iam_add_user.png)


{{% pageinfo color=“300” %}}
**Step 5. Set User Details** 

Enter _**User name**_, and set _**Access type**_ to _**Programmatic access**_.
{{% /pageinfo %}}
![](/ko/docs/guides/service_account/service_account_img/aws/aws_service_account_set_user_details.png)

---
{{% pageinfo color=“300” %}}
**Step 6. Set API Permission**

 Add all policies below. They should be included to guarantee successful actions.

* AmazonDynamoDBReadOnlyAccess 
* AmazonEC2ReadOnlyAccess 
* AmazonRDSReadOnlyAccess 
* AutoScalingReadOnlyAccess
* **Policy created in step 3**
{{% /pageinfo %}}
![](/ko/docs/guides/service_account/service_account_img/aws/aws_service_account_powerscheduler_set_api_permission.png)


{{% pageinfo color=“300” %}}
**Step 7. Review**

Make sure to include all policies from Step 4. Then click _**Create user**_.
{{% /pageinfo %}}
![](/ko/docs/guides/service_account/service_account_img/aws/aws_service_account_powerscheduler_review.png)


{{% pageinfo color=“300” %}}
_**Step 8. Copy Key Pair**_

After the IAM key pair is created, _**make sure to copy the Access key ID/Secret access key and keep them safely**_.

If you forget to copy them, there is no way to have them again \(you have to start over from step 1\).
{{% /pageinfo %}}
![](/ko/docs/guides/service_account/service_account_img/aws/aws_service_account_iam_add_user_copy_keypair.png)







## AWS Personal Health Dashboard/Trusted Advisor

To use AWS advanced collectors such as AWS _**Personal Health Dashboard/Trusted Advisor**_, the user account support level should be above _**business**_ and additional IAM policies need to be attached.


{{% pageinfo color=“300” %}}
**Step 1. Create Policy**

Go to IAM &gt; Policies &gt; Create policy.
{{% /pageinfo %}}
![](/ko/docs/guides/service_account/service_account_img/aws/aws_img_14.png)

---
{{% pageinfo color=“300” %}}
**Step 2. Attach Policy Definitions**

Move to the JSON tab, and attach the policy definition as shown below. Then click _**Review policy**_.
{{% /pageinfo %}}
![](/ko/docs/guides/service_account/service_account_img/aws/2021-02-09-6.44.48.png)

```text
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
{{% pageinfo color=“300” %}}
**Step 3. Review Policy**

Enter policy _**Name**_ and _**Description**_. Then click _**Create policy**_.
{{% /pageinfo %}}
![](/ko/docs/guides/service_account/service_account_img/aws/2021-02-09-6.46.08.png)

 
{{% pageinfo color=“300” %}}
**Step 4. Log into AWS Console &gt; IAM** 

Go to IAM &gt; Users &gt; Add user.
{{% /pageinfo %}}
![](/ko/docs/guides/service_account/service_account_img/aws/aws_service_account_policy_iam_add_user.png)


{{% pageinfo color=“300” %}}
**Step 5. Set User Details** 

Enter _**User name**_, set _**Access type**_ to _**Programmatic access**_.
{{% /pageinfo %}}
![](/ko/docs/guides/service_account/service_account_img/aws/aws_service_account_set_user_details.png)

---
{{% pageinfo color=“300” %}}
**Step 6. Set API Permission**

 Add all policies below. They should be included to guarantee successful actions.
{{% /pageinfo %}}
![](/ko/docs/guides/service_account/service_account_img/aws/aws_service_account_phd_set_api_permission.png)

---
{{% pageinfo color=“300” %}}
**Step 7. Review**

Make sure to include all policies from Step 4. Then click _**Create user**_.
{{% /pageinfo %}}
![](/ko/docs/guides/service_account/service_account_img/aws/aws_service_account_powerscheduler_review.png)


{{% pageinfo color=“300” %}}
_**Step 8. Copy Key Pair**_

After the IAM key pair is created, _**make sure to copy the Access key ID/Secret access key and keep them safely**_.

If you forget to copy them, there is no way to have them again \(you have to start over from step 1\).
{{% /pageinfo %}}
![](/ko/docs/guides/service_account/service_account_img/aws/aws_service_account_iam_add_user_copy_keypair.png)

