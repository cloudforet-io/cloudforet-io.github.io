---
title: "[IAM]ポリシー"
linkTitle: "[IAM]ポリシー"
weight: 3
date: 2022-06-07
description: >
    **ポリシー**は、実行可能なAPIの権限で、ユーザーに付与する[ロール](/ja/docs/guides/administration/iam-role)を作成時に使用します。
---

## ポリシーとは？

ポリシー(Policy)は、実行可能なAPIの権限を意味し、Managed / Customタイプのポリシーが存在します。

|            | Managed                                                                                                                | Custom                                                          |
|------------|------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| 定義         | Repositoryサービスにおいてグローバルに定義されたポリシーで、<br />ポリシーをすべてのシステムアドミンが直接管理して共有します。<br />ほとんどのユーザーが活用しやすい共通のポリシーです。| ドメイン別に独自に定義されたポリシーで、<br />各ドメインの詳細権限を管理するのに役立ちます。 |
| 作成、修正、削除 | X (不可)                                                                                                                | O (可能)                                                          |
| 読む         | O (可能)                                                                                                                 | O (可能)                                                          |

{{<alert>}}
Repositoryサービスとは、マーケットプレイスに接続するために共有の保存場所を提供するサービスです。
{{</alert>}}

詳細については、[Understanding Policy](/ja/docs/concepts/identity/rbac/understanding-policy)をご参考にしてください。


{{<alert>}}
Customポリシーのみ作成 / 修正 / 削除が可能なので、当該機能を利用時には、タイプを確認後に実行してください。
{{</alert>}}

## ポリシーを照会する

照会したいポリシーのタイプをクリックすると、テーブルに接続されたIDフィールドからポリシーの詳細ページへ移動します。

![policy-full-page](/ja/docs/guides/administration/iam-policy-img/policy-full-page.png)

## ポリシーを作成する

画面右上の[作成]ボタンからポリシーを作成するページへ移動します。

![policy-create-button](/ja/docs/guides/administration/iam-policy-img/policy-create-button.png)

氏名、説明、権限を入力すると、ポリシーを作成できます。

与えられた権限を複数入力できます。複数の場合は改行で区分します。

権限の例は、次のとおりです。`{サービス}.{リソース}.{作動}`の形式が設定されています。

| 例                      | 例に対する説明                  |
|-------------------------|----------------------------|
| identity.Project.*      | プロジェクトリソースに対するすべての権限      |
| identity.ProjectGroup.* | プロジェクトグループリソースに対するすべての権限 |
| identity.User.get       | ユーザーリソースに対する獲得権限        |
| identity.User.update    | ユーザーリソースに対するアップデート権限     |
| identity.User.list      | ユーザ―リソースに対するリスト権限       |

サービスやリソース等に関する詳細な情報については、(こちら)をご参考にしてください。

## ポリシーを編集する

編集したいポリシーのページに移動します。

### ポリシー名を編集する

タイトルの右横にある編集アイコンをクリックすると表示されるモダールでポリシー名を編集できます。

![policy-edit-icon-button](/ja/docs/guides/administration/iam-policy-img/policy-edit-icon-button.png)

### ポリシーの内容を編集する

説明欄の入力ウィンドウで説明を修正できます。

画面下のコードブロックで権限を修正できます。複数の権限は改行で区分します。

![policy-detail-page-with-new-permission](/ja/docs/guides/administration/iam-policy-img/policy-detail-page-with-new-permission.png)

## ポリシーを削除する

削除したいポリシーのページに移動します。

削除アイコンをクリックすると表示されるモダールウィンドウでポリシーを削除できます。

![policy-delete-icon-button](/ja/docs/guides/administration/iam-policy-img/policy-delete-icon-button.png)

このとき、ロール(Role)が連結たポリシーは削除できないため、ロール(Role)ページへ移動して検討を実行してください。

![policy-cannot-delete-modal](/ja/docs/guides/administration/iam-policy-img/policy-cannot-delete-modal.png)
