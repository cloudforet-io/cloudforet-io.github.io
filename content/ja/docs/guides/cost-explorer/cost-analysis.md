---
title: "コスト分析"
linkTitle: "コスト分析"
weight: 2
date: 2022-06-23
description: >
    **コスト分析**は、クラウド提供者から受信したコストデータを詳細に分析します。
    <br>
    <br>
    多様な条件でデータをグループ化またはフィルタリングするため、確認したいコストデータがひと目で把握することができます。
---


## コスト分析の確認

### データソースの選択

複数の請求データソースを接続している場合、左側のメニューの「コスト分析」セクションから各データソースを選択することで詳細な費用分析を実行できます。

{{<alert>}}
費用データの歪みを防ぐために、各データソースの元の通貨は固定されています。
{{</alert>}}

![cost-analysis-data-source](/ja/docs/guides/dashboards/cost-analysis-img/cost-analysis-data-source_ja.png)


### 細部基準を選択する 

**細部基準**はデータの表示方法を設定する基準です。提供されるチャートやテーブルの形式は、詳細な基準に応じて異なります。

![cost-analysis-granularity](/ja/docs/guides/dashboards/cost-analysis-img/cost-analysis-granularity_ja.png)

- `日別データ`: 特定の月の日毎の累積データを確認できます。
- `月別データ`: 特定の期間の月次データを確認できます（最大12か月まで）。
- `年間`: 最新の3年間の年次データを調査できます。

<br>

### 期間を選択する

期間メニューで利用可能なオプションは、選択した粒度によって異なります。[期間] ドロップダウンからメニューを選択するか、"カスタム" メニューを直接設定することができます。


![cost-analysis-period](/ja/docs/guides/dashboards/cost-analysis-img/cost-analysis-period_ja.png)

<br>

### グループ別の設定

`グループ別統計`から1つ以上の結果を選択できます。チャートでは、グループ統計の選択された1つの結果のみが表示され、テーブルでは選択したグループ統計のすべての結果を見ることができます。


{{<alert>}}
グループ別は最大で3つまで選択できます。
{{</alert>}}

![cost-analysis-groupby](/ja/docs/guides/dashboards/cost-analysis-img/cost-analysis-groupby_ja.png)

![cost-analysis-groupby](/docs/guides/dashboards/cost-analysis-img/cost-analysis-cost_usage.png)


<br>


### フィルター設定

「フィルター」は、グループ別と同様に、1つまたは複数選択でき、設定した値は「AND」条件でフィルタリングに使用されます。

(1) ページの上部にある [**フィルター**] ボタンをクリックします。

(2) 『フィルター設定』ウィンドウが開くと、希望のフィルタを選択し、選択内容がすぐにグラフとテーブルに反映されます。

![cost-analysis-filter](/ja/docs/guides/dashboards/cost-analysis-img/cost-analysis-filter_ja.png)

<br>


## カスタムコスト分析の作成/管理

### カスタム分析ページの作成"

"コスト分析"ページに入るたびに細部基準と期間を設定し直す手間を軽減するために、頻繁に使用する設定をカスタム分析ページとして保存できる機能が提供されています。

{{<alert>}}
各データソースごとに提供される3つのデフォルト分析ページに加えて、直接カスタムコスト分析ページを作成することもできます。
{{</alert>}}

(1) 特定のコスト分析ページの右上にある [名前を付けて保存] ボタンをクリックします。

![cost-analysis-save_as](/ja/docs/guides/dashboards/cost-analysis-img/cost-analysis-save_as_ja.png)

(2) 名前を入力し、[**確認**] ボタンをクリックすると、新しい分析ページが作成されます。

![cost-analysis-save_to](/ja/docs/guides/dashboards/cost-analysis-img/cost-analysis-save_to_ja.png)

![cost-analysis-saved](/ja/docs/guides/dashboards/cost-analysis-img/cost-analysis-saved_ja.png)


(3) カスタムコスト分析ページは名前、フィルタ、グループ別などの設定を含めて、[**保存**] オプションを使用して直接保存できます。デフォルトの分析ページと同様に、[**名前を付けて保存**] を使用して新しいページを作成することもできます。!

![cost-analysis-save_saveas](/ja/docs/guides/dashboards/cost-analysis-img/cost-analysis-save_saveas_ja.png)

<br>

### カスタム分析名の編集

ページの上部にある [**編集**] ボタンをクリックして名前を編集できます。

![cost-analysis-edit](/ja/docs/guides/dashboards/cost-analysis-img/cost-analysis-edit_ja.png)

![cost-analysis-edit_name](/ja/docs/guides/dashboards/cost-analysis-img/cost-analysis-edit_name_ja.png)

<br>

### カスタム分析名を削除する

ページの上部にある [**削除**] ボタンをクリックすることで、ページを削除できます。

![cost-analysis-delete](/ja/docs/guides/dashboards/cost-analysis-img/cost-analysis-delete_ja.png)


