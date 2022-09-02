---
title: "アラートマネージャー ウェブフック"
linkTitle: "アラートマネージャー ウェブフック"
weight: 3 
date: 2022-07-05 
description: >
    クラウドフォレは、**さまざまなモニタリングサービス**で発生するイベントメッセージを受信するため、プラグイン形態のウェブフックをサポートしています。
---

## 概要

クラウドフォレは、**多様なモニタリングサービス**で発生するイベントメッセージを受信するため、プラグイン形態のウェブフックをサポートしています。  
現在クラウドフォレがサポートを提供中のウェブフックプラグインリストは、**プラグインサポートリスト**をご参照ください。

特に、**AWS CloudWatch**と**AWS PHD**(PersonalHealthDashboard)で発生するイベントメッセージは、   
**AWS SNS**(Simple Notification Service)ウェブフックを通じてクラウドフォレに収集されます。

モニタリングサービス別の設定ガイドは、下記のプラグインサポートリストの**設定ガイドリンク**をご参考にしてください。

## プラグインサポートリスト

| **プラグイン** | **設定ガイドリンク** |
| --- | --- |
| AWS SNS | https://github.com/spaceone-dev/plugin-aws-sns-mon-webhook/blob/master/docs/ko/GUIDE.md |
| Grafana | https://github.com/spaceone-dev/plugin-grafana-mon-webhook/blob/master/docs/ko/GUIDE.md |
| Prometheus |https://github.com/spaceone-dev/plugin-prometheus-mon-webhook/blob/master/docs/ko/GUIDE.md|
| Zabbix |https://github.com/spaceone-dev/plugin-zabbix-mon-webhook/blob/master/docs/ko/GUIDE.md|
