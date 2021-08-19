---
title: "Quick Install Guide"
linkTitle: "Quick Install Guide"
weight: 1
url_dash_board: "/docs/guides/install_guide/quick_install_guide" 
date: 2021-08-10
description: >

---

# Overview

Quick install guide for SpaceONE with minikube.

## Preparation

Before you install SpaceONE, you need minikube, helm.

Refer to the link below and proceed with the installation.

<ul>
<li><a href="https://minikube.sigs.k8s.io/docs/start/" target="_blank">Install Minikube</a></li>
<li><a href="https://helm.sh/docs/intro/install/" target="_blank">Install Helm</a></li>
</ul>
minikube and kubectl recommend below v1.20.0<br><br>

**Check your version.**
{{% pageinfo color=“300” %}}
**minikube version**

**kubectl version**
{{% /pageinfo %}}

## Start Minikube
 
{{% pageinfo color=“300” %}}
**cd ~/.kube**
{{% /pageinfo %}}

{{% pageinfo color=“300” %}}
**minikube start --driver=docker**
{{% /pageinfo %}}

## Install SpaceONE

### Namespace
Create namespace for SpaceONE

SpaceONE needs two namespaces, **spaceone** and **root-supervisor**

{{% pageinfo color=“300” %}}
**kubectl create ns spaceone**

**kubectl create ns root-supervisor**
{{% /pageinfo %}}

You can check namespace list.

{{% pageinfo color=“300” %}}
**kubectl get ns**
{{% /pageinfo %}}
I highly recommend changing kubenetes namespace to spaceone.

{{% pageinfo color=“300” %}}
**kubectl config set-context $(kubectl config current-context) --namespace spaceone**
{{% /pageinfo %}}

### Helm Chart

Register helm chart for SpaceONE.

{{% pageinfo color=“300” %}}
**helm repo add spaceone https://spaceone-dev.github.io/charts**

**helm repo list**

**helm repo update**
{{% /pageinfo %}}

### Install SpaceONE with helm chart

{{% pageinfo color=“300” %}}
**git clone https://github.com/spaceone-dev/charts.git**

**cd charts/examples/v1.8.1**

**helm install spaceone -f minikube.yaml spaceone/spaceone --devel**
{{% /pageinfo %}}

You need to check status of pods.
{{% pageinfo color=“300” %}}
**kubectl get pod**

{{% /pageinfo %}}

![](/docs/setup_manage_spaceone/install_guide/Quick_Install/Quick_Install_img/quick_install_image_01.png)

Check STATUS **Completed** or **Running**.

It will take some time, so please wait.

## Port-forwarding

Since you have installed SpaceONE in your minikube, you don’t have any ingress like ALB or NGINX ingress controller.
We use **kubectl port-forward**

{{% pageinfo color=“300” %}}
**kubectl port-forward -n spaceone svc/console 8080:80**

**kubectl port-forward -n spaceone svc/console-api 8081:80**
{{% /pageinfo %}}

Open two terminal then run at separate terminal.
<br>
![](/docs/setup_manage_spaceone/install_guide/Quick_Install/Quick_Install_img/quick_install_image_02.png)

**Tips**

You can run in the background by adding & at the end.
<br>
![](/docs/setup_manage_spaceone/install_guide/Quick_Install/Quick_Install_img/quick_install_image_03.png)


## Enjoy

Open browser(<a href='http://localhost:8080' target='_blank'>http://localhost:8080</a>)

| Key | Value |
|---   | ---   |
| ID | user1@example.com |
| PASSWORD | User1234! |

### Initial Setup

<iframe width="750" height="400" src="https://www.youtube.com/embed/zSoEg2v_JrE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
