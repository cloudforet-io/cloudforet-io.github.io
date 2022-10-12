---
title: "서비스 어카운트"
linkTitle: "서비스 어카운트"
weight: 5
date: 2022-10-12
description: >
   **서비스 어카운트**에서 각 클라우드 서비스의 계정들을 손쉽게 통합, 관리, 추적할 수 있습니다.
---

## 서비스 어카운트 생성하기

생성할 수 있는 어카운트 타입은 `General Account`, `Trusted Account` 두 가지로 나뉩니다. 

{{<alert>}}
- __`General Account`__ :
    
  - 옵션 1) 개별 암호화 키를 통해 어카운트를 직접 등록할 수 있습니다. 

  - 옵션 2) 존재하는 `Trusted account`의 암호화키를 연결하여 등록할 수 있습니다. 

  - 옵션 3) 상황에 따라, 별도의 암호화 키 없이도 신규 어카운트를 생성할 수 있습니다.
    

- __`Trusted Account`__:
    
  - `General Account`와 연결 가능한 `Trusted Account`를 생성할 수 있습니다.

  - 연결된 `Trusted Account`의 암호화 키는 `General Account`에 접근 시 참조하여 활용됩니다.
{{</alert>}}


### General Account 생성하기

(1) [에셋 인벤토리 > 서비스 계정] 페이지에서 추가할 클라우드 서비스를 선택합니다.

![service-account-provider-menu](/ko/docs/guides/asset-inventory/service-account-img/service-account-provider-menu-2.png)

(2) [추가] 버튼을 클릭합니다.

![service-account-add-button](/ko/docs/guides/asset-inventory/service-account-img/service-account-add-button.png)

(3) 서비스 계정 생성 폼을 작성합니다.

(3-1) `General Account`를 선택합니다. 

![service-account-select-general-accout](/ko/docs/guides/asset-inventory/service-account-img/service-account-select-general-accout.png)

(3-2) 기본 정보를 입력합니다.

![service-account-add-base-info](/ko/docs/guides/asset-inventory/service-account-img/service-account-add-base-info.png)

(3-3) 해당 서비스 계정에 따른 리소스를 수집할 프로젝트를 지정합니다.

![service-account-connect-project](/ko/docs/guides/asset-inventory/service-account-img/service-account-connect-project.png)

(3-4) 암호화 키 정보를 입력합니다.

- 암호화 키 입력 옵션 1) 개별 암호화 키를 통해 어카운트를 직접 등록할 수 있습니다. 
![service-account-add-key-1-1](/ko/docs/guides/asset-inventory/service-account-img/service-account-add-key-1-1.png)

- 암호화 키 입력 옵션 2) 존재하는 `Trusted account`의 암호화키를 연결하여 등록할 수 있습니다. 
 - AWS의 경우, 기존에 `Trusted Account`가 있다면 이를 연결하여 Assume Role을 쉽게 생성할 수 있습니다. 특정 `Trusted Account`를 연결하게 되면 해당 어카운트에 입력된 키값들이 자동 적용되며, 그외 나머지 항목 입력이 필요합니다.
![service-account-add-key-1-2](/ko/docs/guides/asset-inventory/service-account-img/service-account-add-key-1-2.png)

- 암호화 키 입력 옵션 3) 상황에 따라, 별도의 암호화 키 없이도 신규 어카운트를 생성할 수 있습니다.
![service-account-add-key-1-3](/ko/docs/guides/asset-inventory/service-account-img/service-account-add-key-1-3.png)


(4) [저장] 버튼을 클릭하여 완료합니다.



### Trusted Account 생성하기

(1) [에셋 인벤토리 > 서비스 계정] 페이지에서 추가할 클라우드 서비스를 선택합니다.

![service-account-provider-menu](/ko/docs/guides/asset-inventory/service-account-img/service-account-provider-menu-2.png)

(2) [추가] 버튼을 클릭합니다.

![service-account-add-button](/ko/docs/guides/asset-inventory/service-account-img/service-account-add-button.png)

(3) 서비스 계정 생성 폼을 작성합니다.

(3-1) `Trusted Account`를 선택합니다. 

![service-account-select-trusted-accout](/ko/docs/guides/asset-inventory/service-account-img/service-account-select-trusted-accout.png)

(3-2) 기본 정보를 입력합니다.

![service-account-add-base-info-2-2](/ko/docs/guides/asset-inventory/service-account-img/service-account-add-base-info-2-2.png)

(3-3) 해당 서비스 계정에 따른 리소스를 수집할 프로젝트를 지정합니다.

![service-account-connect-project](/ko/docs/guides/asset-inventory/service-account-img/service-account-connect-project.png)

(3-4) 암호화 키 정보를 입력합니다.

![service-account-add-key-2-2](/ko/docs/guides/asset-inventory/service-account-img/service-account-add-key-2-2.png)

(4) [저장] 버튼을 클릭하여 완료합니다.



## 서비스 어카운트 조회하기

생성된 서비스 어카운트 전체 목록을 조회 할 수 있으며, 특정 어카운트를 클릭시 상세페이지에 진입할 수 있습니다.

![service-account-view-list](/ko/docs/guides/asset-inventory/service-account-img/service-account-view-list.png)



## 서비스 어카운트 편집하기

편집하고자 하는 서비스 어카운트 페이지에 진입합니다.

![service-account-detail-page](/ko/docs/guides/asset-inventory/service-account-img/service-account-detail-page.png)


### 항목별 내용 편집하기

각각의 항목별 [수정] 버튼을 눌러 해당 내용을 변경할 수 있습니다. 

![service-account-edit-btn](/ko/docs/guides/asset-inventory/service-account-img/service-account-edit-btn.png)
![service-account-edit](/ko/docs/guides/asset-inventory/service-account-img/service-account-edit.png)



## 서비스 어카운트 삭제하기

삭제하고자 하는 서비스 어카운트 페이지에 진입합니다.

삭제 아이콘 버튼을 통해 해당 서비스 어카운트를 삭제할 수 있습니다. 

![service-account-delete-btn](/ko/docs/guides/asset-inventory/service-account-img/service-account-delete-btn.png)

만약, 해당 서비스 어카운트가 `Trusted Account` 타입 이고, 1개 이상의 다른 `General Account`가 이를 연결해둔 상태라면 삭제가 불가합니다.

![service-account-cannot-delete](/ko/docs/guides/asset-inventory/service-account-img/service-account-cannot-delete.png)

