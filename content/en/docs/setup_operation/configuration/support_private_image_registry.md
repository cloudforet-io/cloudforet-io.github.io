---
title: "Support private image registry"
linkTitle: "Support private image registry"
weight: 1
date: 2022-06-14
description: >    
    Cloudforet proposes a way to sync container images between private and public image registries.
---

In organizations operating in an on-premise environment, there are cases where they establish and operate their own container registry within the internal network due to security concerns.

In such environments, when installing Cloudforet, access to external networks is restricted, requiring the preparation of images from Dockerhub and syncing them to their own container registry.

To automate the synchronization of container images in such scenarios, Cloudforet proposes using a Container Registry Sync tool called 'dregsy' to periodically sync container images.

![dregsy_for_image_sync](/docs/setup_operation/configuration/support_private_image_registry_img/dregsy_for_image_sync.png)

In an environment situated between an external network and an internal network, dregsy is executed. 

This tool periodically pulls specific container images from Dockerhub and uploads them to the organization's private container registry.

**NOTE:**<br> 
The dregsy tool described in this guide always pulls container images from Dockerhub, regardless of whether the images already exist in the destination registry.

And, Docker Hub limits the number of Docker image downloads, or pulls based on the account type of the user pulling the image
- For anonymous users, the rate limit is set to 100 pulls per 6 hours per IP address
- For authenticated users, it’s 200 pulls per 6 hour period.
- Users with a paid Docker subscription get up to 5000 pulls per day.

## Install and Configuration
**NOTE:**<br> 
In this configuration, communication with Dockerhub is required, so it should be performed in an environment with internet access. 

Also, this explanation is based on the installation of Cloudforet version 1.11.x


