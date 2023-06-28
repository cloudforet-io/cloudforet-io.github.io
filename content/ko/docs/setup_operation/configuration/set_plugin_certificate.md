---
title: "플러그인 사설 인증서 설정"
linkTitle: "플러그인 사설 인증서 설정"
weight: 1
date: 2023-06-19
description: >
  Cloudforet에서 사용 되는 플러그인에 사설 인증서를 설정하는 방법에 대해 설명합니다.
no_list: true
---

![set_plugin_certificate](/ko/docs/setup_operation/configuration/set_plugin_certificate_img/set_plugin_certificate.png)

Cloudforet가 On-premise 환경에 구축될 경우 인터넷과 직접적인 통신이 되지 않고 Proxy 서버를 통해 접속이 될 수 있습니다.  
이 때 Proxy 서버와의 통신 시 사설 인증서를 필요로 하게 됩니다.  
먼저, 준비된 사설 인증서로 Secret으로 구성하고 이를 private-tls Volume에 Mount 합니다.   
이후 supervisor의 KubernetesConnector에 인증서 설정에 필요한 여러 환경변수의 value가 private-tls volume의 tls.crt의 경로가 되도록 설정합니다.

<br>
<br>
<br>

## 준비된 사설 인증서를 Kubernetes Secret으로 등록

| Parameter          | Description             | Default           |
|:-------------------|-------------------------|:------------------|
| apiVersion         | API version of resource | v1                |
| kind               | Kind of resource        | Secret            |
| metadata           | Metadata of resource    | {...}             |
| metadata.name      | Name of resource        | private-tls       |
| metadata.namespace | Namespace of resource   | spaceone          |
| data               | Data of resource        | tls.crt           |
| type               | Type of resource        | kubernetes.io/tls |

```shell
kubectl apply -f create_tls_secret.yml
```

```yaml
---
apiVersion: v1
kind: Secret
metadata:
  name: spaceone-tls
  namespace: spaceone
data:
  tls.crt: base64 encoded cert  # openssl base64 -in cert.pem -out cert.base64
type: kubernetes.io/tls
```

<br>
<br>
<br>

## KubernetesConnector에 설정

| Parameter                                                                                   | Description                           | Default                                                 |
|:--------------------------------------------------------------------------------------------|---------------------------------------|:--------------------------------------------------------|
| supervisor.application_scheduler                                                            | Configuration of supervisor scheduler | {...}                                                   |
| supervisor.application_scheduler.CONNECTORS.KubernetesConnector.env[]                       | Environment variables for plugin      | [...]                                                   |
| supervisor.application_scheduler.CONNECTORS.KubernetesConnector.env[].name                  | Name of environment variable          | REQUESTS_CA_BUNDLE, AWS_CA_BUNDLE, CLOUDFORET_CA_BUNDLE |
| supervisor.application_scheduler.CONNECTORS.KubernetesConnector.env[].value                 | Value of environment variable         | /opt/ssl/cert/tls.crt                                   |
| supervisor.application_scheduler.CONNECTORS.KubernetesConnector.volumes[]                   | Volumes for plugin                    | [...]                                                   |
| supervisor.application_scheduler.CONNECTORS.KubernetesConnector.volumes[].name              | Name of volumes                       | private-tls                                             |
| supervisor.application_scheduler.CONNECTORS.KubernetesConnector.volumes[].secret.secretName | Secret name of secret volume          | private-tls                                             |
| supervisor.application_scheduler.CONNECTORS.KubernetesConnector.volumeMounts[]              | Volume mounts of plugins              | [...]                                                   |
| supervisor.application_scheduler.CONNECTORS.KubernetesConnector.volumeMounts[].name         | Name of volume mounts                 | private-tls                                             |
| supervisor.application_scheduler.CONNECTORS.KubernetesConnector.volumeMounts[].mountPath    | Path of volume mounts                 | /opt/ssl/cert/tls.crt                                   |
| supervisor.application_scheduler.CONNECTORS.KubernetesConnector.volumeMounts[].readOnly     | Read permission on the mounted volume | true                                                    |

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
          - name: REQUESTS_CA_BUNDLE
            value: /opt/ssl/cert/tls.crt
          - name: AWS_CA_BUNDLE
            value: /opt/ssl/cert/tls.crt
          - name: CLOUDFORET_CA_BUNDLE
            value: /opt/ssl/cert/tls.crt
        volumes:
          - name: private-tls
            secret:
              secretName: private-tls
        volumeMounts:
          - name: private-tls
            mountPath: /opt/ssl/cert/tls.crt
            readOnly: true
```

<br>
<br>
<br>

## 변경내용 반영

helm upgrade 및 pod 삭제 명령을 통해서 반영 할 수 있습니다.

```yaml
helm upgrade cloudforet cloudforet/spaceone -n spaceone -f values.yaml
kubectl delete po -n spaceone -l app.kubernetes.io/instance=cloudforet
```