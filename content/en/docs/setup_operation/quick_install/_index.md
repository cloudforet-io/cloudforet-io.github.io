---
title: "Quick Install Guide"
linkTitle: "Quick Install Guide"
weight: 1
url_dash_board: "/docs/guides/install_guide/quick_install_guide" 
date: 2021-08-10
description: >

---

## Overview
Quick install guide for SpaceONE with minikube.

## Preparation
Before you install SpaceONE, you need minikube, helm. <br>
Refer to the link below and proceed with the installation.

* [Minikube Install](https://minikube.sigs.k8s.io/docs/start/)
* [Helm Install](https://helm.sh/docs/intro/install/)


## Start Minikube
- Using v1.21.8 or below is recommended for kubernetes
~~~bash
minikube start --driver=docker --kubernetes-version=v1.21.8
~~~

## Install SpaceONE

### Namespace
Create namespace for SpaceONE.<br>
SpaceONE needs two namespaces, **spaceone** and **root-supervisor**.
~~~bash
kubectl create ns spaceone
kubectl create ns root-supervisor
~~~

Check namespace list.
~~~bash
kubectl get ns
~~~

### Helm Chart
I highly recommend changing kubenetes namespace to spaceone.
~~~bash
kubectl config set-context $(kubectl config current-context) --namespace spaceone
~~~

Register helm chart for SpaceONE.
~~~bash
helm repo add spaceone https://spaceone-dev.github.io/charts
helm repo list
helm repo update
~~~

### Install SpaceONE with helm chart
~~~bash
git clone https://github.com/spaceone-dev/charts.git
cd charts/examples/v1.9.1
helm install spaceone -f minikube.yaml spaceone/spaceone
~~~

You need to check status of pods.
~~~bash
kubectl get pod
~~~
![](/docs/setup_operation/quick_install/quick_install_img/quick_install_image_01.png)

Check STATUS **Completed** or **Running**.
It will take some time, so please wait.

### Create user domain
Delete initialize-spaceone pod and configmap
```
kubectl get pod | grep initialize-spaceone
---
initialize-spaceone-abcd-12345      0/1     Completed   0          --m
```
```
kubectl delete pod initialize-spaceone-abcd-12345
```
```
for i in `kubectl get cm | egrep "spacectl-|start" | awk '{print $1}'`; do kubectl delete cm $i; done
```

Install spaceone-initializer helm chart for user domain
```
helm install user-domain -f user-domain.yaml spaceone/spaceone-initializer
```

Check that the newly created initialize-space pod is completed.
```
kubectl get pod | grep initialize-spaceone
---
initialize-spaceone-abcd-12345      0/1     Completed   0          --m
```

## Port-forwarding
Since you have installed SpaceONE in your minikube, you don’t have any ingress like ALB or NGINX ingress controller.
We use **kubectl port-forward**.

~~~bash
kubectl port-forward -n spaceone svc/console 8080:80
kubectl port-forward -n spaceone svc/console-api 8081:80
~~~

Open two terminal then run at separate terminal.
![](/docs/setup_operation/quick_install/quick_install_img/quick_install_image_02.png)

### Tips
You can run in the background by adding & at the end.

~~~bash
kubectl port-forward -n spaceone svc/console 8080:80 &
kubectl port-forward -n spaceone svc/console-api 8081:80 &
~~~

## Start SpaceONE

### Log-In (Sign in for Root Account)
Open browser
([localhost:8080](http://localhost:8080))

| ID | PASSWORD |
|---|---|
| admin | Admin123!@# |

![](/docs/setup_operation/quick_install/quick_install_img/quick_install_image_03.png)

### Initial Setup
{{< video src="https://www.youtube.com/embed/zSoEg2v_JrE" title="spaceONE Basci Setup in 10 minutes">}}

