---
date: 2021-06-01
title: "Contribute to SpaceONE Documentation "
linkTitle: "Contribute SpaceONE Documentation"
description: "Find out how to contribute to and fill out the SpaceOne document."
author: Seungho Jeong ([Linkedin](https://www.linkedin.com/in/seungho-jeong-79684b210/))
---

This article shows how to contribute to SpaceONE Documentation. The CI/CD pipeline of this document is built with githubaction and Kubernetes. 


# Pre-requisitions
--- 

Before contributing to this document, the following points are needed. 

- You need following installed locally
    - npm
    - Go
    - Hugo(Extended version)
    - Docker & Docker Compose 

### Clone the docs repository 

Make sure that your `docs` fork is up-to-date with the `spaceone-dev/docs` 

```bash
git clone --recurse-submodules --depth 1 https://github.com/spaceone-dev/docs

```

SpaceONE Documentation uses Docsy Hugo themes. So, we strongly recommend pulling in the submodule and other development dependencies by running the following. 

```bash
# pull in the Docsy submodule
git submodule update --init --recursive --depth 1

```
### Install PostCSS


To build SpaceONE Docs, you need `PostCSS` to create the final asset. If you need install it, you must have recent version of NodeJS installed on your machine so you can use npm. 

```bash
npm install --no-optional -D --save

```
## Run docs locally 

Once you've made your own working copy of SpaceONE Document repository, from the root folder, run: 

```bash
hugo server -D
```

# Adding Content

This section tells you how to add contents on SpaceONE  Document

## Content root directory 


You add content for document under root directory - either `content/` or language specific root like `content/en`. The files in content root directory are typically grouped in subdirectories corresponding to docs sections and templates. 

 
## Content sections and templates 
SpaceONE docs builds own site using the content files you provide  plus any templates provided by docsy theme. These templates include things like your page's headers, footers, navigations, and links to stylesheets. The templates in turn can be made up of partials: little reusable snippets of HTML for page elements like headers, search boxex, and more. 


Because SpaceONE docs have different sections for different types of content, the Docsy theme comes with following templates for top-level site sections that might need:

- docs is for pages in Documentation section.
- blog is for pages in spaceONE Blog 

Each top-level section in SpaceONE docs corresponds to a directory in content root. Hugo automatically applies the appropriate template for that section, depending on which folder the content is in. 

## Custom sections 

If you want to add top-level section, just add a new subdirectory, though you'll need to specify the layout or content type explicitly in the frontmatter of each page if you want to use any existing Docsy template other than the default one. Foe example, if you create a new directory `content/en/amazing` and want one or more pages in that custom section to use Docsy's `docs` template, yoyu add `type: docs` to the frontmatter of each page:

```yaml
---
title: "My amazing new section"
weight: 1
type: docs
description: >
    A special section with a docs layout.
---

```

# Page frontmatter 

Each page file in SpaceONE docs has metadata frontmatter that tells Hugo about the page. You specify page frontmatter in TOML, YAML, JSON. Use the frontmatter to specify the page title, description, creation date, link title, template, menu weighting, ans even  any resources such as images used by the page. For example, here's the frontmatter example. 

```yaml
---
title: "Adding Content"
linkTitle: "Adding Content"
weight: 1
description: >
    Add different types of content to SpaceONE docs.
---
```

# Shortcodes

Rather than writing all site page from scratch, Hugo lets you define and use shortcodes. These are reusable snippets of content that you can include in pages, often using HTML to create effects that are difficult or impossible to do in simple Markdown. 

In your content files, a shortcode can be called by calling 
`{{%/* shortcodename parameters */%}}`

Shortcode parameters are space delimited, and parameters with internal spaces can be quoted. 

The first word in the shortcode declaration is always the name of the shortcode. Parameters follow the name. Depending upon how the shortcode is defined, the parameters may be named, positional, or both, although you can't mix parameter types in a single call. The format for named parameters models that of HTML with the format `name="value"`. 


Some shortcodes use or require closing shortcides. Again like HTML, the opening and closing shortcodes match (name only) with the closing declaration, which is prepended with a slash.

Here are two examples of paired shortcodes : 


```
{{%/* mdshortcode */%}}Stuff to `process` in the *center*.{{%/* /mdshortcode */%}}
```

```
{{</* highlight go */>}} A bunch of code here {{</* /highlight */>}}
```










