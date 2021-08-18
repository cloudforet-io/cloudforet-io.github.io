---
title: "gRPC Interface 확인"
linkTitle: "gRPC Interface 확인"
weight: 1
date: 2021-08-04
description: 

---

먼저, 개발하고자 하는 Plugin 과 Core 서비스 간의 Interface 를 확인한다. 
interface 는 각각의 서비스 마다 구조가 다르다. 이에 대한 gRPC interface 정보는 API 문서에서 확인 가능하다.   
(https://spaceone-dev.gitbook.io/spaceone-apis)  

예를 들어 Identity 의 인증 용 Auth Plugin 을 개발한다고 가정해보자.
이때, Auth Plugin 의 Interface 정보를 확인해 보면 아래와 같다.   
(https://spaceone-dev.gitbook.io/spaceone-apis/identity/plugin/auth )

![](/docs/plugins/developer_guide/developer_guide_img/identity_auth_api.png)


Identity 의 Auth Plugin 개발을 위해서는 총 4개의 API interface 를 구현해야 한다.  
이 중, init 과 verify 는 모든 Plugin 이 동일하게 필요로 하는 inteface 이며,   
나머지는 각각의 Plugin 마다 특성에 따라 다르다.  

#### 1. init
Plugin 초기화.  
Identity 의 경우 Domain 을 생성 할 때, 어떤 인증을 사용할지를 결정해야 하며 관련된 Auth Plugin 을 배포하게 된다.  
최초 Plugin 배포시 (또는 Plugin 버전 업데이트시) Plugin 컨테이너가 생성 완료된 후 Core 서비스는 Plugin 에 init API 를 호출하게 된다.  
이때, Plugin 은 Core 서비스가 Plugin 과 통신시 필요로 하는 metadata 정보를 반환하게 된다.  
metadata 에 대한 정보는 Core 서비스 별로 다르다.


#### 2. verify
Plugin 정상 동작 확인.
Plugin 이 배포된 후, init API 호출 이후에는 plugin 이 동작 실행 준비가 완료되었는지 확인 절차를 거치는데 이때 호출되는 API 가 verify 이다.  
verify 단계에는 Plugin 이 정상적인 동작 수행 준비가 되었는지 확인하는 절차를 확인한다.   

