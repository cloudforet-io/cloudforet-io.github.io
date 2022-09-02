---
title: "はじめる"
linkTitle: "はじめる"
weight: 1
date: 2022-06-07
description: >
    クラウドフォレは、さまざまなクラウドサービスプロバイダに分散されたリソースを統合して、体系的に管理できるサービスです。
    <br>
    <br>
    本ガイドは、クラウドフォレのすべてをご紹介しています。 
---

クラウドフォレのサービスを利用するためには、先に次の3つの作業を行う必要があります。

- ユーザー設定
- プロジェクト設定
- サービスアカウント設定

## ユーザー設定

クラウドフォレのユーザーは、**内部ユーザー**、**外部ユーザー**、**APIユーザー**の3つのタイプに分けられます。

ここでは、内部ユーザーを追加する方法のみをご紹介します。外部ユーザーとAPIユーザーの追加方法は、[[IAM] ユーザーガイド](/jp/docs/guides/administration/iam-user)でご確認ください。

### ユーザーを追加する

(1) [管理 > ユーザー]ページで[作成]ボタンをクリックします。

![user-page](/jp/docs/guides/getting-started/user-setup-img/user-page.png)

(2) [ユーザー作成]モダールウィンドウで[Local]タブを選択します。

(2-1) IDを入力後に[ID確認]ボタンをクリックして、IDの有効性確認を実行します。

![user-create-modal-local-id](/jp/docs/guides/getting-started/user-setup-img/user-create-modal-local-id.png)

(2-2) ユーザーを識別する名前、メールアドレス、パスワードを入力して[確認]ボタンをクリックすると、ユーザー作成が完了します。

![user-create-modal-local-filed](/jp/docs/guides/getting-started/user-setup-img/user-create-modal-local-filed.png)

{{<alert title="アドミン権限の割り当て">}}
ユーザーへのアドミン権限付与は、[アドミンロール(Role)割り当て]ドロップダウンで選択すると割り当てることができます。

何も選択しないと、当該ユーザーには権限が与えられません。

権限に関する詳細については、[こちら](/jp/docs/guides/administration/iam-role)をご参考にしてください。

![user-create-role-assign](/jp/docs/guides/getting-started/user-setup-img/user-create-role-assign.png)
{{</alert>}}


## プロジェクト設定

体系的にリソースを管理するため、[**プロジェクト**](/jp/docs/guides/project/project)と[**プロジェクトグループ**](/jp/docs/guides/project/project-group)を作成します。

### プロジェクトグループを作成する

プロジェクトは、必ず一つのプロジェクトグループに属さなければならないため、プロジェクトを作成前に、先にプロジェクトグループを作成する必要があります。

(1) [プロジェクト]ページで[プロジェクトグループ作成]ボタンをクリックします。

![project-group-create-button](/jp/docs/guides/getting-started/project-setup-img/project-group-create-button.png)

(2) [プロジェクトグループ作成]モダールウィンドウでプロジェクトグループ名を入力して、[確認]ボタンをクリックしてプロジェクトグループを作成します。

![project-group-create-modal](/jp/docs/guides/getting-started/project-setup-img/project-group-create-modal.png)

### プロジェクトを作成する

プロジェクトグループを作成後、その下位に属するプロジェクトを作成します。

(1) 左にあるプロジェクトグループ一覧で先に作成したプロジェクトグループを選択して、右上にある[プロジェクト作成]ボタンをクリックします。

![project-group-select](/jp/docs/guides/getting-started/project-setup-img/project-group-select.png)

(2) [プロジェクト作成]モダールウィンドウでプロジェクト名を入力後に[確認]ボタンをクリックすると、プロジェクト作成が完了します。

![project-create-modal](/jp/docs/guides/getting-started/project-setup-img/project-create-modal.png)


### プロジェクトグループのメンバーを招待する

プロジェクトグループユーザーを招待してプロジェクトグループの[**メンバー**](/jp/docs/guides/project/member)として登録できます。

