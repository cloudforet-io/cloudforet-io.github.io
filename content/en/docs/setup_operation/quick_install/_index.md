---
title: "Quick Install Guide"
linkTitle: "Quick Install Guide"
weight: 1
url_dash_board: "/docs/guides_v1/install_guide/quick_install_guide"
date: 2021-08-10
description: >

---

## Overview
Quick install guide for SpaceONE with minikube.

## Preparation
Before installing SpaceONE, you need minikube and helm installed. <br>
Refer to the link below and proceed with the installation.

* [Minikube Installation](https://minikube.sigs.k8s.io/docs/start/)
* [Helm Installation](https://helm.sh/docs/intro/install/)


## Start Minikube
- Spaceone requires a minimum of 4GB of memory.
~~~bash
minikube start --driver=docker --memory=4096mb
~~~

## Install SpaceONE

### Namespace
Create namespace a for SpaceONE.<br>
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
It is highly recommended to change kubernetes namespace to spaceone.
~~~bash
kubectl config set-context $(kubectl config current-context) --namespace spaceone
~~~

Register helm chart for SpaceONE.
~~~bash
helm repo add spaceone https://cloudforet-io.github.io/charts
helm repo list
helm repo update
~~~

### Install SpaceONE with helm chart
~~~bash
git clone https://github.com/cloudforet-io/charts.git
cd charts/examples/v1.10.4
helm install spaceone -f minikube.yaml spaceone/spaceone --version 1.10.4
~~~

If you are using Amazon EC2, change ***localhost*** to your Amazon EC2's public IP address at minikube.yaml.

* ENDPOINT
* DOMAIN_NAME_REF

~~~
  production_json:
      CONSOLE_API:
        ENDPOINT: http://##### EC2 public IP ####:8081
      DOMAIN_NAME: spaceone
      DOMAIN_NAME_REF: spaceone
      BILLING_ENABLED: []
~~~

You need to check status of pods.
~~~bash
kubectl get pod
~~~
![](/docs/setup_operation/quick_install/quick_install_img/quick_install_image_01.png)

Check if STATUS is **Completed** or **Running**.
It will take some time, so please wait.

## Port-forwarding
Installing SpaceONE on minikube doesn't provide any Ingress objects such as Amazon ALB or NGINX ingress controller.
We can use **kubectl port-forward** instead.

~~~bash
kubectl port-forward -n spaceone svc/console 8080:80 --address='0.0.0.0'
kubectl port-forward -n spaceone svc/console-api 8081:80 --address='0.0.0.0'
~~~

Open two terminals then run each command at separate terminal.
![](/docs/setup_operation/quick_install/quick_install_img/quick_install_image_02.png)

### Tips
You can run **kubectl port-forward** in background by adding & at the end.

~~~bash
kubectl port-forward -n spaceone svc/console 8080:80 --address='0.0.0.0' &
kubectl port-forward -n spaceone svc/console-api 8081:80 --address='0.0.0.0' &
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

## Reference

If you are using Amazon Linux(RedHat Linux), you have to install required dependencies.

~~~bash
yum install socat
~~~
