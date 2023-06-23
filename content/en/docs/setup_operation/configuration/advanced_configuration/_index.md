---
title: "Advanced Configuration Guide"
linkTitle: "Advanced Configuration"
weight: 6
url_dash_board: "/docs/guides_v1/advanced_configuration"
date: 2021-07-31
description: >
    Advanced Configuration Guide of SpaceONE

---

## Title and Favicon

SpaceONE has default title and CI with Wanny favicon.

![](./img/spaceone_default_favicon.png)

But you can change them to your own title and favicon.

![](./img/spaceone_custom_favicon.png)

</br>

| Component   | File Path | Description |
| ---         | ---       | ---         |
| Title       | /var/www/title.txt | name of Title |
| Favicon     | /var/www/favicon.ico | favicon file |


Console supports the functionality of changing title and favicon.
The default values are in source code, but you can overwrite them when deploying pods.

</br>
This is an example value of console.yaml file.

~~~
  # favicon
  volumeMounts:
      application:
          - name: favicon
            mountPath: /var/www/title.txt
            subPath: title.txt
            readOnly: true
          - name: favicon-img
            mountPath: /var/www/favicon.ico
            subPath: favicon.ico
            readOnly: true


  volumes:
      - name: favicon
        configMap:
            name: favicon
      - name: favicon-img
        configMap:
            name: favicon-img
~~~

The actual values are from Kubernetes ConfigMap object. So you might have to change the value at ConfigMap or create a new one and mount it in your pod.

### Title

~~~
apiVersion: v1
kind: ConfigMap
metadata:
  name: favicon
  namespace: spaceone
data:
  title.txt: |
    KB One Cloud

~~~

### Favicon

~~~
apiVersion: v1
kind: ConfigMap
metadata:
  name: favicon-img
  namespace: spaceone
binaryData:
  favicon.ico: AAABAAEAAAAAAAEAIADxxxxxxx...

~~~

**_NOTE:_**  favicon.ico must be base64 encoded.

~~~
# cat favicon.ico | base64
~~~

## Corporate Identity

When you open SpaceONE page, you can see the default SpaceONE CI, logo and text.
You can change the default SpaceONE CI with your company CI.

### Login Page
![](/docs/setup_operation/advanced_configuration/img/spaceone_custom_ci.png)

### Every Page
![](/docs/setup_operation/advanced_configuration/img/spaceone_custom_ci2.png)

Update helm value of console (console -> production_json -> DOMAIN_IMAGE)

keyword: ***DOMAIN_IMAGE***

| Configuration 	| Description | Format |
| ---           	|  ---         | ---   |
| CI_LOGO     		| Custom Logo Image | Image (56 * 56 px) |
| CI_TEXT_WITH_TYPE 	| CI Text Image | Image (164 * 40 px) |
| SIGN_IN 		| Sign-in page Image | Image (1024 * 1024 px) |
| CI_TEXT           	| CI Text Image On every page | Image (123 * 16 px)  |


**_NOTE:_**  Recommended file format is SVG. But if you would like to use a PNG file, use transparent background and double the size than recommended size.

**_NOTE:_**  SpaceONE does not support uploading files, so upload CI files at your web server or S3.!


~~~
console:
  enabled: true
  developer: false
  name: console
  replicas: 2
  image:
      name: spaceone/console
      version: 1.8.7
  imagePullPolicy: IfNotPresent

#######################
# TODO: Update value
#  - ENDPOINT
#  - GTAG_ID (if you have google analytics ID)
#  - AMCHARTS_LICENSE (for commercial use only)
#######################
  production_json:
      CONSOLE_API:
          ENDPOINT: http://console-api.example.com
      DOMAIN_IMAGE:
          CI_LOGO: https://spaceone-custom-assets.s3.ap-northeast-2.amazonaws.com/console-assets/domain/example/ci-logo.svg
          CI_TEXT_WITH_TYPE: https://spaceone-custom-assets.s3.ap-northeast-2.amazonaws.com/console-assets/domain/example/ci-text1.svg
          SIGN_IN: https://spaceone-custom-assets.s3.ap-northeast-2.amazonaws.com/console-assets/domain/example/login-img.png
          CI_TEXT: https://spaceone-custom-assets.s3.ap-northeast-2.amazonaws.com/console-assets/domain/example/ci-text2.svg
~~~

## Google Analytics

You can apply [Google Analytics](https://analytics.google.com/analytics) to SpaceONE Console by following the steps below.

### Create accounts and properties

1. Log in to your Google account after accessing the [Google Analytics](https://analytics.google.com/analytics) site.
2. Click the **Start Measurement** button.

    ![ga_start_01](https://user-images.githubusercontent.com/26986739/151507604-edca49ac-64eb-4475-b9ef-9113ed7e50b1.png)

3. Enter your **account name** and click the **Next** button.

    ![ga_start_02](https://user-images.githubusercontent.com/26986739/151509838-a8db9c56-7403-4aa3-972e-e13409950577.jpg)

4. Enter a **property name** and click the **Next** button.

    In the property name, enter the name of the url you want to track.

    ![ga_start_03](https://user-images.githubusercontent.com/26986739/151507608-346ec28f-d2c1-484a-bc35-151b1313b2c3.png)

5. Click the **Create** button.

    ![ga_start_04](https://user-images.githubusercontent.com/26986739/151507612-9741e3aa-7500-441d-b06a-04db5365fcd1.png)

6. Click the **Agree** button after agreeing to the data processing terms.

    ![ga_start_05](https://user-images.githubusercontent.com/26986739/151507614-7d777e10-1365-42b4-a944-dbdf014b4357.png)


### Set up data streams

1. Choose **Web** as the platform for the data stream you want to collect.

    ![ga_data_stream_01](https://user-images.githubusercontent.com/26986739/151507586-f3cc05ba-7508-4ab2-862b-b9bc3ebcd34e.png)

2. Enter your **SpaceONE Console website URL** and **stream name** and click the **Create Stream** button.

    ![ga_data_stream_02](https://user-images.githubusercontent.com/26986739/151507597-7142a9f8-87a8-40ce-989e-667b1ad833c3.png)

3. Check the created stream information and **copy the measurement ID**.

    ![ga_data_stream_03](https://user-images.githubusercontent.com/26986739/151507601-aeb38b77-c380-4502-8185-a53c1948af95.png)




### Set up the SpaceONE Helm Chart

Paste the copied **measurement ID** as the value for the `GTAG_ID` key in the helm chart settings as shown below.

```
# frontend.yaml
console:
  ...
  production_json:
    ...
    GTAG_ID: {measurement ID}
    ...
```

