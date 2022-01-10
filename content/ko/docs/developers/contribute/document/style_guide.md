---
title: "Style 가이드 (shortcodes)"
linkTitle: "style guide"
weight: 2
date: 2021-10-01
description: >
    이 페이지에서는 SpaceONE Markdown에서 사용할 수 있는 사용자 지정 [Hugo shortcodes](https://gohugo.io/content-management/shortcodes/)를 중점으로 설명합니다.
---

## Heading 태그
`##`, `<h2>`부터 순차적으로 사용하는 것을 권장합니다. 시맨틱 마크업뿐만 아니라 스타일을 위한 것입니다.
{{< alert title="노트" >}}
`##` 을 사용할 경우, Table of Content 리스트에 자동적으로 추가 됩니다.
{{< /alert >}}

## Link button
코드 :
```go-html-template
{{</* link-button background-color="navy400" url="/" text="Home" */>}}
{{</* link-button background-color="white" url="https://www.spaceone.org/" text="spaceone.org" */>}}
```

결과 : <br>
{{< link-button background-color="navy400" url="/" text="Home" />}}
{{< link-button background-color="white" url="https://www.spaceone.org/" text="spaceone.org" />}}

## Video
코드 :
```go-html-template
{{</* video src="https://www.youtube.com/embed/zSoEg2v_JrE" title="SpaceONE Setup" */>}}
```

결과: <br><br>
{{< video src="https://www.youtube.com/embed/zSoEg2v_JrE" title="SpaceONE Setup">}}

## Alert
코드 :
```go-html-template
{{</* alert title="Note Title" >}}
	Note Contents
{{< /alert */>}}
```

결과: <br>
{{% alert title="Note Title" %}}
Note Contents
{{% /alert %}}

## Reference
* Learn about [Hugo](https://gohugo.io/)
* Learn about [How to use Markdown for writing technical documentation](https://experienceleague.adobe.com/docs/contributor/contributor-guide/writing-essentials/markdown.html?lang=en)