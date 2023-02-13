---
title: "アドバンストインストール"
linkTitle: "アドバンストインストール"
weight: 3
url_dash_board: "/docs/guides_v1/advanced_installation"
date: 2021-12-08
description: >
    Advanced Installation Guide of SpaceONE
---

## Kubernetes(EKS) node groups

Kubernetes(EKS) provides **node groups**, which is used for provisioning and providing lifecycle management of nodes.

SpaceONE recommends using two seperate node groups, one for **core service** and the other for **plugins**.

| node group | Description |
| ---        | ---         |
| spaceone-core-nodegroup | Deploy core pods like identity, console, inventory |
| spaceone-supervisor-nodegroup | Deploy supervisor pods and plugins            |

![](/docs/setup_operation/advanced_installation/img/spaceone-node-groups.png)

Each node group has its own ***kubernetes labels***

| Key | Value |
| --- | ---   |
| Category | core |

![](/docs/setup_operation/advanced_installation/img/spaceone-core-nodegroup.png)

| Key | Value |
| --- | ---   |
| Category | supervisor |

![](/docs/setup_operation/advanced_installation/img/spaceone-supervisor-nodegroup.png)

## Helm chart value

Based on ***kubernetes labels*** on node groups, SpaceONE helm chart supports node selector options.

<br />
SpaceONE helm chart also supports ***pod.spec*** options, so that you can specific options for some pod.

One example is ***nodeSelector***, which determines pod's location based on labels.

### spaceone-core-nodegroup

Include ***nodeSelector*** at every chart value like below.

The value of nodeSelector is the key and value of label that you have applied above.
~~~
config:
  enabled: true
  replicas: 4
  image:
    name: public.ecr.aws/megazone/spaceone/config
    version: 1.8.5


  pod:
    spec:
      nodeSelector:
        Category: core

~~~

### spaceone-supervisor-nodegroup

Include ***nodeSelector*** at supervisor chart value like below.

In a supervisor value, you have to update two sections.

1. ***KubernetesConnector***
2. ***pod***

***KubernetesConnector*** indicates that plugins created by supervisor has nodeSelector configuration.

~~~
KubernetesConnector
  nodeSelector:
    Category: supervisor
~~~

***pod*** indicates that supervisor pod itself is deployed with nodeSelector option.

~~~
pod:
  spec:
    nodeSelector:
      Category: supervisor
~~~

~~~
supervisor:
    enabled: true
    image:
      name: public.ecr.aws/megazone/spaceone/supervisor
      version: 1.8.5
    application: {}
    application_scheduler:
        NAME: root
        HOSTNAME: root-supervisor.svc.cluster.local
        BACKEND: KubernetesConnector
        CONNECTORS:
            RepositoryConnector:
                endpoint:
                    v1: grpc://repository.spaceone.svc.cluster.local:50051
            PluginConnector:
                endpoint:
                    v1: grpc://plugin.spaceone.svc.cluster.local:50051
            KubernetesConnector:
                namespace: root-supervisor
                start_port: 50051
                end_port: 50052
                headless: true
                replica:
                    inventory.Collector: 10
                    monitoring.DataSource: 4
                nodeSelector:
                    Category: supervisor


        TOKEN_INFO:
            protocol: consul
            config:
                host: consul.spaceone.svc.cluster.local
            uri: debug/supervisor/TOKEN
    pod:
      spec:
        nodeSelector:
          Category: supervisor

~~~

