---
title: "Frontend Microservice CI"
linkTitle: "Frontend Microservice CI"
weight: 1
date: 2022-03-14
description: >
    Detailed Explanation of Frontend Microservice Repository CI

---

## Frontend Microservice CI process details

</br>

![](/docs/developers/CICD/frontend-microservice-ci/img/frontend_microservice_ci.png)

</br>

The flowchart above describes 4 `.yml` GitHub Action files for CI process of frontend microservices. Unlike the backend microservices, frontend microservices are not released as packages, so the branch tagging job does not include building and uploading the NPM software package. Frontend microservices only build software and upload it on Docker, not NPM or PyPi. 

</br>

To check the details, go to the `.github/workflow` directory in each directory. We provide an example of the workflow directory of the frontend microservices with the below link. 

</br>

* console repository : [spaceone-dev/console GitHub workflow file link](https://github.com/cloudforet-io/console/tree/master/.github/workflows)

