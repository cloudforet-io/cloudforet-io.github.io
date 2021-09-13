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

Before you install SpaceONE, you need minikube, helm.

Refer to the link below and proceed with the installation.<br><br>

**Minikube Install**

&emsp;
<a href="https://minikube.sigs.k8s.io/docs/start/" target="_blank">https://minikube.sigs.k8s.io/docs/start/</a>

**Helm Install**

&emsp;
<a href="https://helm.sh/docs/intro/install/" target="_blank">https://helm.sh/docs/intro/install/</a><br><br>

Using v1.20.0 or below is recommended for minikube and kubectl.

Check your version.

~~~bash
minikube version
kubectl version
~~~

## Start Minikube

~~~bash
minikube start --driver=docker
~~~

## Install SpaceONE

### Namespace
Create namespace for SpaceONE.

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
cd charts/examples/v1.7.4
helm install spaceone -f minikube.yaml spaceone/spaceone --devel
~~~

You need to check status of pods.
{{% pageinfo color=“300” %}}
**kubectl get pod**

{{% /pageinfo %}}

<img src="/docs/setup/Quick_Install/Quick_Install_img/quick_install_image_01.png" width="800" height="500">
<br><br>

Check STATUS **Completed** or **Running**.

It will take some time, so please wait.

## Port-forwarding

Since you have installed SpaceONE in your minikube, you don’t have any ingress like ALB or NGINX ingress controller.
We use **kubectl port-forward**.

~~~bash
kubectl port-forward -n spaceone svc/console 8080:80
kubectl port-forward -n spaceone svc/console-api 8081:80
~~~

Open two terminal then run at separate terminal.

<img src="/docs/setup/Quick_Install/Quick_Install_img/quick_install_image_02.png" width="800" height="100">

### Tips
You can run in the background by adding & at the end.

~~~bash
kubectl port-forward -n spaceone svc/console 8080:80 &
kubectl port-forward -n spaceone svc/console-api 8081:80 &
~~~

## Start SpaceONE

### Log-In

Open browser(<a href='http://localhost:8080' target='_blank'>http://localhost:8080</a>)

| | |
|---   | ---   |
| ID | user1@example.com |
| PASSWORD | User1234! |

<img src="/docs/setup/Quick_Install/Quick_Install_img/quick_install_image_03.png" width="800" height="500">

### Initial Setup
{{< video src="https://www.youtube.com/embed/zSoEg2v_JrE" >}}

