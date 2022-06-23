---
title: "User Setup"
linkTitle: "User Setup"
weight: 1
date: 2022-06-07
description: >
    클라우드포레를 사용할 [**사용자**](/ko/docs/guides/administration/iam-user)를 추가합니다.
---

클라우드포레의 사용자는 아래의 세 가지 타입으로 분류됩니다.

- 내부 사용자
- 외부 사용자
- API 사용자

<br>

여기에서는 내부 사용자를 추가하는 방법만을 소개하며, 외부 사용자와 API 사용자 추가 방식은 [[IAM] 사용자 가이드](/ko/docs/guides/administration/iam-user)에서 확인할 수 있습니다.

## 사용자 추가하기

[관리 > 사용자] 메뉴에서 클라우드포레를 사용할 사용자를 추가할 수 있습니다.

### Steps

(1) [생성] 버튼을 클릭합니다.

![user-create-start.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3d0496d9-aaa5-48d5-b798-7920ae854ded/user-create-start.png)

(2) [사용자 생성 모달] 에서 [Local] 탭을 선택합니다. 

(2-1) 아이디를 입력 후 [아이디 확인] 버튼을 클릭하여, 유효한 아이디인지 확인합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b452f911-5419-4fe3-a258-039264aa0c38/Untitled.png)

(2-2) 사용자를 식별할 이름, 이메일, 그리고 비밀번호를 입력한 후 [확인] 버튼을 클릭하여 사용자 생성을 완료합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0901e4c5-89a2-48db-8c7a-5d62747b4264/Untitled.png)

{{<alert title="어드민 권한 할당">}}
사용자에게 어드민 권한을 부여하려면, [어드민 권한 할당] 드롭다운에서 선택하여 할당할 수 있습니다.

만약 아무 것도 선택하지 않으면, 해당 사용자에게는 아무런 권한이 부여되지 않습니다.

권한에 대한 더 자세한 설명은 [여기](/ko/docs/guides/administration/iam-role)에서 확인할 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6aa072dc-d22a-4b55-bae4-4589da8e9622/Untitled.png)
{{</alert>}}
