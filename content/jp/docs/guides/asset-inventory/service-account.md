---
title: "サービスアカウント"
linkTitle: "サービスアカウント"
weight: 5
date: 2022-10-12
description: >
    **サービスアカウント**では、各クラウドサービスのアカウントを手軽に統合・管理・追跡することができます。
---

## サービスアカウントを追加する

`General Account`,`Trusted Account`2つのタイプのアカウントが作成できます。	

{{<alert>}}
- __`General Account`__ :
    
  - オプション1）個別暗号化キーでアカウントを直接登録することができます。	
    
  - オプション2) 既存の`Trusted Account`の暗号化キーを接続して登録することができます。	
    
  - オプション3）状況によって、別途の暗号化キーなしでも新規アカウントを作成することができます。	
    
- __`Trusted Account`__:
    
  - `General Account`とアタッチできる`Trusted Account`を作成することができます。
  
  - アタッチされたTrustedAccountの暗号化キーはGeneralAccountがリソースにアクセスするとき参照されます。
{{</alert>}}


### General Accountを作成する

(1) [アセットインベントリー > サービスアカウント]ページで追加するクラウドサービスを選択します。

![service-account-provider-menu](/jp/docs/guides/getting-started/service-account-img/service-account-provider-menu-2.png)

(2) [追加]ボタンをクリックします。

![service-account-add-button](/jp/docs/guides/getting-started/service-account-img/service-account-add-button.png)

(3) サービスアカウントの作成フォームを作成します。

(3-1) `General Account`を選択します。	

![service-account-select-general-accout](/jp/docs/guides/asset-inventory/service-account-img/service-account-select-general-accout.png)

(3-2) 基本情報を入力します。

![service-account-add-base-info](/jp/docs/guides/getting-started/service-account-img/service-account-add-base-info.png)

(3-3) 当該サービスアカウントに従ってリソースを収集するプロジェクトを指定します。

![service-account-connect-project](/jp/docs/guides/getting-started/service-account-img/service-account-connect-project.png)

(3-4) 暗号化キーの情報を入力します。

- オプション1）個別暗号化キーでアカウントを直接登録することができます。	
![service-account-add-key-1-1](/jp/docs/guides/getting-started/service-account-img/service-account-add-key-1-1.png)
    
- オプション2) 既存の`Trusted Account`の暗号化キーを接続して登録することができます。
 > AWSの場合、既存の`Trusted Account`をアタッチすることで簡単にAssume Roleを作成することができます。特定の`Trusted Account`を選択すると、その情報が自動的に適用されますので、残りの情報を入力するだけで良いです。
![service-account-add-key-1-2](/jp/docs/guides/getting-started/service-account-img/service-account-add-key-1-2.png)	
    
- オプション3）状況によって、別途の暗号化キーなしでも新規アカウントを作成することができます。
![service-account-add-key-1-3](/jp/docs/guides/getting-started/service-account-img/service-account-add-key-1-3.png)	


(4) [保存]ボタンをクリックすると完了します。



### Trusted Accountを作成する

(1) [アセットインベントリー > サービスアカウント]ページで追加するクラウドサービスを選択します。

![service-account-provider-menu](/jp/docs/guides/getting-started/service-account-img/service-account-provider-menu.png)

(2) [追加]ボタンをクリックします。

![service-account-add-button](/jp/docs/guides/getting-started/service-account-img/service-account-add-button.png)

(3) サービスアカウントの作成フォームを作成します。

(3-1) `Trusted Account`を選択します。	

![service-account-select-general-accout](/jp/docs/guides/asset-inventory/service-account-img/service-account-select-general-accout.png)

(3-2) 基本情報を入力します。

![service-account-add-base-info-2-2](/jp/docs/guides/getting-started/service-account-img/service-account-add-base-info-2-2.png)

(3-3) 当該サービスアカウントに従ってリソースを収集するプロジェクトを指定します。

![service-account-connect-project](/jp/docs/guides/getting-started/service-account-img/service-account-connect-project.png)

(3-4) 暗号化キーの情報を入力します。

![service-account-add-key-2-2](/jp/docs/guides/getting-started/service-account-img/service-account-add-key-2-2.png)

(4) [保存]ボタンをクリックすると完了します。


## サービスアカウントを照会	

作成されたサービスアカウントの一覧表を照会することができ、特定アカウントをクリックすると詳細情報を確認することができます。	

![service-account-view-list](/jp/docs/guides/asset-inventory/service-account-img/service-account-view-list.png)


## サービスアカウントを編集		

![service-account-detail-page](/jp/docs/guides/asset-inventory/service-account-img/service-account-detail-page.png)

### 各項目の内容を編集する

「編集」ボタンを押して各項目の内容を編集することができます。

![service-account-edit-btn](/jp/docs/guides/asset-inventory/service-account-img/service-account-edit-btn.png)
![service-account-edit](/jp/docs/guides/asset-inventory/service-account-img/service-account-edit.png)


## サービスアカウントを削除	

リストから削除したいサービスアカウントを選択します。	

削除アイコンボタンをクリックすると、該当するサービスアカウントを削除することができます。

![service-account-delete-btn](/jp/docs/guides/asset-inventory/service-account-img/service-account-delete-btn.png)

サービスアカウントが`Trusted Account`タイプで、複数の`General Account`にアタッチされている場合は削除することができません	。

![service-account-cannot-delete](/jp/docs/guides/asset-inventory/service-account-img/service-account-cannot-delete.png)
