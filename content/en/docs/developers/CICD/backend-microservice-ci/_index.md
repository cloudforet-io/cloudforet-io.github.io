---
title: "Backend Microservice CI"
linkTitle: "Backend Microservice CI"
weight: 2
date: 2022-03-14
description: >
    Detailed Explanation of Backend Microservice Repository CI

---

## Backend Microservice CI process details

</br>

![](/docs/developers/CICD/backend-microservice-ci/img/backend_microservice_ci.png)

</br>

The flowchart above describes 4 .yml GitHub Action files for CI process of backend microservices. Most of the workflow is similar to the frontend microservices' CI. However, unlike the frontend microservices, backend microservices are released as packages, therefore the process includes building and uploading PyPi package. 

</br>

To check the details, go to the .github/workflow directory in each directory. We provide an example of the workflow directory of the backend microservices with the below link. 

</br>

* identity repository : [spaceone-dev/identity GitHub workflow file link](https://github.com/spaceone-dev/identity/tree/master/.github/workflows)

