---
title: "Tools CI"
linkTitle: "Tools CI"
weight: 6
date: 2022-03-14
description: >
    Detailed Explanation of Tools Repository CI

---

## Tools CI process details

</br>

![](/docs/developers/CICD/tools-ci/img/tools_ci.png)

</br>

spacectl, spaceone-initializer, tester repositories are tools used for the spaceone project. There are some differences from other repositories' CI process. 

</br>

spacectl repository workflow includes test code for each push with a version tag, which is similar to the CI process of backend core repositories. 

</br>

spaceone-initializer repository does not include the workflow file triggered by ‘master branch push’, which most of repositories including spacectl and tester have. 

</br>

Tools-category repositories use different repositories to upload.
* spacectl : PyPi and Docker both
* spaceone-initializer : Docker
* tester : PyPi

</br>
</br>

To check the details, go to the .github/workflow directory in each directory.

</br>

* spacectl repository : [spaceone-dev/spacectl GitHub workflow file link](https://github.com/spaceone-dev/spacectl/tree/master/.github/workflows)
* spaceone-initializer repository : [spaceone-dev/spaceone-initializer GitHub workflow file link](https://github.com/spaceone-dev/spaceone-initializer/tree/master/.github/workflows)
* tester repository : [spaceone-dev/tester GitHub workflow file link](https://github.com/spaceone-dev/tester/tree/master/.github/workflows)

