---
title: "Plugin Deployment"
linkTitle: "Plugin Deployment"
weight: 3
date: 2021-08-04
description: 

---

Plugin 배포는 해당 plugin 을 사용하고자 하는 서비스에서 자동으로 수행하게 된다.   
예를 들어, Inventory 의 경우 각 Cloud 의 리소스 정보를 수집하기 위해 Collector 라는 plugin 을 통해서 자원 정보를 수집하는데,  
이때, Inventory 의 Collector.create ([collector.register](https://spaceone-dev.gitbook.io/spaceone-apis/inventory/v1/collector#create)) 명령을 수행시, Inventory 가 자동으로 Plugin 을 배포하게 된다. 

Plugin 배포는 Microservice 중 Plugin 과 Supervisor 를 통해 K8S 환경의 컨테이너로 배포를 수행한다. 







