---
title: "Install Guide - On Premise"
linkTitle: "Install Guide - On Premise"
weight: 3
url_dash_board: "/docs/guides_v1/on_premise_install_guide"
date: 2022-01-05
description: >
    Install Guide of CloudForet on On Premise
---

## Preparation

### Helm
- Register helm chart of CloudForet

```shell
$ helm repo add cloudforet https://cloudforet-io.github.io/charts
$ helm repo list
$ helm repo update cloudforet
```
or
- Download helm chart directly using wget to your workspace

```shell
$ wget https://github.com/cloudforet-io/charts/releases/download/spaceone-1.10.5/spaceone-1.10.5.tgz
$ tar xzf spaceone-1.10.5.tgz
$ mv spaceone /move/to/your/workspace
```
```shell
$ wget https://github.com/cloudforet-io/charts/releases/download/spaceone-initializer-1.2.21/spaceone-initializer-1.2.21.tgz
$ tar xzf spaceone-initializer-1.2.21.tgz
$ mv spaceone-initializer /move/to/your/workspace
```
```shell
$ wget https://github.com/cloudforet-io/charts/releases/download/docs-2.1.6/docs-2.1.6.tgz
$ tar xzf docs-2.1.6.tgz
$ mv docs /move/to/your/workspace
```

### Pre-install
- Create a ConfigMap for global configuration
    - See the example files [here]().
```shell
$ kubectl create -f shared.yaml
```

- Create a Secret for your private image registry using shell
```shell
$ vim create_registry_type_secret.sh
---
KUBECTL='kubectl'
SECRET_NAME='<secret_name>'
USERNAME='<user_name>'
PASSWORD='<password>'
REGISTRY_ADDRESS='<registry_address>'

$KUBECTL create secret docker-registry $SECRET_NAME \
    --docker-server=$REGISTRY_ADDRESS \
    --docker-username=$USERNAME \
    --docker-password=$PASSWORD \
    --docker-email=user@example.com
```

```shell
$ sh create_registry_type_secret.sh
```

## Install cloudforet with helm chart

> NOTE: If you downloaded helm chart directly using wget, replace cloudforet/{chart} to workspace/{chart} in the guide below.

### 1. Install cloudforet
- See the example files [here]().
```shell
$ helm install cloudforet -f values.yaml -f frontend.yaml -f database.yaml cloudforet/spaceone
```

### 2. Create cloudforet domains
- See the example files [here]().

> NOTE: After running the command, Make sure that the initializer-spaceone pod status is completed 
```shell
$ helm install domain -f domain.yaml cloudforet/spaceone-initializer
```

### 3. Get system token
- Check log of initializer-spaceone pod and copy `system_token`
```shell
$ kubectl get pod
NAME                                 READY   STATUS      RESTARTS        AGE
(omit)
initialize-spaceone-****-****      0/1     Completed   0               4h52m
(omit)
```
```shell
$ kubectl logs initializer-****-****

---
(omit)
TASK [Print Admin API Key] *********************************************************************************************
"<system_token>"

FINISHED [ ok=62, skipped=0 ] ******************************************************************************************

FINISH SPACEONE INITIALIZE
```
- Replace `<replace_token>` to `<system_token>` in [values.yaml]()

example)
```diff
notification:
    enabled: true
    replicas: 1
    image:
      name: harbor.dev.spaceone.dev/spaceone-hbr/notification
      version: 1.10.4

(omit)

    application_scheduler:
+       TOKEN: <replace_token> -> "******"

```

### 4. Upgrade cloudforet
```shell
$ helm upgrade cloudforet -f values.yaml -f frontend.yaml -f database.yaml cloudforet/spaceone
```

## Additional installation

### install docs
- See the example files [here]().
```shell
$ helm install docs -f docs.yaml cloudforet/docs
```

### install spacectl
- See the example files [here]().
```shell
$ helm install spacectl -f docs.yaml cloudforet/spacectl
```

### install ingress
- (option) Generate a TLS secret for HTTPS Connection
```shell
$ kubectl create secret tls web-ssl --key web_ssl.pem --cert web_ssl.csr
```
```shell
$ kubectl create secret tls api-ssl --key api_ssl.pem --cert api_ssl.csr
```

- Create ingress
    - See the example files [here]().
```shell
$ kubectl apply -f assets-ingress.yaml
$ kubectl apply -f console-ingress.yaml
$ kubectl apply -f docs-ingress.yaml
$ kubectl apply -f grpc-ingress.yaml
$ kubectl apply -f rest-ingress.yaml
```