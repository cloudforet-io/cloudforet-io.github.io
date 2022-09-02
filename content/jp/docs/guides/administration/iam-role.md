---
title: "[IAM]ロール"
linkTitle: "[IAM]ロール"
weight: 2
date: 2022-06-07
description: >
    **ロール**は、権限に対するスコアを定義した単位です。
---

管理者が希望するロールを作成して、当該ロールを実行する[ユーザー](/jp/docs/guides/administration/iam-user/)に割り当てることができます。

ロールに設定される属性は、以下のとおりです。

#### ロール(Role)タイプ

|  | プロジェクト管理権限 | ロールをユーザーに付与する位置 |
| --- | --- | --- |
| **User** | • ユーザーが直接作成 <br/>• 招待されたプロジェクトとプロジェクトグループ<br/>• 権限のあるプロジェクトグループのサブプロジェクト | •プロジェクト詳細ページ > [メンバー]タブでプロジェクトにユーザーを招待<br/>• メンバー情報を変更すると、ユーザータイプのロールを変更可能 |
| **Admin** | すべてのプロジェクトとプロジェクトグループ | [管理 > ユーザーと権限管理 > ユーザー] ページでユーザーを追加・修正可能 |

#### クラウドフォレサービスのページ別のアクセス権限

各サービスの詳細メニューで、`View`と`Manage`の権限を選択して付与できます。

- **View**

  各ページに対する閲覧権限を付与します。

- **Manage**

  選択したサービスメニューに存在する作成、修正、追加などの管理機能を使用できます。(サービスやページによって管理機能は異なります。)


#### APIポリシー接続

ポリシー(Policy)は､リソースに接続時にその権限を定義する個体です｡

ポリシーについての詳細は､[ポリシー文書](/jp/docs/guides/administration/iam-policy)をご参考にしてください｡

## ロールを作成する

{{< alert title="" >}}
ロールは､管理者のみ作成できます｡[作成]ボタンが無効状態の場合は､管理者に権限をリクエストしてください｡
{{< /alert >}}




(1) [管理 > ユーザーと権限管理 > ロール]メニューを選択すると､ロ―ルページに移動します｡

(2) 画面左上の[作成]ボタンから[ロール作成]ページに移動します｡

![role-create-button](/jp/docs/guides/administration/iam-role-img/role-create-button.png)

(3) ロールの名前､説明(選択)を作成して､[ロールタイプ](/jp/docs/guides/administration/iam-role/#ロールrole-タイプ)を選択します｡

![role-create-base-info](/jp/docs/guides/administration/iam-role-img/role-create-base-info.png)

- [名前]は､最低２文字以上を入力してください｡
- [[ロールタイプ]](/jp/docs/guides/administration/iam-role/#ロールrole-タイプ)は､作成後に修正できない項目なので､慎重に選択してください｡

(4) [ぺｰジへのアクセス権限](/jp/docs/guides/administration/iam-role/#クラウドフォレ-サービスの-ページ別-アクセス-権限)を設定してください｡

![role-create-page-access](/jp/docs/guides/administration/iam-role-img/role-create-page-access.png)

(5) 作成するロール(Role)にどのような権限を与えるのかを決定するため､ポリシー(Policy)を選択して接続します｡

![role-create-page-policy-connect](/jp/docs/guides/administration/iam-role-img/role-create-page-policy-connect.png)


ポリシー(Policy)の接続に関する詳細については､[こちら](/jp/docs/guides/administration/iam-role/#api-ポリシー-接続)をご参考にしてください｡

(6) [作成]ボタンをクリックすると､ロール作成を完了します｡

## ロールを照会する

作成されたロールは､照会･検索や､詳細情報確認をすることができます｡

### ロール一覧を照会する

作成が完了したロールは､ロールぺージで照会できます｡

![role-list](/jp/docs/guides/administration/iam-role-img/role-list.png)

検索ワードを入力すると､条件と一致するロール一覧を確認できます｡詳細検索に関する詳細については､[こちら](/jp/docs/guides/advanced/search/)をご参考にしてください｡

![role-search](/jp/docs/guides/administration/iam-role-img/role-search.png)

### ロールの詳細情報を確認する

目次でロールを選択すると､下の[詳細情報]タブで選択したロールの情報を確認することができます｡

![role-detail-info](/jp/docs/guides/administration/iam-role-img/role-detail-info.png)

## ロールを修正する

### Steps

(1) 修正したいロールをロール一覧から選択して[修正]ボタンをクリックすると､修正ページに移動します｡

![role-edit-button](/jp/docs/guides/administration/iam-role-img/role-edit-button.png)

(2) ロールタイプ以外の修正は､[ロールを作成する](/jp/docs/guides/administration/iam-role/#ロール-作成する)の方法と同じです｡

![role-edit-base-info](/jp/docs/guides/administration/iam-role-img/role-edit-base-info.png)

{{< alert title="注意" >}}

基本情報の[ロールタイプ]は､作成後に修正できない項目です｡

{{< /alert >}}


## ロールを削除する

### Steps

(1) ロールぺージに移動します｡

![role-delete-menu](/jp/docs/guides/administration/iam-role-img/role-delete-menu.png)

複数のロールを一度に削除することができます｡

(2) [削除]ボタンをクリックして､削除するロール一覧を検討します｡

![role-delete-modal](/jp/docs/guides/administration/iam-role-img/role-delete-modal.png)

{{< alert title="注意" >}}
ユーザーに割り当てられたロールは削除できません｡

![role-cannot-delete-modal](/jp/docs/guides/administration/iam-role-img/role-cannot-delete-modal.png)

削除できないロールが含まれている場合､ロールと当該ロールが割り当てられたユーザー名が表示されます｡
{{< /alert >}}

(3) [確認]ボタンをクリックすると､削除が完了します｡
