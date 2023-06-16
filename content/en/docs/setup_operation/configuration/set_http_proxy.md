---
title: "Setting up HTTP(S) connection through a http_proxy"
linkTitle: "Setting up HTTP(S) connection through a http_proxy"
weight: 1
date: 2022-06-14
description: >
    We will explain the http_proxy configuration for a Kubernetes pod to establish a proxy connection.
no_list: true
---

You can enable communication from pods to the external world through a proxy server by declaring the http_proxy and https_proxy environment variables.

This configuration is done by declaring http_proxy and https_proxy in the environment variables of each container.

> `no_proxy` environment variable is used to exclude destinations from proxy communication.

> For Cloudforet, It is recommended to exclude the service domains within the cluster for communication between micro services.

## Example

### Set roxy configuration for the core service

- `global.common_env`
  - for all micro services

```yaml
global:
+   common_env:
+     - name: HTTP_PROXY
+       value: http://{proxy_server_address}:{proxy_port}
+     - name: HTTPS_PROXY
+       value: http://{proxy_server_address}:{proxy_port}
+     - name: no_proxy
+       value: .svc.cluster.local,localhost,{cluster_ip},board,config,console,console-api,console-api-v2,cost-analysis,dashboard,docs,file-manager,identity,inventory,marketplace-assets,monitoring,notification,plugin,repository,secret,statistics,supervisor
```


### Set proxy configuration for the plugin

- `supervisor.application_scheduler.CONNECTORS.KubernetesConnector.env`
  - for plugins created by supervisor

```yaml
supervisor:
    enabled: true
    image:
      name: spaceone/supervisor
      version: x.y.z

    imagePullSecrets: 
      - name: my-credential

    application_scheduler:
        (omit...)
        CONNECTORS:
            (omit...)
            KubernetesConnector:
                (omit...)
+               env:
+                 - name: HTTP_PROXY
+                   value: http://{proxy_server_address}:{proxy_port}
+                 - name: HTTPS_PROXY
+                   value: http://{proxy_server_address}:{proxy_port}
+                 - name: no_proxy
+                   value: .svc.cluster.local,localhost,{cluster_ip},board,config,console,console-api,console-api-v2,cost-analysis,dashboard,docs,file-manager,identity,inventory,marketplace-assets,monitoring,notification,plugin,repository,secret,statistics,supervisor
```


## Update

You can apply the changes through the helm upgrade command and by deleting the pods

```yaml
helm upgrade cloudforet cloudforet/spaceone -n spaceone -f values.yaml
kubectl delete po -n spaceone -l app.kubernetes.io/instance=cloudforet
```