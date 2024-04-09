---
title: "Advanced configuration guide"
linkTitle: "Advanced configuration"
weight: 6
url_dash_board: "/docs/guides_v1/advanced_configuration"
date: 2021-07-31
description: >
    Advanced Configuration Guide of Cloudforet

---

## Title and Favicon

Cloudforet has default title and CI with Wanny favicon.

![](./img/spaceone_default_favicon.png)

But you can change them to your own title and favicon.

![](./img/cloudforet_custom_favicon.png)

</br>

| Component   | File Path | Description |
| ---         | ---       | ---         |
| Title       | /var/www/title.txt | name of Title |
| Favicon     | /var/www/favicon.ico | favicon file |


Console supports the functionality of changing title and favicon.
The default values are in source code, but you can overwrite them when deploying pods.

**_NOTE:_**  Both Title and Favicon should be exist together, even though you want to configure one of them!

</br>
This is an example value of console.yaml file.

~~~
console:
  production_json:
    DOMAIN_NAME_REF: hostname
    CONSOLE_API:
      ENDPOINT: https://console-v1.api.example.com
    CONSOLE_API_V2:
      ENDPOINT: https://console-v2.api.example.com
    DOMAIN_IMAGE:
      CI_LOGO: https://raw.githubusercontent.com/cloudforet-io/artwork/main/logo/symbol/Cloudforet_symbol--dark-navy.svg
      CI_TEXT_WITH_TYPE: https://raw.githubusercontent.com/kren-ucloud/artwork/main/logo/KREN-logo.png
      SIGN_IN: https://raw.githubusercontent.com/cloudforet-io/artwork/main/illustrations/happy-new-year-2024.png
      CI_TEXT: https://raw.githubusercontent.com/cloudforet-io/artwork/main/logo/wordmark/Cloudforet_wordmark--primary.svg
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
    - name: timezone
      hostPath:
        path: /usr/share/zoneinfo/Asia/Seoul
    - name: log-volume
      emptyDir: {}
      
~~~

The actual values are from Kubernetes ConfigMap object. So you might have to change the value at ConfigMap or create a new one and mount it in your pod.

### Title(title.yaml)

~~~
apiVersion: v1
kind: ConfigMap
metadata:
  name: favicon
  namespace: spaceone
data:
  title.txt: |
    KREN UCLOUD
~~~

Apply at your Kubernetes cluster.

```bash
kubectl apply -f title.yaml -n spaceone
```
### Favicon (favicon.yaml)

Cloudforet new Favicon file is
[favicon.yaml](./img/favicon.yaml)
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

~~~bash
# prepare your favicon.ico file, and encode it to base64 (shell command)
cat favicon.ico | base64
~~~

Apply at your Kubernetes cluster.

```bash
kubectl apply -f favicon.yaml -n spaceone
```

## Corporate Identity

When you open Cloudforet page, you can see the default Cloudforet CI, logo and text.
You can change the default Cloudforet CI with your company CI.

### Login Page
![](./img/cloudforet_custom_ci.png)

### Every Page
![](./img/cloudforet_custom_ci2.png)

Update helm value of console (console -> production_json -> DOMAIN_IMAGE)

keyword: ***DOMAIN_IMAGE***

| Configuration 	| Description | Format |
| ---           	|  ---         | ---   |
| CI_LOGO     		| Custom Logo Image | Image (56 * 56 px) |
| CI_TEXT_WITH_TYPE 	| CI Text Image | Image (164 * 40 px) |
| SIGN_IN 		| Sign-in page Image | Image (1024 * 1024 px) |
| CI_TEXT           	| CI Text Image On every page | Image (123 * 16 px)  |


**_NOTE:_**  Recommended file format is SVG. But if you would like to use a PNG file, use transparent background and double the size than recommended size.

**_NOTE:_**  Cloudforet does not support uploading files, so upload CI files at your web server or S3.!

~~~
console:
  production_json:
    DOMAIN_NAME_REF: hostname
    CONSOLE_API:
      ENDPOINT: https://console-v1.api.example.com
    CONSOLE_API_V2:
      ENDPOINT: https://console-v2.api.example.com
    DOMAIN_IMAGE:
      CI_LOGO: https://raw.githubusercontent.com/cloudforet-io/artwork/main/logo/symbol/Cloudforet_symbol--dark-navy.svg
      CI_TEXT_WITH_TYPE: https://raw.githubusercontent.com/kren-ucloud/artwork/main/logo/KREN-logo.png
      SIGN_IN: https://raw.githubusercontent.com/cloudforet-io/artwork/main/illustrations/happy-new-year-2024.png
      CI_TEXT: https://raw.githubusercontent.com/cloudforet-io/artwork/main/logo/wordmark/Cloudforet_wordmark--primary.svg
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
    - name: timezone
      hostPath:
        path: /usr/share/zoneinfo/Asia/Seoul
    - name: log-volume
      emptyDir: {}
~~~


## Google Analytics

You can apply [Google Analytics](https://analytics.google.com/analytics) to Cloudforet Console by following the steps below.

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

2. Enter your **Cloudforet Console website URL** and **stream name** and click the **Create Stream** button.

    ![ga_data_stream_02](https://user-images.githubusercontent.com/26986739/151507597-7142a9f8-87a8-40ce-989e-667b1ad833c3.png)

3. Check the created stream information and **copy the measurement ID**.

    ![ga_data_stream_03](https://user-images.githubusercontent.com/26986739/151507601-aeb38b77-c380-4502-8185-a53c1948af95.png)




### Set up the Cloudforet Helm Chart

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

