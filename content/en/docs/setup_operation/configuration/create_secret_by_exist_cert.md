---
title: "Create secret by exist cert"
linkTitle: "Create secret by exist cert"
weight: 7
date: 2023-07-12
description: >
    If a public or private certificate is issued, it explains how to create and apply a secret using the issued certificate.
no_list: true
---

If a public or private certificate has already been issued, you can create a secret through the existing certificate. The following is how to create a secret using the `certificate_secret.yaml` file.

#### Create Secret from certificate_secret.yaml file

If the certificate is ready, edit the `certificate_secert.yaml` file. The file can be downloaded from the link below. In addition, the downloaded content is edited and used as follows. [https://github.com/cloudforet-io/charts/blob/master/examples/ingress/on_premise/certificate_secret.yaml](https://github.com/cloudforet-io/charts/blob/master/examples/ingress/on_premise/certificate_secret.yaml)

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

Apply the `certificate_secret.yaml` file to the `spaceone` namespace through the following command.

```shell 
kubectl apply -f certificate_secret.yaml -n spaceone
```