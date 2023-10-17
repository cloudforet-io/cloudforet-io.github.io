---
title: "予算"
linkTitle: "予算"
weight: 3
date: 2022-06-23
description: >
    **予算｝は、プロジェクト別にコスト発生基準を設定して予算を管理するサービスです。
---

## 予算を作成する
(1) [費用管理 > 予算]ページの画面右上にある[予算作成]ボタンをクリックします。

![budget-create-01](/ja/docs/guides/cost-explorer/budget-img/budget-create-01.png)

(2) 基本情報を入力する

![budget-create-02](/ja/docs/guides/cost-explorer/budget-img/budget-create-02.png)

(2-1) 予算の名前を入力します。

(2-2) 請求データソースを選択してください。

(2-3) ターゲット項目で予算管理の対象となるプロジェクトを選択します。

(2-4) 費用発生基準を選択します。費用発生基準を「すべて」に選択すると、当該プロジェクトと関連するすべての費用データを読み込みます。


(3) 予算計画を入力する

![budget-create-03](/ja/docs/guides/cost-explorer/budget-img/budget-create-03.png)

(3-1) 予算を管理する期間を決定します。

(3-2) 予算を管理する方法を選択します。

(3-3) 予算金額を設定します。先に「総予算設定」を選択した場合は総予算額、「月別予算設定」を選択した場合は月別予算額を入力します。

## 設定された予算と使用状況を確認する
予算ページでは、予算データの概要とプロジェクト別予算を一目で確認できます。上にあるフィルターを活用すると、期間指定または為替レート適用を実行でき、詳細検索を利用すると、特定プロジェクト名などを検索できます。

![budget-full-page-01](/ja/docs/guides/cost-explorer/budget-img/budget-full-page-01.png)

## 予算詳細ページ
予算詳細ページでは、作成された予算の詳細データを確認できます。

### 予算概要
[予算概要]では、月別予算と費用推移をチャートやデータで確認できます。

![budget-detail-01](/ja/docs/guides/cost-explorer/budget-img/budget-detail-01.png)

### 予算使用通知設定
[予算使用通知設定]では、一定基準以上の予算を使用した場合に通知を受け取るよう設定できます。予算金額を一定比率以上使用した場合、または費用が一定金額を超過した場合に、予め登録しておいた通知チャンネルで通知を受け取ることができます。

![budget-alert-01](/ja/docs/guides/cost-explorer/budget-img/budget-alert-01.png)

{{<alert>}}
通知を受信するためには、**通知チャンネル**が必要です。通知チャンネルに関する詳細については、[こちら](/ja/docs/guides/my-page/notification-channel/)をご参考にしてください。
{{</alert>}}
