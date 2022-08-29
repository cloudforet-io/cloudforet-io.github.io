---
title: "Micro Service Deployment"
linkTitle: "Micro Service Deployment"
weight: 2
date: 2021-11-23
description: >
    Micro Service Deployment

---

## SpaceONE Deployment
The SpaceONE can be deployed by Helm chart.
Each micro services has its own Helm chart, and the top chart, spaceone/spaceone contains all sub charts like console, identity, inventory and plugin.

SpaceONE provides own Helm chart repository. The repository URL is ***https://spaceone-dev.github.io/charts***

~~~
helm repo add spaceone https://spaceone-dev.github.io/charts
helm repo list
helm repo update

helm search repo -r spaceone
NAME                          	CHART VERSION	APP VERSION	DESCRIPTION
spaceone/spaceone             	1.8.6        	1.8.6      	A Helm chart for SpaceONE
spaceone/spaceone-initializer 	1.2.8        	1.x.y      	SpaceONE domain initializer Helm chart for Kube...
spaceone/billing              	1.3.6        	1.x.y      	SpaceONE billing Helm chart for Kubernetes
spaceone/billing-v2           	1.3.6        	1.x.y      	SpaceONE billing v2 Helm chart for Kubernetes
spaceone/config               	1.3.6        	1.x.y      	SpaceONE config Helm chart for Kubernetes
spaceone/console              	1.2.5        	1.x.y      	SpaceONE console Helm chart for Kubernetes
spaceone/console-api          	1.1.8        	1.x.y      	SpaceONE console-api Helm chart for Kubernetes
spaceone/cost-analysis        	1.3.7        	1.x.y      	SpaceONE Cost Analysis Helm chart for Kubernetes
spaceone/cost-saving          	1.3.6        	1.x.y      	SpaceONE cost_saving Helm chart for Kubernetes
spaceone/docs                 	2.0.0        	1.0.0      	SpaceONE Open-Source Project Site Helm chart fo...
spaceone/identity             	1.3.7        	1.x.y      	SpaceONE identity Helm chart for Kubernetes
spaceone/inventory            	1.3.7        	1.x.y      	SpaceONE inventory Helm chart for Kubernetes
spaceone/marketplace-assets   	1.1.3        	1.x.y      	SpaceONE marketplace-assets Helm chart for Kube...
spaceone/monitoring           	1.3.15       	1.x.y      	SpaceONE monitoring Helm chart for Kubernetes
spaceone/notification         	1.3.8        	1.x.y      	SpaceONE notification Helm chart for Kubernetes
spaceone/plugin               	1.3.6        	1.x.y      	SpaceONE plugin Helm chart for Kubernetes
spaceone/power-scheduler      	1.3.6        	1.x.y      	SpaceONE power_scheduler Helm chart for Kubernetes
spaceone/project-site         	1.0.0        	0.1.0      	SpaceONE Open-Source Project Site Helm chart fo...
spaceone/repository           	1.3.6        	1.x.y      	SpaceONE repository Helm chart for Kubernetes
spaceone/secret               	1.3.9        	1.x.y      	SpaceONE secret Helm chart for Kubernetes
spaceone/spot-automation      	1.3.6        	1.x.y      	SpaceONE spot_automation Helm chart for Kubernetes
spaceone/spot-automation-proxy	1.0.0        	1.x.y      	SpaceONE Spot Automation Proxy Helm chart for K...
spaceone/statistics           	1.3.6        	1.x.y      	SpaceONE statistics Helm chart for Kubernetes
spaceone/supervisor           	1.1.4        	1.x.y      	SpaceONE supervisor Helm chart for Kubernetes
~~~

{{< alert title="Installation" >}}
	SpaceONE can be easily deployed by single Helm chart with spaceone/spaceone.
	See https://www.spaceone.org/docs/setup/
{{< /alert >}}


## Helm Chart Code

Each repository should provide its own helm chart.

The code should be at ***{repository}/deploy/helm***

Every Helm charts consists of four components.

| File or Directory | Description |
| ---               | ---         |
| Chart.yaml        | Information of this Helm chart |
| values.yaml       | Default vaule of this Helm chart |
| config (directory) | Default configuration of this micro service |
| templates (directory) | Helm template files                      |

The directory looks like

