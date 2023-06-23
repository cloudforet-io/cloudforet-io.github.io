---
title: "HTTP Proxy 설정"
linkTitle: "HTTP Proxy 설정"
weight: 4
date: 2022-06-14
description: >
    proxy 연결을 위한 kubernetes pod의 http_proxy 설정을 설명합니다.
no_list: true
---

![set_proxy](/ko/docs/setup_operation/configuration/set_http_proxy_img/set_proxy.png)

http_proxy https_proxy 환경변수 선언을 통해 pod들이 프록시 서버를 통해 외부로 통신할 수 있도록 할 수 있습니다.<br>
이러한 설정은 각 Container의 환경변수에 http_proxy https_proxy를 선언하는 것으로 이루어집니다.

> no_proxy 환경변수는 proxy 통신을 적용하지 않는 목적지에 대한 설정입니다.

> cloudforet의 경우 Micro service간 통신을 위해 cluster 내부의 service 도메인은 제외하도록 설정하는 것을 추천합니다.

## 예제

### Core service를 위한 proxy 설정

|Parameter|description|Default|
|:---:|---|:---:|
|global.common_env[]|Environment Variable for all micro services|[]|
|global.common_env[].name|Name of environment variable|""|
|global.common_env[].value|Value of environment variable|""|

```yaml
global:
  common_env:
    - name: HTTP_PROXY
      value: http://{proxy_server_address}:{proxy_port}
    - name: HTTPS_PROXY
      value: http://{proxy_server_address}:{proxy_port}
    - name: no_proxy
      value: .svc.cluster.local,localhost,{cluster_ip},board,config,console,console-api,console-api-v2,cost-analysis,dashboard,docs,file-manager,identity,inventory,marketplace-assets,monitoring,notification,plugin,repository,secret,statistics,supervisor
```


### plugin을 위한 proxy 설정

|Parameter|description|Default|
|:---:|---|:---:|
|supervisor.application_scheduler|Configuration of supervisor schduler|{...}|
|supervisor.application_scheduler.CONNECTORS.KubernetesConnector.env[]|Environment Variable for plugin|[]|
|supervisor.application_scheduler.CONNECTORS.KubernetesConnector.env[].name|Name of environment variable|""|
|supervisor.application_scheduler.CONNECTORS.KubernetesConnector.env[].value|Name of environment variable|""|

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
          env:
            - name: HTTP_PROXY
              value: http://{proxy_server_address}:{proxy_port}
            - name: HTTPS_PROXY
              value: http://{proxy_server_address}:{proxy_port}
            - name: no_proxy
              value: .svc.cluster.local,localhost,{cluster_ip},board,config,console,console-api,console-api-v2,cost-analysis,dashboard,docs,file-manager,identity,inventory,marketplace-assets,monitoring,notification,plugin,repository,secret,statistics,supervisor
```


## 변경내용 반영

helm upgrade 및 pod 삭제 명령을 통해서 반영 할 수 있습니다.

```yaml
helm upgrade cloudforet cloudforet/spaceone -n spaceone -f values.yaml
kubectl delete po -n spaceone -l app.kubernetes.io/instance=cloudforet
```