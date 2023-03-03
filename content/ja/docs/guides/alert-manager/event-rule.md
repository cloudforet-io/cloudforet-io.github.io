---
title: "イベントルール"
linkTitle: "イベントルール"
weight: 5
date: 2022-06-07
description: >
    **イベントルール**を設定すると、アラート発生時に指定された作業が自動的に行われ、アラートの手作業管理の煩わしさを軽減させることができます。
---


イベントルールは、プロジェクトに依存しており、プロジェクト詳細ページで管理でききます。

![event-rule-full-page](/ja/docs/guides/alert-manager/event-rule-img/event-rule-full-page.png)

## イベントルールを作成する

(1) プロジェクト詳細ページの[アラート]タブ内の[設定]タブで、イベントルールの[編集]アイコンをクリックします。

![create-event-rule-1](/ja/docs/guides/alert-manager/event-rule-img/create-event-rule-1.png)

(2) [イベントルール追加]ボタンをクリックします。

![create-event-rule-2](/ja/docs/guides/alert-manager/event-rule-img/create-event-rule-2.png)

(3) イベントルールページで希望する設定値を入力します。

![create-event-rule-3](/ja/docs/guides/alert-manager/event-rule-img/create-event-rule-3.png)

(3-1) 受信したアラートに対して追加作業を実行する条件を設定します。

条件は必ず1個以上作成する必要があり、画面右の[追加]ボタンをクリックして条件を追加したり、[削除]アイコンをクリックして削除することができます。

![create-event-rule-3-1](/ja/docs/guides/alert-manager/event-rule-img/create-event-rule-3-1.png)


(3-2) 上記で定義した条件と一致するアラートに対して実行する作業を指定します。

![create-event-rule-3-2](/ja/docs/guides/alert-manager/event-rule-img/create-event-rule-3-2.png)


#### イベントルール設定リスト

| 属性            | 説明                                                                                                                                                                     |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 通知中止         | 当該条件のアラートに対する[通知](/ja/docs/guides/alert-manager/notification/)を発生させない                                                                                             |
| プロジェクトルーティング      | 当該条件のアラートを、現在のプロジェクトではなくプロジェクトルーティングに選択されたプロジェクトが受信 (現在のプロジェクトにはアラートが作成されない)                                                                                                |
| プロジェクトの依存性      | 当該条件のアラートは、プロジェクトの依存性に登録されたプロジェクトが参照することができます。                                                                                                                            |
| 緊急度           | 当該条件のアラートに自動で緊急度を指定する<br/>高、低、未設定を指定でき、未設定の場合は以下のルールに従って設定される<br/>• 外部モニタリングアラート: [個体の緊急度](/ja/docs/guides/alert-manager/alert/#緊急度)<br/>• 直接作成: 高(基本値) |
| 担当者           | 当該条件のアラートに担当者を自動指定する                                                                                                                                               |
| 追加受信先        | 当該条件のアラートに対して[通知](/ja/docs/guides/alert-manager/notification/)が発生した場合、指定されたユーザーにも通知を送信する                                                                            |
| 追加情報         | 当該条件のアラートに自動で情報を追加する                                                                                                                                                |
| その後、作業は停止する | このイベントルールが実行された場合、その後のイベントルールは無視する ([イベントルールの作動方法と順序](/ja/docs/guides/alert-manager/event-rule/#イベント-ルール-作動-方法と-順序)ご参考)                                               |


## イベントルールを編集する

(1) イベントルールページで[編集]ボタンをクリックします。

![update-event-rule-1](/ja/docs/guides/alert-manager/event-rule-img/update-event-rule-1.png)

(2) イベントルールで希望する設定値を入力します。

![update-event-rule-2](/ja/docs/guides/alert-manager/event-rule-img/update-event-rule-2.png)

(3) [保存]ボタンをクリックすると、イベントルールの編集が完了します。






## イベントルールを削除する

(1) イベントルールページで[削除]ボタンをクリックします。

![delete-event-rule-1](/ja/docs/guides/alert-manager/event-rule-img/delete-event-rule-1.png)

(2) [イベントルール削除]モダールウィンドウで[確認]ボタンをクリックして削除を完了します。

![delete-event-rule-2](/ja/docs/guides/alert-manager/event-rule-img/delete-event-rule-2.png)





## イベントルールの作動方法と順序

アラート発生時にユーザーが設定したイベントルールがある場合、順次に実行されます。

![event-working-system](/ja/docs/guides/alert-manager/event-rule-img/event-working-system.png)

上の例のように、イベントルールが作成されている場合、最上位にあるイベントルールから[#1]、[#2]の順に実行されます。
<br>
[↑]、[↓]イベントボタンをクリックすると、イベントルールの順序を容易に変更できます。

{{<alert>}}
イベントルールを作成時に[今後は作業を実行しない]を選択すると、当該イベントルールより優先順位の低いイベントルールは実行されません。
{{</alert>}}
