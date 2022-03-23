---
title: "Developer Guide"
linkTitle: "Developer Guide"
weight: 1
date: 2021-08-04
description:
    Developer Guide
no_list: true
---

Plugin 은 Protobuf 를 사용하는 어떤 언어로도 개발 가능하다.  
Micro Service 와 Plugin 통신은 모두 Protobuf 를 기본으로 사용하기 때문이다. 기본적인 구조는 gRPC interface 를 사용한 서버 개발 과정과 동일한 방식이다. 
<br><br>
Plugin 개발시 어떤 언어로든 (gRPC interface 가 사용 가능한 모든 언어) 개발이 가능하지만,  
우리가 제공하는 Python Framework 를 사용한다면 더욱 손쉽게 개발 가능하다.  
현재 기본적으로 제공되는 Plugin 들 모두 Python 기반의 자체 개발된 Framework 를 기반으로 개발되었다.
<br><br>
Framework 에 대한 기본적인 사용 방법에 대해서는 다음을 참고한다.
<br><br>

다음은, Plugin 개발시 기본적으로 확인해야 하는 개발 요건 사항이며, 각 페이지에서 단계별 상세 사항을 확인 가능하다.



