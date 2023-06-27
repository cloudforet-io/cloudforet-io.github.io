---
title: "Change kubernetes namespace"
linkTitle: "Change kubernetes namespace"
weight: 2
date: 2022-06-19
description: >
    This section describes how to change a core service or plugin service to a namespace with a different name.
no_list: true
---
When Cloudforet is installed in the K8S environment, the core service is installed in `spaceone` and the plugin service for extension function is installed in `spaceone-plugin` namespace. (In v1.11.5 and below, it is installed in root-supervisor.)

If the user wants to change the core service or plugin service to a namespace with a different name or to install in a single namespace, the namespace must be changed through options.

In order to change the namespace, you need to write changes in Cloudforet's values.yaml. Changes can be made to each core service and plugin service.

## Change the namespace of the core service
To change the namespace of the core service, add the `spaceone-namespace` value by declaring global.namespace in the `values.yaml` file.
``` yaml
#console:
#  production_json:
#    CONSOLE_API:
#      ENDPOINT: https://console.api.example.com        # Change the endpoint
#    CONSOLE_API_V2:
#      ENDPOINT: https://console-v2.api.example.com     # Change the endpoint

global:
  namespace: spaceone-namespace                         # Change the namespace
  shared_conf:
```

### Change the namespace of plugin service

You can change the namespace of supervisor's plugin service as well as the core service. Life-cycle of plugin service is managed by supervisor, and plugin namespace setting is also set in supervisor.

Below is the part where supervisor is set to change the namespace of the plugin service in the `values.yaml` file. Add the `plugin-namespace` value to `supervisor.application_scheduler.CONNECTORS.KubernetesConnector.namespace`.
``` yaml
#console:
supervisor:
  application_scheduler:
    HOSTNAME: spaceone.svc.cluster.local                # Change the hostname
    CONNECTORS:
      KubernetesConnector:
        namespace: plugin-namespace                     # Change the namespace
```
## Update

You can apply the changes through the helm upgrade command and by deleting the pods.

```yaml
helm upgrade cloudforet cloudforet/spaceone -n spaceone -f values.yaml
kubectl delete po -n spaceone -l app.kubernetes.io/instance=cloudforet
```