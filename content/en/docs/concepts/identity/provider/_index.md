---
title: "Provider & Service Accounts"
linkTitle: "Provider & Service Accounts"
weight: 1
date: 2024-06-18
description: >
    A provider is the overarching entity that offers resources, within which multiple service accounts exist. These service accounts are used to securely and efficiently access the resources provided by the provider.Concept of Provider and Service Accounts
---

![concept](provider_serviceaccounts.png)

## User Experience: Console

![console](provider_example_01.png)

## Provider

In the context of Cloudforet, a provider is a top-level entity that groups a range of resources. Providers can include cloud providers like Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure, as well as any entity that groups together like software_licence.

## Service Account

A service account functions as an identifier for a group of resources within a provider. This means that the service account is used as primary key for distinguishing a specific set of resources.

## API Reference

| Resource        | API Description                                           |
|-----------------|-----------------------------------------------------------|
| Provider        | https://cloudforet.io/api-doc/identity/v2/Provider/       |
| Service Account | https://cloudforet.io/api-doc/identity/v2/ServiceAccount/ |
| Schema          | https://cloudforet.io/api-doc/identity/v2/Schema/         |