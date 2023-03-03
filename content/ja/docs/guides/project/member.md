---
title: "メンバー"
linkTitle: "メンバー"
weight: 4
date: 2022-06-07
description: >
    [**プロジェクト**](/ja/docs/guides/project/project)と[**プロジェクトグループ**](/ja/docs/guides/project/project-group)に **メンバー**を招待して[**ロール(Role)**](/ja/docs/guides/administration/iam-role)を付与することができます。
    <br>
    <br>
    メンバーには必ずロール(Role)が1つ付与され、これによって当該プロジェクトとプロジェクトグループに対するアクセスを管理することができます。
---

{{<alert>}}
メンバーのロール(Role)に連結された [**ポリシー(Policy)**](/ja/docs/guides/administration/iam-policy)によってプロジェクトに対するアクセス権限が異なります。
ロール(Role)は、以下の規則に従って下位層に伝達されます。
<br>
<br>
• **プロジェクトグループメンバーロール**は、その下位にあるすべてのプロジェクトグループとプロジェクトに対して同じように適用されます。
<br>
• **プロジェクトメンバーロール**は、当該プロジェクトにのみ適用されます。
<br>
• 上位層に存在する複数のプロジェクトグループに対してメンバーロールが存在する場合、各々に付与されたロールはすべてマージされて適用されます。
{{</alert>}}

## プロジェクトグループのメンバーを管理する

[プロジェクトグループメンバー管理]ページへ移動すると、メンバーを管理できます。
<br>
<br>

(1) [プロジェクト]ページの左にある[プロジェクトグループ]リストで、メンバーを管理したいプロジェクトグループを選択します。

(2) 右上にある[プロジェクトグループメンバー管理]アイコンをクリックします。

![project-member-icon-button](/ja/docs/guides/project/member-img/project-member-icon-button.png)

{{<alert title="">}}
当該プロジェクトグループの管理権限を持つユーザーにのみ、右上にボタンが表示されます。
{{</alert>}}

(3) プロジェクトグループのメンバー管理ページで検索ワードを入力すると、条件と一致するプロジェクト一覧が照会され、新しいメンバーの招待、またはメンバーの編集・削除を実行できます。

![project-member-search](/ja/docs/guides/project/member-img/project-member-search.png)

{{<alert title="">}}
当該プロジェクトグループを管理できる権限を持つメンバーのみ、招待・編集・削除を実行することができます。
{{</alert>}}

### プロジェクトグループのメンバーを招待する

(1) [プロジェクトグループメンバー管理]ページで[招待]ボタンをクリックすると、[メンバー招待]モダールウィンドウが表示されます。

![project-member-invite-button](/ja/docs/guides/project/member-img/project-member-invite-button.png)

(2) 招待したいメンバーを選択します。一度に複数のメンバーを選択して招待できます。

![project-member-invite-modal-member](/ja/docs/guides/project/member-img/project-member-invite-modal-member.png)

(3) 招待するメンバーに付与するロール(Role)を選択します。

![project-member-invite-modal-role](/ja/docs/guides/project/member-img/project-member-invite-modal-role.png)

{{<alert title="メンバーロール(Role)">}}

プロジェクトメンバーに付与できるロール(Role)は、「User」タイプのロールのみ可能です。 

詳細については、[こちら](/ja/docs/guides/administration/iam-role)をご参考にしてください。

{{</alert>}}

(4) 招待するメンバーに対するラベルを入力して、Entelキーを押して追加します。

(5) [確認]ボタンをクリックすると、メンバーの招待が完了します。

![project-member-invite-success](/ja/docs/guides/project/member-img/project-member-invite-success.png)

### プロジェクトグループのメンバーを編集する

プロジェクトグループに対してメンバーに付与したロール(Role)とラベルを変更できます。
<br>
<br>

(1) [プロジェクトグループメンバー管理]ページで編集したいメンバーを選択します。

(2) [作業]ドロップダウンで[編集]を選択します。

![project-member-edit-menu](/ja/docs/guides/project/member-img/project-member-edit-menu.png)

(3) [メンバー情報変更]モダールウィンドウで変更したい内容を入力して[確認]ボタンをクリックすると、変更が完了します。

![project-member-edit-modal](/ja/docs/guides/project/member-img/project-member-edit-modal.png)

### プロジェクトグループメンバーを削除する

(1) [プロジェクトグループメンバー管理]ページで削除したいメンバーを選択します。複数選択が可能です。

(2) [作業]ドロップダウンで[削除]を選択します。

![project-member-delete-menu](/ja/docs/guides/project/member-img/project-member-delete-menu.png)

(3) [メンバー削除]モダールウィンドウで[確認]ボタンをクリックすると、当該メンバーが削除されます。

![project-member-delete-modal](/ja/docs/guides/project/member-img/project-member-delete-modal.png)


## プロジェクトメンバーを管理する

プロジェクト詳細ページの[メンバー]タブへ移動するとメンバーを管理できます。すべての方法と内容は、プロジェクトグループのメンバーを管理する(リンク)と同じです。
<br>
<br>

(1) [プロジェクト]ページでメンバーを管理したいプロジェクトを選択して、プロジェクト詳細ページへ移動します。

(2) [メンバー]タブを選択します。

![project-member-tab](/ja/docs/guides/project/member-img/project-member-tab.png)
