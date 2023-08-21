---
title: "コレクター"
linkTitle: "コレクター"
weight: 4
date: 2022-06-07
description: >
    クラウドフォレは、**コレクター**を利用して[クラウドリソース](/ja/docs/guides/asset-inventory)を収集し、スケジューリングを利用して収集時期を決定できます。

---

## 概要

コレクターでデータを収集するためには、次の2つの要素が必要です。

### コレクタープラグイン

[クラウドプロバイダ](/ja/docs/guides/asset-inventory)から収集するリソースと、収集したデータを画面に表示する方法に対するスペックが定義された要素です。 

プロバイダ別に持っているデータの構造と内容が異なるため、コレクターはどこまでも**コレクタープラグイン**に依存してリソースを収集します。

これに関する詳細については、[こちら](/ja/docs/guides/plugins/asset-inventory-collector)をご参考にしてください｡
 
### サービスアカウント 

リソースを収集するためには、[クラウドプロバイダ](/ja/docs/guides/asset-inventory)のアカウントに接続する必要があります。

**サービスアカウント**は、プロバイダのアカウントに接続するためのアカウント情報です。 

コレクターは、各プロバイダが作成したサービスアカウントを利用してプロバイダアカウントにアクセスします。 

これに関する詳細については、[こちら](/ja/docs/guides/asset-inventory/service-account)をご参考にしてください｡

## コレクターを作成する

(1) 画面左上の[作成]ボタンをクリックします。

![collector-create-button](/ja/docs/guides/asset-inventory/collector-img/collector-create-button_ja.png)

(2) 「新しいコレクターを作成する‌」ページの手順に従ってください。
(2-1) 「プラグインリスト」ページで必要なコレクタープラグインを見つけ、[選択]ボタンをクリックしてください。

![collector-plugin-lists](/ja/docs/guides/asset-inventory/collector-img/collector-create-step1_ja.png)

(2-2) コレクターの名前とバージョンを入力し、[次へ]ボタンをクリックしてください。
(コレクターによっては、特定のクラウドプロバイダーを選択する必要がある場合があります。)

![collector-plugin-create](/ja/docs/guides/asset-inventory/collector-img/collector-create-step2_ja.png)

{{<alert title="バージョンと自動アップグレード">}}
"バージョン"とは、以前に選択したコレクタープラグインのバージョンを指します。これは自動アップグレードを無効にして選択することができます。この場合、データは常に指定されたプラグインのバージョンで収集されます。

一方、自動アップグレードを有効にすると、データは常にプラグインの最新バージョンで収集されます。
{{</alert>}}

<br>

(2-3) コレクターの追加オプションを選択し、[次へ]ボタンをクリックしてください。

(2-3-1) 関連するサービスアカウント：「全体」または「特定のサービスアカウント」のいずれかを選択してください。 「全体」を選択すると、コレクターに関連するプロバイダーのサービスアカウントが自動的にデータ収集の対象となります。

(2-3-2) 追加オプション：コレクターによっては、選択する追加オプションがある場合とない場合があります。

![collector-plugin-create](/ja/docs/guides/asset-inventory/collector-img/collector-create-step3_ja.png)

(2-4) データ収集を自動的に行うためのスケジュールを設定することができます（オプション）。
すべての手順を完了したら、[新しいコレクターを作成]ボタンをクリックして、コレクターの作成を確定してください。

![collector-plugin-create](/ja/docs/guides/asset-inventory/collector-img/collector-create-step4_ja.png)

(2-5) コレクターが作成されると、すぐにデータを収集することができます。

![collector-plugin-create](/ja/docs/guides/asset-inventory/collector-img/collector-create-step5_ja.png)

<br>


## コレクターのリストを取得する

コレクターページで作成されたすべてのコレクターのリストを表示できます。

**詳細検索**を利用すると、詳細条件で一覧をフィルタリングできます。これに関する詳細については、[こちら](/ja/docs/guides/advanced/search/)をご参考にしてください｡

![collector-list-inquiry](/ja/docs/guides/asset-inventory/collector-img/collector-list_ja.png)

<br>

## コレクターを表示/編集/削除できます

### (1) 詳細を表示する

(1-1) リストから特定のコレクターカードを選択し、そのコレクターの詳細ページに移動します。

![collector-list-select](/ja/docs/guides/asset-inventory/collector-img/collector-list-select_ja.png)

(1-2) 基本情報、スケジュール、追加オプション、関連サービスアカウントを表示できます。

![collector-detail-info-tab](/ja/docs/guides/asset-inventory/collector-img/collector-detail_ja.png)

<br>

### (2) Edit or Delete

(2-1) 上部の[編集]アイコンをクリックしてコレクター名を変更します。

![collector-detail-edit](/ja/docs/guides/asset-inventory/collector-img/collector-detail-name-edit_ja.png)

(2-2) 基本情報、スケジュール、追加オプション、サービスアカウントなどの詳細を編集する 경우、各領域の[編集]ボタンをクリックしてください。

![collector-detail-edit](/ja/docs/guides/asset-inventory/collector-img/collector-detail-edit_01_ja.png)

(2-3) After making the changes, click the [Save Changes] button to complete the modification.

![collector-detail-edit](/ja/docs/guides/asset-inventory/collector-img/collector-detail-edit_02_ja.png)

(2-4) 変更を行った後、変更を完了するために[変更を保存]ボタンをクリックしてください。

![collector-detail-delete](/ja/docs/guides/asset-inventory/collector-img/collector-detail-name-delete_ja.png)

<br>

## 自動データ収集を設定してください

コレクターを作成한後も、個別のコレクターの自動データ収集スケジュールを変更することができます。

