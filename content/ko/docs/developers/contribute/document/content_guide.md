---
title: "Content 가이드"
linkTitle: "content guide"
weight: 1
date: 2021-10-01
description: >
    이 페이지는 Content Guide 작성 방법을 설명합니다.
---

## 새로운 페이지 생성
페이지 생성 위치의 상위 페이지로 이동 합니다. 오른쪽 하단의 '하부 페이지 생성' 버튼을 클릭합니다.  
<br>
또는:
<br>
[The docs repository](https://github.com/spaceone-dev/docs) 에서 fork 한 후 페이지를 생성합니다.

## 제목 및 파일 이름 작성
제목에서 밑줄(_)로 구분된 단어를 사용하여 파일 이름을 생성합니다. 예를 들어, 제목이 [Project Management](/docs/guides/user_guide/project/project_management/)인 파일 이름은 project_management.md입니다.


## Front matter에 필드 추가
Front matter에 필드를 추가합니다. Front matter은 페이지 상단의 삼중 파선 사이에 있는 YAML 블록 영역입니다. 다음은 예입니다.

```yaml
---
title: "Project Management"
linkTitle: "Project Management"
weight: 10
date: 2021-06-10
description: >
  View overall status of each project and Navigate to detailed cloud resources.
---

```

{{% alert title="Description 문구 작성시 주의사항" %}}
description 작성시 tab으로 띄어쓰기 없이 문장을 시작할 경우, 전체 사이트의 로딩 에러가 발생합니다. 
{{% /alert %}}

### Front matter 변수 설명
| 변수 | 설명 |
| :--- | :--- |
| title | 컨텐츠 제목 |
| linkTitle | 왼쪽 사이드바 메뉴에 노출 |
| weight | 왼쪽 사이드바 메뉴의 순서를 정렬하는데 사용되는 변수. 더 낮은 weight 일수록 우선순위가 높음. 즉, 낮은 weight 일수록 컨텐츠가 먼저 노출. weight가 0 이면, 설정되지 않은 값으로 해석하기 때문에 0이 아니어야 함.
| date | 생성날짜 |
| description | 페이지 설명 |

Front matter에 관한 더 자세한 사항은 [Front matter](https://gohugo.io/content-management/front-matter/) 을 방문해 알 수 있습니다.

## Document 작성

### Table of Contents추가
Document에 `##`을 추가 하면, Table of Contents 리스트에 자동적으로 추가됩니다.

### 이미지 추가
작성하는 document와 동일한 계층에 **파일명_img** 이름의 폴더를 생성합니다. 예를 들면, project_management.md에 사용되는 이미지를 위한 project_management_img 디렉토리를 생성합니다. 디렉토리에 이미지를 추가하여 사용합니다.

### Style guide
[Style guide](/ko/docs/developers/contribute/document/style_guide/)를 참고해서 document를 작성해주세요.


## Pull request 요청
새로운 branch에 커밋을 하고, pull request 요청합니다.