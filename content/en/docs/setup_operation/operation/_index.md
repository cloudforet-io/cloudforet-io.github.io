---
title: "Operation"
linkTitle: "Operation"
weight: 5
url_dash_board: "/docs/guides/operation" 
date: 2022-01-24
description: >
    Operation Guide of SpaceONE

---

## Default Language and Timezone

When you create user, English and UTC-0 are default settings.
You can change default language and timezone per domain.

Each domain has its own config parameters. Update LANGUAGE and TIMEZONE value. You can update this value by spacectl or domain initializer.

### Method 1. spacectl

Save config.yaml file

~~~
config:
    LANGUAGE: ko
    TIMEZONE: Asia/Seoul
~~~

Update by spacectl

***command***

~~~
spacectl exec update identity.Domain -f config.yaml
~~~

### Method 2. Domain initializer

