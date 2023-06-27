---
title: "Set plugin certificate"
linkTitle: "Set plugin certificate"
weight: 1
date: 2023-06-20
description: >
  Describes how to set up private certificates for plugins used in Cloudforet.
no_list: true
---

![set_plugin_certificate](/docs/setup_operation/configuration/set_plugin_certificate_img/set_plugin_certificate.png)

If Cloudforet is built in an on-premise environment, it can be accessed through a proxy server without direct communication with the Internet.  
At this time, a private certificate is required when communicating with the proxy server.  
First, configure the secret with the prepared private certificate and mount it on the private-tls volume.  
After that, set the value of various environment variables required to set the certificate in supervisor's KubernetesConnectorto be the path of tls.crt in the private-tls volume.

<br>
<br>
<br>

## Register the prepared private certificate as a Kubernetes Secret

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

## Set up on KubernetesConnector of supervisor

| Parameter                                                                                   | Description                           | Default                                                 |
|:--------------------------------------------------------------------------------------------|---------------------------------------|:--------------------------------------------------------|
| supervisor.application_scheduler                                                            | Configuration of supervisor scheduler | {...}                                                   |
| supervisor.application_scheduler.CONNECTORS.KubernetesConnector.env[]                       | Environment variables for plugin      | [...]                                                   |
| supervisor.application_scheduler.CONNECTORS.KubernetesConnector.env[].name                  | Name of environment variable          | REQUESTS_CA_BUNDLE, AWS_CA_BUNDLE, CLOUDFORET_CERT_PATH |
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
          - name: CLOUDFORET_CERT_PATH
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

## Update

You can apply the changes through the helm upgrade command and by deleting the pods

```yaml
helm upgrade cloudforet cloudforet/spaceone -n spaceone -f values.yaml
kubectl delete po -n spaceone -l app.kubernetes.io/instance=cloudforet
```