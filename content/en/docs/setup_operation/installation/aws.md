---
title: "AWS"
linkTitle: "AWS"
weight: 2
url_dash_board: "/docs/guides_v1/aws"
date: 2023-12-05
description: >
    Install Guide of Cloudforet on AWS
---
## Cloudforet Helm Charts 
A Helm Chart for Cloudforet `1.12`.

## Prerequisites
- Kubernetes 1.21+
- Helm 3.2.0+
- Service Domain & SSL Certificate (optional)
  - Console: `console.example.com`
  - REST API: `*.api.example.com`
  - gRPC API: `*.grpc.example.com`
  - Webhook: `webhook.example.com`
- MongoDB 5.0+ (optional)

### Cloudforet Architecture
![Cloudforet Architecture](../aws_img/aws_architecture.png)

## Installation
You can install the Cloudforet using the following the steps.

### 1) Add Helm Repository
```bash
helm repo add cloudforet https://cloudforet-io.github.io/charts
helm repo update
helm search repo cloudforet
```

### 2) Create Namespaces
```bash
kubectl create ns spaceone
kubectl create ns spaceone-plugin
```
If you want to use only one namespace, you don't create the `spaceone-plugin` namespace.

### 3) Create Role and RoleBinding
First, download the [rbac.yaml](https://github.com/cloudforet-io/charts/blob/master/examples/rbac.yaml) file.
```bash
wget https://raw.githubusercontent.com/cloudforet-io/charts/master/examples/rbac.yaml -O rbac.yaml
```
And execute the following command.
```bash
kubectl apply -f rbac.yaml -n spaceone-plugin
```
or 
```bash
kubectl apply -f https://raw.githubusercontent.com/cloudforet-io/charts/master/examples/rbac.yaml -n spaceone-plugin
```

### 4) Install Cloudforet Chart
```bash
helm install cloudforet cloudforet/spaceone -n spaceone
```

After executing the above command, check the status of the pod.
```bash
kubectl get pod -n spaceone

NAME                                       READY   STATUS             RESTARTS      AGE
board-64f468ccd6-v8wx4                     1/1     Running            0             4m16s
config-6748dc8cf9-4rbz7                    1/1     Running            0             4m14s
console-767d787489-wmhvp                   1/1     Running            0             4m15s
console-api-846867dc59-rst4k               2/2     Running            0             4m16s
console-api-v2-rest-79f8f6fb59-7zcb2       2/2     Running            0             4m16s
cost-analysis-5654566c95-rlpkz             1/1     Running            0             4m13s
cost-analysis-scheduler-69d77598f7-hh8qt   0/1     CrashLoopBackOff   3 (39s ago)   4m13s
cost-analysis-worker-68755f48bf-6vkfv      1/1     Running            0             4m15s
cost-analysis-worker-68755f48bf-7sj5j      1/1     Running            0             4m15s
cost-analysis-worker-68755f48bf-fd65m      1/1     Running            0             4m16s
cost-analysis-worker-68755f48bf-k6r99      1/1     Running            0             4m15s
dashboard-68f65776df-8s4lr                 1/1     Running            0             4m12s
file-manager-5555876d89-slqwg              1/1     Running            0             4m16s
identity-6455d6f4b7-bwgf7                  1/1     Running            0             4m14s
inventory-fc6585898-kjmwx                  1/1     Running            0             4m13s
inventory-scheduler-6dd9f6787f-k9sff       0/1     CrashLoopBackOff   4 (21s ago)   4m15s
inventory-worker-7f6d479d88-59lxs          1/1     Running            0             4m12s
mongodb-6b78c74d49-vjxsf                   1/1     Running            0             4m14s
monitoring-77d9bd8955-hv6vp                1/1     Running            0             4m15s
monitoring-rest-75cd56bc4f-wfh2m           2/2     Running            0             4m16s
monitoring-scheduler-858d876884-b67tc      0/1     Error              3 (33s ago)   4m12s
monitoring-worker-66b875cf75-9gkg9         1/1     Running            0             4m12s
notification-659c66cd4d-hxnwz              1/1     Running            0             4m13s
notification-scheduler-6c9696f96-m9vlr     1/1     Running            0             4m14s
notification-worker-77865457c9-b4dl5       1/1     Running            0             4m16s
plugin-558f9c7b9-r6zw7                     1/1     Running            0             4m13s
plugin-scheduler-695b869bc-d9zch           0/1     Error              4 (59s ago)   4m15s
plugin-worker-5f674c49df-qldw9             1/1     Running            0             4m16s
redis-566869f55-zznmt                      1/1     Running            0             4m16s
repository-8659578dfd-wsl97                1/1     Running            0             4m14s
secret-69985cfb7f-ds52j                    1/1     Running            0             4m12s
statistics-98fc4c955-9xtbp                 1/1     Running            0             4m16s
statistics-scheduler-5b6646d666-jwhdw      0/1     CrashLoopBackOff   3 (27s ago)   4m13s
statistics-worker-5f9994d85d-ftpwf         1/1     Running            0             4m12s
supervisor-scheduler-74c84646f5-rw4zf      2/2     Running            0             4m16s
```

> Scheduler pods are in `CrashLoopBackOff` or `Error` state. This is because the setup is not complete.

### 5) Initialize the Configuration  
First, download the [initializer.yaml](https://github.com/cloudforet-io/charts/blob/master/examples/initializer.yaml) file.
```bash
wget https://raw.githubusercontent.com/cloudforet-io/charts/master/examples/initializer.yaml -O initializer.yaml
```
And execute the following command.
```bash
helm install cloudforet-initializer cloudforet/spaceone-initializer -n spaceone -f initializer.yaml
```
or 
```bash
helm install cloudforet-initializer cloudforet/spaceone-initializer -n spaceone -f https://raw.githubusercontent.com/cloudforet-io/charts/master/examples/initializer.yaml
```

For more information about the initializer, please refer the [spaceone-initializer](https://github.com/cloudforet-io/spaceone-initializer).

### 6) Set the Helm Values and Upgrade the Chart
Complete the initialization, you can get the system token from the initializer pod logs.
```bash
# check pod name
kubectl logs initialize-spaceone-xxxx-xxxxx -n spaceone

...
TASK [Print Admin API Key] *********************************************************************************************
"{TOKEN}"

FINISHED [ ok=23, skipped=0 ] ******************************************************************************************

FINISH SPACEONE INITIALIZE
```

First, copy this TOKEN, then Create the `values.yaml` file and paste it to the TOKEN.
```yaml
console:
  production_json:
    # If you don't have a service domain, you refer to the following 'No Domain & IP Access' example.
    CONSOLE_API:
      ENDPOINT: https://console.api.example.com       # Change the endpoint
    CONSOLE_API_V2:
      ENDPOINT: https://console-v2.api.example.com    # Change the endpoint

global:
  shared_conf:
    TOKEN: '{TOKEN}'                                    # Change the system token
```

For more advanced configuration, please refer the following the links.
- Documents
  - [Parameters](https://github.com/cloudforet-io/charts/blob/master/docs/parameters.md)
- Examples
  - [Default Values](https://github.com/cloudforet-io/spaceone/blob/master/deploy/helm/values.yaml)

After editing the `values.yaml` file, upgrade the helm chart.
```bash
helm upgrade cloudforet cloudforet/spaceone -n spaceone -f values.yaml
kubectl delete po -n spaceone -l app.kubernetes.io/instance=cloudforet
```

### 7) Check the status of the pods
```bash
kubectl get pod -n spaceone
```

If all pods are in `Running` state, the setup is complete.

### 8) Ingress and AWS Load Balancer

In Kubernetes, Ingress is an API object that provides a load-balanced external IP address to access Services in your cluster. It acts as a layer 7 (HTTP/HTTPS) reverse proxy and can route traffic to other services based on the requested host and URL path.

For more information, see [What is an Application Load Balancer?](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html) on AWS and [ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/) in the Kubernetes documentation.

**Prerequisite**  

**Install AWS Load Balancer Controller**  
*AWS Load Balancer Controller* is a controller that helps manage ELB (Elastic Load Balancers) in a Kubernetes Cluster. Ingress resources are provisioned with Application Load Balancer, and service resources are provisioned with Network Load Balancer.   
Installation methods may vary depending on the environment, so please refer to the official guide document below.
- https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.5/deploy/installation/


**How to set up Cloudforet ingress**  

**1) Ingress Type**  
Cloudforet provisions a total of 3 ingresses through 2 files.
- Console : Ingress to access the domain
- REST API : Ingress for API service
  - console-api
  - console-api-v2

**2) Console ingress**  
Setting the ingress to accerss the console is as follows.
```yaml
cat <<EOF> spaceone-console-ingress.yaml
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: console-ingress
  namespace: spaceone
  annotations:
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80}]'
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/load-balancer-attributes: idle_timeout.timeout_seconds=600
    alb.ingress.kubernetes.io/healthcheck-protocol: HTTP
    alb.ingress.kubernetes.io/success-codes: 200-399
    alb.ingress.kubernetes.io/load-balancer-name: spaceone-console-ingress # Caution!! Must be fewer than 32 characters.
spec:
  ingressClassName: alb
  defaultBackend:
    service:
      name: console
      port:
        number: 80
EOF
```
```bash
# Apply ingress
kubectl apply -f spaceone-console-ingress.yaml
```

If you apply the ingress, it will be provisioned to AWS Load Balancer with the name `spaceone-console-ingress`. You can connect through the provisioned DNS name using HTTP (80 Port).

**3) REST API ingress**  
Setting the REST API ingress for the API service is as follows.
```yaml
cat <<EOF> spaceone-rest-ingress.yaml
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: console-api-ingress
  namespace: spaceone
  annotations:
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80}]'
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/load-balancer-attributes: idle_timeout.timeout_seconds=600
    alb.ingress.kubernetes.io/healthcheck-protocol: HTTP
    alb.ingress.kubernetes.io/success-codes: 200-399
    alb.ingress.kubernetes.io/load-balancer-name: spaceone-console-api-ingress # Caution!! Must be fewer than 32 characters.
spec:
  ingressClassName: alb
  defaultBackend:
    service:
      name: console-api
      port:
        number: 80
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: console-api-v2-ingress
  namespace: spaceone
  annotations:
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80}]'
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/load-balancer-attributes: idle_timeout.timeout_seconds=600
    alb.ingress.kubernetes.io/healthcheck-protocol: HTTP
    alb.ingress.kubernetes.io/success-codes: 200-399
    alb.ingress.kubernetes.io/load-balancer-name: spaceone-console-api-v2-ingress
spec:
  ingressClassName: alb
  defaultBackend:
    service:
      name: console-api-v2-rest
      port:
        number: 80
EOF
```

```bash
# Apply ingress
kubectl apply -f spaceone-rest-ingress.yaml
```

REST API ingress provisions two ALBs. The DNS Name of the REST API must be saved as `console.CONSOLE_API.ENDPOINT` and `console.CONSOLE_API_V2.ENDPOINT` in the `values.yaml` file.

**4) Check DNS Name**  
The DNS name will be generated as `http://{ingress-name}-{random}.{region-code}.elb.amazoneaws.com`. You can check this through the `kubectl get ingress -n spaceone` command in Kubernetes.
 ```bash
kubectl get ingress -n spaceone

NAME                     CLASS   HOSTS   ADDRESS                                                                      PORTS   AGE
console-api-ingress      alb     *       spaceone-console-api-ingress-xxxxxxxxxx.{region-code}.elb.amazonaws.com      80      15h
console-api-v2-ingress   alb     *       spaceone-console-api-v2-ingress-xxxxxxxxxx.{region-code}.elb.amazonaws.com   80      15h
console-ingress          alb     *       spaceone-console-ingress-xxxxxxxxxx.{region-code}.elb.amazonaws.com          80      15h

 ```
Or, you can check it in AWS Console. You can check it in EC2 > Load balancer as shown in the image below.

![spaceone-console-ingress-alb](../aws_img/spaceone-console-ingress-alb.png)

**5) Connect with DNS Name**  
When all ingress is ready, edit the `values.yaml` file, restart pods, and access the console.

