---
title: "Documentation Style Guide (shortcodes)"
linkTitle: "style guide"
weight: 2
date: 2021-10-01
description: >
    This page explains the custom Hugo shortcodes that can be used in SpaceONE Markdown documentation.
---

## Heading tag
It is recommended to use them sequentially from `##`, `<h2>`. It's for style, not just semantic markup.

<!-- 헤딩 태그 사용 시 `##`부터 순차적으로 사용하는 것을 권장합니다. 시맨틱 마크업뿐만 아니라 스타일을 위한 것입니다. -->
## Shortcodes
Read more about shortcodes in the [Hugo documentation](https://gohugo.io/content-management/shortcodes/)

## Link button
Code :
```go-html-template
{{</* link-button background-color="navy400" url="" text="link-button" */>}}
{{</* link-button background-color="white" url="" text="link-button" */>}}
```

Output : <br>
{{< link-button background-color="navy400" url="" text="link-button" />}}
{{< link-button background-color="white" url="" text="link-button" />}}

## Video
Code :
```go-html-template
{{</* video src="https://www.youtube.com/embed/zSoEg2v_JrE" title="SpaceONE Setup" */>}}
```

Output: <br><br>
{{< video src="https://www.youtube.com/embed/zSoEg2v_JrE" title="SpaceONE Setup">}}

## Alert
Code :
```go-html-template
{{</* alert title="Note Title" >}}
	Note Contents
{{< /alert */>}}
```

Output: <br>
{{% alert title="Note Title" %}}
Note Contents
{{% /alert %}}

## Reference
* Learn about [Hugo](https://gohugo.io/)
* Learn about [How to use Markdown for writing technical documentation](https://experienceleague.adobe.com/docs/contributor/contributor-guide/writing-essentials/markdown.html?lang=en)