---
title: "Frontend Microservice CI"
linkTitle: "Frontend Microservice CI"
weight: 8
date: 2022-03-14
description: >
    Frontend Microservice CI

---

## SpaceONE CICD Pipeline
The SpaceONE uses Github Actions as CI tool and Spinnaker as CD tool.
![](/docs/developers/CICD/img/spaceone_cicd_pipeline.png)

NPM or PyPi are software package for release. Docker is built-in image including all dependency packages.

* NPM URL: 
* PyPi URL: https://pypi.org/search/?q=spaceone-
* Docker URL: https://hub.docker.com/orgs/spaceone/repositories

Each repository provides its own helm chart for kubernetes deployment.

You can deploy SpaceONE by using Helm, Spinnaker or ArgoCD.

| Repository  | NPM | PyPi | Docker | Helm |
| ---         | --- | ---  | ---    | ---  |
| console     | Y   | -    | Y      | Y    |
| console-api | Y   | -    | Y      | Y    |
| api         | -   | Y    | -      | -    |
| python-core | -   | Y    | -      | -    |
| identity    | -   | Y    | Y      | Y    |
| secret      | -   | Y    | Y      | Y    |
| repository  | -   | Y    | Y      | Y    |
| plugin      | -   | Y    | Y      | Y    |
| config      | -   | Y    | Y      | Y    |
| inventory   | -   | Y    | Y      | Y    |
| monitoring  | -   | Y    | Y      | Y    |
| statistics  | -   | Y    | Y      | Y    |
| billing     | -   | Y    | Y      | Y    |
| notification| -   | Y    | Y      | Y    |
| cost-analysis| -   | Y    | Y      | Y    |
| supervisor  | -   | Y    | Y      | Y    |

***Source files***

Each package build system has its own source file.

| Build System | Source File                 | Triggered by    |
| ---          | ---                         | ---             |
| NPM          | {repository}/package.json   | {repository}/.github/workflows/CI_branch_tagging.yml |
| PyPi         | {repository}/src/setup.py   | {repository}/.github/workflows/CI_branch_tagging.yml |
| Docker       | {repository}/Dockerfile     | {repository}/.github/workflows/CI_branch_tagging.yml |
| Helm         | {repository}/deploy/helm    | {repository}/.github/workflows/CI_make_helm_chart.yml |

## Version Scheme

SpaceONE uses 3 digit versioninig system like X.Y.Z

| Category    | Format          | Description   | Example   |
| ---         |  ---            | ---           | ---       |
| Development | x.y.zdev[0-9]+  | api, python-core only | 1.2.3dev1 |
| Release Candidate | x.y.zrc[0-9]+ | Every release has RC during QA | 1.2.3rc1 |
| Final Release | x.y.z         | Official Release version | 1.2.3 |
| Hotfix      | x.y.z.[0-9]+    | Hotfix of Final Release  | 1.2.3.1 |



