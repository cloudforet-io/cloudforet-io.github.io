---
title: "Advanced Installation Guide"
linkTitle: "Advanced Installation"
weight: 3
url_dash_board: "/docs/guides/advanced_installation" 
date: 2021-12-08
description: >
    Advanced Installation Guide of SpaceONE

---

## Kubernetes(EKS) node groups

Kubernetes(EKS) provides node groups for provisioning and lifecycle management of nodes.

SpaceONE recommends two seperate node groups for core services and plugins.

| node group | Description |
| ---        | ---         |
| spaceone-core-nodegroup | Deploy core PODs like identity, console, inventory |
| spaceone-supervisor-nodegroup | Deploy supervisor POD and plugins            |

![](/ko/docs/setup-operation/advanced_installation/img/spaceone-node-groups.png)

Each node group has its own ***kubernetes labels***

| Key | Value |
| --- | ---   |
| Category | core |

![](/ko/docs/setup-operation/advanced_installation/img/spaceone-core-nodegroup.png)

| Key | Value |
| --- | ---   |
| Category | supervisor |

![](/ko/docs/setup-operation/advanced_installation/img/spaceone-supervisor-nodegroup.png)

## Helm chart value

Based on ***kubernetes labels*** on node groups, helm chart support node selector options

</br>
SpaceONE helm chart supports ***pod.spec*** options, if you want specific options for pod.

One example is ***nodeSelector*** which determine POD location based on kubernetes labels.

### spaceone-core-nodegroup

Include ***nodeSelector*** at every chart value like

The vaule of nodeSelector is ***kubernetes labels*** above.
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

Include ***nodeSelector*** at supervisor chart value.

In a supervisor value, you have to update two section.

1. ***KubernetesConnector***
2. ***pod***

***KubernetesConnector*** indicates that plugins created by supervisor has nodeSelector configuration.

~~~
KubernetesConnector
  nodeSelector:
    Category: supervisor
~~~

***pod*** indicates that supervisor POD itself is deployed with nodeSelector option.

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

