---
weight: 3
description: |
  Kubernetes Cluster 계정 연동 가이드
title: Kubernetes 계정 연동
---

## 쿠버네티스 서비스 어카운트 생성하기

(1) \[에셋 인벤토리 > 서비스 계정] 페이지에서 쿠버네티스 서비스를 선택합니다.

![](/guides/account-hierarchy/create-general-account-01-ko.png)

(2) \[+생성] 버튼을 클릭합니다.

![](/guides/account-hierarchy/create-general-account-02-ko.png)

(3) 서비스 계정 생성 폼을 작성합니다.

(3-1) SpaceONE에 생성하고자 하는 서비스 어카운트 이름을 입력합니다.

![](/guides/account-hierarchy/create-general-account-03-ko.png)

(3-2) 해당 서비스 계정에 연결할 프로젝트를 지정합니다.

![](/guides/account-hierarchy/create-general-account-04-ko.png)

(4) \[추가] 버튼을 클릭하여 완료합니다.

<br>

## 쿠버네티스 클러스터 연결하기

(1) 연결하고자 하는 서비스 어카운트 페이지에서 \[+클러스터 연결하기] 버튼을 클릭합니다.

![](/guides/account-hierarchy/connect-cluster-01-ko.png)

(2) 클러스터 기본 정보를 작성합니다.

(2-1) 시스템에 설치되어 있는 클러스터 이름을 입력합니다.

![](/guides/account-hierarchy/connect-cluster-02-ko.png)

(2-2) `kube-state-metrics`, `prometheus-node-exporter` 두 가지 항목이 클러스터에 설치되었는지 확인이 필요합니다.

만약, 하나의 항목이라도 설치되어 있지 않다면 SpaceONE 에이전트에서 대신 설치됩니다.

![](/guides/account-hierarchy/connect-cluster-03-ko.png)

(3) 로컬 helm 저장소에 SpaceONE 에이전트 추가합니다.

{{<alert title="">}}
클러스터 연결을 위해서 시스템에 SpaceONE Helm 저장소가 설치되어 있어야 합니다.
{{</alert>}}

![](/guides/account-hierarchy/connect-cluster-04-ko.png)

(4) 클라우드 셀이나 터미널에 코드를 복사하여 SpaceONE 에이전트를 클러스터에 설치합니다.

![](/guides/account-hierarchy/connect-cluster-05-ko.png)

(5) \[완료] 버튼을 클릭하여 클러스터 연결을 완료합니다.

<br>

## 쿠버네티스 클러스터 연결하기

삭제하고자 하는 서비스 어카운트 페이지에 진입합니다.

삭제 아이콘 버튼을 통해 해당 서비스 어카운트를 삭제할 수 있습니다.

![](/guides/account-hierarchy/delete-service-account-01-ko.png)

서비스 어카운트 삭제시 해당 어카운트로 수집된 모든 데이터가 유실됩니다.

![](/guides/account-hierarchy/delete-service-account-02-ko.png)

<br>

## 연결된 쿠버네티스 클러스터 편집하기

편집하고자 하는 서비스 어카운트 페이지에 진입합니다.

### 연결된 쿠버네티스 클러스터 비활성화하기

\[비활성화] 버튼을 눌러 클러스터 연결을 일시적으로 해제할 수 있습니다.

### 연결된 쿠버네티스 클러스터 재연결하기

\[재연결] 버튼을 눌러 클러스터를 다시 연결할 수 있습니다.

### 연결된 쿠버네티스 클러스터 삭제하기

\[삭제] 버튼을 클릭하여 연결된 클러스터 정보를 삭제할 수 있습니다.
