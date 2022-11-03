---
title: "Plugin CI"
linkTitle: "Plugin CI"
weight: 5
date: 2022-03-14
description: >
    Detailed Explanation of Plugin Repository CI

---

## Plugin CI process details

</br>

Plugin repositories with name starting with ‘plugin-’ have unique CI process managed with workflow file named `push_sync_ci.yaml`. As the total architecture of CI is different from other repositories, plugin repositories' workflow files are automatically updated at every code commit.

</br>

![](/docs/developers/CICD/plugin-ci/img/plugin_ci.png)

</br>

We can follow the plugin CI process, step by step. 

</br>

**Step 1.** `push_sync_ci.yaml` in each plugin repository is triggered by master branch push or in a manual way.

**Step 2.** `push_sync_ci.yaml` runs `cloudforet-io/actions/.github/worflows/deploy.yaml`.   

**Step 2-1.** `spaceone/actions/.github/worflows/deploy.yaml` runs `cloudforet-io/actions/src/main.py`.     
1. `cloudforet-io/actions/src/main.py` updates each plugin repository workflow files based on the repository characteristics distinguished by topics. Newest version files of all plugin repository workflows are managed in `cloudforet-io/actions`.  

**Step 2-2.** `spaceone/actions/.github/worflows/deploy.yaml` runs `push_build_dev.yaml` in each plugin repository   
1. `push_build_dev.yaml` proceeds versioning based on current date.   

2. `push_build_dev.yaml` upload the plugin image in Docker.     

3. `push_build_dev.yaml` sends notification through Slack.     

</br>
</br>


To build and release the docker image of plugin repositories, plugins use `dispatch_release.yaml`. 

1. `dispatch_release.yaml` in each plugin repository is triggered manually.

2. `dispatch_release.yaml` executes condition_check job to check version format and debug.

3. `dispatch_release.yaml` updates master branch version file.

4. `dispatch_release.yaml` executes git tagging.

5. `dispatch_release.yaml` builds and pushes to Docker Hub with `docker/build-push-action@v1`

6. `dispatch_release.yaml` sends notification through Slack.

</br>
</br>


For further details, you can check our GitHub `cloudforet-io/actions`. 

</br>

* [Cloudforet github action workflow repository](https://github.com/cloudforet-io/actions)