{{<alert title="プロジェクトグループメンバーのロール(Role)">}}
招待されたメンバーは、当該プロジェクトグループに対して必ずロール(Role)を1つ持ちます。
このロール(Role)は、当該プロジェクトグループの下位にあるすべてのプロジェクトグループとプロジェクトに対して同じように適用されます。

詳細については、[こちら](/jp/docs/guides/administration/iam-role)をご参考にしてください。
{{</alert>}}

(1) 先に作成したプロジェクトグループを左にある[プロジェクトグループ]一覧で選択します。

(2) 右上にある[プロジェクトグループメンバー管理]アイコンをクリックします。

![project-member-icon-button](/jp/docs/guides/getting-started/project-setup-img/project-member-icon-button.png)

{{<alert title="">}}
当該プロジェクトグループの管理権限を持つユーザーにのみ、右上にボタンが表示されます。
{{</alert>}}

(3) [プロジェクトグループメンバー管理]ページで[招待]ボタンをクリックすると、[メンバー招待]モダールウィンドウが表示されます。

![project-member-invite-button](/jp/docs/guides/getting-started/project-setup-img/project-member-invite-button.png)

(3-1) 招待したいメンバーを選択します。一度に複数のメンバーを選択して招待できます。

![project-member-invite-modal-member-added](/jp/docs/guides/getting-started/project-setup-img/project-member-invite-modal-member-added.png)

(3-2) 招待するメンバーに付与するロール(Role)を選択します。

![project-member-invite-modal-role-added](/jp/docs/guides/getting-started/project-setup-img/project-member-invite-modal-role-added.png)

{{<alert title="メンバーのロール(Role)">}}
プロジェクトメンバーには、「User」タイプのロール(Role)のみを付与することができます。
ロール(Role)のタイプに関する詳細については、[こちら](/jp/docs/guides/administration/iam-role/#ロールrole-タイプ)をご参考にしてください。
{{</alert>}}

(3-3) 招待するメンバーに対するラベルを入力して、Entelキーを押して追加します。

(3-4) [確認]ボタンをクリックすると、メンバー招待が完了します。

![project-member-invited](/jp/docs/guides/getting-started/project-setup-img/project-member-invited.png)

## サービスアカウント設定

サービスアカウントとは、クラウドサービスのリソースを収集するために必要な**クラウドサービスアカウント**を意味します。

### クラウドサービスアカウントを追加する

(1) [アセットインベントリー > サービスアカウント]ページで追加するクラウドサービスを選択します。

![service-account-provider-menu](/jp/docs/guides/getting-started/service-account-setup-img/service-account-provider-menu.png)

(2) [追加]ボタンをクリックします。

![service-account-add-button](/jp/docs/guides/getting-started/service-account-setup-img/service-account-add-button.png)

(3) サービスアカウントの作成フォームを作成します。

(3-1) 基本情報を入力します。

![service-account-add-base-info](/jp/docs/guides/getting-started/service-account-setup-img/service-account-add-base-info.png)

(3-2) 当該サービスアカウントに従ってリソースを収集するプロジェクトを指定します。

![service-account-connect-project](/jp/docs/guides/getting-started/service-account-setup-img/service-account-connect-project.png)

(3-3) 暗号化キーの情報を入力します。

![service-account-add-key](/jp/docs/guides/getting-started/service-account-setup-img/service-account-add-key.png)

(4) [保存]ボタンをクリックすると完了します。


{{<alert title="クラウドサービス別のアカウント追加">}}
クラウドサービス別に必要なアカウント情報は異なります。詳細については、下記のリンクをご参考にしてください。

• AWS (リンク)

• Azure (リンク)

• GCP (リンク)

• OCI (リンク)

• Alibaba Cloud (リンク)
{{</alert>}}

---

上の過程を完了後、クラウドフォレのサービスをさらに便利かつさまざまにご利用になりたい場合は、以下のガイドをご参考にしてください。

- [**エセットインベントリー** 開始する](/jp/docs/guides/asset-inventory/quick-start)
- [**コスト分析** 開始する](/jp/docs/guides/cost-explorer/cost-analysis)
- [**アラートマネージャー** 開始する](/jp/docs/guides/alert-manager/quick-start)
