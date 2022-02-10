---
title: "Spacectl CLI"
linkTitle: "Spacectl CLI"
weight: 4
date: 2021-07-31
description: >
    Guide to use SpaceONE cli tools

---


## Spacectl

Spacectl is SpaceONE's integrated Command Line Tool, allowing users to use all SpaceONE's services in a consistent environment.
This section introduces examples and how users can use the SpaceONE cli.

API Reference: https://spaceone-dev.gitbook.io/spaceone-apis


## Install and Set Up spacectl
Install the latest release with the command from PyPI using pip:
```commandline
sudo pip install --upgrade pip 
sudo pip install spacectl
```

There are a few variants on getting helps.
A list of global options and supported commands are available with --help:
```commandline
spacectl --help
```

## Accessing for the first time with spacectl:

The following commands run spacectl to set your own configurations and endpoints.
It handles setting the environments, authenticating and targets.
Run it like these:

- Set up spacectl configuration
    ```commandline
    spacectl config init # input environment on shell
    spacectl config set api_key <api_key>
    spacectl config endpoint add <service> <endpoint>
    ```

- (OR) Import a configuration file which you [downloaded](/docs/guides/my_account/api_key/#creating-api-keys) at SpaceONE console
    ```commandline
    spacectl config init -f <import_file>
    ```

The <import_file> looks like

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
Each item means:

|   Item    |                                            Description                                            |
|:---------:|:-------------------------------------------------------------------------------------------------:|
|  api_key  | Enter key information for API user authentication. It can be downloaded from the SpanONE Console. |
| endpoints |                       Enter the API Endpoint information for each service.                        |

if you want to see a sample configuration file, try [examples/configuration.yaml](https://github.com/spaceone-dev/spacectl/blob/master/examples/configuration.yaml).




## Discovering builtin services:

The following commands list all available spacectl APIs.
Run it like this:

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