(1) コレクターリストページでは、各コレクターの自動データ収集をコレクターカードセクションのスケジュール切り替えボタン(オン/オフ)を使用して有効化または無効化できます。[編集]ボタンをクリックして頻度を迅速に設定および変更することもできます。

![collector-edit-schedule](/ja/docs/guides/asset-inventory/collector-img/collector-edit-schedule_01_ja.png)

![collector-edit-schedule](/ja/docs/guides/asset-inventory/collector-img/collector-edit-schedule_02_ja.png)

(2) また、各コレクターの詳細ページに移動してスケジュールを変更することもできます。

![collector-edit-schedule](/ja/docs/guides/asset-inventory/collector-img/collector-detail-schedule_ja.png)

<br>

## データ収集を即座に開始してください

自動データ収集の設定をせずに、一度だけデータを収集することができます。

コレクターに自動データ収集スケジュールがなくても、データ収集が行われます。

データ収集には2つの方法があります:

- [全ての関連サービスアカウントに対するデータ収集](/ja/docs/guides/asset-inventory/collector/#全ての関連サービスアカウントに対するデータ収集)
- [単一のサービスアカウントに対するデータ収集](/ja/docs/guides/asset-inventory/collector/#単一のサービスアカウントに対するデータ収集)


### 全ての関連サービスアカウントに対するデータ収集

コレクターはがデータを収集するためには、[プロバイダ](/ja/docs/guides/asset-inventory)のアカウント情報を必要です。アカウント情報は、[サービスアカウント](/ja/docs/guides/asset-inventory/service-account)を通じて登録されます。

(1) コレクターリストページで、データを収集したいコレクターカードの上にマウスカーソルを移動してください。

![collector-collect-data](/ja/docs/guides/asset-inventory/collector-img/collector-edit-schedule_01_ja.png)

(2) 当該コレクターのデータ収集の完了状況は、[コレクター履歴](/ja/docs/guides/asset-inventory/collector/#データ収集スケジュールを設定する)で確認できます。選択したコレクターの[詳細を見る]リンクをクリックすると、当該ページへ移動します。

<br>

### 単一のサービスアカウントに対するデータ収集

コレクターを使用してデータを収集する場合、特定のクラウドプロバイダーのアカウントからのみデータを収集できます。

(1) コレクターリストページからコレクターを選択し、詳細ページに移動してください。 

(2) 詳細ページの一番下に、関連付けられたサービスアカウントの一覧が表示されます。

![collector-service-account](/ja/docs/guides/asset-inventory/collector-img/collector-detail-service-account_ja.png)

{{<alert title="サービスアカウント">}}
[サービスアカウント](/ja/docs/guides/asset-inventory/service-account)は、データ収集に必要なプロバイダアカウントに対するアクセス情報を持っています。

ここで情報が確認できない場合、プロバイダにアクセスできるアカウント情報がないものと見做され、コレクターが実行されてもデータは収集されません。

そのため、コレクターでデータ収集するためには、先に[サービスアカウント]メニューで当該プロバイダのアカウント情報を登録しなければなりません。
{{</alert>}}

(3) データを収集するためには、データを収集したいサービスアカウントの右側にある[データ収集]ボタンをクリックしてください。

<br>

## データ収集スケジュールを設定する

周期的にリソースを収集するようコレクターのスケジュールを設定することができます。

(1) コレクター一覧でスケジュールを設定するコレクターを選択します。

(2) 下にある[スケジュール]タブを選択します。

ここでスケジュール一覧を確認したり、追加・変化・削除を実行できます。

![collector-schedule-tab](/ja/docs/guides/asset-inventory/collector-img/collector-schedule-tab.png)

<br>

### データ収集リストを照会する

コレクター履歴ページの画面上部にあるチャートから、日別データ収集状況を速やかに確認できます。

画面下部には、詳細検索と状態フィルター条件と一致するデータ収集リストが表示されます。詳細検索に関する詳細については、[こちら](/ja/docs/guides/advanced/search/)をご参考にしてください。

データを収集中の項目は、Job Progressフィールドのステータスバーで収集状況を確認できます。

![collector-history-full-page](/ja/docs/guides/asset-inventory/collector-img/collector-history-full-page.png)

### データ収集履歴の詳細情報を確認する

上のデータ収集リストで収集履歴を選択すると、収集履歴詳細ページへ移動します。

データ収集状態、基本情報、そして**サービスアカウント別の収集履歴**を確認できます。

![collector-history-detail-full-page](/ja/docs/guides/asset-inventory/collector-img/collector-history-detail-full-page.png)

#### サービスアカウント別の収集履歴を確認する

コレクターを実行すると、接続されたサービスアカウント別に収集が各々実行されます。

ここでは、サービスアカウント別の収集作業の進行状況を確認することができます。

{{<alert title="">}}
コレクターは、データ収集時にサービスアカウントを通じてクラウドプロバイダのアカウントにアクセスして、データを読み込みます。
{{</alert>}}

![collector-history-detail-table](/ja/docs/guides/asset-inventory/collector-img/collector-history-detail-table.png)

###### 主なフィールド情報
- Created Count: 新しく追加されたリソース数
- Updated Count: 読み込んだリソース数
- Disconnected Count: 読み込めなかったリソース数
- Deleted Count: 削除されたリソース数 (何度も読み込めなかった場合は、削除したものとみなされます。)

#### 収集エラーの内容を確認する

(1) アカウント別の収集リストで発生したエラーの内容を確認したい項目を選択します。

(2) 下にある[エラー一覧]タブでエラーに対する詳細履歴を確認できます。

![collector-history-error-list](/ja/docs/guides/asset-inventory/collector-img/collector-history-error-list.png)
