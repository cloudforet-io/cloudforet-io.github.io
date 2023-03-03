---
title: "ダッシュボード"
linkTitle: "ダッシュボード"
weight: 2
date: 2022-06-22
description: >
    **コストダッシュボード**では、ユーザーは基本ダッシュボードまたは希望するウィジェットを組み合わせたカスタムダッシュボードを通じて、データをひと目で把握することができます。
---

## 基本ダッシュボード
以下は、現在表示されている基本ダッシュボードです。

### 月別コスト統計
クラウドのコスト発生状況と予算使用状況を多様なグループ別統計基準でチャート化したダッシュボードです。

![cost-dashboard-intro-01](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-intro-01.png)

### CDNとトラフィック獲得コスト
AWS Data-TransferとAWS CloudFrontのデータ送信とコスト発生状況をチャート化したダッシュボードです。

![cost-dashboard-intro-02](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-intro-02.png)


## ダッシュボードを作成する
(1) [コスト管理 > ダッシュボード]ページの左にあるメニュー一覧で[ダッシュボード作成]アイコンをクリックします。

![cost-dashboard-create-01](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-create-01.png)

(2) [ダッシュボード作成]ページに移動して、新しいダッシュボードに適用するテンプレートを選択します。

(2-1) クラウドフォレが提供する基本テンプレートを選択したり、既存のダッシュボードをコピーできます。

![cost-dashboard-create-02](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-create-02.png)

(2-2) 既存のダッシュボードをコピーする場合、当該ダッシュボードに適用されたフィルターも含めかどうかを選択できます。

![cost-dashboard-create-03](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-create-03.png)

(3) 表示方式を選択します。「My Dashboard」はユーザー本人にのみ、「Public」は[コスト管理 > ダッシュボード]ページに対する「VIEW」権限を持つすべてのユーザーに表示されます。

![cost-dashboard-create-04](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-create-04.png)

{{<alert title="Publicオプションが表示されない場合">}}
[コスト管理 > ダッシュボード]ページに対する「MANAGE」権限がある場合は、PublicとMy Dashboardをどちらも作成できます。ユーザーが「VIEW」権限のみ有する場合は、My Dashboardのみ作成できます。

