---
linkTitle: リソース解析
weight: 5
date: '2022-10-12T00:00:00.000Z'
description: |
  **サービスアカウント**ワークスペースで使用しているリソースメトリクスを素早く直感的に探索し、すべてのデータを視覚化されたチャートで簡単に確認できます。
title: リソース解析
---

## データ探索

特定のワークスペース環境を選択します → \[アセットインベントリ>リソース分析]メニューに移動します。

<br>

##### **1. **ネームスペースの選択

左側のサイドバーにある「ネームスペース」領域で検索語を入力するか、リストから1つ選択します。

![](/guides/asset_inventory/metric-explorer-01-ja.png)

<br>

##### **2. **メトリック（指標）の選択

分析したいメトリックを選択します。

![](/guides/asset_inventory/metric-explorer-02-ja.png)

<br>

##### **3. **オプションの利用

![](/guides/asset_inventory/metric-explorer-view-01-ja.png)

➊ 演算子: 合計（Sum）/ 平均値（Average）/ 最大値（Max）/ 最小値（Min）のいずれかを選択します。

➋ 詳細条件: 日次または月次のデータを確認できます。

➌ 期間: 選択した「詳細条件」に基づいて、それに適した期間を選択できます。

➍ フィルター: 様々なオプションを活用して、必要なデータでフィルターして確認できます。

➎ グループ別統計: 複数のグループ化をクリックして主要データを素早く確認できます。

<br>

##### **4. **チャートタイプの活用

* 折れ線(Line)グラフ/ 棒(Bar)チャート/ ツリーマップ/ ドーナツチャートなど、様々なチャートタイプでデータを確認できます。

![](/guides/asset_inventory/metric-explorer-view-02.png)

* ソースコードアイコンをクリックすると、そのメトリックのクエリを確認できます。

![](/guides/asset_inventory/metric-explorer-view-02_2.png)

<br>

##### **5. **テーブルデータの確認

選択したオプションとメトリックに対応する詳細データを確認でき、Excelファイルへのエクスポートも可能です。

![](/guides/asset_inventory/metric-explorer-view-03.png)

<br><br>

## カスタムメトリック

提供されるメトリックに加えて、ユーザーが独自の指標を追加することができます。

<br>

方法1）既存のメトリックを「複製」して新規作成

右上の \[複製] ボタンをクリックして、既存のメトリックを複製することができます。

![](/guides/asset_inventory/metric-explorer-duplicate-ja.png)

方法2）クエリを使用した直接作成

左側のサイドバーの \[+] ボタンをクリックして、ユーザークエリを入力し、新しい指標を作成できます。

![](/guides/asset_inventory/metric-explorer-add-02-example-ja.png)

![](/guides/asset_inventory/metric-explorer-add-query-02-ja.png)

上記のように、直接作成または複製されたメトリックの場合、クエリを編集することができます。

![](/guides/asset_inventory/metric-explorer-edit-query-ja.png)

<br><br>

## サンプルデータの作成/管理

各メトリックごとに、演算子、期間、フィルターなどのオプション値を持つサンプルデータを作成できます。

<br>

##### **1. **サンプルデータの追加

特定のメトリックページで、'演算子'、'詳細条件'、'期間'、'フィルター'、'グループ別統計'の値を指定した後、右上の\[+サンプル追加]ボタンをクリックして保存すると、詳細な設定値がすべてデータに含まれて保存されます。

![](/guides/asset_inventory/metric-explorer-add-example-ja.png)

* 追加されたサンプルは、該当するメトリックの下に配置されます。

![](/guides/asset_inventory/metric-explorer-add-02-example-ja.png)

* 作成後も複数の設定値を変更して直接\[保存]するか、\[別の名前で保存]することができます。

![](/guides/asset_inventory/metric-explorer-add-04-example-ja.png)

* メトリックサンプルの名前の変更や削除も可能です。
