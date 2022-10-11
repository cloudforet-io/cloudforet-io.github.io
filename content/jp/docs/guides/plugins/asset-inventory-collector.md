---
title: "[エセットインベントリー]コレクター"
linkTitle: "[エセットインベントリー]コレクター"
weight: 3
date: 2022-07-05
description: > 
    クラウドフォレは、コレクタープラグインを使用して各**クラウドプロバイダ**が使用中のクラウドリソースを収集します。
---

## 概要

クラウドフォレは、コレクタープラグインを利用して各々の[クラウドプロバイダ](/jp/docs/guides/asset-inventory)で使用中のクラウドリソースを収集します。  
現在クラウドフォレがサポートを提供中のコレクターリストは、下記の**プラグインサポートリスト**をご参照ください。


コレクタープラグインを使用するためには、先に[サービスアカウント](/jp/docs/guides/asset-inventory/service-account)を登録する必要があります。  
しかし、AWS、Google Cloud、Azureなどクラウドプロバイダによって**サービスアカウントの登録方法は異なる**ので、  
設定の詳細については、下記のプラグインサポートリストの**設定ガイドリンク**をご参考にしてください。

## プラグインサポートリスト

| **プラグイン** | **設定ガイドリンク** |
| --- | --- |
| AWS Cloud Services collector | https://github.com/cloudforet-io/plugin-aws-cloud-service-inven-collector/blob/master/docs/ko/GUIDE.md |
| AWS EC2 Compute collector | https://github.com/cloudforet-io/plugin-aws-ec2-inven-collector/blob/master/docs/ko/GUIDE.md |
| AWS Personal Health Dashboard collector |https://github.com/cloudforet-io/plugin-aws-phd-inven-collector/blob/master/docs/ko/GUIDE.md|
| AWS Trusted Advisor collector | https://github.com/cloudforet-io/plugin-aws-trusted-advisor-inven-collector/blob/master/docs/ko/GUIDE.md
| Azure Cloud Service collector |https://github.com/cloudforet-io/plugin-azure-cloud-service-inven-collector/blob/master/docs/ko/GUIDE.md|
| Azure VM collector |https://github.com/cloudforet-io/plugin-azure-vm-inven-collector/blob/master/docs/ko/GUIDE.md|
| Google Cloud collector |https://github.com/cloudforet-io/plugin-google-cloud-inven-collector/blob/master/docs/ko/GUIDE.md|
| Monitoring Metric Collector of Collected Resources |https://github.com/cloudforet-io/plugin-monitoring-metric-inven-collector/blob/master/docs/ko/GUIDE.md|
