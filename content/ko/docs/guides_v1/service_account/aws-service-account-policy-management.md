---
title: "(AWS) Service Account Policy Management"
linkTitle: "(AWS) Service Account Policy Management"
weight: 10
url_dash_board: "" 
date: 2021-06-10
description: >
    SpaceONE의 inventory 플러그인에 적용하기 위한 AWS IAM 정책을 안내 합니다.
---


## Service Account Policy

SpaceONE의 Inventory Collector Plugin이 정상적으로 동작하기 위한 IAM Account 설정 방안은 아래와 같습니다.

각 Collector별로 아래와 아래와 같이 설정 할 수 있습니다.

| Collector Plugin                                  | Policy Setting Guide                                                                                 |
|:--------------------------------------------------|:-----------------------------------------------------------------------------------------------------|
| aws-cloud-services/aws-ec2                        | [General Collector](#general-collector)                                                              |
| aws-trusted-advisor/aws-personal-health-dashboard | [Personal Health Dashboard/Trusted Advisor Collector](#aws-personal-health-dashboardtrusted-advisor) |

<br>

---
## General Collector 

Inventory Collector 서비스는 읽기 권한 이외의 어떠한 권한도 필요하지 않습니다. 그래서, 모든 API Policy를 **읽기 전용** 으로 제한할 것을 강력하게 권고 합니다.  

또는, 권한을 Region 혹은 리소스 별로 제한할 수도 있습니다. 

SpaceONE collector 서비스의 모든 기능을 활용하기 위해서는, AWS의 **ReadOnly Access** 정책을 활용하는 것을 권장 합니다. 

아래는 AWS Console을 통한 IAM Account 설정 방안 입니다. 

{{% pageinfo color=“300” %}}
**Step 1. AWS Console에 로그인 &gt; IAM**

IAM &gt; Users &gt; Add user 메뉴로 이동 합니다.
{{% /pageinfo %}}
![](/ko/docs/guides_v1/service_account/service_account_img/aws/aws_service_account_policy_iam_add_user.png)


{{% pageinfo color=“300” %}}
**Step 2. User 정보 입력**

_**User name**_ 을 입력 후 _**Access type**_ 을 _**Programmatic access**_ 로 선택 합니다.
{{% /pageinfo %}}
![](/ko/docs/guides_v1/service_account/service_account_img/aws/aws_service_account_set_user_details.png)


{{% pageinfo color=“300” %}}
**Step 3. API 정책을 설정**

_**Attach existing policies directly**_ 을 선택 후 검색창에 "_**readonly**_"를 입력 합니다.
아래와 같이 _**AWS managed**_ 타입의 _**ReadOnlyAccess**_를 클릭
{{% /pageinfo %}}
![](/ko/docs/guides_v1/service_account/service_account_img/aws/aws_service_account_set_permissions.png)


{{% pageinfo color=“300” %}}
**Step 4. Tags 추가**

별도 Tag기반 관리 방침이 없는 경우 _**skip 후 다음 step으로 이동 가능**_.
SpaceONE collector 서비스는 tag정보를 사용하지 않습니다.  
{{% /pageinfo %}}
![](/ko/docs/guides_v1/service_account/service_account_img/aws/aws_service_account_iam_add_tag.png)

{{% pageinfo color=“300” %}}
_**Step 5. Review**_

설정내역을 확인 한 후, 우측 하단의 _**Create users**_ 버튼을 클릭 합니다.
{{% /pageinfo %}}
![](/ko/docs/guides_v1/service_account/service_account_img/aws/aws_service_account_iam_review.png)
{{% pageinfo color=“300” %}}

_**Step 6. Copy Key Pair**_

IAM key pair를 생성한 후 _**Access key ID/Secret access key**_ 잘 저장하여 Service Account입력시 사용 합니다.
{{% /pageinfo %}}
![](/ko/docs/guides_v1/service_account/service_account_img/aws/aws_service_account_iam_add_user_copy_keypair.png)


<br>

---
## AWS Personal Health Dashboard/Trusted Advisor

AWS _**Personal Health Dashboard/Trusted Advisor**_ 와 같은 Collector를 사용하기 위해서는 AWS 계정의 Support Level이 _**business**_ 이상 되어야 합니다. 

아래는 Collector를 위한 IAM User 정책 설정방법 입니다. 

{{% pageinfo color=“300” %}}
**Step 1. Policy 메뉴로 이동**

IAM &gt; Policies &gt; Create policy 로 이동 합니다.
{{% /pageinfo %}}
![](/ko/docs/guides_v1/service_account/service_account_img/aws/aws_img_14.png)

---
{{% pageinfo color=“300” %}}
**Step 2. Policy 생성**

Json tab으로 이동 후 아래의 Policy 정책 파일을 붙여 넣은 후 _**Review policy**_ 를 클릭 합니다.
{{% /pageinfo %}}
![](/ko/docs/guides_v1/service_account/service_account_img/aws/2021-02-09-6.44.48.png)

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
{{% pageinfo color=“300” %}}
**Step 3. Policy 리뷰**

Policy _**Name**_ 과 _**Description**_ 을 입력 후. _**Create policy**_ 를 클릭 합니다.
{{% /pageinfo %}}
![](/ko/docs/guides_v1/service_account/service_account_img/aws/2021-02-09-6.46.08.png)

 
{{% pageinfo color=“300” %}}
**Step 4. AWS Console 로그인 후 &gt; IAM 으로 이동** 

IAM &gt; Users &gt; 로 이동 후 Add user 클릭 합니다.
{{% /pageinfo %}}
![](/ko/docs/guides_v1/service_account/service_account_img/aws/aws_service_account_policy_iam_add_user.png)


{{% pageinfo color=“300” %}}
**Step 5. User Details 입력** 

_**User name**_ 을 입력 후 _**Access type**_ 을 _**Programmatic access**_ 로 선택 합니다.
{{% /pageinfo %}}
![](/ko/docs/guides_v1/service_account/service_account_img/aws/aws_service_account_set_user_details.png)


{{% pageinfo color=“300” %}}
**Step 6. API Permission 설정**

모든 정책을 아래와 같이 추가 후 Add User를 클릭 합니다. 
{{% /pageinfo %}}
![](/ko/docs/guides_v1/service_account/service_account_img/aws/aws_service_account_phd_set_api_permission.png)


{{% pageinfo color=“300” %}}
**Step 7. Review**

위의 입력한 모든 정보가 맞는지 확인 후 _**Create user**_ 를 클릭 합니다.
{{% /pageinfo %}}
![](/ko/docs/guides_v1/service_account/service_account_img/aws/aws_service_account_powerscheduler_review.png)


{{% pageinfo color=“300” %}}
_**Step 8. Copy Key Pair**_

IAM key pair가 생성된 후, 생성된 _**Access key ID/Secret access key**_ 를 별도로 복사하여 안전하게 관리 해야 합니다. 
생성된 KeyPair는 Service Account에 입력할 수 있습니다.
{{% /pageinfo %}}
![](/ko/docs/guides_v1/service_account/service_account_img/aws/aws_service_account_iam_add_user_copy_keypair.png)

