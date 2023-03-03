---
title: "エスカレーションポリシー"
linkTitle: "エスカレーションポリシー"
weight: 8
date: 2022-06-07
description: >
    エスカレーションポリシーを通じてアラートに段階別ルールを適用し、受信したアラートをプロジェクトメンバーに効果的に伝達します。


    各ルールには、設定されたレベルが存在するため、各レベルに該当する通知チャンネルへアラートが送信されます。
---

ウェブフックを通じて受信したアラートがプロジェクトメンバーに通知として送信されるかは、 **エスカレーションポリシー**によって決定されます。
<br>
エスカレーションポリシーは、次の2か所で管理できます。

- **[アラートマネージャー > エスカレーションポリシー]** ぺージ: 「グローバル」と「プロジェクト」スコープのエスカレーションポリシー管理
- **[プロジェクト]** 詳細ページ: 「プロジェクト」スコープのエスカレーションポリシー管理

## エスカレーションポリシーを作成する

[エスカレーションポリシー]ページに対する「MANAGE」権限を有するユーザーは、エスカレーションポリシーを作成することができます。

### [エスカレーションポリシー]ページで作成する
(1) [アラートマネージャー > エスカレーションポリシー]ページで[作成]ボタンをクリックします。

![escalation-policy-full-page](/ja/docs/guides/alert-manager/escalation-policy-img/escalation-policy-full-page.png)

(2) エスカレーションポリシー作成のための設定を入力します。

![escalation-policy-create-modal](/ja/docs/guides/alert-manager/escalation-policy-img/escalation-policy-create-modal.png)

| ポリシー        | 説明                                                                                                  |
|-----------|-----------------------------------------------------------------------------------------------------|
| 終了条件(状態) | 発生した通知が中止される条件を定義します。                                                                             |
| スコープ        | エスカレーションポリシーを使用できる範囲を意味します。「グローバル」の場合はドメイン内のすべてのプロジェクトで使用でき、「プロジェクト」の場合は指定されたプロジェクト内でのみ使用できます。|
| プロジェクト      | スコープが「プロジェクト」の場合に対象となるプロジェクトを表します。                                                                  |
| エスカレーションルール | 段階別に通知を送信するためのルールを定義します。<br/>設定されたレベルに属する通知チャンネルにアラートを送信します。2段階以上からは、段階の間隔を分単位で設定することができます。        |
| 繰り返し回数     | アラート通知を繰り返す回数を定義します。最大9回まで繰り返しが可能です。                                                          |

{{<alert>}}
**スコープ**と **プロジェクト** 項目は、[アラートマネージャー > エスカレーションポリシー]ページで作成時のみ表示されます。
<br>
[プロジェクト]詳細ページで作成すると、スコープは自動的に「プロジェクト」が選択され、 当該プロジェクトが対象に指定されます。
{{</alert>}}

### [プロジェクト]詳細ページで作成する
[プロジェクト]詳細ページでエスカレーションポリシーを作成すると、自動的に当該エスカレーションポリシーが対象に指定されます。

(1) プロジェクト詳細ページの[アラート]タブ内で[設定]タブへ移動します。

![create-escalation-policy-1](/ja/docs/guides/alert-manager/escalation-policy-img/create-escalation-policy-1.png)

(2) エスカレーションポリシーのゾーンで[変更]ボタンをクリックします。

![create-escalation-policy-2](/ja/docs/guides/alert-manager/escalation-policy-img/create-escalation-policy-2.png)

(3) [新しいポリシー作成]タブをクリックします。

![create-escalation-policy-3](/ja/docs/guides/alert-manager/escalation-policy-img/create-escalation-policy-3.png)

(4) エスカレーションポリシー作成のための設定を入力します。

![create-escalation-policy-4](/ja/docs/guides/alert-manager/escalation-policy-img/create-escalation-policy-4.png)

### レベル

レベルは、アラートを段階別に送信時に、当該段階でアラートを送信する送信範囲です。

プロジェクトにアラートチャンネルを設定でき、アラートチャンネルは各々の独自のレベルを持っています。

![escalation-policy-level](/ja/docs/guides/alert-manager/escalation-policy-img/escalation-policy-level.png)

エスカレーションのルールを定義時に[通知レベル]を設定します。設定された段階ごとに該当するレベルのアラートチャンネルでアラートを送信します。

{{<alert>}}
アラートは、上位レベルで段階別に実行されるよう、十分に期間の間隔を開けて設定すると良いでしょう。
{{</alert>}}

(5) 設定がすべて完了したら、[確認]ボタンをクリックしてエスカレーションポリシーをを作成します。




## 基本ポリシーに設定する

エスカレーションポリシー一覧で1つを選択して、[作業]をドロップダウンして[基本に設定する]メニューを選択すると、当該ポリシーを基本に設定することができます。

新しいプロジェクトを作成してアラートを有効化すると、当該ポリシーは自動的に適用されます。

![set-as-default](/ja/docs/guides/alert-manager/escalation-policy-img/set-as-default.png)

{{< alert title="" >}}
ただし、スコープが「グローバル」のポリシーのみ、[基本に設定する]を実行することができます。
{{< /alert >}}




## エスカレーションを修正・削除する

エスカレーションポリシー一覧で対象を選択後に[作業]をドロップダウンすると、[修正]または[削除]を実行することができます。

![escalation-policy-update-delete](/ja/docs/guides/alert-manager/escalation-policy-img/escalation-policy-update-delete.png)

### 修正する

修正は、[作成]ボタンをクリックすると表示されるモダールウィンドウのような形態で、スコープを除いたすべての項目を修正できます。

![update-escalation-policy](/ja/docs/guides/alert-manager/escalation-policy-img/update-escalation-policy.png)

### 削除する

削除は、以下のような確認モダールウィンドウで削除を実行できます。

![delete-escalation-policy](/ja/docs/guides/alert-manager/escalation-policy-img/delete-escalation-policy.png)

{{<alert>}}
基本値に設定されたポリシーと使用中のポリシーは削除できません。
{{</alert>}}
