---
title: "Quick Start"
linkTitle: "Quick Start"
weight: 1
date: 2022-06-23
description: >
    **비용관리** 서비스를 빠르게 사용하기 위한 과정을 소개합니다.
---

## 설정 가이드(Support Only spacectl)
현재 클라우드포레에서 제공하는 비용관리 서비스는 [**spacectl**](https://github.com/cloudforet-io/spacectl#install-and-set-up-spacectl)을 통해서만 설정이 가능합니다.

시작하기에 앞서 spacectl 사용을 위한 [**API 키**](https://cloudforet.io/ko/docs/guides/my-page/access-with-api-cli/)를 발급합니다.

설정을 진행하는 방법은 2가지가 존재합니다.
- Kubernetes Cluster의 Pod 접속 후 진행하는 방법
- Local 환경에서의 진행 방법

이후 DataSource 등록 진행 후 비용 동기화를 시작합니다.

<br>

### Kubernetes Cluster의 Pod 접속 후 진행하는 방법

(1) 접속할 spacectl pod의 이름을 확인합니다.
```
$ kubectl get pod --all-namespaces | grep spacectl
```

(2) spacectl pod에 접속합니다.
```
$ kubectl exec -it {pod_name} -n {namespace} -- /bin/bash
```

(3) spacectl environment를 설정합니다.
```
$ spacectl config init -f dufault.yaml
```

(4) 발급받은 API 키에서 `api_key` 값을 현재 environment에 설정합니다.
```commandline
$ spacectl config set api_key {api_key}
```

<br>

### Local 환경에서의 진행 방법

(1) [**API 키**](https://cloudforet.io/ko/docs/guides/my-page/access-with-api-cli/) 발급시 다운 받은 spacectl_config.yml 파일로 environment 설정을 진행합니다. 
```commandline
$ spacectl config init -f spacectl_config.yml
```

<br>

## Plugin 설정 방법
(1-1) 바용 분석을 위한 플러그인 별 설정 가이드는 [링크](https://cloudforet.io/ko/docs/guides/plugins/cost-explorer-data-source/)를 참고해 주세요.
(1-2) Plugin 설정 진행 과정에서 반환되는 `plugin_id` 정보를 메모해 둡니다.


<br>

## DataSource 등록
(1) DataSource를 등록 합니다. 

DataSource를 등록하기 위해서 아래와 같은 정보가 필요합니다.
- **domain_id**: 클라우드포레에서 제공하는 도메인별 고유 ID
- **provider**: 클라우드 서비스 제공자
- **name**: DataSource 이름
- **plugin_info.plugin_id**: 비용 데이터를 수집할 플러그인 ID
- **plugin_info.secret_data**: 플러그인을 실행시키기 위한 secret 정보

(2) 아래 yaml파일을 양식으로 regiser_datasource.yaml 파일을 생성합니다.
```yaml
# register_datasource.yaml
data_source_type: EXTERNAL
domain_id: {domain_id} # ex) domain-xxxxxxxxx
provider: {provider} # ex) aws, azure
name: {Data Source Name} # ex) AWS Cost Expolorer Cost Datasource
plugin_info:
  options: {}
  plugin_id: {plugin_id}
  secret_data: {} # different by plugin 
  upgrade_mode: AUTO
tags: {}
template: {}

```

(3) 아래 명령어를 실행시켜 DataSource를 등록합니다.

이때 반환되는 data_source_id를 메모해 둡니다.
```
$ spacectl exec register cost_analysis.DataSource -f register_datasource.yaml
```

<br>

## DataSource 동기화

(1) 비용 동기화 과정입니다.
DataSource 등록 과정에서 반환된 `data_source_id`를 사용합니다.
이전에 동기화된 데이터가 없는 경우, 아래 명령어를 실행시 1년간의 데이터를 동기화합니다.
```commandline
$ spacectl exec sync cost_analysis.DataSource -p data_source_id={data_source_id}
```

만약 동기화 시작 날짜를 지정하고 싶은 경우 `-p` 옵션을 통해 날짜를 지정할 수 있습니다.
```commandline
$ spacectl exec sync cost_analysis.DataSource -p data_source_id={data_source_id} -p start='2023-06-01'
```