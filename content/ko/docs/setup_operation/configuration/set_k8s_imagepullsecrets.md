---
title: "Kubernetes imagePullSecrets 설정"
linkTitle: "Kubernetes imagePullSecrets 설정"
weight: 1
date: 2022-06-14
description: >
    Cloudforet의 Pod들이 imagePullSecrets을 이용해 Private Container Image를 가져올 수 있도록 하는 방법에 대해 설명합니다.
no_list: true
---

사용자들은 때때로 조직의 상황에 따라 Private Image를 관리하기 위해 Private 전용 Image Registry를 구축하고 그것을 이용합니다.

Private Image Registry로부터 Container Image를 가져오기 위해서는 자격 증명이 필요하고, Kubernetes에서는 Secret을 이용해 그러한 자격 증명을 Pod 등록하여 Private Container Image를 가져올때 사용할 수 있도록 할 수 있습니다.

자세한 내용은 [공식 문서](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/)를 참고하세요.

## 자격증명을 위한 Secret 생성

Kubernetes pod는 kubernetes.io/dockerconfigjson 타입의 Secret을 이용해 Private Container Image를 가져올 수 있습니다.

이를 위해 registry 인증정보를 기반으로 자격 증명을 위한 secret을 생성합니다.

```shell
kubectl create secret docker-registry my-credential --docker-server=<your-registry-server> --docker-username=<your-name> --docker-password=<your-pword> --docker-email=<your-email>
```



## 자격증명 Secret을 Pod에 적용

Cloudforet의 helm chart value에 imagePullSecrets 을 명시하여 pod들이 자격 증명을 위한 secret을 mount하도록 할 수 있습니다.

> **WARN:** kubernetes secret은 namespace scope의 resource이므로, 같은 namespace에 존재해야합니다.

### Core service를 위한 imagePullSecrets 설정

- `[모든 micro-service].imagePullSecrets`
  - 모든 micro-service들에게 적용

```yaml
console:
    enable: true
    image:
        name: spaceone/console
        version: x.y.z

+   imagePullSecrets:
+     - name: my-credential

console-api:
    enable: true
    image:
        name: spaceone/console-api
        version: x.y.z

+   imagePullSecrets:
+     - name: my-credential

(이하 동일)
```


### Plugin를 위한 imagePullSecrets 설정

- `supervisor.application_scheduler.CONNECTORS.KubernetesConnector.imagePullSecrets`
    - supervisor가 만들어내는 plugin들에 적용

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
+               imagePullSecrets: 
+                 - name: my-credential
```


## 변경내용 반영

helm upgrade 및 pod 삭제 명령을 통해서 반영 할 수 있습니다.

```shell
helm upgrade cloudforet cloudforet/spaceone -n spaceone -f values.yaml
kubectl delete po -n spaceone -l app.kubernetes.io/instance=cloudforet
```