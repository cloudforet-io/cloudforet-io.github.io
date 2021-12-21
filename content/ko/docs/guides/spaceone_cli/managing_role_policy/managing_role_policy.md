---
title: "Managing Role and Policy"
linkTitle: "Managing Role and Policy"
weight: 1
date: 2021-12-21
description: >
    Domain 내의 Role & Policy를 관리할 수 있습니다.
---



## Policy

### Basic
- Policy는 Permission의 모음으로 구성되어 있습니다. 
- Permission은 {microservice}.{resource}.{verb}로 나타냅니다.
- Asterisk(*)를 지원합니다. 

~~~json
# policy definition sample for json 
{
  'name': 'General Identity User',
  'permissions': [
      'identity.Project.*',
      'identity.ProjectGroup.*',
      'identity.User.get',
      'identity.User.update',
      'identity.User.list',
  ]
}
~~~

~~~yaml
# policy definition sample for yaml
---
name: General Identity User
permissions: 
  - 'identity.Project.*'
  - 'identity.ProjectGroup.*'
  - 'identity.User.get'
  - 'identity.User.update'
  - 'identity.User.list'
~~~


### Managing Custom Policy










## Role



### Managing Domain Role





### Managing Project Role







