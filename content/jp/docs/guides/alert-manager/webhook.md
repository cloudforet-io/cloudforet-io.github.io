---
title: "ウェブフック"
linkTitle: "ウェブフック"
weight: 4
date: 2022-06-07
description: >
    **ウェブフック**を利用すると、外部モニタリングサービスで発生したイベントを受信できます。
---

## ウェブフックを作成する

<!--この項目は、[アラートマネージャー > quick start]の「ウェブフックを作成する」項目と同じです。修正時にはご注意ください -->

外部モニタリングサービスで発生するイベントメッセージを受信するためには、ウェブフックを作成しなければなりません。
<br>
ウェブフックは、プロジェクト詳細ページで作成できます。


(1) プロジェクト詳細ページの[アラート]タブに移動して、[ウェブフック]タブを選択します。

![create-webhook-step-1](/jp/docs/guides/alert-manager/quick-start-img/create-webhook-step-1,2.png)

(2) [追加]ボタンをクリックします。

(3) [ウェブフック追加]モダールウィンドウで名前を作成して、連携する外部モニタリングサービスのプラグインを選択します。

![create-webhook-step-3](/jp/docs/guides/alert-manager/quick-start-img/create-webhook-step-3.png)

(4) [確認]ボタンをクリックして設定を完了します。

{{<alert title="外部モニタリングサービス連携">}}
ウェブフックを使用するためには、作成されたウェブフックのURLを通じて外部モニタリングサービスと連携する必要があります。

外部モニタリングサービスとの連携方法は、[こちら](/jp/docs/guides/plugins/alert-manager-webhook/)をご参考にしてください｡
{{</alert>}}






##ウェプフク一覧を照会する

### 詳細検索
検索ウィンドウに検索ワードを入力すると、条件と一致するウェブフック一覧を確認できます。詳細検索に関する詳細については､[こちら](/jp/docs/guides/advanced/search/)をご参考にしてください｡

![webhook-search](/jp/docs/guides/alert-manager/webhook-img/webhook-search.png)

## ウェブフックを修正・削除する

一覧で照会したウェブフックを選択すると、有効化、無効化、変更、削除を実行することができます。

![update-webhook](/jp/docs/guides/alert-manager/webhook-img/update-webhook.png)

### ウェブフックを有効化・無効化する

ウェブフックを有効化すると、当該ウェブフックと連携した外部モニタリングサービスから受信したイベントを[アラート](/jp/docs/guides/alert-manager/alert/)で受け取ることができます。
<br>
ウェブフックを無効化すると、受信されるイベントは無視され、アラートは発生しません。

(1) 有効化するウェブフックを選択して、[作業]ドロップダウンで[有効化]または[無効化]メニューを選択します。

![enable-webhook-1](/jp/docs/guides/alert-manager/webhook-img/enable-webhook-1.png)

(2) [ウェブフック有効化・無効化]モダールウィンドウで内容を確認して、[確認]ボタンをクリックします。

![enable-webhook-2](/jp/docs/guides/alert-manager/webhook-img/enable-webhook-2.png)
![disable-webhook-2](/jp/docs/guides/alert-manager/webhook-img/disable-webhook-2.png)


### ウェブフック名を変更する

(1) ウェブフック一覧で変更するウェブフックを選択して、[作業]ドロップダウンで[変更]メニューを選択します。

![update-webhook-name-1](/jp/docs/guides/alert-manager/webhook-img/update-webhook-name-1.png)

(2) 変更する名前を作成して[確認]ボタンをクリックすると、変更が完了します。

![update-webhook-name-2](/jp/docs/guides/alert-manager/webhook-img/update-webhook-name-2.png)

###ウェプフクを削除する
    
(1) ウェブフック一覧で削除するウェブフックを選択して、[作業]ドロップダウンで[削除]メニューを選択します。

![delete-webhook-1](/jp/docs/guides/alert-manager/webhook-img/delete-webhook-1.png)

(2) 選択したウェブフックの名前を正確に入力して[削除]ボタンをクリックすると、ウェブフックの削除が完了します。 

![delete-webhook-2](/jp/docs/guides/alert-manager/webhook-img/delete-webhook-2.png)
