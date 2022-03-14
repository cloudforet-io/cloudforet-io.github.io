---
title: "Backend Core Microservice CI"
linkTitle: "Backend Core Microservice CI"
weight: 4
date: 2022-03-14
description: >
    Detailed Explanation of Backend Core Microservice Repository CI

---

## Backend Core Microservice CI process details

</br>

![](/docs/developers/CICD/backend-core-microservice-ci/img/backend_core_microservice_ci.png)

</br>

Backend Core microservices' 4 workflow related GitHub Action files are explained through the diagram above. Unlike the other repositories, pushes in GitHub with tags are monitored and trigger to do building the package in PyPi for testing purposes, instead of workflow tasks for master branch pushes. 

</br>

Also, Backend Core microservices are not built and uploaded on Docker. They are only managed in PyPi.  

</br>

To check the details, go to the .github/workflow directory in each directory.

</br>

* api repository : [spaceone-dev/api GitHub workflow file link](https://github.com/spaceone-dev/api/tree/master/.github/workflows)
* python-core repository : [spaceone-dev/python-core GitHub workflow file link](https://github.com/spaceone-dev/python-core/tree/master/.github/workflows)

