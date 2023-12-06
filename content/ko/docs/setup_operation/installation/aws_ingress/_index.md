---
title: "AWS Ingress"
linkTitle: "AWS Ingress"
weight: 2
url_dash_board: "/docs/guides_v1/install_guide/aws"
date: 2023-11-08
description: >
    AWS EKS에서 Cloudforet console에 접속하는 방법을 안내합니다.
---
## Ingress와 AWS Load Balancer
Kubernetes에서 Ingress는 cluster의 Services에 access할 수 있도록 부하가 분산된 외부 IP 주소를 제공하는 API 객체입니다. 계층 7 (HTTP/HTTPS) 리버스 프록시 역할을 하며 요청된 호스트 및 URL 경로를 기반으로 트래픽을 다른 서비스로 라우팅할 수 있습니다. 

AWS EKS에서는 ingress를 생성할 때 애플리케이션 트래픽을 로드 밸런싱하는 AWS Application Load Balancer(ALB)가 프로비저닝 됩니다.  
자세한 내용은 AWS에 [Application Load Balancer란 무엇인가요?](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html) 및 Kubernetes 설명서의 [ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/)를 참조하세요.

### 선행작업
**AWS Load Balancer Controller 설치**  
*AWS Load Balancer Controller*는 Kubernetes Cluster에서 ELB(Elastic Load Balancers)를 관리하는데 도움을 주는 컨트롤러입니다. Ingress resource는 Application Load Balancer로, Service resource는 Network Load Balancer로 Provisioning 합니다.
설치 방법은 환경에 따라 다를 수 있으니 아래 공식 가이드 문서를 참고하세요.
- https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.5/deploy/installation/


## Cloudforet ingress 설정 방법
### 1) Ingress 종류
Cloudforet에서는 총 2개의 파일을 통해서 3개의 ingress를 프로비저닝 합니다.
- Console : 도메인에 접속하기 위한 ingress
- REST API : API 서비스를 위한 ingress
  - console-api
  - console-api-v2

### 2) Console ingress
Console에 접속하기 위한 ingress를 아래와 같이 설정합니다.
```yaml
cat <<EOF> cloudforet-console-ingress.yaml
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

해당 ingress를 apply하면 `spaceone-console-ingress`라는 이름으로 AWS Load Balancer에 프로비져닝 됩니다. HTTP(80 Port)를 사용하여 프로비져닝 된 DNS 이름을 통해서 접속 가능합니다.

### 3) REST API ingress
다음은 api 서비스를 위한 REST API ingress를 아래와 같이 설정합니다.

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

REST API ingress는 2개의 ALB를 프로비저닝합니다. REST API의 DNS Name은 `values.yaml`파일에 `console.CONSOLE_API.ENDPOINT, console.CONSOLE_API_V2.ENDPOINT`로 각각 추가 되어야하기 때문에 반드시 저장해야 합니다.

### 4) DNS Name 확인
DNS 이름은 `http://{ingress-name}-{random}.{region-code}.elb.amazoneaws.com` 와 같이 생성됩니다. kubernetes에서 `kucectl get ingress -n spaceone` 명령를 통해서 확인 가능합니다.
 ```bash
kubectl get ingress -n spaceone

NAME                     CLASS   HOSTS   ADDRESS                                                                      PORTS   AGE
console-api-ingress      alb     *       spaceone-console-api-ingress-xxxxxxxxxx.{region-code}.elb.amazonaws.com      80      15h
console-api-v2-ingress   alb     *       spaceone-console-api-v2-ingress-xxxxxxxxxx.{region-code}.elb.amazonaws.com   80      15h
console-ingress          alb     *       spaceone-console-ingress-xxxxxxxxxx.{region-code}.elb.amazonaws.com          80      15h

 ```
또는, AWS Console에서 확인 가능합니다. EC2 > Load balancer에서 아래 이미지와 같이 확인 할 수 있습니다.

![spaceone-console-ingress-alb](spaceone-console-ingress-alb.png)

