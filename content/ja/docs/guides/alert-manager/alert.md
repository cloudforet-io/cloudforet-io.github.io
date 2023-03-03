---
title: "アラート"
linkTitle: "アラート"
weight: 3
date: 2022-06-07
description: >
    **アラート**は、サービス運営時に発生するすべてのイシューを定義したもので、主に関係者に通知を送信する目的で作成されます。
---

### 状態

アラートは、以下のような状態があります。

| 状態 | 説明 |
| --- | --- |
| 確認 | アラートに担当者が割り当てられて処理中の状態 |
| 作成 | アラートが最初に登録された状態 |
| 完了 | 障害、点検などアラートの処理が完了した状態 |
| エラー | ウェブフックの連携を通じてイベントが受信されたが、エラーによってアラートが正常に登録されていない状態 |

### 緊急度

クラウドフォレのアラートの緊急度は、「高」と「低」の2種類が存在します。

アラート [手動作成](/ja/docs/guides/alert-manager/alert/#アラート-作成する)の場合、「高」と「低」の2種類で作成されますが、[ウェブフック連携を通じた自動作成](/ja/docs/guides/alert-manager/alert/#アラート-作成する)の場合は、**深刻度(Severity)** に従って緊急度(Urgency)が測定されます。

{{<alert title="深刻度">}}
**深刻度**は、一般的な外部モニタリングのフックから受信されるイベントの危険度を表します。
「CRITICAL」、「ERROR」、「WARNING」、「INFO」、「NOT_AVAILABLE」の5種類の深刻度があり、アラートとして作成時に、クラウドフォレは下記の基準で緊急度を設定します。

• 「高」 : 「CRITICAL」、「ERROR」、「NOT_AVAILABLE」

• 「低」 : 「WARNING」、「INFO」
{{</alert>}}




## アラートを作成する

アラートは、次の2つの方法で作成できます。

- **手動作成**: クラウドフォレのコンソールでアラートを手動で作成します。
- **自動作成**: ウェブフックを作成して、ウェブフックと連携した外部モニタリングサービスを通じてイベントを受信します。受信したイベントのメッセージを精製してアラートを自動的に作成します。

### コンソールでアラートを手動作成する

(1) [アラートマネージャー > アラート]ページへ移動して[作成]ボタンをクリックします。

![create-alert-step-1](/ja/docs/guides/alert-manager/quick-start-img/create-alert-step-1.png)

(2) [アラート作成]のモダールウィンドウが表示されたら、入力フォームを作成します。

![create-alert-step-2](/ja/docs/guides/alert-manager/quick-start-img/create-alert-step-2.png)

(2-1) [アラートタイトル]を入力して[緊急度]を選択します。

(2-2) アラートが発生するプロジェクトを指定します。

(2-3) 追加説明が必要な場合は、[説明]を作成します。

(3) [確認]ボタンをクリックして、アラート作成を完了します。

### 外部モニタリングサービスに接続してアラートを受信する

外部モニタリングサービスに接続すると、当該サービスで発生するイベントのメッセージがアラートとして自動的に作成されます。
<br>
外部モニタリングで発生したアラートを受信するためには、**ウェブフック作成**と **連携設定**をする必要があります。

{{<alert>}}
**ウェブフック作成**は、クラウドフォレのコンソールで実行されますが、**連携設定**は、外部モニタリングサービスを提供するクラウドサービスのコンソールで直接設定しなければなりません。

外部モニタリングサービスとの連携方法は、[こちら](/ja/docs/guides/plugins/alert-manager-webhook/)をご参考にしてください｡
{{</alert>}}

<br>

#### ウェブフックを作成する

外部モニタリングサービスで発生するイベントメッセージを受信するためには、ウェブフックを作成しなければなりません。
<br>
ウェブフックは、プロジェクト詳細ページで作成できます。


(1) プロジェクト詳細ページの[アラート]タブに移動して、[ウェブフック]タブを選択します。

![create-webhook-step-1](/ja/docs/guides/alert-manager/quick-start-img/create-webhook-step-1,2.png)

(2) [追加]ボタンをクリックします。

(3) [ウェブフック追加]モダールウィンドウで名前を作成して、連携する外部モニタリングサービスのプラグインを選択します。

![create-webhook-step-3](/ja/docs/guides/alert-manager/quick-start-img/create-webhook-step-3.png)

(4) [確認]ボタンをクリックして設定を完了します。

### アラートを活用する
クラウドフォレのアラートを活用したさまざまな機能をかんたんにご紹介します。

- [通知チャンネル](/ja/docs/guides/alert-manager/notification): アラートをどのユーザーにどのように、いつ送信するのかなどを設定します。
- [エスカレーションポリシー](/ja/docs/guides/alert-manager/escalation-policy/): 段階別のルールを適用して、受信したアラートをプロジェクトメンバーに効果的に伝達します。
- [イベントルール](/ja/docs/guides/alert-manager/event-rule): ウェブフックを通じて受信したイベントは、条件に従って **アラート**として作成されます。
- [維持管理期間](/ja/docs/guides/alert-manager/maintenance):  定期・非定期のシステム作業日程を登録して作業を案内し、作業間で発生する **アラート**を遮断します。



## アラート一覧を照会する

[アラートマネージャー > アラート]ページですべてのプロジェクトのアラートを照会できます。
<br>
アラートを検索したりアラートの状態を変更できます。

### アラートを検索する
検索ワードを入力して条件と一致するアラート一覧を確認でき、確認したいアラートのタイトルをクリックすると、アラート詳細ページへ移動します。

![alert-search](/ja/docs/guides/alert-manager/alert-img/alert-search.png)

また、基本的に提供されるフィルタリング機能を利用すると、アラートを便利にフィルタリングできます。

詳細検索に関する詳細については､[こちら](/ja/docs/guides/advanced/search/)をご参考にしてください｡

### 一覧でアラート状態を変更する

一覧ですぐにアラートの状態を修正できます。

(1) 状態を修正したいアラートを選択して、画面右上の[確認]、[完了]、[削除]のうち実行したいボタンをクリックします。

![update-alert-1](/ja/docs/guides/alert-manager/alert-img/update-alert-1.png)

(1-1) [確認]ボタンをクリックして「確認」状態に変更する

「確認」状態は、担当者の割り当てが完了して処理中の状態です。
<br>
状態変更と同時に選択したアラートの担当者を自分に設定できます。[確認]ボタンをクリックすると完了します。

![update-alert-1-1](/ja/docs/guides/alert-manager/alert-img/update-alert-1-1.png)

(1-2) [完了]ボタンをクリックして完了状態に変更する

「完了」状態は、アラートを発生させるイシューの処理が完了した状態です。
<br>
状態変更と同時にノートを作成でき、[確認]ボタンをクリックすると完了します。

![update-alert-1-2](/ja/docs/guides/alert-manager/alert-img/update-alert-1-2.png)

(1-3) [削除]ボタンをクリックしてアラートを削除する

削除するアラート一覧をもう一度確認でき、[確認]ボタンをクリックすると削除されます。

![update-alert-1-3](/ja/docs/guides/alert-manager/alert-img/update-alert-1-3.png)





## アラートを確認する

アラート詳細ページで、アラートに関する詳細情報とヒストリーを照会・管理することができます。

![alert-detail-page](/ja/docs/guides/alert-manager/alert-img/alert-detail-page.png)

| 詳細項目 | 説明 |
| --- | --- |
| 継続時間 | アラートが続く時間 |
| 説明 | アラートに対する説明で、ユーザーが直接作成した内容、または外部モニタリングサービスから受信したイベント内容 |
| ルール | 外部モニタリングサービスでアラートが発生した条件 |
| 深刻度 | ウェブフックイベントのデータから受信した深刻度 |
| エスカレーションポリシー | 適用されたエスカレーションポリシー |
| プロジェクト | アラートが発生したプロジェクト |
| 作成 | アラートを送信したモニタリングサービス |
| リソース名 | アラートが発生した対象  |

### 名前変更と削除

[編集]アイコンと[削除]アイコンをクリックすると、アラートの名前変更と削除を実行することができます。

![update-alert-name-or-delete-alert](/ja/docs/guides/alert-manager/alert-img/update-alert-name-or-delete-alert.png)

### 状態 / 緊急度を変更する

状態と緊急度は、ドロップダウンで手軽に修正できます。

![update-state-urgency](/ja/docs/guides/alert-manager/alert-img/update-state-urgency.png)

### 担当者を変更する
(1) [割り当て]ボタンをクリックします。

![update-assignee-1](/ja/docs/guides/alert-manager/alert-img/update-assignee-1.png)

(2) 担当者を選択して[確認]ボタンをクリックすると、担当者の割り当てが完了します。

![update-assignee-2](/ja/docs/guides/alert-manager/alert-img/update-assignee-2.png)

### 説明を修正する

選択したアラートに対する管理権限を有するユーザーのみ編集できます。

(1) [編集]ボタンをクリックします。

![update-description-1](/ja/docs/guides/alert-manager/alert-img/update-description-1.png)

(2) アラート説明欄のフォームで変更事項を作成して[変更事項保存]ボタンをクリックすると、修正が完了します。

![update-description-2](/ja/docs/guides/alert-manager/alert-img/update-description-2.png)

### プロジェクトを変更する

アラートと接続されたプロジェクトを変更することができます。

(1) プロジェクト[変更]ボタンをクリックします。

![update-project-1](/ja/docs/guides/alert-manager/alert-img/update-project-1.png)

(2) [プロジェクト選択]ドロップダウンでプロジェクトを選択後に[変更事項保存]ボタンをクリックすると、プロジェクトの変更が完了します。

![update-project-2](/ja/docs/guides/alert-manager/alert-img/update-project-2.png)

### 新しい状態にアップデートする

アラートの状態に進行状況などを記録して、当該アラートの状態を速やかに確認できるよう設定します。
<br>
内容を変更すると、以前の状態の記録は削除されます。

(1) [新しいアップデート]ボタンをクリックします。

![update-status-1](/ja/docs/guides/alert-manager/alert-img/update-status-1.png)

(2) [新しい状態にアップデート]モダールウィンドウで状態を作成して[確認]ボタンをクリックすると、状態のアップデートが完了します。

![update-status-2](/ja/docs/guides/alert-manager/alert-img/update-status-2.png)

### 受信先を追加する

アラートは、[エスカレーションポリシー](/ja/docs/guides/alert-manager/escalation-policy/)を通じて受信先に送信されます。

アラートをを送信するユーザーを追加したい場合は、[追加受信先]を設定します。

![add-additional-responder-1](/ja/docs/guides/alert-manager/alert-img/add-additional-responder-1.png)

検索ウィンドウをクリックすると受信可能なユーザーリストを照会・検索できます。複数選択も可能です。

![add-additional-responder-2](/ja/docs/guides/alert-manager/alert-img/add-additional-responder-2.png)

### ノートを追加する

アラートに対してメンバーがコメントを残して、処理中の問い合わせやこれに対する回答を登録して、コミュニケーションを取ることができます。

![add-note](/ja/docs/guides/alert-manager/alert-img/add-note.png)

### 発生したイベントを確認する

アラートで発生したイベントをロギングして、ヒストリーを確認することができます。

![view-pushed-event](/ja/docs/guides/alert-manager/alert-img/view-pushed-event.png)

イベント一覧のなかの一つをクリックすると、イベントの詳細情報を照会できます。

![view-pushed-event-detail](/ja/docs/guides/alert-manager/alert-img/view-pushed-event-detail.png)

### 通知ポリシーを設定する

プロジェクトで発生したアラートの緊急度が「緊急」の場合のみ、アラートが発生するよう設定できます。

(1) プロジェクト詳細ページの[アラート]タブ内で[設定]タブへ移動します。

![notification-policy-1](/ja/docs/guides/alert-manager/alert-img/notification-policy-1,2.png)

(2) 通知ポリシーゾーンの[編集]アイコンをクリックします。

![notification-policy-2](/ja/docs/guides/alert-manager/alert-img/notification-policy-1,2.png)

(3) 設定したい通知ポリシーを選択します。

![notification-policy-3](/ja/docs/guides/alert-manager/alert-img/notification-policy-3.png)

(4) [確認]ボタンをクリックすると、ポリシーの設定が完了します。

### 自動復旧を設定する

自動復旧機能は、システム障害が復旧されると、アラートを自動的に「完了」状態に変換します。

{{<alert title="自動復旧の作動原理">}}

![auto-recovery-setting](/ja/docs/guides/alert-manager/alert-img/auto-recovery-setting.png)

自動復旧が設定されたプロジェクトのアラートが追加イベントを受信すると、当該イベントの「event_type」値が「RECOVERY」の場合、自動的にアラートの状態が「完了」に変換されます。
{{</alert>}}

(1) プロジェクト詳細ページの[アラート]タブ内で[設定]タブへ移動します。

![auto-recovery-1](/ja/docs/guides/alert-manager/alert-img/auto-recovery-1,2.png)

(2) 自動復旧ゾーンの[編集]アイコンをクリックします。

![auto-recovery-2](/ja/docs/guides/alert-manager/alert-img/auto-recovery-1,2.png)

(3) 実行したい自動復旧設定を選択します。

![auto-recovery-3](/ja/docs/guides/alert-manager/alert-img/auto-recovery-3.png)

(4) [確認]ボタンをクリックして自動復旧設定を完了します。
