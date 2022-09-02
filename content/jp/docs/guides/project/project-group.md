---
title: "プロジェクトグループ"
linkTitle: "プロジェクトグループ"
weight: 2
date: 2022-06-07
description: >
    **プロジェクトグループ**は、さまざまな[**プロジェクト**](/jp/docs/guides/project/project)をまとめて管理するための概念です。
    <br>
    <br>
    プロジェクトグループの下位には、プロジェクトとプロジェクトグループが属すことができ、このツリー構造を利用して組織の規模と構造に適したプロジェクト階層構造を設計して管理することができます。
---

[//]: # (プロジェクトグループに招待した[**メンバー**]&#40;/ko/docs/guides/project/member&#41;に [**ロール&#40;Role&#41;**]&#40;/ko/docs/guides/administration/iam-user&#41;を付与すると、当該メンバーは下位プロジェクトグループとプロジェクトに対して同じロール&#40;Role&#41;が与えられます。.)

## プロジェクトグループを作成する

### 最上位プロジェクトグループを作成する

(1) [プロジェクト]ページの左にある[プロジェクトグル―プ]リストで、[すべてのプロジェクト]を選択します。

![project-group-all-project-lnb](/jp/docs/guides/project/project-group-img/project-group-all-project-lnb.png)

(2) 右側にある[プロジェクトグループ作成]ボタンをクリックします。

{{<alert title="[プロジェクトグループ作成]ボタンが表示されない場合">}}

管理者ロール(Role)を持つユーザーのうち、プロジェクトページに対して修正権限を持つユーザーのみが最上位プロジェクトグループを作成・修正・削除できます。

最上位にプロジェクトグループを作成できるロール(Role)が付与されていないユーザーには、当該ボタンは表示されません。

![project-group-full-page](/jp/docs/guides/project/project-group-img/project-group-full-page.png)

{{</alert>}}

(3) [プロジェクトグループ作成]モダールウィンドウで希望する名前を入力して[確認]ボタンをクリックすると、プロジェクトグループ作成が完了します。

![project-group-create-modal](/jp/docs/guides/project/project-group-img/project-group-create-modal.png)

### 下位プロジェクトグループを作成する

特定のプロジェクトグループの下位に別のプロジェクトグループを作成する場合は、以下の段階を踏みます。
<br>
<br>

(1) 左にある[プロジェクトグループ]リストで、下位プロジェクトグループを作成したいプロジェクトグループにマウスポインタを当てて、右に表示される[＋]ボタンをクリックします。

![project-group-create-button-from-lnb](/jp/docs/guides/project/project-group-img/project-group-create-button-from-lnb.png)

{{<alert title="[+]ボタンが無効化状態の場合">}}

当該プロジェクトグループのメンバーとして招待されていない場合や、当該グループを作成できる権限がない場合は、このボタンは無効化状態です。 

管理者にプロジェクトグループメンバーとして招待、またはロール(Role)変更をリクエストしてください。

{{</alert>}}

(2) [プロジェクトグループ作成]モダールウィンドウでグループ名を作成後に[確認]ボタンをクリックして、プロジェクトグループを作成します。

![project-group-child-create-modal](/jp/docs/guides/project/project-group-img/project-group-child-create-modal.png)

(3) 選択したプロジェクトグループの下位に新しく作成されたプロジェクトグループが表示されます。

![project-group-child-tree](/jp/docs/guides/project/project-group-img/project-group-child-tree.png)

## プロジェクトグループ＆プロジェクトを検索する

左側にある検索ウィンドウを利用すると、プロジェクトグループとプロジェクトを検索することができます。
 
検索結果でプロジェクトグループを選択すると、当該プロジェクトグループページが表示され、プロジェクトを選択すると、当該プロジェクトの詳細ページが新しいタブで表示されます。

![project-group-search](/jp/docs/guides/project/project-group-img/project-group-search.png)

プロジェクトグループを作成後に再び検索ウィンドウを開くと、当該プロジェクトグループの下位プロジェクトを確認できます。

![project-group-search-project](/jp/docs/guides/project/project-group-img/project-group-search-project.png)


## プロジェクトグループを確認する

左にある[プロジェクトグループ]リストで特定のプロジェクトグループを選択すると、当該グループの詳細情報を確認できます。

![project-group-single-select-from-lnb](/jp/docs/guides/project/project-group-img/project-group-single-select-from-lnb.png)

{{<alert title="プロジェクトリスト照会">}}
プロジェクトグループを選択すると、当該グループに属するプロジェクトリストを確認できます。詳細については、[こちら](/jp/docs/guides/project/project/#プロジェクト-リスト-照会する)をご参考にしてください。
{{</alert>}}

## プロジェクトグループを編集する

プロジェクトグループの名前を変更したり、グループの階層構造を変更できます。
<br>
<br>
左にある[プロジェクトグループ]リストの上にある[編集]ボタンをクリックすると、編集モードに変換され、編集することができます。

![project-group-edit-button](/jp/docs/guides/project/project-group-img/project-group-edit-button.png)

{{<alert title="[編集]ボタンが無効化状態の場合">}}
• プロジェクトグループを選択しない状態で[編集]ボタンが無効化状態の場合は、最上位プロジェクトグループを修正できる権限がありません。

• プロジェクトグループを選択した状態でボタンが無効化状態の場合は、当該プロジェクトグループのメンバーとして招待されていなかったり、当該グループを修正できる権限がありません。 
管理者に[プロジェクトグループメンバーとして招待](/jp/docs/guides/project/member/#プロジェクト-グループ-メンバー-招待する)をリクエスト、または[メンバーロール(Role)変更](/jp/docs/guides/project/member/#プロジェクト-グループ-メンバー-編集する)をリクエストしてください。
{{</alert>}}

### プロジェクトグループ名を変更する

(1) 編集モードに変換後、名前を修正したいプロジェクトグループをクリックします。

![project-group-name-change-at-lnb](/jp/docs/guides/project/project-group-img/project-group-name-change-at-lnb.png)

(2) 入力ウィンドウが表示されたら、変更したい名前を入力します。入力ウィンドウ以外の場所でマウスをクリックすると、読み取りモードに変換されます。

### プロジェクトグループの階層構造を編集する

プロジェクトグループリストでドラッグアンドドロップすると、プロジェクトグループの階層構造を便利に編集できます。
<br>
<br>

(1) 編集モードに変換して、移動させたいプロジェクトグループをクリックしたまま移動して希望する位置でボタンを離します。

(2) 移動させたいプロジェクトグループをクリックしたまま移動して、希望する位置で離します。

![project-group-tree-change](/jp/docs/guides/project/project-group-img/project-group-tree-change.png)

{{<alert title="プロジェクトグループが移動しない場合">}}
• 選択したプロジェクトグループを修正できる権限がない場合: 編集モードでプロジェクトグループを選択できない場合は、当該プロジェクトグループを移動させる権限がありません。

• 離す位置の上位プロジェクトグループを修正できる権限がない場合: 選択したプロジェクトグループを離そうとする位置が薄くぼやけて見える場合は、移動させたいプロジェクトグループに対する修正権限がありません。
{{</alert>}}

### プロジェクトを移動させる

プロジェクトグループだけでなく、その下位に存在するプロジェクトも、他のプロジェクトグループへ移動させることができます。

編集モードに変換後、プロジェクトグループと同じ方法でプロジェクトを移動させることができます。

![project-group-project-tree-change](/jp/docs/guides/project/project-group-img/project-group-project-tree-change.png)

{{<alert title="[編集]ボタンが無効化状態の場合">}}
当該プロジェクトグループを修正できる権限がありません。 
当該グループの下位プロジェクトに対する修正権限があっても、プロジェクトグループの権限は有していない場合があります。 
プロジェクトグループ管理者に、[メンバーロール(Role)変更](/jp/docs/guides/project/member/#プロジェクト-グループ-メンバー-編集する)をリクエストしてください。
{{</alert>}}

## プロジェクトグループを削除する

(1) 左にある[プロジェクトグループ]リストで、削除したいプロジェクトグループを選択します。

(2) 右上にある[設定]ボタンをクリックして、ドロップダウンで[選択したグループ削除]を選択します。

![project-group-delete-menu](/jp/docs/guides/project/project-group-img/project-group-delete-menu.png)

(2-1) [プロジェクトグループ削除]モダールウィンドウで[確認]ボタンをクリックすると、プロジェクトグループが完全削除されます。

![project-group-delete-modal](/jp/docs/guides/project/project-group-img/project-group-delete-modal.png)

{{<alert title="プロジェクトグループが削除されない場合">}}

• 選択したプロジェクトグループに属するプロジェクトがある場合は、プロジェクトグループは削除されません。

• 選択したプロジェクトグループに属さなくても、その下位のグループにプロジェクトがある場合は、プロジェクトグループは削除されません。
<br>
<br>
上記の2つの場合は、プロジェクトを先に削除する必要があります。プロジェクトの削除方法については、[こちら](/jp/docs/guides/project/project/#プロジェクト-削除する)をご参考にしてください。

{{</alert>}}
