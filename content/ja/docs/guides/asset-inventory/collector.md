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

![collector-create-button](/ja/docs/guides/asset-inventory/collector-img/collector-create-button.png)

(2) プラグイン一覧ページで作成したいコレクタープラグインを選択して[作成]ボタンをクリックします。

![collector-plugin-lists](/ja/docs/guides/asset-inventory/collector-img/collector-plugin-lists.png)

(3) [コレクター作成]ページで以下の段階を実行します。

(3-1) [コレクター設定]タブで名前とプラグインのバージョンを選択します。

![collector-create-base-info](/ja/docs/guides/asset-inventory/collector-img/collector-create-base-info.png)

{{<alert title="バージョンと自動アップグレード">}}
バージョンは先に選択したコレクタープラグインのバージョンを意味し、自動アップグレードを無効化すると選択できます。この場合、常に指定したバージョンのプラグインでデータが収集されます。

自動アップグレードを有効化すると、常に最新バージョンのプラグインでデータが収集されます。
{{</alert>}}

(3-2) 必要であれば、[タグ追加]タブでコレクターに対する追加情報を入力します。

![collector-create-tags](/ja/docs/guides/asset-inventory/collector-img/collector-create-tags.png)

(4) [確認]ボタンをクリックすると、コレクターの作成が完了します。

## コレクター一覧を照会する

コレクターページで作成中のすべてのコレクター一覧を照会できます。

**詳細検索**を利用すると、詳細条件で一覧をフィルタリングできます。これに関する詳細については、[こちら](/ja/docs/guides/advanced/search/)をご参考にしてください｡

![collector-list-inquiry](/ja/docs/guides/asset-inventory/collector-img/collector-list-inquiry.png)

## コレクターの詳細情報を確認する

(1) コレクター一覧で詳細内容を確認したいコレクターを選択します。

(2) 一覧の下にある[詳細情報]タブで、コレクターの詳細情報を確認できます。

![collector-detail-info-tab](/ja/docs/guides/asset-inventory/collector-img/collector-detail-info-tab.png)

## コレクターを修正する

(1) コレクター一覧で修正したいコレクターを選択します。

(2) [作業]ドロップダウンで[修正]メニューを選択します。

![collector-edit-menu](/ja/docs/guides/asset-inventory/collector-img/collector-edit-menu.png)

(3) [コレクター修正]モダールウィンドウで値を変更後に[確認]ボタンを押すと、修正が完了します。

![collector-edit-modal](/ja/docs/guides/asset-inventory/collector-img/collector-edit-modal.png)

## コレクターを有効化・無効化する

コレクターを有効化または無効化することができます。コレクターを無効化すると、スケジューラによるデータ収集が停止します。

(1) コレクター一覧で有効化または無効化したいコレクターを選択します。複数を選択すると、一括適用されます。

(2) [作業]ドロップダウンで[有効化]または[無効化]項目を選択します。

![collector-multi-select-for-disable](/ja/docs/guides/asset-inventory/collector-img/collector-multi-select-for-disable.png)

(3) [コレクター有効化]または[コレクター無効化]のモダールウィンドウで選択した項目を確認後に[確認]ボタンをクリックすると、有効化・無効化が完了します。

![collector-disable-modal](/ja/docs/guides/asset-inventory/collector-img/collector-disable-modal.png)

## コレクターを削除する

コレクターを完全削除することができます。

(1) コレクター一覧で削除したいコレクターを選択します。複数を選択すると、一括削除することができます。

(2) [作業]ドロップダウンで[削除]メニューを選択します。

![collector-delete-menu](/ja/docs/guides/asset-inventory/collector-img/collector-delete-menu.png)

(3) [コレクター削除]モダールウィンドウで選択した項目を確認して[確認]ボタンをクリックすると、削除が完了します。

![collector-delete-modal](/ja/docs/guides/asset-inventory/collector-img/collector-delete-modal.png)

## 一回性データを収集する

スケジューリングせずに一度だけデータを収集できます。

この機能を利用すると、コレクターが無効化状態でもデータが収集されます。

データ収集は、2つの方法で作動します。

