---
title: "操作方法 "
linkTitle: "操作方法 "
weight: 5
url_dash_board: "/docs/guides_v1/operation"
date: 2022-01-24
description: >
    Operation Guide of SpaceONE

---

## Default language and timezone

When you a create user, default language is English and timezone is UTC-0.
You can change these default settings per domain.

Each domain has its own config parameters. Update values of LANGUAGE and TIMEZONE. You can update this value using spacectl or domain initializer.

### Method 1. spacectl

Save config.yaml file.

~~~
config:
    LANGUAGE: ko
    TIMEZONE: Asia/Seoul
~~~

Update using spacectl.

***command***

~~~
spacectl exec update identity.Domain -f config.yaml
~~~

### Method 2. Domain initializer