~~~
deploy
└── helm
    ├── Chart.yaml
    ├── config
    │   └── config.yaml
    ├── templates
    │   ├── NOTES.txt
    │   ├── _helpers.tpl
    │   ├── application-grpc-conf.yaml
    │   ├── application-rest-conf.yaml
    │   ├── application-scheduler-conf.yaml
    │   ├── application-worker-conf.yaml
    │   ├── database-conf.yaml
    │   ├── default-conf.yaml
    │   ├── deployment-grpc.yaml
    │   ├── deployment-rest.yaml
    │   ├── deployment-scheduler.yaml
    │   ├── deployment-worker.yaml
    │   ├── ingress-rest.yaml
    │   ├── rest-nginx-conf.yaml
    │   ├── rest-nginx-proxy-conf.yaml
    │   ├── service-grpc.yaml
    │   ├── service-rest.yaml
    │   └── shared-conf.yaml
    └── values.yaml

3 directories, 21 files
~~~

Based on micro service types like frontend, backend, or supervisor, the contents of templates directory is different.

{{< alert title="Template Samples" >}}
	Since every backend services has same templates files, spaceone provides sample of templates directory.
	Template Sample URL:
	https://github.com/spaceone-dev/spaceone/tree/master/helm_templates
{{< /alert >}}

![](/docs/developers/architecture/deployment/img/spaceone_helm_deployment.png)

## Implementation

### values.yaml

values.yaml file defines default vault of templates.

**Basic information**

~~~
###############################
# DEFAULT
###############################
enabled: true
developer: false
grpc: true
scheduler: false
worker: false
rest: false
name: identity
image:
    name: spaceone/identity
    version: latest
imagePullPolicy: IfNotPresent

database: {}
~~~

* enabled: true | false defines deploy this helm chart or not
* developer: true | false for developer mode (recommendation: false)
* grpc: true if you want to deploy gRPC server
* rest: true if you want to deploy rest server
* scheduler: true if you want to deploy scheduler server
* worker: true if you want to deploy worker server
* name: micro service name
* image: docker image and version for this micro service
* imagePullPolicy: IfNotPresent | Always
* database: if you want to overwrite default database configuration


**Application Configuration**

Each server type like gRPC, rest, scheduler or worker server has its own specific configuration.

~~~
application_grpc: {}
application_rest: {}
application_scheduler: {}
application_worker: {}
~~~

This section is used at templates/application-{server type}-conf.yaml, then saved as ConfigMap.

Deployment file uses this ConfigMap at volumes,

then volumeMount as ***/opt/spaceone/{ service name }/config/application.yaml***


<br>
For example, inventory scheduler server needs QUEUES and SCHEDULERS configuration.

So you can easily configure by adding configuration at ***application_scheduler*** like

~~~
application_scheduler:
    QUEUES:
        collector_q:
            backend: spaceone.core.queue.redis_queue.RedisQueue
            host: redis
            port: 6379
            channel: collector

    SCHEDULERS:
        hourly_scheduler:
            backend: spaceone.inventory.scheduler.inventory_scheduler.InventoryHourlyScheduler
            queue: collector_q
            interval: 1
            minute: ':00'
~~~

**Local sidecar**

If you want to append specific sidecar in this micro service.

~~~
# local sidecar
##########################
#sidecar:
~~~

**Local volumes**

Every micro service needs default timezone and log directory.

~~~
##########################
# Local volumes
##########################
volumes:
    - name: timezone
      hostPath:
          path: /usr/share/zoneinfo/Asia/Seoul
    - name: log-volume
      emptyDir: {}
~~~

**Global variables**

Every micro services need some part of same configuration or same sidecar.

~~~
#######################
# global variable
#######################
global:
    shared: {}
    sidecar: []
~~~

**Service**

gRPC or rest server needs ***Service***

~~~
# Service
service:
    grpc:
        type: ClusterIP
        annotations:
            nil: nil
        ports:
            - name: grpc
              port: 50051
              targetPort: 50051
              protocol: TCP
    rest:
        type: ClusterIP
        annotations:
            nil: nil
        ports:
            - name: rest
              port: 80
              targetPort: 80
              protocol: TCP
~~~

**volumeMounts**

Some micro service may need additional file or configuration. In this case use ***volumeMounts*** which can attach any thing.

~~~
################################
# volumeMount per deployment
################################
volumeMounts:
    application_grpc: []
    application_rest: []
    application_scheduler: []
    application_worker: []
~~~

**POD Spec**

We can configure specific value for POD spec.
For example, we can use nodeSelector for deploy POD at specific K8S worker node.

~~~
####################################
# pod spec (append more pod spec)
# example nodeSelect
#
# pod:
#   spec:
#     nodeSelector:
#       application: my-node-group
####################################
pod:
    spec: {}
~~~

## CI (github action)

If you want to make helm chart for this micro service, trigger at github action ***Make Helm Chart***.

{{< alert title="Make Helm Chart" >}}
	We don't need to make helm chart for each micro service usually,
	since spaceone/spaceone top chart do all these steps.
{{< /alert >}}


