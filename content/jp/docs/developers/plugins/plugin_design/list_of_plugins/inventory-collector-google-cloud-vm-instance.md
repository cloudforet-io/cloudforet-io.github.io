---
title: "Google Cloud VM Instance"
linkTitle: "Google Cloud VM Instance"
weight: 1
date: 2022-01-21
description: >
    SpaceONE inventory plugin design specification about google cloud vm instance resource

_build:
    render: always
    list: never
    publishResources: true
---


## About

Google Cloud VM Instance

### Repository

[plugin-google-cloud-compute-inven-collector](https://github.com/spaceone-dev/plugin-google-cloud-compute-inven-collector)


## Operation Flow
수집 Flow를 그림으로 표현



## Resource

### inventory.CloudServiceType

자원의 기본 정보를 나타냅니다. 

| No. | Item                | Value                                   | Description                     |
|:---:|---------------------|-----------------------------------------|:--------------------------------|
|  1  | Provider            | google_cloud                            | Resource를 서비스 하는 Cloud Provider |
|  2  | Cloud Service Group | ComputeEngine                           | 해당 자산이 속한 그룹                    |
|  3  | Cloud Service Name  | Instance                                | 자산의 서비스명                        |
|  4  | Service Code        | ComputeEngine                           | Google Cloud의 공식 제품명(원장 데이터 기준) |
|  5  | Is Primary          | True                                    ||
|  6  | Is Major            | True                                    ||
|  7  | Tags                | 'spaceone:icon': '..Compute_Engine.svg' | 서비스 아이콘 위치                      |


### inventory.Server

자원의 상세 정보를 나타냅니다. 

| No. | Item                | Value                   | Description |
|:---:|---------------------|-------------------------|:------------|
|  1  | Server Type         | VM                      ||
|  2  | OS Type             | LINUX/WINDOWS           ||
|  3  | Primary IP Address  | -                       ||
|  4  | IP Address          | -                       ||
|  5  | NICs                | -                       ||
|  6  | Disks               | -                       ||
|  7  | Provider            | google_cloud            ||
|  8  | Cloud Service Type  | Instance                ||
|  9  | Cloud Service Group | ComputeEngine           ||
| 10  | Name                | -                       ||
| 11  | Region Code         | -                       ||
| 12  | Data                | [Data](./#data)         ||
| 13  | Tags                | -                       ||
| 14  | Reference           | -                       ||
| 15  | Metadata            | [Metadata](./#metadata) ||


#### Data

자원의 상세 정보 및 연관 자원들의 정보를 나타냅니다. 

| No. | Item           | Description                        |
|:---:|----------------|:-----------------------------------|
|  1  | OS             | 서버의 OS 정보                          |
|  2  | Google Cloud   | Instance 관리를 위한 Google Cloud 자체 정책 |
|  3  | Hardware       | cpu/memory 정보                      |
|  4  | Compute        | Instance의 상세 상태 정보                 |
|  5  | Load Balancers | Instance에 연결된 LoadBalancer 정보      |
|  6  | Security Group | Instance와 연관된 가상 방화벽 정보            |
|  7  | VPC            | Instance가 위치한 VPC 정보               |
|  8  | Subnet         | Instance가 위치한 Network Subnet 정보    |
|  9  | AutoScaler     | Instance와 연관된 AutoScaler 정보        |
| 10  | StackDriver    | Instance와 연관된 Monitoring Metric 정보 |


{{< alert title="Note" >}}
수집시 이러이러한 문제가 있다. 노트노트
{{< /alert >}}

### inventory.Region

자원이 속해있는 Cloud Region 상세 정보를 나타냅니다. 

| No. | Item        | Description |
|:---:|-------------|:------------|
|  1  | Name        ||
|  2  | Region Code ||
|  3  | Provider    ||
|  4  | Tags        ||


## Dynamic Layout

Console 서비스를 통해 자동으로 UX Rendering을 지원하는 기능 입니다. 
Google Cloud VMInstance 의 경우 아래와 같이 Spec.을 정의 합니다. 


### Basic Information




### Compute Engine

| No. | Group       | Item                                  | Description |
|-----|-------------|---------------------------------------|-------------|
| 1   | VM Instance | Account                               ||
| 2   | VM Instance | Instance ID                           ||
| 3   | VM Instance | Instance Name                         ||
| 4   | VM Instance | Instance State                        ||
| 5   | VM Instance | Preemptible                           ||
| 6   | VM Instance | Is Managed Instance in Instance Group ||
| 7   | VM Instance | Instance Type                         ||
| 8   | VM Instance | Image                                 ||
| 9   | VM Instance | Region                                ||
| 10  | VM Instance | Availability Zone                     ||
| 11  | VM Instance | Reservation Affinity                  ||
| 12  | VM Instance | Self link                             ||
| 13  | VM Instance | Deletion Protection                   ||
| 14  | VM Instance | Public IP                             ||
| 15  | VM Instance | IP Addresses                          ||
| 16  | VM Instance | Affected Rules                        ||
| 17  | VM Instance | Launched At                           ||
| 18  | VPC         | VPC ID                                ||
| 19  | VPC         | VPC Name                              ||
| 20  | VPC         | Subnet ID                             ||
| 21  | VPC         | Subnet Name                           ||
| 22  | AutoScaler  | Auto Scaler                           ||
| 23  | AutoScaler  | Auto Scaler ID                        ||
| 24  | AutoScaler  | Instance Group Name                   ||
| 25  | AutoScaler  | Instance Template Name                ||


### Google Cloud Labels

| No. | Group               | Item  | Description |
|-----|---------------------|-------|-------------|
| 1   | Google Cloud Labels | Key   ||
| 2   | Google Cloud Labels | Value ||



### Disk
| No. | Group | Item                   | Description |
|-----|-------|------------------------|-------------|
| 1   | Disk  | Index                  ||
| 2   | Disk  | Name                   ||
| 3   | Disk  | Size                   ||
| 4   | Disk  | Disk ID                ||
| 5   | Disk  | Disk Type              ||
| 6   | Disk  | Read IOPS              ||
| 7   | Disk  | Write IOPS             ||
| 8   | Disk  | Read Throughput(MB/s)  ||
| 9   | Disk  | Write Throughput(MB/s) ||
| 10  | Disk  | Encrypted              ||



### NIC
| No. | Group | Item         | Description |
|-----|-------|--------------|-------------|
| 1   | NIC   | Index        ||
| 2   | NIC   | IP Addresses ||
| 3   | NIC   | CIDR         ||
| 4   | NIC   | Public IP    ||



### Firewalls
| No. | Group     | Item        | Description |
|-----|-----------|-------------|-------------|
| 1   | Firewalls | Direction   ||
| 2   | Firewalls | Priority    ||
| 3   | Firewalls | Action      ||
| 4   | Firewalls | Name        ||
| 5   | Firewalls | Protocol    ||
| 6   | Firewalls | Port Rage   ||
| 7   | Firewalls | Remote      ||
| 8   | Firewalls | Description ||


### LB
| No. | Group | Item     | Description |
|-----|-------|----------|-------------|
| 1   | LB    | Name     ||
| 2   | LB    | Type     ||
| 3   | LB    | Protocol ||
| 4   | LB    | Port     ||
| 5   | LB    | Scheme   ||



## Metadata

Custom Table 및 자원 검색을 위한 정보를 지정합니다. 

### Custom Table 


| No. | Item              | Description                               |
|:---:|-------------------|:------------------------------------------|
|  1  | Instance Group ID ||
|  2  | Name              ||
|  3  | Instances         ||
|  4  | Type              | 'STATELESS', 'STATEFUL', 'UNMANAGED' 중 선택 |
|  5  | Min Replicas      ||
|  6  | Max Replicas      ||
|  7  | Recommended Size  ||
|  8  | Template          ||
|  9  | Autoscaling Mode  ||
| 10  | Autoscaling       ||
| 11  | Project           ||
| 12  | Region            ||
| 13  | Zone              ||
| 14  | Network           ||
| 15  | Subnet            ||
| 16  | Description       ||
| 17  | Creation Time     ||


### Search Field

| No. | Item                       | Description |
|-----|----------------------------|-------------|
| 1   | Name                       ||
| 2   | Instance Counts            ||
| 3   | Minimum Number of Replicas ||
| 4   | Maximum Number of Replicas ||
| 5   | Recommended Size           ||
| 6   | Template                   ||
| 7   | Region                     ||
| 8   | Zone                       ||
| 9   | Creation Time              ||


## Statistics

Statistics 쿼리문도 여기에 정리



## Reference

### Related APIs

자산 수집을 위해 사용하는 API 를 정리합니다. 

| No. | API Group      | Version | Method Name              | Reference                                                                          |
|-----|----------------|---------|--------------------------|------------------------------------------------------------------------------------|
| 1   | Compute Engine | v1 Beta | instances.aggregatedList | https://cloud.google.com/compute/docs/reference/rest/beta/instances/aggregatedList |
| 2   |||||
| 3   |||||
| 4   |||||
| 5   |||||
| 6   |||||
| 7   |||||
| 8   |||||
| 9   |||||
| 10  |||||
| 11  |||||


