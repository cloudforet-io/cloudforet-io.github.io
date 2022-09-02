---
title: "コスト分析"
linkTitle: "コスト分析"
weight: 3
date: 2022-06-23
description: >
    **コスト分析**は、クラウド提供者から受信したコストデータを詳細に分析します。
    <br>
    <br>
    多様な条件でデータをグループ化またはフィルタリングするため、確認したいコストデータがひと目で把握することができます。
---

## コスト分析を確認する

### 細部基準を選択する

**細部基準**は、データの表示方法に対する基準です。細部基準によって表示されるチャートやテーブルの形態が異なります。

![cost-analysis-granularity-01](/jp/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-granularity-01.png)

- 「累積データ」: テーブルで選択した期間の総合データは円グラフで表示されます。
- 「日別データ」または「月別データ」: テーブルで選択した期間が日別・月別に棒グラフで表示されます。
  日別データ・月別データチャートで[累積]トグルボタンを有効化すると、現在までの累積コストデータを確認できます。
    ![cost-analysis-granularity-02](/jp/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-granularity-02.png)

### 期間を設定する
細部基準によって選択できる期間のメニューは異なります。[期間]ドロップダウンでメニューを選択、または[期間選択]メニューで直接設定します。

![cost-analysis-period-01](/jp/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-period-01.png)

「累積データ」と「月別データ」は月単位でカスタムでき、期間は最大12カ月まで指定できます。
「日別データ」は日単位でカスタムでき、期間は最大1カ月です。

![cost-analysis-period-02](/jp/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-period-02.png)

### 為替レートを設定する
[為替レート]ドロップダウンで適用したいレートを選択すると、チャートとテーブルのコストデータにレートが適用されます。

![cost-analysis-currency-01](/jp/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-currency-01.png)

### グループ別に統計を設定する
グループ別統計でユーザーの選択値を基準にデータをグループ化します。

![cost-analysis-groupby-01](/jp/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-groupby-01.png)

グループ別統計は、1個以上選択できます。チャートで選択したグループ別統計のうち一つが表示され、テーブルでは選択したグループ別統計をすべて確認できます。

![cost-analysis-groupby-02](/jp/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-groupby-02.png)

### フィルター設定
フィルターは、グループ別統計と同じように1個以上選択でき、ユーザー設定値をand条件でフィルタリングします。

(1) [フィルター追加]ボタンをクリックします。

![cost-analysis-filter-01](/jp/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-filter-01.png)

(2) [フィルター設定]モダールウィンドウが表示されたら、フィルターを選択して[確認]ボタンをクリックします。

![cost-analysis-filter-02](/jp/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-filter-02.png)


## コスト分析クエリ
[コスト管理 > コスト分析]ページに移動するたびに細部基準と期間などを再設定する煩わしさを解消するため、頻繁に使用する設定をクエリで保存できる機能を提供します。
{{<alert>}}
為替レートはクエリに保存されません。
{{</alert>}}

### クエリを保存する
(1) 細部基準とグループ別統計、フィルターなどを設定します。

(2) 画面右上の[名前を付けて保存]ボタンをクリックします。

![cost-analysis-query-01](/jp/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-query-01.png)

{{<alert>}}
defaultクエリは[名前を付けて保存]ボタンが表示され、既存のクエリを修正する場合は、[保存]ボタンと[名前を付けて保存]ボタンがどちらも表示されます。
{{</alert>}}

(3) [クエリ保存]モダールウィンドウでクエリ名を入力後、[確認]ボタンをクリックします。

![cost-analysis-query-02](/jp/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-query-02.png)

### クエリを読み込む
[コスト分析]ページで画面左上の[クエリ一覧]アイコンをクリックして、保存されたクエリ一覧のうち一つを選択すると、当該クエリを読み込むことができます。

![cost-analysis-query-03](/jp/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-query-03.png)

### クエリ名を編集する
保存されたクエリ名は、[コスト分析]ページで当該クエリを読み込んで[編集]ボタンをクリック、または保存されたクエリ一覧で[編集]ボタンをクリックすると編集できます。

![cost-analysis-query-edit-01](/jp/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-query-edit-01.png)
![cost-analysis-query-edit-02](/jp/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-query-edit-02.png)

### クエリを削除する
保存された[コスト分析]ページで当該クエリを読み込んでから[削除]ボタンをクリック、または保存されたクエリ一覧で[削除]ボタンをクリックすると削除できます。

![cost-analysis-query-delete-01](/jp/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-query-delete-01.png)
![cost-analysis-query-delete-02](/jp/docs/guides/cost-explorer/cost-analysis-img/cost-analysis-query-delete-02.png)
