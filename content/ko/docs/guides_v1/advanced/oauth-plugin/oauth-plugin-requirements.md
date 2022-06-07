---
title: "oAuth Plugin Requirements"
linkTitle: "oAuth Plugin Requirements"
weight: 2
date: 2021-07-31
description: >
  google oAuth 플러그인을 사용하여 사용자 인증 연동을 하기 위한 가이드 입니다. 
---


## Overall Process

**Google Workspace**를 사용중인 회사에서는, `SpaceONE의 OAuth 플러그인`을 통해 사용자의 로그인 process를 간소화 할 수 있습니다. `SpaceONE의 OAuth 플러그인`을 경험하기 위해, 아래 사항을 준비해야 합니다. 
* [Create OAuth Client ID](#create-oauth-client-id)
* [Domain Verification](#domain-verification)

## Create OAuth Client ID

SpaceONE은 플러그인 연결을 위해 OAuth Client ID를 필요로 합니다. 이를 위해, **OAuth Client ID**를 생성하고, **JavaScript Origin** 과 **Redirect URL**를 구글 클라우드 콘솔 내에서 추가 해야 합니다. 

{{% pageinfo color=“300” %}}
**STEP 1: Google Cloud Console &gt; API 로 이동합니다.**.

Go to **Credentials** and click the **`+CREATE CREDENTIALS`** button.
**Credentials** 로 이동하여 **`+CREATE CREDENTIALS`** 버튼을 클릭 합니다.
{{% /pageinfo %}}
![](/ko/docs/guides_v1/advanced/oauth-plugin/oauth-plugin-requirements_img/oauth-plugin-requirements_img_01.png)


{{% pageinfo color=“300” %}}
**STEP 2: 어플리케이션 타입을 `Web application`로 지정하고 web client ID의 이름을 입력 합니다.**
{{% /pageinfo %}}
![](/ko/docs/guides_v1/advanced/oauth-plugin/oauth-plugin-requirements_img/oauth-plugin-requirements_img_02.png)


{{% pageinfo color=“300” %}}
**STEP 3: 인증된 JavaScript origins 을 입력 합니다.**
{{% /pageinfo %}}
이번 과정은 브라우저에서 **SpaceONE URI**로 접근시 인증이 가능하도록 합니다. **SpaceONE 관리자**로부터 전달 받은 회사의 **SpaceONE URI** 를 입력 합니다. URI는 주로 아래와 같은 포멧 입니다: `https://xxx.console.spaceone.dev`.

![](/ko/docs/guides_v1/advanced/oauth-plugin/oauth-plugin-requirements_img/oauth-plugin-requirements_img_03.png)
{{% pageinfo color=“300” %}}
**STEP 4 : 인증된 리다이렉트 URI를 입력 합니다.**
{{% /pageinfo %}}
이번 과정은 브라우저에서 **SpaceONE sign-in** 페이지로 인증을 리다이렉트시 인증이 가능하도록 합니다. 회사의 **SpaceONE sign-in URI** 를 입력 합니다. URI는 주로 아래와 같은 포멧 입니다: `https://xxx.console.spaceone.dev/sign-in`.

![](/ko/docs/guides_v1/advanced/oauth-plugin/oauth-plugin-requirements_img/oauth-plugin-requirements_img_04.png)

OAuth client를 생성한 이후, client ID와 client Secret 값을 얻을 수 있습니다.

![](/ko/docs/guides_v1/advanced/oauth-plugin/oauth-plugin-requirements_img/oauth-plugin-requirements_img_05.png)



## Domain Verification

**`spaceone.dev`** 도메인으로부터의 API 요청을 허용하기 위해 도메인 인증이 필요 합니다.

{{% pageinfo color=“300” %}}
**STEP 1: `Domain Verification`으로 이동하여 `+Add domain` 버튼을 클릭 하세요.** 
{{% /pageinfo %}}
![](/ko/docs/guides_v1/advanced/oauth-plugin/oauth-plugin-requirements_img/oauth-plugin-requirements_img_06.png)
{{% pageinfo color=“300” %}}
**STEP 2: SpaceONE console 의 URI를 입력 하세요.**
{{% /pageinfo %}}
**SpaceONE Domain** 콘솔 URI로부터의 webhook notification을 허용해야 합니다. **SpaceONE admin**로 부터 전달 받은 회사의 고유한 **SpaceONE URI**를 입력 하세요. URI는 주로 아래의 포멧입니다: `https://xxx.console.spaceone.dev`

![](/ko/docs/guides_v1/advanced/oauth-plugin/oauth-plugin-requirements_img/oauth-plugin-requirements_img_07.png)

{{% pageinfo color=“300” %}}
**STEP 3: Verify Ownership.** 
{{% /pageinfo %}}
SpaceONE 도메인을 등록하기 전, 도메인의 소유권을 인증해야 합니다. 이 과정은 다른 화면에서 진행합니다. Click `TAKE ME THERE`를 클릭 합니다. 

![](/ko/docs/guides_v1/advanced/oauth-plugin/oauth-plugin-requirements_img/oauth-plugin-requirements_img_08.png)


{{% pageinfo color=“300” %}}
**STEP 4: To complete verifying domain ownership of SpaceONE, click the `Confirm` button as shown below.**
**STEP 4: SpaceONE 도메인의 소유권을 확인하기 위해, 아래와 같이 `Confirm` 버튼을 클릭 하세요.**
{{% /pageinfo %}}
![](/ko/docs/guides_v1/advanced/oauth-plugin/oauth-plugin-requirements_img/oauth-plugin-requirements_img_09.png)

![](/ko/docs/guides_v1/advanced/oauth-plugin/oauth-plugin-requirements_img/oauth-plugin-requirements_img_10.png)




