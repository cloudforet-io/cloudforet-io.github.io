---
title: "Frontend Core Microservice CI"
linkTitle: "Frontend Core Microservice CI"
weight: 3
date: 2022-03-14
description: >
    Detailed Explanation of Frontend Core Microservice Repository CI

---

## Frontend Core Microservice CI

</br>

![](/docs/developers/CICD/frontend-core-microservice-ci/img/frontend_core_microservice_ci.png)

</br>

Frontend Core microservices' codes are integrated and built, uploaded with the flow explained above. Most of the workflows include set-up process including setting Node.js, caching node modules, and installing dependencies. After the set-up proccess, each repository workflow is headed to building process proceeded in NPM. After building, both repositories' packages built are released in NPM by code `npm run semantic-release`. 

</br>

Check semantic-release site, [npm: semantic-release](https://www.npmjs.com/package/semantic-release) for further details about the release process.

</br>

Also, unlike other repositories deployed by the flow from Docker to Spinnaker and k8s, spaceone-design-system repository is deployed differently, based on direct deployment through AWS S3. 

</br>

To check the details, go to the `.github/workflow` directory in each directory.

</br>

* console-core-lib repository : [spaceone-dev/console-core-lib GitHub workflow file link](https://github.com/spaceone-dev/console-core-lib/tree/master/.github/workflows)
* spaceone-design-system repository : [spaceone-dev/spaceone-design-system GitHub workflow file link](https://github.com/spaceone-dev/spaceone-design-system/tree/beta/.github/workflows)
