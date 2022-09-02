---
title: "サービスアカウント"
linkTitle: "サービスアカウント"
weight: 5
date: 2022-06-07
description: >
    **サービスアカウント**では、各クラウドサービスのアカウントを手軽に統合・管理・追跡することができます。
---

## サービスアカウントを追加する

(1) [アセットインベントリー > サービスアカウント]ページで追加するクラウドサービスを選択します。

![service-account-provider-menu](/jp/docs/guides/asset-inventory/service-account-img/service-account-provider-menu.png)

(2) [追加]ボタンをクリックします。

![service-account-add-button](/jp/docs/guides/asset-inventory/service-account-img/service-account-add-button.png)

(3) サービスアカウントの作成フォームを作成します。

(3-1) 基本情報を入力します。

![service-account-add-base-info](/jp/docs/guides/asset-inventory/service-account-img/service-account-add-base-info.png)

(3-2) 当該サービスアカウントに従ってリソースを収集するプロジェクトを指定します。

![service-account-connect-project](/jp/docs/guides/asset-inventory/service-account-img/service-account-connect-project.png)

(3-3) 暗号化キーの情報を入力します。

![service-account-add-key](/jp/docs/guides/asset-inventory/service-account-img/service-account-add-key.png)

(4) [保存]ボタンをクリックすると完了します。

## サービスアカウントを管理する

### プロジェクトを変更する

プロジェクトを変更したいサービスアカウントを選択して、作業メニューで[プロジェクト変更]ボタンをクリックします。

![service-account-project-change-menu](/jp/docs/guides/asset-inventory/service-account-img/service-account-project-change-menu.png)

作成されたモダールウィンドウで変更するプロジェクトを選択して、[確認]ボタンをクリックします。

![service-account-project-change-selected](/jp/docs/guides/asset-inventory/service-account-img/service-account-project-change-selected.png)

サービスアカウントのプロジェクト選択を解除したい場合は、モダールウィンドウの下にある[プロジェクトを選択しない]項目をチェックして、[確認]ボタンをクリックします。

![service-account-project-unselect-selected](/jp/docs/guides/asset-inventory/service-account-img/service-account-project-unselect-selected.png)

### コンソールに接続する

コンソールに接続したいサービスアカウントを選択して、[作業]ドロップダウンで[コンソール接続]メニューをクリックします。

![sevice-account-console-connect-menu](/jp/docs/guides/asset-inventory/service-account-img/sevice-account-console-connect-menu.png)

## 詳細情報を確認する

詳細情報を確認したいプロジェクトを選択すると、下にあるテーブルに情報が表示されます。

![service-account-single-select](/jp/docs/guides/asset-inventory/service-account-img/service-account-single-select.png)

- [詳細情報]タブでは、次のような情報を確認できます。.
<br />
  • ID
<br />
  • 名前
<br />
  • プロジェクト
<br />
  • 作成日
<br />
- [タグ]タブでタグの照会、編集、追加することができます。
- [暗号化キー]タブでキーを照会、検索することができます。
- [関連メンバー]タブで当該サービスアカウントの照会と検索を実行できます。
<br />
  • 接続されたプロジェクトメンバーのうちProject Admin権限を有する者が関連メンバーに割り当てられます。
l
  • 詳細については、[メンバー](/jp/docs/guides/project/member)で確認できます。

## サービスアカウントを削除する
{{<alert>}}
削除したサービスアカウントは復旧できませんので、ご注意ください。
{{</alert>}}

削除したいサービスアカウントを選択して、[作業]ドロップダウンで[削除]メニューをクリックします。

![service-account-delete-menu](/jp/docs/guides/asset-inventory/service-account-img/service-account-delete-menu.png)

[サービスアカウント削除]モダールウィンドウで削除したいサービスアカウントの名前を入力して、[確認]ボタンをクリックします。

![service-account-delete-modal2](/jp/docs/guides/asset-inventory/service-account-img/service-account-delete-modal2.png)
