---
title: "CICD"
linkTitle: "CICD"
weight: 8
date: 2022-03-14
description: >
    Detailed Explanation of SpaceONE CI CD Pipeline and Architecture

---

## SpaceONE CICD Architecture

</br>

![](/docs/developers/CICD/img/cicd_flow_chart.png)

</br>

**CI process is mainly processed by GitHub Actions** described in .github/workflows directory of each repository.  The process can be triggered automatically through events such as pull requests or push, or manually. Continuous integration includes software building, uploading image in docker, and releasing package in NPM or PyPi. Docker Image is built with all dependency packages to include.   

</br>

**CD process is mainly processed by Spinnaker**. Spinnaker deployment is triggered by detecting image upload in docker hub. After the triggering event, Spinnaker automatically deploys the microservice to Kubernetes, with Helm chart prepared for each repository to prepare the infrastructure for the deployment.   


</br>

## Role of spaceone-dev/spaceone Repository

</br>

* spaceone-dev/spaceone GitHub Repository : https://github.com/spaceone-dev/spaceone  

</br>

Before we discuss the CI process of each repository, we should check the spaceone-dev/spaceone repository (or ‘root’ repository). Root repository serves a role as a trigger of all repositories to start the CI process. Through manually starting one of the GitHub Action the root repository has, most of the repositories detect the action and their GitHub Action is triggered.   

</br>

## Repository Categories

</br>

**SpaceONE repositories can be divided into 5 different categories based on their characteristics in CI/CD process.**    

</br>

1. Frontend microservice
2. Backend microservice
3. Backend Core microservice 
4. Frontend Core microservice
5. Plugin
6. Tools

</br>

Core microservices are differentiated with ordinary microservices, since they support the other services by serving various functions such as framework, library or system.   

</br>

| **Categories**                 | **Repository**                                                 |
| ---                            | ---                                                            |
| **Frontend microservice**      | console, console-api, console-assets, marketplace-assets       |
| **Backend microservice**       | billing, config, cost-analysis, cost-saving, identity, inventory, monitoring, notification, plugin, power-scheduler, secret, spot-automation, statistics, supervisor        |
| **Backend Core microservice**  | api, python-core                                               |
| **Frontend Core microservice** | console-core-lib, spaceone-design-system                       |
| **Plugin**                     | plugin module repositories (excluding ‘plugin’ repository)     |
| **Tools**                      | spacectl, spaceone-initializer, tester                         |

</br>

** Some repositories might not fit in the categories and standards. To check more details in CI/CD, check our GitHub repositories' .github/workflow files.     

</br>

## Versioning System

</br>

SpaceONE uses 3 digit versioning system in the format of ‘x.y.z’.
The version scheme is displayed in the table below.     

| Category    | Format          | Description   | Example   |
| ---         |  ---            | ---           | ---       |
| Development | x.y.zdev[0-9]+  | api, python-core only | 1.2.3dev1 |
| Release Candidate | x.y.zrc[0-9]+ | Every release has RC during QA | 1.2.3rc1 |
| Final Release | x.y.z         | Official Release version | 1.2.3 |
| Hotfix      | x.y.z.[0-9]+    | Hotfix of Final Release  | 1.2.3.1 |

</br>

## Released Packages & Images

</br>

* NPM : https://www.npmjs.com/search?q=spaceone 
* PyPi : https://pypi.org/search/?q=spaceone-  
* Docker : https://hub.docker.com/orgs/spaceone/repositories  

Packages and images released in CI process can be found in the links above.      

</br>

## Continuous Integration Process

</br>

![](/docs/developers/CICD/img/continuous_integration_process.png)

</br>     

CI process of each repositories can be organized by 4 different kinds of triggering events.   

</br>

1. **Master Branch Push** :     
If the master branch in GitHub get pushed, GitHub Action occurs by CI_master_push.yml file, which builds the software and uploads to the registry such as Docker or NPM.  After the process, SpaceONE team is notified through Slack.     

2. **Create Release Branch** :     
Each repository can create release branch manually or by spaceone-dev/spaceone repository’s event. After initialization, GitHub Action triggers branch tagging action.       

3. **Branch Tagging** :      
By being triggered by the event above or getting pushed with version tags, each repository can tag branch with GitHub Action by updating the version in both local and master branch, building the software, and uploading the output to registries such as Docker or PyPi. After all process is done, Slack notification is automatically sent to SpaceONE team.      

4. **Reflect Branch Update** :       
The last CI process to be described is updating the version file in the master branch of each repository. This process is triggered by the branch tagging action or spaceone-dev/spaceone repository GitHub Action.         

</br>
</br>

While most of the process can be explained with the description above, Continuous Integration processes differ by the repository categories described above. 
To learn about CI of each repository type, visit the document linked below.         

</br>

* Frontend : [Frontend Microservice CI](/docs/developers/cicd/frontend-microservice-ci/)
* Backend : [Backend Microservice CI](/docs/developers/cicd/backend-microservice-ci/)
* Frontend Core : [Frontend Core Microservice CI](/docs/developers/cicd/frontend-core-microservice-ci/)
* Backend Core : [Backend Core Microservice CI](/docs/developers/cicd/backend-core-microservice-ci/)
* Plugin : [Plugin CI](/docs/developers/cicd/plugin-ci/)
* Tools : [Tools CI](/docs/developers/cicd/tools-ci/)

