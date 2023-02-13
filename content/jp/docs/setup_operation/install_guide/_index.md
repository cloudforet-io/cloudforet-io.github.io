---
title: "インストールガイド"
linkTitle: "インストールガイド"
weight: 2
url_dash_board: "/docs/guides_v1/install_guide"
date: 2021-07-31
description: >
    Install Guide of SpaceONE
---

## Install Kubernetes
SpaceONE provides various EKS installation guides.

| Type | Description |
|---   | ---   |
| Option 1 | Create new ***VPC*** and ***EKS Cluster*** |
| Option 2 | Create ***EKS Cluster*** in existing VPC |

This example shows the Option 1.<br>
https://github.com/cloudforet-io/launchpad.git

### Configure environments
Prepare your AWS credentials. Add them in your machine's ~/.aws/credentials file.

~~~bash
git clone https://github.com/cloudforet-io/launchpad.git
cd launchpad/spaceone/eks/terraform
~~~

Edit eks.auto.tfvars<br>
This file keeps values of environment variables below.

* ***region*** is aws region name for installation.
* ***userarn*** is your IAM arn for installation.

~~~bash
region = "us-east-1"

map_users = [
		{
      userarn  = "arn:aws:iam::111111111111:user/username"
      username = "your_name"
      groups   = ["system:masters"]
    }
]
~~~

### Execute terraform
If you don't have terraform binary, see [Reference](#reference).
~~~bash
terraform init
terraform plan
terraform apply
~~~

### Configure kubernetes
After installation, ***kubeconfig_spaceone-prd-eks*** file will be created. This is used as a configuration file of Kubernetes.<br>
If you don't have kubectl installed, see [Reference](#reference).
You may also have to install aws-iam-authenticator, see [Reference](#reference).

~~~bash
cp kubecconfig_spaceone-prd-eks ~/.kube/config
~~~

After installation of EKS, we highly recommend to install [AWS Load Balancer Controller](#reference) and [External-DNS](#reference).

## Install SpaceONE with Helm Chart

~~~bash
kubectl create ns spaceone
kubectl create ns root-supervisor

alias kcd='kubectl config set-context $(kubectl config current-context) --namespace'
kcd spaceone
~~~

### Helm repo

~~~bash
helm repo add spaceone https://cloudforet-io.github.io/charts
helm repo update
helm search repo
~~~

### Pre-condition

read pre-condition/README.md <br>
update values in pre-conditon
apply pre-condition

~~~bash
kubectl create -f shared.yaml
~~~

### Install

* update values.yaml
* update database.yaml
* update frontend.yaml

If you use mongodb cluster,
host is "localhost" in database.yaml
Use TYPE 2. global varable in values.yaml

~~~bash
kcd spaceone

helm install spaceone -f values.yaml -f database.yaml -f frontend.yaml spaceone/spaceone
~~~

## SpaceONE Configuration

## Reference
* [How to install terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli)
* [How to install kubectl](https://kubernetes.io/docs/tasks/tools/)
* [How to install aws-iam-authenticator](https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html)
* [How to install AWS Load Balancer Controller](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html)
* [How to install External DNS](https://github.com/cloudforet-io/launchpad/tree/master/spaceone/external-dns)

