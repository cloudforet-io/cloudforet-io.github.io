---
title: "[AIM]ユーザー"
linkTitle: "[AIM]ユーザー"
weight: 1
date: 2022-06-23
description: >
    **ユーザー**では、クラウドフォレのユーザーを作成・削除したり、有効化・無効化することができます。
    <br>
    <br>
    また、ユーザーにロールを割り当てて、ドメインに対する権限を付与することができます。
---

{{<alert>}}
[管理 > ユーザー]ページでユーザーに割り当てできるロールは、「アドミン」タイプです。「ユーザー」タイプは、プロジェクトのメンバーに割り当てることができます。
プロジェクトメンバーにロールを付与する方法は、[こちら](/jp/docs/guides/project/project-group/#プロジェクト-グループ-メンバー-招待する)をご参考にしてください｡
{{</alert>}}

## ユーザーを追加する
追加できるユーザーは3種類です。
- **内部ユーザー**: ログインぺージでIDとパスワードを使用してログインできるユーザー
- **外部ユーザー**: ドメインが持っている外部ユーザー認証に従う。
- **API Only**: APIのみ使用でき、クラウドフォレコンソールへアクセスはできないユーザー

### 内部ユーザーを追加する
内部ユーザーは、ログインページでIDとパスワードを使用してログインできるユーザーです。

(1) [管理 > ユーザー]ページで[作成]ボタンをクリックします。

![user-create-button](/jp/docs/guides/administration/iam-user-img/user-create-button.png)

(2) [ユーザー追加]モダールウィンドウが開いたら、内部ユーザーを追加する[Local]タブを選択します。

![user-create-modal-local](/jp/docs/guides/administration/iam-user-img/user-create-modal-local.png)

(2-1) 内部ユーザーのIDを入力後、[ID確認]ボタンをクリックします。ユーザーIDはメールアドレス形式でなければならず、既存のユーザーリストに登録されていないIDでなければなりません。

(2-2) 名前とメールアドレスを選択して入力します。

(2-3) 必要であれば、[アドミンロール割り当て]メニューでロールを選択します。
{{<alert>}}
ページへのアクセス権限またはAPIポリシーは、ユーザーに割り当てられたロールによって適用が異なります。ロールに関する詳細については、[こちら](/jp/docs/guides/administration/iam-role)をご参考にしてください｡
{{</alert>}}

(2-4) ユーザーが初回ログイン時に使用したパスワードを入力します。

(3) [確認]ボタンをクリックします。


### 外部ユーザーを追加する
外部ユーザーの追加は、当該ドメインが持っている外部ユーザー認証に従います。未認証の外部ユーザーは、ユーザーとして追加できません。

![user-create-modal-oauth](/jp/docs/guides/administration/iam-user-img/user-create-modal-oauth.png)

{{<alert>}}
外部ユーザーの認証に関する詳細については、[こちら](/jp/docs/guides/plugins/iam-authentication/)をご参考にしてください｡
{{</alert>}}


### API Onlyユーザーを追加する
APIユーザーは、クラウドフォレコンソールにアクセスできず、APIのみ使用することができます。

![user-create-modal-apionly](/jp/docs/guides/administration/iam-user-img/user-create-modal-apionly.png)


## ユーザーの詳細を見る
ユーザーページのテーブルで特定ユーザーを選択すると、当該ユーザーに対する詳細情報を確認できます。

![user-single-select](/jp/docs/guides/administration/iam-user-img/user-single-select.png)
