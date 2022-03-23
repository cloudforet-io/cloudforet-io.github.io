---
title: "Spacectl CLI"
linkTitle: "Spacectl CLI"
weight: 4
date: 2021-07-31
description: >
    Guide to use SpaceONE cli tools
no_list: true
---



## Spacectl 

Spacectl은 SpaceONE의 통합 Command Line Tool로서, 사용자가 SpaceONE의 모든 서비스를 일관된 환경에서 이용할 수 있도록 합니다. 
이 섹션에서는 사용자가 SpaceONE cli를 사용할 수 있는 방법과 예제를 소개 합니다. 

API Reference: https://spaceone-dev.gitbook.io/spaceone-apis


## Install and Set Up spacectl
아래와 같이 pip를 사용하여 최신 버전의 spacectl 를 사용할 수 있습니다. 

```commandline
sudo pip install --upgrade pip 
sudo pip install spacectl
```

spacectl 에서 사용 가능한 모든 옵션을 조회 하기 위해서는 --help 명령어를 추가할 수 있습니다.
```commandline
spacectl --help
```

## Accessing for the first time with spacectl:

아래의 command를 사용하여 spacectl의 초기설정이 가능합니다. 설정 내역은 인증, 환경, endpoint 정보를 포합니다.
아래와 같이 입력 합니다.:

- (직접 입력) spacectl configuration 설정
    ```commandline
    spacectl config init # input environment on shell
    spacectl config set api_key <api_key>
    spacectl config endpoint add <service> <endpoint>
    ```

- (OR) SpaceONE console을 통해 [다운로드](/ko/docs/guides/my_account/api_key/#creating-api-keys) 받은 configuration file을 사용하여 설정
    ```commandline
    spacectl config init -f <import_file>
    ```

<import_file> 형식은 아래와 같습니다.

```
api_key: <JWT_API_KEY>
endpoints:
  identity: grpc+ssl://identity:443
  inventory: grpc+ssl://inventory:443
  plugin: grpc+ssl://plugin:443
  repository: grpc+ssl://repository:443
  statistics: grpc+ssl://statistics:443
  ...
```
각 항목은 아래와 같은 의미를 갖습니다.

|   Item    |                                  Description                                   |
|:---------:|:------------------------------------------------------------------------------:|
|  api_key  |       API 사용자 인증을 위한 키 정보를 입력 합니다. SpacONE Console에서 다운로드 가능합니다.               |
| endpoints |                         각 서비스별 API Endpoint정보를 입력 합니다.                         |


더 자세한 sample configuration 파일은 링크[examples/configuration.yaml](https://github.com/spaceone-dev/spacectl/blob/master/examples/configuration.yaml).를 참고 해주세요

## Discovering builtin services:

아래의 command는 사용 가능한 모든 spacectl command를 나타냅니다.

```commandline
spacectl api-resources
```

## Examples
### Case 1: List Servers:
```commandline
spacectl list server
```

### Case 2: Create Project Group:
```commandline
spacectl exec create project_group -p name=<project_group_name>
```
