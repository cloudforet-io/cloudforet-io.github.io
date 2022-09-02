---
title: "ユーザー管理期間"
linkTitle: "ユーザー管理期間"
weight: 6
date: 2022-06-07
description: >
    定期・非定期なシステム作業期間内に発生する[アラート](/jp/docs/guides/alert-manager/alert/)に対しては、[通知](/jp/docs/guides/alert-manager/notification/)送信を遮断する必要があります。
    <br>
    **ユーザー管理期間**を設定すると、当該期間中は通知が発生しないよう遮断することができます。

---


維持管理期間はプロジェクトに依存し、プロジェクト詳細ページで管理できます。

![maintenance](/jp/docs/guides/alert-manager/maintenance-img/maintenance.png)



## 維持管理期間を作成する

(1) プロジェクト詳細ページの画面右上にある[維持管理期間作成]ボタンをクリックします。

![create-maintenance-window-1](/jp/docs/guides/alert-manager/maintenance-img/create-maintenance-window-1.png)

(2) 維持管理期間の[タイトル]を入力して、アラート発生を制限するスケジュールを設定します。

![create-maintenance-window-2-1](/jp/docs/guides/alert-manager/maintenance-img/create-maintenance-window-2-1.png)

スケジュールを指定時に、今すぐ開始、または予定された時間に開始するよう設定できます。
<br>
今すぐ開始を希望する場合は、[今すぐ開始して終了]オプションを、予定された作業日程を登録する場合は、[予定された時間に開始する]オプションを選択してください。

![create-maintenance-window-2-2](/jp/docs/guides/alert-manager/maintenance-img/create-maintenance-window-2-2.png)


(3) [確認]ボタンをクリックすると、作成が終了します。



## 維持管理期間を編集する

終了していない維持管理期間のみ編集できます。

(1) プロジェクト詳細ページの[アラート]タブの下にある[維持管理期間]タブを選択します。

(2) 編集したい対象を選択して、[編集]ボタンをクリックします。

![update-maintenance-window-1](/jp/docs/guides/alert-manager/maintenance-img/update-maintenance-window-1.png)


(3) 希望する項目を変更後に[確認]ボタンをクリックすると完了します。

![update-maintenance-window-2](/jp/docs/guides/alert-manager/maintenance-img/update-maintenance-window-2.png)


## 維持管理期間を終了する

(1) プロジェクト詳細ページの[アラート]タブの下にある[維持管理期間]タブを選択します。

(2) 編集する対象を選択して[終了]ボタンをクリックすると終了します。

![delete-maintenance-window](/jp/docs/guides/alert-manager/maintenance-img/delete-maintenance-window.png)

