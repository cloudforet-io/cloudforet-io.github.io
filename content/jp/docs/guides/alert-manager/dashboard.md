---
title: "ダッシュボード"
linkTitle: "ダッシュボード"
weight: 2
date: 2022-06-07
description: >
    現在ログインされたユーザーに発生したアラートをひと目で確認できるダッシュボードです。
---

以下のとおり、大きく3つのパートでアラートを確認できます。

## 状態別にアラートを確認する

ダッシュボードの画面最上部では、アラートを[状態別](/jp/docs/guides/alert-manager/alert/#状態)に確認できます。
<br>
各項目をクリックすると、[アラート詳細ページ](/jp/docs/guides/alert-manager/alert/#アラート-確認する)へ移動して、詳細情報を確認したり詳細設定を実行することができます。

![view-alert-by-status](/jp/docs/guides/alert-manager/dashboard-img/view-alert-by-status.png)

## アラートヒストリー

[プロジェクト](/jp/docs/guides/project/project/)で発生したアラート履歴が表示されます。.
<br>
チャートでは日別データを確認でき、カードでは前月比アラートの増減量を確認できます。

![alert-history-1](/jp/docs/guides/alert-manager/dashboard-img/alert-history-1.png)

## プロジェクト状態ボード

[プロジェクト状態ボード]には、ユーザーと関連する各プロジェクトのアラート情報が表示されます。

[Top 5プロジェクト活動]では、[オープン]状態のアラートが多い順にプロジェクトを表示します。

![project-board-1](/jp/docs/guides/alert-manager/dashboard-img/project-board-1.png)

検索ウィンドウの下には、アラートが発生したプロジェクトが活動の高い順に表示されます。
<br>
「イシュー」状態のプロジェクトのみ表示され、すべてのアラートが「完了」状態になると「正常」状態のプロジェクトに変更され、ダッシュボードで非表示になります。

![project-board-2](/jp/docs/guides/alert-manager/dashboard-img/project-board-2.png)

