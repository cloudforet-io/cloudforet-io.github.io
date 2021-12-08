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
