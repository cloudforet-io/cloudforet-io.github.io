---
title: "Inventory Collector"
linkTitle: "Inventory Collector"
weight: 1
date: 2024-06-07
description: >
    This page explores how to collect Cloud Resources"
listed_on_entry: true
no_list: true
---

## How to collect

When user create a collect API call, the collecting task is created, then pushed the queue. Inventory Worker patches the task then execute the task, which is collecting the resources from the plugin.

![collect](collector_step01.png)

## Collecting Manager

![collect](collector_step02.png)
