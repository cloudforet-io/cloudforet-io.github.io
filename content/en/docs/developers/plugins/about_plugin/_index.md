---
title: "About Plugin"
linkTitle: "About Plugin"
weight: 1
date: 2021-08-04
description: >
    Concept of Plugin Interface

---

## About Plugin
A plugin is a software add-on that is installed on a program, enhancing its capabilities.<br> 
The Plugin interface pattern consists of two types of architecture components: a **core system** and **plug-in modules**. Application logic is divided between independent plug-in modules and the basic core system, providing *extensibility, flexibility, and isolation of application features and custom processing logic*

## Why Cloudforet use a Plugin Interface
* Cloudforet wants to accommodate various clouds on one platform. : Multi-Cloud / Hybrid Cloud / Anything<br>
* We want to be with Cloudforet not only in the cloud, but also in various IT solutions.
* We want to become a platform that can contain various infrastructure technologies.
* It is difficult to predict the future direction of technology, but we want to be a flexible platform that can coexist in any direction.

## Integration Endpoints

| Micro Service | Resource  | Description |
| ---           | ---       | ---         |
| Identity      | Auth      | Support Single Sign-On for each specific domain<br> ex) OAuth2, ActiveDirectory, Okta, Onelogin |
| Inventory     | Collector | Any Resource Objects for Inventory<br> ex) AWS inventory collector |
| Monitoring    | DataSource | Metric or Log information related with Inventory Objects<br> ex) CloudWatrch, StackDriver ... |
| Monitoring    | Webhook   | Any Event from Monitoring Solutions<br> ex) CPU, Memory alert ... |
| Notification  | Protocol  | Specific Event notification<br> ex) Slack, Email, Jira ... |

