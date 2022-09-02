---
title: "アクセス設定(API & CLI)"
linkTitle: "アクセス設定(API & CLI)"
weight: 2
date: 2022-06-23
description: >
    Space  ONEに接続するための認証キーである**APIキー**を作成すると、これを利用してプログラミングしたり、**CLI**を利用してコマンドでクラウドフォレをコントロールできます。
---

クラウドフォレが提供するコマンドラインツール[**Spacectl**](https://github.com/spaceone-dev/spacectl)を利用するためには、**APIキー**が必要です。

## APIキーを作成する

(1) [マイページ > アクセス設定(API & CLI)]ページで[API Key作成]ボタンをクリックすると、すぐにAPIキーが作成されます。

![apikey-create-01](/jp/docs/guides/my-page/access-with-api-cli-img/apikey-create-01.png)

(2) [もっと見る]ボタンをクリックすると、JSON形式のAPIキーとYAML形式のSpacectl環境設定ファイルの内容を確認してダウンロードできます。

![apikey-create-02](/jp/docs/guides/my-page/access-with-api-cli-img/apikey-create-02.png)

{{<alert title="APIキーを発行時の注意事項">}}
• APIキーは、作成時に一度だけ確認できます。

• APIキーは、1つのユーザーIDに対して2つまで発行できます。
{{</alert>}}

## APIキーを有効化・無効化する

発行されたAPIキーは、削除または有効化・無効化することができます。

(1) [作業]ドロップダウンで[有効化]または[無効化]メニューを選択します。

![apikey-enable-01](/jp/docs/guides/my-page/access-with-api-cli-img/apikey-enable-01.png)

(2) モダールウィンドウが表示されたら、[確認]ボタンをクリックします。

![apikey-enable-02](/jp/docs/guides/my-page/access-with-api-cli-img/apikey-enable-02.png)
![apikey-enable-03](/jp/docs/guides/my-page/access-with-api-cli-img/apikey-enable-03.png)

## APIキーを削除する

(1) [作業]ドロップダウンで[削除]メニューを選択します。

![apikey-delete-01](/jp/docs/guides/my-page/access-with-api-cli-img/apikey-delete-01.png)

(2) [APIキー削除]モダールウィンドウが表示されたら、[確認]ボタンをクリックします。 

![apikey-delete-02](/jp/docs/guides/my-page/access-with-api-cli-img/apikey-delete-02.png)
