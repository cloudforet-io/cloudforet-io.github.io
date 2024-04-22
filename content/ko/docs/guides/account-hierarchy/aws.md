---
weight: 1
description: |
  AWS Control Tower 계정 연동 가이드
title: "\bAWS 계정 자동 동기화"
---

SpaceONE(Cloudforet)이 제공하는 Account Auto Sync를 통해 **AWS Control Tower**를 기준으로 하위에 존재하는 관리 그룹의 계층을 SpaceONE에 동기화 할 수 있습니다.

<br> <br>

## 계층 구조 동기화

SpaceONE의 Trusted Service Account를 통해 AWS의 Account 계층 구조를 자동으로 동기화할 수 있습니다.

각각의 구독을 기준으로 계층을 파악하여 동기화 되며 SpaceONE의 워크스페이스, 프로젝트 그룹, 프로젝트 그리고 서비스어카운트로 동기화가 이루어 집니다.

 <br>

**\[자동 동기화 기준]**

| AWS                               | SpaceONE(Cloudforet)        |
| --------------------------------- | --------------------------- |
| Root                              | Workspace                   |
| 최상위 OUs(Organization Units)       | Workspaces, Project Groups  |
| 하위 OUs(Nested Organization Units) | Project Groups              |
| Resources, Member accounts        | Project and Service Account |

<br>

**\[AWS 계층 구조 참고]**

![](/guides/service_account/aws-account.png)

<br> <br>

## 권한 부여

**1) AWS Cloudformation을 이용하여 SpaceONE 전용 Role 생성하기**

* Sync 작업을 진행하기 전 먼저 SpaceONE이 이용할 수 있는 IAM Role를 하위 member account별로 생성합니다.
* Role 자동생성을 위해 Management Account에 CloudFormation StackSet를 생성합니다.

{{<alert title="AWS CloudFormation StackSet 생성 전 Checklist">}}

* 생성하려는 account가 AWS Control Tower의 Root Account, 즉 Management Account인지 확인합니다.
* CloudFormation StackSet에 대한 최소한의 권한(Read & Write)을 가진 User인지 확인합니다.
  {{</alert>}}

**\[AWS CloudFormation StackSet을 생성하는 과정]**

* Template 선택: Stack Resource와 구성을 정의하는 CloudFormation 템플릿을 준비합니다.

![](/guides/service_account/aws-cloudformation-ko.png)

* 위 화면을 참조하여,
  * 권한은 “서비스 관리형 권한”
  * 템플릿 준비는 “준비된 템플릿”
  * 템플릿 지정은 “S3 URL”
    * S3 URL: [https://spaceone-public.s3.ap-northeast-2.amazonaws.com/assets/create\_spaceone\_role.json](https://spaceone-public.s3.ap-northeast-2.amazonaws.com/assets/create_spaceone_role.json)

<br>

* StackSet 세부 정보 지정: StackSet의 이름, 설명, 필요한 파라미터를 입력합니다.

![](/guides/service_account/aws-stackset-01-ko.png)

<br>

* StackSet 옵션 구성: StackSet의 실행방식 등을 구성합니다.

![](/guides/service_account/aws-stackset-02-ko.png)

* 위의 화면을 참조하여
  * 태그는 Optional인 관계로 기호에 따라 추가해줍니다.
  * 실행 구성은 “비활성” 으로 선택합니다.

<br>

* 배포 옵션 설정: StackSet을 적용할 대상 및 자동 배포 유무 등을 설정합니다.

![](/guides/service_account/aws-stackset-03-ko.png)
![](/guides/service_account/aws-stackset-04-ko.png)
![](/guides/service_account/aws-stackset-05-ko.png)

* 위의 화면들을 참조하여,
  * 스택 세트에 스택 추가는 “새 스택 배포”를 선택
  * 배포 대상은 “OU(조직 단위)에 배포” 선택
    * AWS OU ID는 AWS Control Tower의 Management Account의 root id를 입력합니다.
    * 계정 필터 유형은 “차집합” 선택
    * 계정 번호는 role 생성을 제외시킬 Security OU에 있는 Audit 과 Log Archive Account의 ”Account ID”를 입력합니다.
      * Ex. 386390908341, 942155983773
      * Audit과 Log Archive에 Role 생성을 하지 않을 뿐, Account Sync하는 과정에서 빠지진 않습니다.
  * 자동 배포 옵션은
    * 자동 배포 “활성화됨”
    * 계정 제거 동작은 “스택 삭제”
  * 리전 지정은 해당 Control Tower가 있는 리전을 지정합니다. (보통은 “아시아 태평양(서울)”)
  * 배포 옵션은 따로 변경하는 것 없이 진행합니다.

<br>

**2) Management Account에 IAM User 생성하기**

SpaceONE Console에 등록하려는 AWS account의 User는 아래의 permissions를 가져야 합니다.

(아래의 예시는 spaceone-test라는 이름의 User입니다.)

![](/guides/service_account/aws-iam-01-ko.png)![](/guides/service_account/aws-iam-02-ko.png)

* ReadOnlyAccess(AWS Managed Policy)
* sts.AssumeRole Policy
  * 위 사진의 SpaceONEAssumeRolePolicy와 같이 사전에 Cloudformation StackSet으로 생성한 role에 대해 assume role권한을 허용하는 policy가 필요합니다.
  * (YOUR\_SPACEONE\_ROLE\_NAME = IAM Role 생성에서 만든 Role Name을 넣어주세요.)

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "sts:AssumeRole"
            ],
            "Resource": [
                "arn:aws:iam::*:role/YOUR_SPACEONE_ROLE_NAME"
            ]
        }
    ]
}
```

<br> <br>

## 자동화 결과

SpaceONE의 Account Auto Sync 기능은 Trusted Account **Scope**에 따라 다르게 적용됩니다.

<br> 

### ✔️ Domain Scope의 Trusted Account (Admin Mode에서 생성 가능)

Domain에서 생성된 Trusted Account의 경우, 아래 두 가지로 설정이 가능합니다.

방법1) Organization이 SpaceONE의 단일 Workspace가 되어 하위의 전체 프로젝트 및 계정 동기화가 적용될 수 있습니다.

| AWS                        | SpaceONE(Cloudforet)        |
| -------------------------- | --------------------------- |
| Root                       | Workspace                   |
| OUs(Organization Units)    | Project Groups              |
| Resources, Member accounts | Project and Service Account |

방법 2) 최상위 OUs(Organization Units)를 다중의 Workspace로 동기화할 수 있습니다. 이는 좀 더 관리 체계를 조직 단위로 구성함으로써 성능 및 관리에 최적화할 수 있습니다.

| AWS                               | SpaceONE(Cloudforet)        |
| --------------------------------- | --------------------------- |
| 최상위 OUs(Organization Units)       | Workspaces                  |
| 하위 OUs(Nested Organization Units) | Project Groups              |
| Resources, Member accounts        | Project and Service Account |

{{<alert>}}
Admin Mode에서 Trusted Account 생성 관련 세부 내용은 [이 곳](/ko/docs/guides/admin-mode/service-account/)을 참고하십시오.
{{</alert>}}

<br> 

### ✔️ Workspace Scope의 Trusted Account

Workspace에서 생성된 Trusted Account의 경우 Workspace 하위에 동기화가 적용됩니다.

| AWS                        | SpaceONE(Cloudforet)        |
| -------------------------- | --------------------------- |
| OUs(Organization Units)    | Project Groups              |
| Resources, Member accounts | Project and Service Account |