```yaml
console:
  production_json:
    # If you don't have a service domain, you refer to the following 'No Domain & IP Access' example.
    CONSOLE_API:
      ENDPOINT: http://spaceone-console-api-ingress-xxxxxxxxxx.{region-code}.elb.amazonaws.com
    CONSOLE_API_V2:
      ENDPOINT: http://spaceone-console-api-v2-ingress-xxxxxxxxxx.{region-code}.elb.amazonaws.com
```

After applying the prepared `values.yaml` file, restart the pods.
```bash
helm upgrade cloudforet cloudforet/spaceone -n spaceone -f values.yaml
kubectl delete po -n spaceone -l app.kubernetes.io/instance=cloudforet
```

Now you can connect to Cloudforet with the DNS Name of `spaceone-console-ingress`.
- `http://spaceone-console-ingress-xxxxxxxxxx.{region-code}.elb.amazonaws.com`

## Advanced ingress settings
**How to register an SSL certificate**  
We will guide you through how to register a certificate in ingress for SSL communication.  
There are two methods for registering a certificate. One is when using ACM(AWS Certificate Manager), and the other is how to register an external certificate. 

**How to register an ACM certificate with ingress**  
If the certificate was issued through ACM, you can register the SSL certificate by simply registering acm arn in ingress.  

