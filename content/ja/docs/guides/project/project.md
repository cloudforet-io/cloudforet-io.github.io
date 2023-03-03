---
title: "プロジェクト"
linkTitle: "プロジェクト"
weight: 3
date: 2022-06-07
description: >
    **プロジェクト**は、リソースを管理するためにまとめた単位です。
    <br>
    <br>
    プロジェクトは、必ず特定の[**プロジェクトグループ**](/ja/docs/guides/project/project-group)に属さなければならず、プロジェクトの下位にさらなる階層は存在できません。
    <br>
    <br>
    プロジェクトに[**メンバー**](/ja/docs/guides/project/member)を招待すると、[**ロール(Role)**](/ja/docs/guides/administration/iam-role)を付与することができます。与えられたロール(Role)によってプロジェクトリソースに対するアクセス権限は異なります。
---

## プロジェクトを作成する

{{<alert>}}
プロジェクトは、プロジェクトグループの下位にのみ存在できるため、先に**プロジェクトグループ**を作成する必要があります。
プロジェクトグループの作成方法については、[こちら]((/ko/docs/guides/project/project-group/#プロジェクト-グループ-作成する))をご参考にしてください。
{{</alert>}}

(1) [プロジェクト]ページの画面左にある[プロジェクトグループ]リストで、プロジェクトを作成するプロジェクトグループを選択します。

![project-full-page](/ja/docs/guides/project/project-img/project-full-page.png)

(2) 右上にある[プロジェクト作成]ボタンをクリックします。

(3) [プロジェクト作成]モダールウィンドウでプロジェクト名を入力して[確認]ボタンをクリックすると、プロジェクト作成が完了します。

![project-create-modal](/ja/docs/guides/project/project-img/project-create-modal.png)

## プロジェクトリストを照会する

プロジェクトリストを通じて、各プロジェクトの主なカテゴリーに対するリソース状況を手軽に確認できます。
<br>
また、検索ワードを入力すると、条件と一致するプロジェクトグループとプロジェクトリストを確認できます。

### すべてのプロジェクトリストを照会する

左側にある[プロジェクトグループ]で[すべてのプロジェクト]を選択すると、すべてのプロジェクトリストを照会できます。

![project-click-all-project](/ja/docs/guides/project/project-img/project-click-all-project.png)

### プロジェクトグループ内のプロジェクトリストを照会する

左にある[プロジェクトグループ]リストで照会したいプロジェクトグループを選択すると、当該グループに属するプロジェクトのみを照会できます。

![project-click-single-project-group](/ja/docs/guides/project/project-img/project-click-single-project-group.png)

選択したプロジェクトグループの下に別のプロジェクトグループがある場合、他のプロジェクトグループに属するプロジェクトはここに表示されません。

```
- Project Group A
    - Project Group B
        - Project B-1
        - Project B-2
    - Project A-1
    - Project A-2
```

上の構造で例えると、「Project Group A」を選択すると、「Project A-1」、「Project A-2」のみリストに表示されます。

## プロジェクトを確認する

プロジェクトリストでプロジェクトを選択すると、プロジェクト詳細ページへ移動します。

### プロジェクトダッシュボード

[概要情報]タブでプロジェクトダッシュボードを通じて、当該プロジェクトに属するリソースの集約された情報を確認することができます。

![project-dashboard-full-page](/ja/docs/guides/project/project-img/project-dashboard-full-page.png)

<br>
プロジェクトダッシュボードでは、カテゴリー別、地域別のリソースの使用状況とトレンドが表示されます。

その他にも、複数のウィジェットを通じて多様な形態でプロジェクトに対する統計情報を提供して、リソースのさらなる効率的管理やコスト最少化をサポートします。

以下は、プロジェクトダッシュボードのウィジェットリストです。

| プロジェクトダッシュボードウィジェットの名前 | 説明 |
| -- | -- |
| アラート | 当該プロジェクトで発生したアラート情報 |
| コスト | 当該プロジェクトのコスト情報 |
| 今日のリソースアップデート | ローカル時間基準で午前0時から現在までアップロードされたリソース情報 |
| クラウドサービス | サービス中の主なクラウドサービス情報 |
| AWS Personal Health Dashboard | AWSのPersonal Health Dashboard情報 |
| AWS Trusted Advisor | AWSのTrusted Advisor情報 |

## プロジェクトを編集する

### プロジェクト名を変更する

(1) プロジェクト名の右にある[編集]アイコンをクリックします。

![project-name-edit-icon-button](/ja/docs/guides/project/project-img/project-name-edit-icon-button.png)

(2) [プロジェクト変更]モダールウィンドウで変更する名前を入力して[確認]ボタンをクリックすると、プロジェクト名が変更されます。

![project-name-edit-modal](/ja/docs/guides/project/project-img/project-name-edit-modal.png)

### プロジェクトタグを管理する

プロジェクトにタグを追加して管理することができます。
<br>
<br>

(1) [タブ]タブ内で[編集]ボタンをクリックします。

![project-tag-table](/ja/docs/guides/project/project-img/project-tag-table.png)

(2) [タグ]ページで[タグ追加]ボタンをクリックします。

(3) 追加したい値を「キー: 値」形式で入力します。

![project-tag-add](/ja/docs/guides/project/project-img/project-tag-add.png)

(3-1) タグをさらに追加したい場合は、希望する個数分だけ[タグ追加]ボタンをクリックします。

(4) [保存]ボタンをクリックすると、タグ追加が完了します。

## プロジェクトを削除する

(1) プロジェクト名の右にある[削除]アイコンをクリックします。

![project-delete-icon-button](/ja/docs/guides/project/project-img/project-delete-icon-button.png)

(2) [プロジェクト削除]モダールウィンドウの[確認]ボタンをクリックしてプロジェクトを削除します。

![project-delete-modal](/ja/docs/guides/project/project-img/project-delete-modal.png)
