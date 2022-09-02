---
title: "通知チャンネル"
linkTitle: "通知チャンネル"
weight: 3
date: 2022-06-23
description: >
    **通知チャンネル**は、クラウドフォレのモニタリングシステムや予算サービスで発生するさまざまなアラート、イベント、またはクラウドフォレ自体の通知などを受信して確認できるサービスです。
---

## 通知を作成する
[マイページ > 通知チャンネル]ページには、各プロトコルに該当する[チャンネル追加]ボタンがあります。

![notification-channel-01](/jp/docs/guides/my-page/notification-channel-img/notification-channel-01.png)

[チャンネル追加]ボタンをクリックすると、下のようなページへ移動します。基本情報の入力フォームはプロトコルによって異なり、チャンネル名、通知スケジュール、購読するトピック選択欄のプロトコルはすべて同じです。

![notification-channel-02](/jp/docs/guides/my-page/notification-channel-img/notification-channel-02.png)

スケジュールは、「すべての時間」を選択した場合は、すべての時間に通知を受け取れます。「時間設定」を選択した場合は、受け取りたい曜日と時間を選択することができます。

![notification-channel-03](/jp/docs/guides/my-page/notification-channel-img/notification-channel-03.png)

トピックまたは「すべての通知を受け取る」を選択することもでき、「Alert」と「Budget」のうち選択したトピックの通知のみを受け取ることもできます。

![notification-channel-04](/jp/docs/guides/my-page/notification-channel-img/notification-channel-04.png)

## 作成した通知チャンネルを確認する
入力フォームをすべて埋めて通知チャンネルを作成すると、次のように新しく作成されたチャンネルを確認できます。

![notification-channel-created-01](/jp/docs/guides/my-page/notification-channel-img/notification-channel-created-01.png)

## 通知チャンネルを編集する
作成した通知は、一覧ですぐに編集できます。

入力したデータ編集が可能なプロトコルの場合は、(ex.SMS、Voice Call)データ、チャンネル名、スケジュール、トピックをすべて修正できます。
データ編集できないプロトコル(ex.Slack、Telegram)は、[編集]ボタンが無効化状態です。

![notification-channel-edit-01](/jp/docs/guides/my-page/notification-channel-img/notification-channel-edit-01.png)
