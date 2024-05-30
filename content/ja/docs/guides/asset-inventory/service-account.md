---
linkTitle: サービスアカウント
weight: 5
date: '2022-10-12T00:00:00.000Z'
description: |
  **サービスアカウント**では、各クラウドサービスのアカウントを手軽に統合・管理・追跡することができます。
title: サービスアカウント
---

## サービスアカウントを追加する

`General Account`,`Trusted Account`2つのタイプのアカウントが作成できます。

{{<alert>}}

* **`General Account`** :
  * オプション1）個別暗号化キーでアカウントを直接登録することができます。
  * オプション2) 既存の`Trusted Account`の暗号化キーを接続して登録することができます。
  * オプション3）状況によって、別途の暗号化キーなしでも新規アカウントを作成することができます。
* **`Trusted Account`**:
  * `General Account`とアタッチできる`Trusted Account`を作成することができます。
  * アタッチされたTrustedAccountの暗号化キーはGeneralAccountがリソースにアクセスするとき参照されます。
    {{</alert>}}

<br><br>

### General Accountを作成する

(1) \[アセットインベントリー > サービスアカウント]ページで追加するクラウドサービスを選択します。

(1-1) General Accountを選択します。

![](/guides/asset_inventory/quick-start/create-service-account-01-jp.png)

(2) \[作成]ボタンをクリックします。

![](/guides/asset_inventory/quick-start/create-collector-01-jp.png)

(3) サービスアカウントの作成フォームを作成します。

![](/guides/asset_inventory/quick-start/create-service-account-03-jp.png)

(3-1) 暗号化キーの情報を入力します。

* オプション1）個別暗号化キーでアカウントを直接登録することができます。![](/guides/asset_inventory/quick-start/create-service-account-04-jp.png)
* オプション2) 既存の`Trusted Account`の暗号化キーを接続して登録することができます。

> AWSの場合、既存の`Trusted Account`をアタッチすることで簡単にAssume Roleを作成することができます。特定の`Trusted Account`を選択すると、その情報が自動的に適用されますので、残りの情報を入力するだけで良いです。![](/guides/asset_inventory/service-account/create-general-account-01-jp.png)

* オプション3）状況によって、別途の暗号化キーなしでも新規アカウントを作成することができます。![](/guides/asset_inventory/service-account/create-general-account-02-jp.png)

(4) \[保存]ボタンをクリックすると完了します。

<br>

### Trusted Accountを作成する

(1) \[アセットインベントリー > サービスアカウント]ページで追加するクラウドサービスを選択します。

(1-1) `Trusted Account`を選択します。

![](/guides/asset_inventory/service-account/create-trusted-account-01-jp.png)

(2) \[作成]ボタンをクリックします。

![](/guides/asset_inventory/service-account/create-trusted-account-02-en.png)

(3) サービスアカウントの作成フォームを作成します。

(3-1) 基本情報を入力します。

![](/guides/asset_inventory/service-account/create-trusted-account-03-jp.png)

(3-2) 暗号化キーの情報を入力します。

![](/guides/asset_inventory/service-account/create-trusted-account-04-jp.png)

(4) \[保存]ボタンをクリックすると完了します。

<br><br>

## サービスアカウントを照会

作成されたサービスアカウントの一覧表を照会することができ、特定アカウントをクリックすると詳細情報を確認することができます。

![](/guides/asset_inventory/service-account/viewing-service-account-01-jp.png)

<br><br>

## サービスアカウントを編集

編集したいサービスアカウントページに入ります。

![](/guides/asset_inventory/service-account/edit-service-account-01-jp.png)

<br>

### 各項目の内容を編集する

「編集」ボタンを押して各項目の内容を編集することができます。

![](/guides/asset_inventory/service-account/edit-service-account-02-jp.png)![](/guides/asset_inventory/service-account/edit-service-account-03-jp.png)


<br><br>

## サービスアカウントを削除

リストから削除したいサービスアカウントを選択します。

削除アイコンボタンをクリックすると、該当するサービスアカウントを削除することができます。

![](/guides/asset_inventory/service-account/removing-service-account-01-jp.png)

サービスアカウントが`Trusted Account`タイプで、複数の`General Account`にアタッチされている場合は削除することができません	。

![](/guides/asset_inventory/service-account/removing-service-account-02-jp.png)
