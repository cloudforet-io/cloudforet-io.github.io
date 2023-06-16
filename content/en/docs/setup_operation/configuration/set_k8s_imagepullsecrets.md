---
title: "Creating and applying Kubernetes imagePullSecrets"
linkTitle: "Creating and applying Kubernetes imagePullSecrets"
weight: 1
date: 2022-06-14
description: >
    We will explain the process of enabling Cloudforet pods to get private container images using imagePullSecrets.
no_list: true
---

Due to organization's security requirements, User can Build and utilize a private dedicated image registry to manage private images.

To pull container images from a private image registry, credentials are required. In Kubernetes, Secrets can be used to register such credentials with pods, enabling them to retrieve and pull private container images.

For more detailed information, please refer to the [official documentation]((https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/)).


## Creating a Secret for credentials.

Kubernetes pods can pull private container images using a Secret of type `kubernetes.io/dockerconfigjson.`

To do this, create a secret for credentials based on registry credentials.

```shell
kubectl create secret docker-registry my-credential --docker-server=<your-registry-server> --docker-username=<your-name> --docker-password=<your-pword> --docker-email=<your-email>
```


## Mount the credentials Secret to a Pod.

You can specify imagePullSecrets in the helm chart values of Cloudforet to mount the credentials Secret to the pods.

> **WARN:** Kubernetes Secret is namespace-scoped resources, so they need to exist in the same namespace.

### Set imagePullSecrets configuration for the core service

|Parameter|description|Default|
|:---:|---|:---:|
|[services].imagePullSecrets[]]|`imagePullSecrets` configuration(* Each micro service section)|[]|
|[services].imagePullSecrets[].name|Name of secret type of `kubernetes.io/dockerconfigjson`|""|

```yaml
console:
    enable: true
    image:
      name: spaceone/console
      version: x.y.z

    imagePullSecrets:
      - name: my-credential

console-api:
    enable: true
    image:
      name: spaceone/console-api
      version: x.y.z

    imagePullSecrets:
      - name: my-credential

(...)
```


### Set imagePullSecrets configuration for the plugin

|Parameter|description|Default|
|:---:|---|:---:|
|supervisor.application_scheduler|Configuration of supervisor scheduler|{...}|
|supervisor.application_scheduler.CONNECTORS.KubernetesConnector.imagePullSecrets[]|`imagePullSecrets` configuration for plugin|[]|
|supervisor.application_scheduler.CONNECTORS.KubernetesConnector.imagePullSecrets[].name|Name of secret type of `kubernetes.io/dockerconfigjson` for plugin|""|

```yaml
supervisor:
    enabled: true
    image:
      name: spaceone/supervisor
      version: x.y.z

    imagePullSecrets: 
      - name: my-credential

    application_scheduler:
      CONNECTORS:
          KubernetesConnector:
              imagePullSecrets: 
                - name: my-credential
```


## Update

You can apply the changes through the helm upgrade command and by deleting the pods

```yaml
helm upgrade cloudforet cloudforet/spaceone -n spaceone -f values.yaml
kubectl delete po -n spaceone -l app.kubernetes.io/instance=cloudforet
```