First of all, please refer to the AWS official guide document on how to issue a certificate.
- [https://docs.aws.amazon.com/ko_kr/acm/latest/userguide/gs.html](https://docs.aws.amazon.com/ko_kr/acm/latest/userguide/gs.html)

How to register the issued certificate is as follows. Please check the options added or changed for SSL communication in existing ingress.

> **Check out the changes in ingress.**  
Various settings for SSL are added and changed. Check the contents of `metadata.annotations`.  
Also, check the added contents such as `ssl-redirect` and `spec.rules.host` in `spec.rules`.

- spaceone-console-ingress.yaml
```diff 
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: console-ingress
  namespace: spaceone
  annotations:
+   alb.ingress.kubernetes.io/actions.ssl-redirect: '{"Type": "redirect", "RedirectConfig": { "Protocol": "HTTPS", "Port": "443", "StatusCode": "HTTP_301"}}'
+   alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80}, {"HTTPS":443}]'
-   alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80}]'
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/load-balancer-attributes: idle_timeout.timeout_seconds=600
    alb.ingress.kubernetes.io/healthcheck-protocol: HTTP
+   alb.ingress.kubernetes.io/certificate-arn: "arn:aws:acm:..."  # Change the certificate-arn
    alb.ingress.kubernetes.io/success-codes: 200-399
    alb.ingress.kubernetes.io/load-balancer-name: spaceone-console-ingress # Caution!! Must be fewer than 32 characters.
spec:
  ingressClassName: alb
- defaultBackend:
-   service:
-     name: console
-     port:
-       number: 80
+ rules:
+   - http:
+       paths:
+         - path: /*
+           pathType: ImplementationSpecific
+           backend:
+             service:
+               name: ssl-redirect
+               port:
+                 name: use-annotation
+   - host: "console.example.com"  # Change the hostname
+     http:
+       paths:
+         - path: /*
+           pathType: ImplementationSpecific
+           backend:
+             service:
+               name: console 
+               port:
+                 number: 80
```

- spaceone-rest-ingress.yaml
```diff
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: console-api-ingress
  namespace: spaceone
  annotations:
+   alb.ingress.kubernetes.io/actions.ssl-redirect: '{"Type": "redirect", "RedirectConfig": { "Protocol": "HTTPS", "Port": "443", "StatusCode": "HTTP_301"}}'
+   alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80}, {"HTTPS":443}]'
-   alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80}]'
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/load-balancer-attributes: idle_timeout.timeout_seconds=600
    alb.ingress.kubernetes.io/healthcheck-protocol: HTTP
+   alb.ingress.kubernetes.io/certificate-arn: "arn:aws:acm:..."  # Change the certificate-arn
    alb.ingress.kubernetes.io/success-codes: 200-399
    alb.ingress.kubernetes.io/load-balancer-name: spaceone-console-api-ingress # Caution!! Must be fewer than 32 characters.
spec:
  ingressClassName: alb
- defaultBackend:
-   service:
-     name: console-api
-     port:
-       number: 80
+ rules:
+   - http:
+       paths:
+         - path: /*
+           pathType: ImplementationSpecific
+           backend:
+             service:
+               name: ssl-redirect
+               port:
+                 name: use-annotation
+   - host: "console.api.example.com"  # Change the hostname
+     http:
+       paths:
+         - path: /*
+           pathType: ImplementationSpecific
+           backend:
+             service:
+               name: console-api
+               port:
+                 number: 80
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: console-api-v2-ingress
  namespace: spaceone
  annotations:
+   alb.ingress.kubernetes.io/actions.ssl-redirect: '{"Type": "redirect", "RedirectConfig": { "Protocol": "HTTPS", "Port": "443", "StatusCode": "HTTP_301"}}'
+   alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80}, {"HTTPS":443}]'
-   alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80}]'
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/load-balancer-attributes: idle_timeout.timeout_seconds=600
    alb.ingress.kubernetes.io/healthcheck-protocol: HTTP
+   alb.ingress.kubernetes.io/certificate-arn: "arn:aws:acm:..."  # Change the certificate-arn
    alb.ingress.kubernetes.io/success-codes: 200-399
    alb.ingress.kubernetes.io/load-balancer-name: spaceone-console-api-v2-ingress
spec:
  ingressClassName: alb
- defaultBackend:
-   service:
-     name: console-api-v2-rest
-     port:
-       number: 80
+ rules:
+   - http:
+       paths:
+         - path: /*
+           pathType: ImplementationSpecific
+           backend:
+             service:
+               name: ssl-redirect
+               port:
+                 name: use-annotation
+   - host: "console-v2.api.example.com"  # Change the hostname
+     http:
+       paths:
+         - path: /*
+           pathType: ImplementationSpecific
+           backend:
+             service:
+               name: console-api-v2-rest
+               port:
+                 number: 80
```

SSL application is completed when the changes are reflected through the kubectl command.
```bash
kubectl apply -f spaceone-console-ingress.yaml
kubectl apply -f spaceone-rest-ingress.yaml
```

**How to register an SSL/TLS certificate**  
Certificate registration is possible even if you have an external certificate that was previously issued. You can register by adding a Kubernetes `secret` using the issued certificate and declaring the added `secret` name in ingress.

Create SSL/TLS certificates as Kubernetes secrets. There are two ways:

**1. Using yaml file**  
You can add a secret to a yaml file using the command below.  
```yaml
kubectl apply -f <<EOF> tls-secret.yaml
apiVersion: v1
data:
  tls.crt: {your crt}   # crt
  tls.key: {your key}   # key
kind: Secret
metadata:
  name: tls-secret
  namespace: spaceone
type: kubernetes.io/tls
EOF
```

**2. How to use the command if a file exists**  
If you have a crt and key file, you can create a secret using the following command.

```yaml
kubectl create secret tls tlssecret --key tls.key --cert tls.crt
```

**Add tls secret to Ingress**  
Modify ingress using registered secret information.

> **ingress-nginx settings**  
Using secret and tls may require setup methods using ingress-nginx. For more information, please refer to the following links:  
> - [https://kubernetes.github.io/ingress-nginx/user-guide/tls/](https://kubernetes.github.io/ingress-nginx/user-guide/tls/)
> - [https://kubernetes.io/docs/concepts/services-networking/ingress/#tls](https://kubernetes.io/docs/concepts/services-networking/ingress/#tls)

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: console-ingress
  namespace: spaceone
  annotations:
    alb.ingress.kubernetes.io/actions.ssl-redirect: '{"Type": "redirect", "RedirectConfig": { "Protocol": "HTTPS", "Port": "443", "StatusCode": "HTTP_301"}}'
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80}, {"HTTPS":443}]'
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/load-balancer-attributes: idle_timeout.timeout_seconds=600
    alb.ingress.kubernetes.io/healthcheck-protocol: HTTP
    alb.ingress.kubernetes.io/success-codes: 200-399
    alb.ingress.kubernetes.io/load-balancer-name: spaceone-console-ingress # Caution!! Must be fewer than 32 characters.
spec:
  tls:
  - hosts:
      - console.example.com        # Change the hostname
    secretName: tlssecret          # Insert secret name
  rules:
    - http:
        paths:
          - path: /*
            pathType: ImplementationSpecific
            backend:
              service:
                name: ssl-redirect
                port:
                  name: use-annotation
    - host: "console.example.com"  # Change the hostname
      http:
        paths:
          - path: /*
            pathType: ImplementationSpecific
            backend:
              service:
                name: console 
                port:
                  number: 80
```
