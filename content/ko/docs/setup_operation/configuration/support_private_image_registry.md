---
title: "프라이빗 이미지 저장소 지원"
linkTitle: "프라이빗 이미지 저장소 지원"
weight: 1
date: 2022-06-14
description: >
    Cloudforet은 자체 Private Container Registry에 Container Image를 동기화 하기위한 방법을 제안합니다.
---

On-premise 환경을 운영하는 조직의 경우 보안상의 문제로 <br>
Internal Network에 자체 Container registry를 구축하여 운영하는 경우가 있습니다.

이러한 환경에 Cloudforet을 설치할 경우 외부 네트워크로의 접근이 제한되어, <br>
Dockerhub에서 이미지를 가져와 자체 Container registry에 준비해두어야 할 필요가 있습니다.

Cloudforet은 이러한 상황에서 Container Image 동기화 작업을 자동화하기 위해 dregsy 라는<br>
Container Registry Sync tool을 이용해 주기적으로 Container Image를 동기화하는 방법을 제안합니다.

![dregsy_for_image_sync](/ko/docs/setup_operation/configuration/support_private_image_registry_img/dregsy_for_image_sync.png)

External Network와 Internal Network 사이에 위치한 환경에서 dregsy 를 실행합니다.<br>
이것은 주기적으로 Dockerhub로부터 특정 Container Image를 가져와 자체 Container registry에 업로드합니다.

**NOTE:**<br> 
본 가이드에서 설명하고 있는 dregsy tool은 Container Image가  Destination Registry에<br>
존재하는지의 여부와 관계없이 항상 Dockerhub로부터 Container image를 pull합니다.

Dockerhub의 rate limit은 아래와 같습니다. ([Download rate limit](https://docs.docker.com/docker-hub/download-rate-limit/))
- 익명 유저 100pulls per 6 hours
- 인증 유저 200pulls per 6 hours
- 구독 유저 5000pulls per day

## 설치 및 설정
**NOTE:**<br> 
본 구성의 경우, Dockerhub와 통신이 필요하기 때문에 외부 인터넷과 통신이 가능한 환경에서 이루어져야합니다.<br>
또한, 1.11.x 버전의 Cloudforet 설치를 기준으로 설명합니다.


### Prerequisite
- docker ([Install Docker Engine](https://docs.docker.com/engine/install/))



### Installation
```
Docker를 이용해 도구를 실행시키기 때문에 별도의 설치 과정은 필요하지 않음,
skopeo(mirror tool)을 포함한 dregsy image를 pull하여 실행할 예정.
```


### Configuration

- 설정 파일 생성

```shell
touch /path/to/your/dregsy-spaceone-core.yaml
touch /path/to/your/dregsy-spaceone-plugin.yaml
```

- 설정 추가 (dregsy-spaceone-core.yaml)
> 만약, username:password 구성으로 Registry 인증을 하는 경우,<br> 아래와 같이 정보를 encode하여 auth에  설정합니다. (예시 - 설정 19,22번째 라인)<br>
`echo '{"username": "...", "password": "..."}' | base64`

> Harbor의 경우 Robot Token 인증은 지원이 어렵습니다. username:password를 encoding하여 인증해주세요.

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

- 설정 추가 (dregsy-spaceone-plugin.yaml)
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
docker logs -f {container_id|container_name}
```

- delete docker container
```shell
docker rm {container_id|container_name} [-f]
```