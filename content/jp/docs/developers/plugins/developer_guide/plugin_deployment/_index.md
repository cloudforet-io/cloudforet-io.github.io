---
title: "Plugin Deployment"
linkTitle: "Plugin Deployment"
weight: 3
date: 2021-08-04
description: Plugin Deployment

---
To actually deploy and use the registered plugin, you need to deploy a pod in the Kubernetes environment based on the plugin image.
At this time, plugin distribution is automatically performed in the service that wants to use the plugin.
<br><br>
For example, in the case of Notification, an object called Protocol is used to deliver the generated Alert to the user.
At that time, Protocol.create action ([Protocol.create](https://spaceone-dev.gitbook.io/spaceone-apis/notification/v1/protocol#create)) triggers installing Notification automatically.
<br><br>

The example below is an example of the Protocol.create command parameter for creating a Slack Protocol to send an alarm to Slack in Notification.

~~~yaml
---
name: Slack Protocol
plugin_info:
  plugin_id: plugin-slack-notification-protocol_settings
  version: "1.0"
  options: {}
  schema: slack_webhook
tags:
  description: Slack Protocol
~~~

In plugin_id, put the ID value of the plugin registered in the Repository,
In version, put the image tag information written when uploading the actual image to an image repository such as Dockerhub.
If there are multiple tags in the image repository, the plugin is distributed with the image of the specified tag version.
<br><br>
In the above case, because the version was specified as "1.0"
It is distributed as a "1.0" tag image among the tag information below.
<br><br>

![](/docs/developers/plugins/developer_guide/developer_guide_img/dockerhub_slack_protocol.png)

<br><br>
In the case of the API, it takes some time to respond because it goes through the steps of creating and deploying a Service and a Pod in the Kubernetes environment.
If you check the pod deployment in the actual Kubernetes environment, you can check it as follows.

~~~bash
> k get po
NAME                                                              READY   STATUS    RESTARTS   AGE
plugin-slack-notification-protocol_settings-zljrhvigwujiqfmn-bf6kgtqz   1/1     Running   0          1m
~~~







