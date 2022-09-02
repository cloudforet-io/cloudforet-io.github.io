---
title: "クラウドサービス"
linkTitle: "クラウドサービス"
weight: 2
date: 2022-06-07
description: >
    [**コレクター**](/jp/docs/guides/asset-inventory/collector)によって収集されたさまざまなクラウドリソースを統合的に照会して、利用状況を把握することができます。
---

## クラウドサービス一覧を照会する

クラウドサービスページでは、 **プロバイダ**別のクラウドサービスの利用状況を確認できます。

[詳細検索](/jp/docs/guides/advanced/search)とフィルター設定を利用すると、詳細条件で一覧をフィルタリングできます。

### プロバイダ選択

プロバイダを選択して、特定プロバイダを通じて提供されるクラウドサービスのみを照会します。

![cloud-service-provider-menu](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-service-provider-menu.png)

### フィルター設定

サービス分類とリージョンフィルターを設定すると、さらに詳細な条件検索が可能です。

(1) [設定]ボタンをクリックすると、[フィルター設定]モダールウィンドウが表示されます。

![cloud-service-filter-button](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-service-filter-button.png)

(2) 設定したいフィルターを選択して[確認]ボタンをクリックすると、適用されます。

![cloud-service-filter-modal](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-service-filter-modal.png)


## クラウドサービスを確認する

クラウドサービス詳細ページでは、特定クラウドサービスの詳細情報を確認できます。

クラウドサービスページでカードをクリックすると、詳細ページへ移動します。

![cloud-service-select](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-service-select.png)

左横のクラウドサービス一覧で、選択したクラウドサービスに対する詳細情報を確認できます。

![cloud-service-list-lnb](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-service-list-lnb.png)

### クラウドサービスのリソース一覧を照会する

検索ワードを入力すると、条件と一致するクラウドリソース一覧を確認できます。

**詳細検索**に関する詳細については、[こちら](/jp/docs/guides/advanced/search)をご参考にしてください｡

[Excel]アイコンをクリックしてリソース一覧を[Excelファイルでエクスポート](/jp/docs/guides/advanced/excel-export)、または[設定]アイコンをクリックして[テーブルフィールド個人化](/jp/docs/guides/advanced/custom-table)を実行できます。

![cloud-sevice-detail-full-page](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-sevice-detail-full-page.png)

### クラウドサービスの利用状況を見る

選択したクラウドサービスに対する統計情報を確認できます。

![cloud-service-single-select](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-service-single-select.png)

さらに詳細な情報は、右側の[チャートを見る]ボタンをクリックすると確認できます。

![cloud-service-chart-modal](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-service-chart-modal.png)

### クラウドリソースコンソールを開く

時には、クラウドリソースのプロバイダが提供するコンソールで作業する場合があります。

(1) コンソールに接続するクラウドリソースを選択します。

(2) [コンソール接続]ボタンをクリックします。

![cloud-service-connect-console](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-service-connect-console.png)

(3) ボタンをクリックすると、当該クラウドリソースに対する作業を実行できるプロバイダのコンソールが新しいタブとして開かれます。

下図は、AWSのEC2 Instanceコンソールを開いた例です。

![cloud-service-console-opened](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-service-console-opened.png)

## クラウドサービスのリソースを確認する

クラウドリソース一覧で確認したい項目を選択すると、その下に当該リソースに対する情報が表示されます。

- [詳細情報](#クラウド-リソース-詳細-情報-確認する)
- [タグ](#クラウド-リソース-タグ-管理する)
- [関連メンバー](#クラウド-リソース-関連-メンバー-確認する)
- [変更記録](#クラウド-リソース-関連-メンバー-確認する)
- [モニタリング](#クラウド-リソース-モニタリング-情報-確認する)

![cloud-resource-single-select](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-resource-single-select.png)

### クラウドリソースの詳細情報を確認する

選択したリソースに対する詳細情報が表示されます。

ここに表示される情報は、**基本タブ**と**追加情報タブ**に分けられます。

- **基本タブ**: クラウドリソース詳細情報に基本的に提供さり[基本情報]、[ソースデータ]タブです。
- **追加情報タブ**: 基本タブを除いたすべてのタブは、当該リソースを収集したコレクターのプラグインによって決定されます。これについての詳細については、[こちら](/jp/docs/guides/plugins/asset-inventory-collector)をご参考にしてください｡

<br>

![cloud-resource-info-tab](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-resource-info-tab.png)

上図は、クラウドリソースの詳細情報の例です。

[基本情報]タブと[ソースデータ]タブを除いた残りのタブ(AMI、Permission、Tags)は、すべてコレクターのプラグインによって追加された情報です。

### クラウドリソースタグを管理する

クラウドリソースにタグを追加して管理することができます。

(1) [タブ]タブ内で[編集]ボタンをクリックします。

![cloud-resource-tag-tab](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-resource-tag-tab.png)

(2) タグページで「キー: 値」形態でタグを入力して、[保存]ボタンをクリックすると完了します。

![cloud-resource-tag-add](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-resource-tag-add.png)

### クラウドリソース関連メンバーを確認する

[関連メンバー]タブでは、以下の条件と一致するユーザー情報を確認できます。

- [プロジェクトメンバー](/jp/docs/guides/project/member)として当該クラウドリソースへのアクセス権限を有するユーザー

![cloud-resource-member-tab](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-resource-member-tab.png)

### クラウドリソースの変更記録を確認する

[変更履歴]タブでは、選択したクラウドリソースの日付・時間別に変更事項を速やかに把握できます。

(1) 特定の日付を選択または検索すると、確認したい詳細履歴を抽出することができます。

![cloud-resource-changes-tab](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-resource-history-changes-tab.png)

(2) 特定キー値または特定の時間帯をすべてクリックすると、該当する変更履歴の詳細を確認できます。

(2-1) 変更履歴: 当該リソースのどのKey値がどのようにアップデートされたのかなどの詳細履歴を確認できます。

![cloud-history-diff-tab](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-history-diff-tab.png)

(2-2) ログ: AWS CloudTrailなどのProvider別詳細ログをサポートして、選択した時間内・時間外に発生するイベント詳細を確認できます。これを利用すると、特定リソースを変更したユーザーを把握できる点が大きなメリットです。

![cloud-history-log-tab](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-history-log-tab.png)

確認したいキー値をクリックすると、詳細ログを確認できます。

![cloud-history-log-modal](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-history-log-modal.png)

(2-3) ノート: 選択したタイムにノートを追加・管理して、どの担当者と変更が関連するのか、どのプロセスで当該イシューを解決するのかなど、企業別ワークフローを自由に管理できます。

![cloud-history-note-tab](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-history-note-tab.png)

### クラウドリソースのモニタリング情報を確認する

[モニタリング]タブには、クラウドリソースに対するさまざまなメトリクスが表示されます。

![cloud-resource-monitoring-tab](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-resource-monitoring-tab.png)

[時間範囲]フィルターの変更、または[統計]ドロップダウンで他の統計方法を選択して、別の基準に対するメトリクスを確認することもできます。

画面上部のクラウドリソース一覧の左横にあるチェックボックスで複数のリソースを選択すると、複数のリソースに対するメトリクス情報を比較して確認することができます。

![cloud-resource-multi-monitoring](/jp/docs/guides/asset-inventory/cloud-service-img/cloud-resource-multi-monitoring.png)

メトリクス情報は、**モニタリングプラグイン**によって収集されます。これに関する詳細については、[こちら](/jp/docs/guides/plugins/asset-inventory-collector)をご参考にしてください｡