### 5) DNS Name으로 접속
ingress가 모두 준비 되었다면 `values.yaml` 파일을 수정하고 pods를 재시작해서 console에 접속합니다.

```yaml
console:
  production_json:
    # If you don't have a service domain, you refer to the following 'No Domain & IP Access' example.
    CONSOLE_API:
      ENDPOINT: http://spaceone-console-api-ingress-xxxxxxxxxx.{region-code}.elb.amazonaws.com
    CONSOLE_API_V2:
      ENDPOINT: http://spaceone-console-api-v2-ingress-xxxxxxxxxx.{region-code}.elb.amazonaws.com
```

준비된 `values.yaml` 파일을 적용 후 pods를 재시작 합니다.
```bash
helm upgrade cloudforet cloudforet/spaceone -n spaceone -f values.yaml
kubectl delete po -n spaceone -l app.kubernetes.io/instance=cloudforet
```

이제 `spaceone-console-ingress` 의 DNS Name으로 Cloudforet에 접속할 수 있습니다.
- `http://spaceone-console-ingress-xxxxxxxxxx.{region-code}.elb.amazonaws.com`

# Advanced ingress settings
## SSL 인증서 등록 방법
SSL 통신을 위해서 ingress에 인증서를 등록하는 방법을 안내합니다.
인증서 등록을 위해한 2가지 방법이 있습니다. ACM(AWS Certificate Manager)를 이용하는 경우와 외부 인증서를 등록하는 방법입니다.

### ACM 인증서를 ingress에 등록하는 방법
ACM을 통해서 인증서를 발급받은 경우라면 ingress에 간단히 acm arn을 등록하는 것으로 SSL 인증서 등록을 할 수 있습니다. 

우선, ACM 인증서를 발급받는 방법은 AWS 공식 가이드 문서를 참고하세요.
- [https://docs.aws.amazon.com/ko_kr/acm/latest/userguide/gs.html](https://docs.aws.amazon.com/ko_kr/acm/latest/userguide/gs.html)

발급받은 인증서를 등록하는 방법은 아래와 같습니다. 기존 ingress에서 SSL 통신을 위해 추가, 변경되는 옵션들을 확인합니다.

> **ingress에서 변경된 내용을 확인하세요.**  
ssl을 위한 다양한 설정이 추가, 변경됩니다. `metadata.annotations` 내용을 확인하세요.  
그리고 `spec.rules`에서 `ssl-redirect` 및 `spec.rules.host` 등 추가된 내용들을 확인하세요.

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

변경된 내용을 kubectl 명령어를 통해서 반영하면 SSL 적용이 완료됩니다.
```bash
kubectl apply -f spaceone-console-ingress.yaml
kubectl apply -f spaceone-rest-ingress.yaml
```

### SSL/TLS 인증서를 등록하는 방법
기존에 발급받은 외부 인증서가 있는 경우에도 인증서 등록이 가능합니다. 발급받은 인증서를 이용하여 Kubernetes `secret` 를 추가하고, 추가된 `secret` 이름을 ingress에 선언하는 것으로 등록이 가능합니다.  

SSL/TLS 인증서를 Kubernetes secret으로 생성합니다. 방법은 2가지로 아래와 같습니다.

**1. yaml file을 이용한 방법**  
아래 명령어를 통해서 yaml file로 secret을 추가할 수 있습니다.  
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

**2. 파일이 있을 경우 명령어를 이용한 방법**  
crt와 key file이 있는 경우 다음의 명령어를 이용하여 secret을 생성할 수 있습니다.

```yaml
kubectl create secret tls tlssecret --key tls.key --cert tls.crt
```

### Ingress에 tls secret을 추가
등록된 secret 정보를 이용하여 ingress를 수정합니다.  

> **ingress-nginx 설정**  
secret과 tls를 이용하는 방법에는 ingress-nginx를 활용한 설정 방법들이 필요할 수 있습니다. 자세한 내용은 다음 링크들를 참고하세요.  
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
