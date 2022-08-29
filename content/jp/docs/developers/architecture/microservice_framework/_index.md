---
title: "Micro Service Framework"
linkTitle: "Micro Service Framework"
weight: 1
date: 2021-08-04
description: >
    SpaceONE Deep Dive

---

## SpaceONE Architecture
The SpaceONE consists of a micro service architecture based on identity and inventory. Each micro services provides a plugin interface for flexibility of implementation. 
![](/docs/developers/architecture/microservice_framework/img/spaceone_msa_architecture.png)

## SpaceONE Backend Software Framework
The SpaceONE development team has created our own S/W framework like Python Django or Java Spring.
![](/docs/developers/architecture/microservice_framework/img/spaceone_sw_architecture.png)
SpaceONE S/W Framework provides software framework for implementing business logic. Each business logic can present its services in various way like gRPC interface, REST interface or periodic task.

| Layer | Descrption | Base Class | Implementation Directory 
| ---       | ---        | ---        | ---                      | ---     |
| Interface | Entry point of Service request | core/api.py | ***project***/interface/***interface type***/ | 
| Handler | Pre, Post processing before Service call |     |    |
| Service | Business logic of service | core/service.py  | ***project***/service/    |
| Cache | Caching for manager function(optional) | core/cache/  |     |    |
| Manager | Unit operation for each service function | core/manager.py  | ***project***/manager/    |
| Connector | Interface for Data Source(ex. DB, Other micro services) |  |     |

## Backend Server Type

Based on ***Interface*** type, each micro service works as

| Interface type | Description |
| ---            | ---         |
| gRPC server    | gRPC based API server which is receiving requests from console or spacectl client  |
| rest server    | HTTP based API server, usually receiving requests from external client like grafana  |
| scheduler server | Periodic task creation server, for example collecting inventory resources at every hour    |
| worker server    | Periodic task execution server which requests came from scheduler server |

