---
title: "Install Guide"
linkTitle: "Install Guide"
weight: 5
url_dash_board: "/docs/guides/install_guide/" 
date: 2021-05-11
description: >
    Install Guide of SpaceONE
---


# SpaceONE Helm Chart

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


