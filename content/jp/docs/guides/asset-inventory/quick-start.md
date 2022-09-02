---
title: "Quick Start"
linkTitle: "Quick Start"
weight: 1
date: 2022-06-23
description: >
    **アラートマネージャー**サービスを素早く使用するための過程をご紹介します。
---

## サービスアカウントを作成する
[アセットインベントリー > サービスアカウント]ページでクラウドサービスアカウントを追加します。

(1) 追加するクラウドサービスを選択します。

![service-account-provider-menu](/jp/docs/guides/asset-inventory/quick-start-img/service-account-provider-menu.png)

(2) [追加]ボタンをクリックします。

![service-account-add-button](/jp/docs/guides/asset-inventory/quick-start-img/service-account-add-button.png)

(3) サービスアカウントの作成フォームを作成します。

(3-1) 基本情報を入力します。

![service-account-add-base-info](/jp/docs/guides/asset-inventory/quick-start-img/service-account-add-base-info.png)

(3-2) 当該サービスアカウントに従ってリソースを収集するプロジェクトを指定します。

![service-account-connect-project](/jp/docs/guides/asset-inventory/quick-start-img/service-account-connect-project.png)

(3-3) 暗号化キーの情報を入力します。

![service-account-add-key](/jp/docs/guides/asset-inventory/quick-start-img/service-account-add-key.png)

## コレクターを作成する
[アセットインベントリー > コレクター]ページでリソースを収集するコレクターを作成します。

(1) [作成]ボタンをクリックします。

![collector-create-button](/jp/docs/guides/asset-inventory/quick-start-img/collector-create-button.png)

(2) リソース収集時に使用するプラグインを選択します。

![collector-plugin-list](/jp/docs/guides/asset-inventory/quick-start-img/collector-plugin-list.png)

(3) コレクター作成フォームを作成します。
(3-1) 名前とバージョンなどの基本情報を入力します。

![collector-create-base-info](/jp/docs/guides/asset-inventory/quick-start-img/collector-create-base-info.png)

(3-2) 必要であればタグを追加します。

![collector-create-tag](/jp/docs/guides/asset-inventory/quick-start-img/collector-create-tag.png)

(4) コレクターを実行させるためのスケジュールを作成します。

(4-1) [アセットインベントリー > コレクター]ページでテーブルのコレクターを１つ選択して、[スケジュール]タブで[追加]ボタンをクリックします。

![collector-single-select](/jp/docs/guides/asset-inventory/quick-start-img/collector-single-select.png)

(4-2) [スケジュール追加]モダールウィンドウでコレクターを実行する時間を設定して、[確認]ボタンをクリックします。

![collector-schedule-modal](/jp/docs/guides/asset-inventory/quick-start-img/collector-schedule-modal.png)


## 収集されたリソースを確認する
[アセットインベントリー > クラウドサービス]で収集されたリソースを照会できます。

![collector-resource-inquiry](/jp/docs/guides/asset-inventory/quick-start-img/collector-resource-inquiry.png)