- [すべてのサービスアカウントに対してデータ収集](/ja/docs/guides/asset-inventory/collector/#接続した-すべての-サービス-アカウントに-対して-データを-収集する)
- [1つのサービスアカウントに対してデータ収集](/ja/docs/guides/asset-inventory/collector/#1つの-サービス-アカウントに-対して-データを-収集する)

### 接続したすべてのサービスアカウントに対してデータを収集する

コレクターはがデータを収集するためには、[プロバイダ](/ja/docs/guides/asset-inventory)のアカウント情報を必要です。アカウント情報は、[サービスアカウント](/ja/docs/guides/asset-inventory/service-account)を通じて登録されます。

コレクターは、基本的にプロバイダのすべてのサービスアカウントに対してデータを収集します。

(1) コレクター一覧でデータを収集するコレクターを選択します。

(2) [作業]ドロップダウンで[データ収集]メニューを選択します。

![collector-collect-data-menu](/ja/docs/guides/asset-inventory/collector-img/collector-collect-data-menu.png)

(3) [データ収集]モダールウィンドウで[確認]ボタンをクリックすると、データ収集を開始します。

![collector-collect-data-modal](/ja/docs/guides/asset-inventory/collector-img/collector-collect-data-modal.png)

(4) 当該コレクターのデータ収集の完了状況は、[コレクター履歴](ko/docs/guides/asset-inventory/collector/#データ-収集-履歴-確認する)で確認できます。選択したコレクターの[詳細を見る]リンクをクリックすると、当該ページへ移動します。

![collector-history-at-table](/ja/docs/guides/asset-inventory/collector-img/collector-history-at-table.png)

### 1つのサービスアカウントに対してデータを収集する

コレクターでデータを収集時に、特定のクラウドプロバイダのアカウントデータのみを収集することもできます。

(1) コレクター一覧でデータを収集するコレクターを選択します。

(2) 下にある[サービスアカウント]タブを選択します。

![collector-service-account-tab](/ja/docs/guides/asset-inventory/collector-img/collector-service-account-tab.png)

ここには、選択したコレクターを通じてデータを収集時に使用されるサービスアカウント一覧が表示されます。

{{<alert title="サービスアカウント">}}
[サービスアカウント](/ja/docs/guides/asset-inventory/service-account)は、データ収集に必要なプロバイダアカウントに対するアクセス情報を持っています。

ここで情報が確認できない場合、プロバイダにアクセスできるアカウント情報がないものと見做され、コレクターが実行されてもデータは収集されません。

そのため、コレクターでデータ収集するためには、先に[サービスアカウント]メニューで当該プロバイダのアカウント情報を登録しなければなりません。

{{</alert>}}

(3) データ収集するサービスアカウントの右にある[データ収集]ボタンをクリックします。

(4) [データ収集]モダールウィンドウで[確認]ボタンをクリックすると、データ収集を開始します。

![collector-data-collect-one-account-modal](/ja/docs/guides/asset-inventory/collector-img/collector-data-collect-one-account-modal.png)

## データ収集スケジュールを設定する

周期的にリソースを収集するようコレクターのスケジュールを設定することができます。

(1) コレクター一覧でスケジュールを設定するコレクターを選択します。

(2) 下にある[スケジュール]タブを選択します。

ここでスケジュール一覧を確認したり、追加・変化・削除を実行できます。

![collector-schedule-tab](/ja/docs/guides/asset-inventory/collector-img/collector-schedule-tab.png)

### スケジュールを追加する

(1) [追加]ボタンをクリックします。

(2) [スケジュール追加]モダールウィンドウに値を入力します。

![collector-schedule-modal](/ja/docs/guides/asset-inventory/collector-img/collector-schedule-modal.png)

(2-1) 識別可能な名前と設定したスケジュールが作動する時間帯(タイムゾーン)を選択します。

(2-2) コレクターがデータを収集するスケジュールを設定します。 

<br>
<br>

スケジュールの設定方法は2つのあります。

![collector-schedule-type](/ja/docs/guides/asset-inventory/collector-img/collector-schedule-type.png)

- 時間で設定: 繰り返したい時間を入力すると、入力したすべての時間毎にデータを収集します。これを毎日繰り返します。
- 繰り返し周期で設定: 入力した周期でデータを収集します。プラグインでサポートする時間単位(時、分、秒)によって入力方式が異なります。

{{<alert title="繰り返し周期設定が表示されない場合">}}
選択したコレクターの**プラグイン**の種類によって、繰り返し周期方式は時に非表示だったり、その時間単位(時、分、秒)の入力方式が異なります。

コレクターのデータ収集は、どこまでもコレクタープラグインに依存します。そのため、当該プラグインが収集するデータ量が膨大な場合は、繰り返し周期を設定すると危険性が高いといえます。この問題を防止するため、繰り返し周期設定は基本値として提供されません。

反対に、頻繁にデータを収集する必要のあるプラグインもあります。この場合、プラグインがサポートする条件に従って、繰り返し周期の設定方式が画面に表示されます。

プラグインに関する詳細については、[こちら](/ja/docs/guides/plugins/asset-inventory-collector)をご参考にしてください｡

{{</alert>}}

(3) [確認]ボタンをクリックしてコレクターを作成します。

### スケジュールを変更する

(1) スケジュール一覧で変更する項目を選択します。

(2) [作業]ドロップダウンで[変更]を選択します。

![collector-schedule-edit-menu](/ja/docs/guides/asset-inventory/collector-img/collector-schedule-edit-menu.png)

(2-1) [スケジュール変更]モダールウィンドウで変更する内容を入力します。スケジュール追加方法と同じなので、上記のスケジュールを追加する(リンク)をご参考にしてください。

![collector-schedule-edit-modal](/ja/docs/guides/asset-inventory/collector-img/collector-schedule-edit-modal.png)

(3) [確認]ボタンをクリックして変更を完了します。

### スケジュールを削除する

(1) スケジュール一覧で変更する項目を選択します。

(2) [作業]ドロップダウンで[削除]メニューを選択します。

![collector-schedule-delete-menu](/ja/docs/guides/asset-inventory/collector-img/collector-schedule-delete-menu.png)

(3) [スケジュール削除]モダールウィンドウで削除するスケジュールの内容を確認して[確認]ボタンをクリックすると、削除が完了します。

![collector-schedule-delete-modal](/ja/docs/guides/asset-inventory/collector-img/collector-schedule-delete-modal.png)

## データ収集履歴を確認する

**コレクター履歴**ページでデータ収集履歴を確認できます。

コレクターページ画面上部の[コレクター履歴]ボタンをクリックすると、コレクター履歴ページへ移動します。

特定コレクターのデータ収集履歴のみを確認したい場合は、コレクター一覧の[詳細を見る]ボタンをクリックします。

![collector-history-at-table](/ja/docs/guides/asset-inventory/collector-img/collector-history-at-table.png)

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

## コレクターのタグを管理する

コレクターにタグを追加して管理することができます。

(1) [タグ]タブ内の[編集]ボタンをクリックします。

![collector-tag-edit](/ja/docs/guides/asset-inventory/collector-img/collector-tag-edit.png)

(2) タグページで「キー: 値」形態でタグを入力して、[保存]ボタンをクリックすると完了します。

![collector-tag-filled](/ja/docs/guides/asset-inventory/collector-img/collector-tag-filled.png)

