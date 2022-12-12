---
title: "[Asset inventory] collector"
linkTitle: "[Asset inventory] collector"
weight: 3
date: 2022-07-05
description: > 
    Cloudforet can collect cloud resources in use by each **Cloud provider** through a collector plugin.
---

## Overview

Cloudforet can collect cloud resources in use by each [Cloud provider](/docs/guides/asset-inventory) through a collector plugin.  
For a list of collectors currently supported by Cloudforet, see the **Plugin support list** below.


First, to use the collector plugin, you must register a [Service account](/docs/guides/asset-inventory/service-account).  
However, since the **ways for registering a service account registration are different** for each cloud provider such as AWS, Google Cloud, Azure, etc.,  
see the **Setup guide link** in the plugin support list below for detailed settings.

## Plugin support list

| **Plugins** | **Setup guide link** |
| --- | --- |
| AWS Cloud Services collector | https://github.com/cloudforet-io/plugin-aws-cloud-service-inven-collector/blob/master/docs/ko/GUIDE.md |
| AWS EC2 Compute collector | https://github.com/cloudforet-io/plugin-aws-ec2-inven-collector/blob/master/docs/ko/GUIDE.md |
| AWS Personal Health Dashboard collector |https://github.com/cloudforet-io/plugin-aws-phd-inven-collector/blob/master/docs/ko/GUIDE.md|
| AWS Trusted Advisor collector | https://github.com/cloudforet-io/plugin-aws-trusted-advisor-inven-collector/blob/master/docs/ko/GUIDE.md|
| Azure Cloud collector |https://github.com/cloudforet-io/plugin-azure-inven-collector/blob/master/docs/ko/GUIDE.md|
| Google Cloud collector |https://github.com/cloudforet-io/plugin-google-cloud-inven-collector/blob/master/docs/ko/GUIDE.md|
| Monitoring Metric Collector of Collected Resources |https://github.com/cloudforet-io/plugin-monitoring-metric-inven-collector/blob/master/docs/ko/GUIDE.md|
