---
linkTitle: Quick Start
weight: 1
date: '2022-06-23T00:00:00.000Z'
description: |
  **アラートマネージャー**サービスを素早く使用するための過程をご紹介します。
title: Quick Start
---

## メニューに入る

(1) 特定のワークスペースを選択

![](/guides/asset_inventory/quick-start/select-workspace-01-jp.png)

(2) \[アセットインベントリ > サービスアカウント]に移動

<br> <br>

## サービスアカウントを作成する

(1) 追加するクラウドサービスを選択します。

![](/guides/asset_inventory/quick-start/create-service-account-01-jp.png)

(2) \[作成]ボタンをクリックします。

![](/guides/asset_inventory/quick-start/create-service-account-02-jp.png)

(3) サービスアカウントの作成フォームを作成します。

(3-1) 基本情報を入力します。

{{<alert>}}
プロジェクト管理の詳細については、[こちら](/ja/docs/guides/project/)を参照してください。
{{</alert>}}

![](/guides/asset_inventory/quick-start/create-service-account-03-jp.png)

<br>

(3-2) 暗号化キーの情報を入力します。

![](/guides/asset_inventory/quick-start/create-service-account-04-jp.png)

<br> <br>

## コレクターを作成する

\[アセットインベントリー > コレクター]ページでリソースを収集するコレクターを作成します。

(1) 特定のコレクターにマウスオーバーすると

![](/guides/collector/collector-admin-only-03-ja.png)

「管理者管理」と表示されるコレクターの場合、<br>

管理者モードで作成されたグローバル範囲のコレクターとして、スケジュールや情報の編集はできず、データの収集のみが可能です。

![](/guides/collector/collector-admin-only-02-ja.png)

{{<alert>}}

**管理者モードとは？**<br>
管理者権限を持つユーザーだけがアクセスできる、独自の管理者専用モードです。
管理者ガイドは[こちら](/ja/docs/guides/admin-mode/)を参照してください。

* 管理者権限を持つユーザーだけが管理者モードに切り替えてGlobal範囲のコレクターを作成し、管理できます。

{{</alert>}}

<br><br>

## コレクターを作成します

\[アセットインベントリ > コレクター] ページからリソースを収集するコレクターを作成します。

(1) \[作成] ボタンをクリックします。

![](/guides/asset_inventory/quick-start/create-collector-01-jp.png)

(2) リソース収集時に使用するプラグインを選択します。

![](/guides/asset_inventory/quick-start/create-collector-02-jp.png)

(3) コレクター作成フォームを記入します。<br>
(3-1) 名前やバージョンなど基本情報を入力します。

![](/guides/asset_inventory/quick-start/create-collector-03-jp.png)

(4) コレクターの実行スケジュールを作成します。

![](/guides/asset_inventory/quick-start/create-collector-04-jp.png)

## リソースの収集を確認する

\[アセットインベントリ > クラウドサービス] で収集されたリソースを確認できます。

![](/guides/asset_inventory/quick-start/collected-resource-01-jp.png)
