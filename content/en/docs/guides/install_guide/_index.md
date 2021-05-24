---
title: "Install Guide"
linkTitle: "Install Guide"
weight: 5
url_dash_board: "/docs/guides/install_guide/" 
date: 2021-05-11
description: >
    Install Guide of SpaceONE
---

# Install Kubernetes

This terraform creates

1) VPC
2) EKS

https://github.com/terraform-aws-modules/terraform-aws-eks

## Configure environments

Prepare your AWS credentials. Put your ~/.aws/credentials

edit eks.auto.tfvars

This is your environment variables.

***region*** is aws region name for installation.
***userarn*** is your IAM arn for installation.
~~~
region = "us-east-1"

map_users = [
		{
      userarn  = "arn:aws:iam::111111111111:user/username"
      username = "your_name"
      groups   = ["system:masters"]
    }
]

~~~

## Execute terraform

If you don't have terraform binary, see [Reference](#Reference)
~~~
terraform init
terraform plan
terraform apply
~~~

## Configure kubernetes

After installation, ***kubeconfig_spaceone-prd-eks*** file will be created. This file is config of kubernetes.

If you don't have kubectl, see [Reference](#Reference)
You may also install aws-iam-authenticator, see [Reference](#Reference)
~~~
cp kubecconfig_spaceone-prd-eks ~/.kube/config
~~~






# Install SpaceONE with Helm Chart

~~~
kubectl create ns spaceone
kubectl create ns root-supervisor

alias kcd='kubectl config set-context $(kubectl config current-context) --namespace'
kcd spaceone
~~~

## Helm repo

~~~
helm repo add spaceone https://spaceone-dev.github.io/charts
helm repo update
helm search repo
~~~

## Pre-condition

read pre-condition/README.md

update values in pre-conditon
apply pre-condition

~~~
kubectl create -f shared.yaml
~~~

## Install

* update values.yaml
* update database.yaml 
* update frontend.yaml


If you use mongodb cluster,
host is "localhost" in database.yaml
Use TYPE 2. global varable in values.yaml

~~~
kcd spaceone

helm install spaceone -f values.yaml -f database.yaml -f frontend.yaml spaceone/spaceone

~~~

# SpaceONE Configuration


# Reference

[How to install terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli)

[How to install kubectl](https://kubernetes.io/docs/tasks/tools/)

[How to install aws-iam-authenticator](https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html)


