---
title: "change k8s namespace"
linkTitle: "change k8s namespace"
weight: 1
date: 2022-06-16
description: >
    사용자가 core 서비스나 plugin 서비스를 다른 이름의 namespace로 변경하는 방법에 대해 설명합니다.
no_list: true
---
K8S 환경에서 Cloudforet을 설치하게 되면 core 서비스는 `spaceone`, 확장 기능을 위한 plugin 서비스는 `spaceone-plugin` namespace에 설치됩니다. (v1.11.5 이하에서는 root-supervisor에 설치 됩니다.)

만약 사용자가 core 서비스나 plugin 서비스를 다른 이름의 namespace로 변경하고 싶거나, 단일 namespace에 설치하기를 희망한다면 옵션을 통해서 namespace를 변경해야 합니다.

namespace를 변경하기 위해서는 Cloudforet의 values.yaml에 변경 내용을 작성해야 합니다. 변경은 core서비스와 plugin 서비스를 각각 설정할 수 있습니다.

## core 서비스의 namespace 변경
core 서비스의 namespace 변경을 위해서는 `values.yaml` 파일에서 global.namespace를 선언하여 `spaceone-namespace` 값을 추가합니다.
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

### plugin 서비스의 namespace 변경

core 서비스 뿐만 아니라, supervisor의 plugin 서비스의 namespace도 변경할 수 있습니다. plugin 서비스는 supervisor에 의해 life-cycle이 관리되며 plugin의 namespace 설정도 supervisor에 설정합니다.

아래는 `values.yaml` 파일에서 plugin 서비스의 namespace를 변경히가 위해 supervisor를 설정한 부분입니다. `supervisor.application_scheduler.CONNECTORS.KubernetesConnector.namespace`에 `plugin-namespace `값을 추가합니다.
``` yaml
#console:
supervisor:
  application_scheduler:
    HOSTNAME: spaceone.svc.cluster.local                # Change the hostname
    CONNECTORS:
      KubernetesConnector:
        namespace: plugin-namespace                     # Change the namespace
```
## 변경내용 반영

helm upgrade 및 pod 삭제 명령을 통해서 반영 할 수 있습니다.

```yaml
helm upgrade cloudforet cloudforet/spaceone -n spaceone -f values.yaml
kubectl delete po -n spaceone -l app.kubernetes.io/instance=cloudforet
```