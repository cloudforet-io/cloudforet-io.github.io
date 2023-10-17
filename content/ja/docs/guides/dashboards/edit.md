---
title: "ダッシュボードをカスタマイズします"
linkTitle: "ダッシュボードをカスタマイズします"
weight: 5
date: 2023-10-16
description: >
    ダッシュボードの[カスタマイズ]モードでは、ダッシュボードの名前、レイアウト、ウィジェットなどを変更できます。

---

## ダッシュボードのカスタマイズを行います

### 「カスタマイズ」モードに切り替えます

ダッシュボードページの右側にある[カスタマイズ]ボタンをクリックすると、ダッシュボードの編集ページに移動します。

![dashboard-edit-intro-01](/ja/docs/guides/dashboards/dashboard-img/dashboard-edit-intro-01.png)

<br>

### ダッシュボードの名前を変更します

変更を加えるには、ダッシュボードのタイトルの隣にある[編集]アイコンボタンをクリックできます。

![dashboard-edit-name-01](/ja/docs/guides/dashboards/dashboard-img/dashboard-edit-name-01.png)

<br>

### ラベルを管理します

ラベルを追加または削除することができます。ラベルは、ダッシュボード関連のカテゴリや機能を区別し、ダッシュボードの検索に役立ちます。ラベルは、ページの上部にあるダッシュボードのタイトルのすぐ下に配置されています。

![dashboard-edit-label-01](/ja/docs/guides/dashboards/dashboard-img/dashboard-edit-label-01.png)

<br>

### 期間範囲を適用します

(1) 右側のパネルから[期間適用オプション]を有効にすると、ダッシュボード上に期間設定のためのドロップダウンボタンが表示されます。

![dashboard-edit-duration-01](/ja/docs/guides/dashboards/dashboard-img/dashboard-edit-duration-01.png)

(2) ドロップダウンメニューから特定の月を選択するか、[カスタム]メニューを使用して過去3年間から特定の月を選択できます。

![dashboard-edit-duration-02](/ja/docs/guides/dashboards/dashboard-img/dashboard-edit-duration-02.png)

{{<alert>}}
日付範囲セレクターオプションを有効にしても、すべてのウィジェットに適用されるわけではありません。ウィジェットの特性に応じて、一部のウィジェットでは日付範囲を適用できますが、他のウィジェットでは適用できないことがあります。
{{</alert>}}

<br>

### 自動データの更新を構成します

データの自動更新間隔は、ダッシュボードの右上隅にある[更新]のドロップダウンから選択できます。

![dashboard-edit-refresh-01](/ja/docs/guides/dashboards/dashboard-img/dashboard-edit-refresh-01.png)

<br>

### ウィジェットを追加します

(1) ダッシュボードの編集ページの右側にある[+ ウィジェットを追加する]ボタンをクリックします。

![dashboard-edit-add-widget-01](/ja/docs/guides/dashboards/dashboard-img/dashboard-edit-add-widget-01.png)

<br>

(2) 左側のリストから特定のウィジェットを選択し、追加します。

![dashboard-edit-add-widget-02](/ja/docs/guides/dashboards/dashboard-img/dashboard-edit-add-widget-02.png)

{{<alert>}}
[費用]、[アセット]、および[アラート]のカテゴリに基づいて、さまざまなウィジェットを選択できます。 (新しいウィジェットは継続的に更新されます)
{{</alert>}}


(2-2) 特定のウィジェットを選択した場合、[名前]を入力し、詳細なオプションを設定できます。

![dashboard-edit-add-widget-03](/ja/docs/guides/dashboards/dashboard-img/dashboard-edit-add-widget-03.png)

{{<alert>}}
**[継承] On/Off:** ほとんどのウィジェットに対して、初期設定ではオプションはデフォルトでダッシュボードの変数を継承するように設定されています。 'ダッシュボードから継承' とは、ダッシュボードレベルで変数のオプションを変更すると、それらの変更はそれを継承するオプションを持つウィジェットに自動的に適用されるということです。逆に、特定のオプションが継承されないように設定されている場合、ダッシュボードレベルで変数を変更しても、そのウィジェットには影響を与えません。
<br>
e.g. 費用マップウィジェットでは、`プロジェクト`オプションが '継承' に設定されており、ダッシュボードレベルで `プロジェクト`` を 'プロジェクトA' にフィルタリングすると、ウィジェットは 'プロジェクトA' に関連するデータのみを表示します。
{{</alert>}}

{{<alert>}}
**初期設定に戻る:** 各ウィジェットには、デフォルトでダッシュボードの変数に対応するデフォルトオプション値が付属しています。ダッシュボードの設定プロセス中にウィジェットオプションを複数回変更した場合でも、[初期設定に戻す]ボタンをクリックすることで、簡単に最初に設定されたデフォルトオプション値に戻すことができます。
{{</alert>}}


(2-3) 必要な追加オプションがない場合、[+オプションの追加]ボタンをクリックして追加できます。

![dashboard-edit-add-widget-04](/ja/docs/guides/dashboards/dashboard-img/dashboard-edit-add-widget-04.png)

(2-4) 設定が完了したら、ウィジェットをダッシュボードに追加するために[確認]ボタンをクリックしてください。


<br>

### ウィジェットの順序を並べ替えます

ウィジェットの順序は、右側パネルのウィジェットリストからウィジェット名ボタンをドラッグアンドドロップして変更できます。

![dashboard-edit-change-widget-01](/ja/docs/guides/dashboards/dashboard-img/dashboard-edit-change-widget-01.png)


<br>

### ウィジェットのサイズを拡大します

ウィジェットをフルスクリーンで表示したい場合、ウィジェットの右上隅にある[フルスクリーン]アイコンボタンをクリックします。

![dashboard-edit-full-screen-01](/ja/docs/guides/dashboards/dashboard-img/dashboard-edit-full-screen-01.png)

![dashboard-edit-full-screen-02](/ja/docs/guides/dashboards/dashboard-img/dashboard-edit-full-screen-02.png)


<br>

### ウィジェットを編集します

(1) ウィジェットを編集するには、ウィジェットの右上隅にある[編集]アイコンボタンをクリックします。

![dashboard-update-widget-01](/ja/docs/guides/dashboards/dashboard-img/dashboard-update-widget-01.png)

(2) ウィジェットの名前とオプションを編集し、変更を保存するには[確認]ボタンをクリックします。ただし、[カスタマイズ]モードでダッシュボードを[保存]しない場合、編集したウィジェットは最終バージョンに反映されません。

- ウィジェットオプション設定の詳細については、[**こちら**](/ja/docs/guides/dashboards/edit/#ウィジェットを追加します)を参照してください。

![dashboard-update-widget-02](/ja/docs/guides/dashboards/dashboard-img/dashboard-update-widget-02.png)
