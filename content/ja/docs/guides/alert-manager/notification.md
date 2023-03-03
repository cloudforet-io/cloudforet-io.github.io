---
title: "通知"
linkTitle: "通知"
weight: 7
date: 2022-06-07
description: >
    **通知**は、アラートを送信するための手段です。


    **通知チャンネル**では、アラートをどのユーザーに、どのように、いつ送信するのかなどを設定できます。
---

通知チャンネルはプロジェクトに依存し、プロジェクト詳細ページで管理できます。

![notification-full-page](/ja/docs/guides/alert-manager/notification-img/notification-full-page.png)

## 通知チャンネルを作成する

プロジェクト詳細ページの[通知]タブでは、**通知チャンネル作成と通知チャンネル有効化の可否**を管理できます。

**通知チャンネル**は、通知送信式やレベルなど体系的な受信者ゾーンを表す単位です。エスカレーションルールで設定したレベルに合わせて送信するようサポートします。
<br>
<br>
(1) プロジェクト詳細ページで[通知]タブを選択後、希望する通知チャンネルの[チャンネル追加]ボタンをクリックします。

![notification-step-1](/ja/docs/guides/alert-manager/notification-img/notification-step-1.png)

{{< alert title="" >}}
**CloudForet Userチャンネル**に関する詳細については、[こちら](/ja/docs/guides/alert-manager/notification/#クラウドフォレ-ユーザー-チャンネル)をご参考にしてください｡
{{< /alert >}}


(2) 通知作成ページで通知チャンネルを作成するための設定を入力します。

(2-1) チャンネル名や通知レベルなど、作成したい通知チャンネルに必要な基本情報を入力します。[チャンネル名]と[通知レベル]が基本設定フィールドで、それ以外はチャンネルによって入力情報が異なります。

{{<alert>}}
各 **通知プラグイン**に関する連動ガイドの詳細については、[こちら](/ja/docs/guides/plugins/alert-manager-notification/)をご参考にしてください｡
{{</alert>}}

![notification-step-2-1](/ja/docs/guides/alert-manager/notification-img/notification-step-2-1.png)

{{<alert title="通知レベル">}}
通知レベルは、アラート送信に対するルールを定義する[エスカレーションポリシー](/ja/docs/guides/alert-manager/escalation-policy/)と関連しています。 

![notification-escalation-menu](/ja/docs/guides/alert-manager/notification-img/notification-escalation-menu.png)

エスカレーションポリシーで指定された通知レベルを基準に、当該レベルに属する通知チャンネルにアラートを送信します。
{{</alert>}}

(2-2) スケジュールを設定して、特定時間にのみ通知を受信するよう設定できます。

![notification-step-2-2](/ja/docs/guides/alert-manager/notification-img/notification-step-2-2.png)

(2-3) 通知は、アラート発生時または予想通知基準に達すると受信できます。トピックを設定すると、受け取る通知を選択できます。
<br>
[すべての通知を受け取る]を選択した場合は2種類すべての通知、[選択したトピックの通知を受け取る]を選択した場合は選択した通知のみ受け取れます。

![notification-step-2-3](/ja/docs/guides/alert-manager/notification-img/notification-step-2-3.png)

(3) [保存]ボタンをクリックすると、通知チャンネルの作成が完了します。

{{<alert>}}
エスカレーションポリシーで設定したレベルがあっても、通知チャンネルが無効状態の場合は通知は発生しません。
{{</alert>}}

## 通知チャンネルを編集・削除する

### 通知チャンネルを編集する

作成した通知チャンネルは、各通知チャンネルの選択肢の下で確認できます。

![update-notification-channel-1](/ja/docs/guides/alert-manager/notification-img/update-notification-channel-1.png)

画面左上のトグルボタンで有効化・無効化状態を変更でき、通知チャンネルの[編集]ボタンをクリックすると、各々の項目を編集できます。
<br>
作成完了後に[変更事項を保存]ボタンをクリックすると、編集が完了します。

![update-notification-channel-2](/ja/docs/guides/alert-manager/notification-img/update-notification-channel-2.png)

### 通知チャンネルを削除する
画面右上の[削除]アイコンをクリックすると、通知チャンネルを削除できます。

![delete-notification-channel](/ja/docs/guides/alert-manager/notification-img/delete-notification-channel.png)

## クラウドフォレユーザーチャンネル

プロジェクトの[通知チャンネル]項目には、[Cloudforet Userのチャンネル追加]ボタンがあります。

![cloud-foret-user-channel-1](/ja/docs/guides/alert-manager/notification-img/cloud-foret-user-channel-1.png)

クラウドフォレユーザーチャンネルを追加すると、プロジェクトメンバーの個人チャンネルへアラートが送信されます。それ以降は、受信したユーザーの **クラウドフォレユーザー通知チャンネル**を通じてアラートが送信されます。

![cloud-foret-user-channel-2](/ja/docs/guides/alert-manager/notification-img/cloud-foret-user-channel-2.png)


### クラウドフォレユーザー通知チャンネルを作成する

ユーザー通知チャンネルは、[マイページ > 通知チャンネル]で作成できます。

![create-user-channel](/ja/docs/guides/alert-manager/notification-img/create-user-channel.png)

プロジェクト通知チャンネルの作成とは違って**通知レベルの設定なし**、それ他の作成手順は、[プロジェクト通知チャンネルを作成する](/ja/docs/guides/alert-manager/notification/#通知-チャンネル-作成する)と同じです。

