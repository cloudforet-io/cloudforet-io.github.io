---
title: "기존 인증서로 Secret 만들기"
linkTitle: "기존 인증서로 Secret 만들기"
weight: 7
date: 2023-07-12
description: >
    공인 혹은 사설 인증서를 발급 받은 경우, 발급된 인증서를 이용한 secret 생성 및 적용 방법을 설명합니다.
no_list: true
---

공인 혹은 사설 인증서를 이미 발급받은 경우에는 기존 인증서를 통해서 Secret을 생성 할 수 있습니다. 다음은 `certificate_secret.yaml` 파일을 이용하여 Secret을 생성하는 방법입니다.

#### Create Secret from certificate_secret.yaml file

기존에 발급받은 인증서가 준비 되었다면 `certificate_secert.yaml` 파일을 편집합니다. 해당 파일은 다음의 링크에서 다운로드 할 수 있습니다. 또한 다운로드받은 내용을 아래와 같이 편집하여 사용 합니다. [https://github.com/cloudforet-io/charts/blob/master/examples/ingress/on_premise/certificate_secret.yaml](https://github.com/cloudforet-io/charts/blob/master/examples/ingress/on_premise/certificate_secret.yaml)

```shell 
cat <<EOF> certificate_secret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: spaceone-tls
  namespace: spaceone           # Change the namespace
data:
  tls.crt: base64 encoded cert  # openssl base64 -in cert.pem -out cert.base64
  tls.key: base64 encoded key   # openssl base64 -in key.pem -out key.base64
type: kubernetes.io/tls
EOF
```

`certificate_secret.yaml` 파일을 다음 명령어를 통해서 `spaceone` namespace에 반영합니다.

```shell 
kubectl apply -f certificate_secret.yaml -n spaceone
```