**アクセス権限**の設定方法については、[こちら](/ja/docs/guides/administration/iam-role/#ロール-作成する)をご参考にしてください。
{{</alert>}}

(4) [作成]ボタンをクリックします。


## ダッシュボードを削除する

(1) 左にあるダッシュボード一覧で削除したいダッシュボードを選択します。

![cost-dashboard-delete-01](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-delete-01.png)

(2) 選択したダッシュボード名の横にある[設定]アイコンをクリックして、ドロップダウンで[削除]を選択します。

![cost-dashboard-delete-02](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-delete-02.png)

{{<alert title="[削除]ボタンが無効化状態の場合">}}
[コスト管理 > ダッシュボード]ページに対する「MANAGE」権限がなかったり、削除したいダッシュボードがホームダッシュボードに設定された状態の場合は削除できません。
{{</alert>}}

(3) [ダッシュボード削除]モダールウィンドウで[確認]ボタンをクリックすると、ダッシュボードが削除されます。

![cost-dashboard-delete-03](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-delete-03.png)


## ダッシュボードを編集する
ダッシュボードページで右側にある[編集]ボタンをクリックすると、ダッシュボード編集ページへ移動して、ダッシュボードの名前やウィジェットなどを編集できます。

![cost-dashboard-edit-01](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-edit-01.png)

{{<alert title="[編集]ボタンが無効化状態の場合">}}
[コスト管理 > ダッシュボード]ページに対する「MANAGE」権限がないと、ダッシュボードを編集できません。
{{</alert>}}

### ダッシュボード名を編集する
上にある入力フォームでダッシュボードの名前を編集できます。

![cost-dashboard-edit-02](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-edit-02.png)

### ウィジェットを追加する
追加できるウィジェットは、基本ウィジェットとカスタムウィジェットの2つです。
基本ウィジェットは、クラウドフォレが提供するウィジェットテンプレートで作成できるウィジェットで、カスタムウィジェットは、[コスト管理> コスト分析]ページで作成したクエリ基盤のウィジェットです。

#### 基本ウィジェットを追加する
(1) 右にある[ウィジェット追加]ボタンをクリックします。

![cost-dashboard-basic-widget-add-01](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-basic-widget-add-01.png)

(2) [新しいウィジェット追加]モダールウィンドウで[基本]タブを選択します。

(2-1) 左側の[ウィジェットテンプレート]一覧でテンプレートを選択します。

![cost-dashboard-basic-widget-add-02](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-basic-widget-add-02.png)

(2-2) ウィジェットの[名前]を入力します。ウィジェットの種類によって[グループ統計]を選択しなければならない場合もあります。

![cost-dashboard-basic-widget-add-03](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-basic-widget-add-03.png)

(3) [確認]ボタンをクリックすると、ウィジェット追加が完了します。

#### カスタムウィジェットを追加する
{{<alert title="コスト分析クエリ">}}
カスタムウィジェットを作成するためには、**コスト分析クエリ**が必要です。
コスト分析クエリは、[コスト管理 > コスト分析]ページで作成できます。
詳細については、[こちら](/ja/docs/guides/cost-explorer/cost-analysis/#コスト-分析-クエリ)をご参考にしてください。
{{</alert>}}

(1) 右にある[ウィジェット追加]ボタンをクリックします。

![cost-dashboard-custom-widget-add-01](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-custom-widget-add-01.png)

(2) [新しいウィジェット追加]モダールウィンドウで[カスタム]タブを選択します。

(2-1) 左下にある[コスト分析クエリ]一覧で、カスタムウィジェットに適用したいクエリの[カスタムウィジェット追加]ボタンをクリックします。

![cost-dashboard-custom-widget-add-02](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-custom-widget-add-02.png)

(2-2) 追加されたカスタムウィジェットが左上の[ウィジェットテンプレート]一覧に表示されたら、それを選択します。

![cost-dashboard-custom-widget-add-03](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-custom-widget-add-03.png)

(2-3) ウィジェットの名前を入力します。

![cost-dashboard-custom-widget-add-04](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-custom-widget-add-04.png)

(2-4) [確認]ボタンをクリックすると、ウィジェットの追加が完了します。


### ウィジェットの順序を変更する
ウィジェット一覧でウィジェット名の左にある[順序変更]アイコンをドラッグ＆ドロップすると、順序を変更できます。

![cost-dashboard-edit-widget-order-01](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-edit-widget-order-01.png)


### ウィジェットを編集する
(1) ウィジェットの右上にある[編集]アイコンをクリックします。

![cost-dashboard-widget-edit-01](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-widget-edit-01.png)

(2) ウィジェットの名前やグループ別統計を編集後、[確認]ボタンをクリックします。

![cost-dashboard-widget-edit-02](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-widget-edit-02.png)

### ウィジェットを削除する
(1) ウィジェットの右上にある[削除]アイコンをクリックします。

![cost-dashboard-widget-delete-01](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-widget-delete-01.png)

(2) [ウィジェット削除]モダールウィンドウで[確認]ボタンをクリックします。

![cost-dashboard-widget-delete-02](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-widget-delete-02.png)


## ダッシュボードを設定する
### ダッシュボード名を編集する
(1) ダッシュボードタイトルの横にある[編集]アイコンをクリックします。

![cost-dashboard-name-edit-01](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-name-edit-01.png)

(2) ダッシュボードの名前を変更後、[確認]ボタンをクリックします。

![cost-dashboard-name-edit-02](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-name-edit-02.png)


### フィルター設定
フィルターを設定すると、ダッシュボードのデータを希望する条件でフィルタリングして確認することができます。

(1) ダッシュボードの上にある[フィルター]アイコンをクリックします。

![cost-dashboard-filter-01](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-filter-01.png)

(2) 設定したいフィルターを選択して、[確認]ボタンをクリックします。

![cost-dashboard-filter-02](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-filter-02.png)


### 期間を設定する
ダッシュボードの右上にある[期間]ドロップダウンで期間メニューを選択したり、[期間選択]メニューで期間を直接設定することができます。

![cost-dashboard-period-01](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-period-01.png)

直接設定する場合は、月単位で最大12か月まで設定できます。

![cost-dashboard-period-02](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-period-02.png)

[期間]ドロップダウンの左にある[日付固定]オプションをチェックすると、設定した日付が更新されても維持されます。

![cost-dashboard-period-03](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-period-03.png)

### 為替レートを設定する
ダッシュボードの右上にある[為替レート]ドロップダウンでレートを選択できます。選択時にすべてのチャートとテーブルのデータが当該レートに変換され表示されます。

![cost-dashboard-currency-01](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-currency-01.png)

### ホームダッシュボードを設定する
特定のダッシュボードをホームダッシュボードに設定すると、[コスト管理 > ダッシュボード]ページに移動すると、当該ダッシュボードページが表示されます。ホームダッシュボードの設定は、ユーザーのブラウザに保存された情報で、他のユーザーとは共有されません。

![cost-dashboard-home-dashboard-01](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-home-dashboard-01.png)

## ダッシュボードをコピーする
ダッシュボードのタイトルの横にある[もっと見る]アイコンをクリックすると、[コピー]メニューへ移動します。
![cost-dashboard-duplicate-dashboard-01](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-duplicate-dashboard-01.png)

コピーフォームでは、ダッシュボードの以下のような項目を設定できます。

![cost-dashboard-duplicate-dashboard-02](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-duplicate-dashboard-02.png)
- ダッシュボード名
- フィルターコピーの可否: このオプションを有効化すると、ダッシュボードのフィルター設定までそのままコピーされます。
- ダッシュボードの表示方式: 「Public」と「My Dashboard」のうち1つを選択します。

## ダッシュボードPDFをダウンロードする
ダッシュボードの右上にある[ダウンロード]アイコンをクリックすると、ダッシュボードをPDFファイルでダウンロードできます。

![cost-dashboard-pdf-download-01](/ja/docs/guides/cost-explorer/dashboard-img/cost-dashboard-pdf-download-01.png)