### Prerequisite
- docker ([Install Docker Engine](https://docs.docker.com/engine/install/))



### Installation
```
Since the tools are executed using Docker, there is no separate installation process required. 

The plan is to pull and run the dregsy image, which includes skopeo (mirror tool).
```


### Configuration

- Create files

```shell
touch /path/to/your/dregsy-spaceone-core.yaml
touch /path/to/your/dregsy-spaceone-plugin.yaml
```

- Add configuration (dregsy-spaceone-core.yaml)

> If authentication to the registry is configured with `username:password`,<br> the information is encoded and set in the 'auth' field as shown below (example - lines 19 and 22 of the configuration).<br><br>
`echo '{"username": "...", "password": "..."}' | base64`

```yaml
relay: skopeo
watch: true

skopeo:
  binary: skopeo
  certs-dir: /etc/skopeo/certs.d

lister:
  maxItems: 100
  cacheDuration: 2h

tasks:
  - name: sync_spaceone_doc
    interval: 21600 # 6 hours
    verbose: true

    source:
      registry: registry.hub.docker.com
      auth: {Token}                 # replace to your dockerhub token
    target:
      registry: {registry_address}  # replace to your registry address
      auth: {Token}                 # replace to your registry token
      skip-tls-verify: true

    mappings:
      - from: spaceone/spacectl
        to: your_registry_project/spaceone/spacectl     # replace to your registry project & repository
        tags: 
          - 'regex: 1\.11\.(?:[0-9]?[0-9]).*'
      - from: spaceone/marketplace-assets
        to: your_registry_project/spaceone/marketplace-assets   # replace to your registry project & repository
        tags: 
          - 'regex: 1\.11\.(?:[0-9]?[0-9]).*'
      - from: spaceone/docs
        to: your_registry_project/spaceone/docs          # replace to your registry project & repository
        tags:
          - 'regex: 1\.11\.(?:[0-9]?[0-9]).*'
      - from: redis
        to: your_registry_project/spaceone/redis       # replace to your registry project & repository
        tags: 
          - 'latest'
      - from: mongo
        to: your_registry_project/spaceone/mongo       # replace to your registry project & repository
        tags: 
          - 'latest'

  - name: sync_spaceone_core
    interval: 21600 # 6 hours
    verbose: true

    source:
      registry: registry.hub.docker.com
      auth: {Token}
    target:
      registry: {registry_address}  # replace to your registry address
      auth: {Token}               # replace to your registry token
      skip-tls-verify: true

    mappings:
      - from: spaceone/console
        to: your_registry_project/spaceone/console     # replace to your registry project & repository
        tags: 
          - 'regex: 1\.11\.(?:[0-9]?[0-9]).*'
      - from: spaceone/inventory
        to: your_registry_project/spaceone/inventory       # replace to your registry project & repository
        tags: 
          - 'regex: 1\.11\.(?:[0-9]?[0-9]).*'
      - from: spaceone/console-api
        to: your_registry_project/spaceone/console-api     # replace to your registry project & repository
        tags: 
          - 'regex: 1\.11\.(?:[0-9]?[0-9]).*'
      - from: spaceone/cost-analysis
        to: your_registry_project/spaceone/cost-analysis       # replace to your registry project & repository
        tags: 
          - 'regex: 1\.11\.(?:[0-9]?[0-9]).*'
      - from: spaceone/statistics
        to: your_registry_project/spaceone/statistics      # replace to your registry project & repository
        tags: 
          - 'regex: 1\.11\.(?:[0-9]?[0-9]).*'
      - from: spaceone/secret
        to: your_registry_project/spaceone/secret      # replace to your registry project & repository
        tags: 
          - 'regex: 1\.11\.(?:[0-9]?[0-9]).*'
      - from: spaceone/file-manager
        to: your_registry_project/spaceone/file-manager        # replace to your registry project & repository
        tags: 
          - 'regex: 1\.11\.(?:[0-9]?[0-9]).*'
      - from: spaceone/monitoring
        to: your_registry_project/spaceone/monitoring      # replace to your registry project & repository
        tags: 
          - 'regex: 1\.11\.(?:[0-9]?[0-9]).*'
      - from: spaceone/supervisor
        to: your_registry_project/spaceone/supervisor      # replace to your registry project & repository
        tags: 
          - 'regex: 1\.11\.(?:[0-9]?[0-9]).*'
      - from: spaceone/identity
        to: your_registry_project/spaceone/identity        # replace to your registry project & repository
        tags: 
          - 'regex: 1\.11\.(?:[0-9]?[0-9]).*'
      - from: spaceone/notification
        to: your_registry_project/spaceone/notification        # replace to your registry project & repository
        tags: 
          - 'regex: 1\.11\.(?:[0-9]?[0-9]).*'
      - from: spaceone/repository
        to: your_registry_project/spaceone/repository      # replace to your registry project & repository
        tags: 
          - 'regex: 1\.11\.(?:[0-9]?[0-9]).*'
      - from: spaceone/plugin
        to: your_registry_project/spaceone/plugin      # replace to your registry project & repository
        tags: 
          - 'regex: 1\.11\.(?:[0-9]?[0-9]).*'
      - from: spaceone/config
        to: your_registry_project/spaceone/config      # replace to your registry project & repository
        tags: 
          - 'regex: 1\.11\.(?:[0-9]?[0-9]).*'
      - from: spaceone/console-api-v2
        to: your_registry_project/spaceone/console-api-v2      # replace to your registry project & repository
        tags: 
          - 'regex: 1\.11\.(?:[0-9]?[0-9]).*'
      - from: spaceone/board
        to: your_registry_project/spaceone/board       # replace to your registry project & repository
        tags: 
          - 'regex: 1\.11\.(?:[0-9]?[0-9]).*'
      - from: spaceone/dashboard
        to: your_registry_project/spaceone/dashboard       # replace to your registry project & repository
        tags: 
          - 'regex: 1\.11\.(?:[0-9]?[0-9]).*'
```

- Add configuration (dregsy-spaceone-plugin.yaml)
```yaml
relay: skopeo
watch: true

skopeo:
  binary: skopeo
  certs-dir: /etc/skopeo/certs.d

lister:
  maxItems: 100
  cacheDuration: 2h

tasks:
  - name: sync_spaceone_plugin
    interval: 21600 # 6 hours
    verbose: true

    source:
      registry: registry.hub.docker.com
      auth: {Token}                 # replace to your dockerhub token
    target:
      registry: {registry_address}  # replace to your registry address
      auth: {Token}                 # replace to your registry token
      skip-tls-verify: true

    mappings:
      - from: spaceone/plugin-google-cloud-inven-collector
        to: your_registry_project/spaceone/plugin-google-cloud-inven-collector     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-azure-inven-collector
        to: your_registry_project/spaceone/plugin-azure-inven-collector     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-aws-cloudwatch-mon-datasource
        to: your_registry_project/spaceone/plugin-aws-cloudwatch-mon-datasource     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-azure-activity-log-mon-datasource
        to: your_registry_project/spaceone/plugin-azure-activity-log-mon-datasource     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-aws-cloudtrail-mon-datasource
        to: your_registry_project/spaceone/plugin-aws-cloudtrail-mon-datasource     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-aws-ec2-inven-collector
        to: your_registry_project/spaceone/plugin-aws-ec2-inven-collector     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-aws-sns-mon-webhook
        to: your_registry_project/spaceone/plugin-aws-sns-mon-webhook     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-aws-trusted-advisor-inven-collector
        to: your_registry_project/spaceone/plugin-aws-trusted-advisor-inven-collector     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-azure-monitor-mon-datasource
        to: your_registry_project/spaceone/plugin-azure-monitor-mon-datasource     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-email-noti-protocol
        to: your_registry_project/spaceone/plugin-email-noti-protocol     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-google-stackdriver-mon-datasource
        to: your_registry_project/spaceone/plugin-google-stackdriver-mon-datasource     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-telegram-noti-protocol
        to: your_registry_project/spaceone/plugin-telegram-noti-protocol     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-keycloak-identity-auth
        to: your_registry_project/spaceone/plugin-keycloak-identity-auth     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-prometheus-mon-webhook
        to: your_registry_project/spaceone/plugin-prometheus-mon-webhook     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-slack-noti-protocol
        to: your_registry_project/spaceone/plugin-slack-noti-protocol     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-grafana-mon-webhook
        to: your_registry_project/spaceone/plugin-grafana-mon-webhook     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-aws-cloud-service-inven-collector
        to: your_registry_project/spaceone/plugin-aws-cloud-service-inven-collector     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-aws-phd-inven-collector
        to: your_registry_project/spaceone/plugin-aws-phd-inven-collector     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-api-direct-mon-webhook
        to: your_registry_project/spaceone/plugin-api-direct-mon-webhook     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-azure-cost-mgmt-cost-datasource
        to: your_registry_project/spaceone/plugin-azure-cost-mgmt-cost-datasource     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-aws-cost-explorer-cost-datasource
        to: your_registry_project/spaceone/plugin-aws-cost-explorer-cost-datasource     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-ms-teams-noti-protocol
        to: your_registry_project/spaceone/plugin-ms-teams-noti-protocol     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-google-monitoring-mon-webhook
        to: your_registry_project/spaceone/plugin-google-monitoring-mon-webhook     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-http-file-cost-datasource
        to: your_registry_project/spaceone/plugin-http-file-cost-datasource     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
      - from: spaceone/plugin-google-cloud-log-mon-datasource
        to: your_registry_project/spaceone/plugin-google-cloud-log-mon-datasource     # replace to your registry project & repository
        tags: 
          - 'semver: >=1.0.0 <1.99.0'
          - 'keep: latest 2'
```

### Run

```shell
docker run -d --rm --name dregsy_spaceone_core -v /path/to/your/dregsy-spaceone-core.yaml:/config.yaml xelalex/dregsy
```
```shell
docker run -d --rm --name dregsy_spaceone_plugin -v /path/to/your/dregsy-spaceone-plugin.yaml:/config.yaml xelalex/dregsy
```


## Management

- view log

```shell
docker logs {container_id|container_name}
```

- delete docker container
```shell
docker rm {container_id|container_name} [-f]
```