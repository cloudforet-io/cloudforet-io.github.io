---
title: "Advanced Configuration Guide"
linkTitle: "Advanced Configuration"
weight: 4
url_dash_board: "/docs/guides/advanced_configuration" 
date: 2021-07-31
description: >
    Advanced Configuration Guide of SpaceONE

---

## Title and Favicon

SpaceONE has default Title and CI with Wanny Favicon like

![](/docs/setup/advanced_configuration/img/spaceone_default_favicon.png)

But you can change your own Title and Favicon.

![](/docs/setup/advanced_configuration/img/spaceone_custom_favicon.png)

</br>

| Component   | File Path | Description |
| ---         | ---       | ---         |
| Title       | /var/www/title.txt | name of Title |
| Favicon     | /var/www/favicon.ico | favicon file |


Console supports the functionality of changing Title and Favicon.
The default values are in source code, but you can overwrite them when deploying POD.

</br>
This is example value of console.yaml

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

The real values are used as ConfigMap in kubernetes. So you have to change the format as ConfigMap.

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

**_NOTE:_**  favicon.ico must be encoded to base64.

~~~
# cat favicon.ico | base64
~~~

## Corporate Identity

When you open SpaceONE page, you can see the default SpaceONE CI, logo and text.
You can change the default SpaceONE CI with your company CI.

### Login Page
![](/docs/setup/advanced_configuration/img/spaceone_custom_ci.png)

### Every Page
![](/docs/setup/advanced_configuration/img/spaceone_custom_ci2.png)

Update helm value of console (console -> production_json -> DOMAIN_IMAGE)

keyword: ***DOMAIN_IMAGE***

| Configuration 	| Description | Format |
| ---           	|  ---         | ---   |
| CI_LOGO     		| Custom Logo Image | Image (56 * 56 px) |
| CI_TEXT_WITH_TYPE 	| CI Text Image | Image (164 * 40 px) |
| SIGN_IN 		| Sign-in page Image | Image (1024 * 1024 px) |
| CI_TEXT           	| CI Text Image On every page | Image (123 * 16 px)  |


**_NOTE:_**  Recommended file format is SVG. But if you has PNG, use transparent background and twice larger than recommended size.

**_NOTE:_**  SpaceONE does not support uploading files, so upload CI files at your web server or S3.

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
