---
title: "On Premise"
linkTitle: "On Premise"
weight: 2
url_dash_board: "/docs/guides_v1/installation/on_premise"
date: 2023-06-16
description: >
    This section describes how to install CloudForet in an On-Premise environment.
---

![on_premise](../on_premise_img/on_premise.png)

## Prerequisites

-   Kubernetes 1.21+ : [https://kubernetes.io/docs/setup/](https://kubernetes.io/docs/setup/)
    
-   Kubectl command-line tool : [https://kubernetes.io/docs/tasks/tools/](https://kubernetes.io/docs/tasks/tools/)
    
-   Helm 3.2.0+ : [https://helm.sh/docs/intro/install/](https://helm.sh/docs/intro/install/ )
    
-   Nginx Ingress Controller : [https://kubernetes.github.io/ingress-nginx/deploy/](https://kubernetes.github.io/ingress-nginx/deploy/)
    

## Install Cloudforet

It guides you on how to install Cloudforet using Helm chart. Related information is also available at: [https://github.com/cloudforet-io/charts](https://github.com/cloudforet-io/charts)

### 1. Add Helm Repository

```shell
helm repo add cloudforet https://cloudforet-io.github.io/charts 
helm repo update 
helm search repo
```

### 2. Create Namespaces
```shell
kubectl create ns spaceone 
kubectl create ns spaceone-plugin
```

> **Cautions of creation namespace**  
If you need to use only one namespace, you do not need to create the `spaceone-plugin` namespace.  
If changing the Cloudforet namespace, please refer to the following link. [Change K8S Namespace](../../configuration/change_k8s_namespace)

### 3. Create Role and RoleBinding

In a general situation where namespaces are not merged, supervisor distributes plugins from `spaceone` namespace to `spaceone-plugin` namespace, so roles and rolebindings are required as follows. Check the contents at the following link. [https://github.com/cloudforet-io/charts/blob/master/examples/rbac.yaml](https://github.com/cloudforet-io/charts/blob/master/examples/rbac.yaml)

Details of the authority are as follows. You can edit the file to specify permissions if needed.

-   Create file
    
    ``` shell
    cat <<EOF> rbac.yaml
    ---
    apiVersion: rbac.authorization.k8s.io/v1
    kind: Role
    metadata:
      name: supervisor-plugin-control-role
      namespace: spaceone-plugin 
    rules:
    - apiGroups:
      - "*"
      resources:
      - replicaSets
      - pods
      - deployments
      - services
      - endpoints
      verbs:
      - get
      - list
      - watch
      - create
      - delete
    ---
    apiVersion: rbac.authorization.k8s.io/v1
    kind: RoleBinding
    metadata:
      name: supervisor-role-binding
      namespace: spaceone-plugin 
    roleRef:
      apiGroup: rbac.authorization.k8s.io
      kind: Role
      name: supervisor-plugin-control-role
    subjects:
    - kind: ServiceAccount
      name: default
      namespace: spaceone
    EOF
    ```
    

To apply the permission, you can reflect it with the command below. If you have changed the namespace, enter the changed namespace. (Be careful with the namespace.)

```shell
kubectl apply -f rbac.yaml -n spaceone-plugin
```

### 4. Install

Proceed with the installation using the helm command below.

```shell
helm install cloudforet cloudforet/spaceone -n spaceone
```

After entering the command, you can see that pods are uploaded in the `spaceone` namespace as shown below.
```shell
kubectl get pod -n spaceone

NAME                                      READY   STATUS             RESTARTS      AGE
board-5746fd9657-vtd45                    1/1     Running            0             57s
config-5d4c4b7f58-z8k9q                   1/1     Running            0             58s
console-6b64cf66cb-q8v54                  1/1     Running            0             59s
console-api-7c95848cb8-sgt56              2/2     Running            0             58s
console-api-v2-rest-7d64bc85dd-987zn      2/2     Running            0             56s
cost-analysis-7b9d64b944-xw9qg            1/1     Running            0             59s
cost-analysis-scheduler-ff8cc758d-lfx4n   0/1     Error              3 (37s ago)   55s
cost-analysis-worker-559b4799b9-fxmxj     1/1     Running            0             58s
cost-analysis-worker-559b4799b9-nf5vs     1/1     Running            0             58s
cost-analysis-worker-559b4799b9-swzw8     1/1     Running            0             58s
cost-analysis-worker-559b4799b9-x8f4j     1/1     Running            0             58s
dashboard-b4cc996-mgwj9                   1/1     Running            0             56s
docs-5fb4cc56c7-68qbk                     1/1     Running            0             59s
identity-6fc984459d-zk8r9                 1/1     Running            0             56s
inventory-67498999d6-722bw                1/1     Running            0             57s
inventory-scheduler-5dc6856d44-4spvm      0/1     CrashLoopBackOff   3 (18s ago)   59s
inventory-worker-68d9fcf5fb-x6knb         1/1     Running            0             55s
mongodb-7c9794854-cdmwj                   1/1     Running            0             59s
monitoring-fdd44bdbf-pcgln                1/1     Running            0             59s
notification-5b477f6c49-gzfl8             1/1     Running            0             59s
notification-scheduler-675696467-gn24j    1/1     Running            0             59s
notification-worker-d88bb6df6-pjtmn       1/1     Running            0             57s
plugin-556f7bc49b-qmwln                   1/1     Running            0             57s
plugin-scheduler-86c4c56d84-cmrmn         0/1     CrashLoopBackOff   3 (13s ago)   59s
plugin-worker-57986dfdd6-v9vqg            1/1     Running            0             58s
redis-75df77f7d4-lwvvw                    1/1     Running            0             59s
repository-5f5b7b5cdc-lnjkl               1/1     Running            0             57s
secret-77ffdf8c9d-48k46                   1/1     Running            0             55s
statistics-67b77b6654-p9wcb               1/1     Running            0             56s
statistics-scheduler-586875947c-8zfqg     0/1     Error              3 (30s ago)   56s
statistics-worker-68d646fc7-knbdr         1/1     Running            0             58s
supervisor-scheduler-6744657cb6-tpf78     2/2     Running            0             59s
```

If some of the scheduler pods are having problems and the rest of the pods are up, you're in the right state for now. The scheduler problem requires an upgrade operation using the `values.yaml` file after issuing a token through the initializer.

### 5. Initialize the configuration

This is a task for Cloudforet's domain creation. A root domain is created and a root token is issued through the initializer.

spaceone-initializer can be found on the following cloudforet-io github site. [https://github.com/cloudforet-io/spaceone-initializer](https://github.com/cloudforet-io/spaceone-initializer)

The initializer.yaml file to be used here can be found at the following link. [https://github.com/cloudforet-io/charts/blob/master/examples/initializer.yaml](https://github.com/cloudforet-io/charts/blob/master/examples/initializer.yaml)

You can change the domain name, domain_owner.id/password, etc. in the initializer.yaml file.

-   Create file
    
    ```shell
    cat <<EOF> filename.yaml
    main:
    import:
        - /root/spacectl/apply/root_domain.yaml
        - /root/spacectl/apply/create_managed_repository.yaml
        - /root/spacectl/apply/user_domain.yaml
        - /root/spacectl/apply/create_role.yaml
        - /root/spacectl/apply/add_statistics_schedule.yaml
        - /root/spacectl/apply/print_api_key.yaml
    var:
        domain:
        root: root                      # root domain name to create : root.example.com
        user: spaceone                  # user domain name to create : spaceone.example.com
        default_language: ko
        default_timezone: Asia/Seoul
        domain_owner:
        id: admin               # login user name
        password: Admin123!@#   # Change your password
        user:
        id: system_api_key
    EOF
    ```

After editing the file, execute the initializer with the command below.
```shell
helm install initializer cloudforet/spaceone-initializer -n spaceone -f initializer.yaml
```

After execution, an initializer pod is created in the specified `spaceone` namespace and domain creation is performed. You can check the log when the pod is in `Completed` state.

### 6. Set the Helm Values and Upgrade the chart

To customize the default installed helm chart, the `values.yaml` file is required.

A typical example of a `values.yaml` file can be found at the following link. [https://github.com/cloudforet-io/charts/blob/master/examples/values/all.yaml](https://github.com/cloudforet-io/charts/blob/master/examples/values/all.yaml)

To solve the scheduler problem, check the pod log in Completed status as shown below to obtain an admin token.

```shell
kubectl logs initializer-5f5b7b5cdc-abcd1 -n spaceone

(omit)
TASK [Print Admin API Key] *********************************************************************************************
"{TOKEN}"

FINISHED [ ok=23, skipped=0 ] ******************************************************************************************

FINISH SPACEONE INITIALIZE
```

Create a `values.yaml` file using the token value obtained from the initializer pod log. Inside the file, you can declare app settings, namespace changes, kubernetes options changes, etc.

The following describes how to configure the console domain in the `values.yaml` file and how to use the issued token as a global config.

```yaml
console:
  production_json:
    # If you don't have a service domain, you refer to the following 'No Domain & IP Access' example.
    CONSOLE_API:
      ENDPOINT: https://console.api.example.com       # Change the endpoint
    CONSOLE_API_V2:
      ENDPOINT: https://console-v2.api.example.com    # Change the endpoint

global:
  shared_conf:
    TOKEN: '{TOKEN}'                                  # Change the system token
```

After setting the `values.yaml` file as above, execute the helm upgrade operation with the command below. After the upgrade is finished, delete all app instances related to cloudforet so that all pods are restarted.

```shell
helm upgrade cloudforet cloudforet/spaceone -n spaceone -f values.yaml
kubectl delete po -n spaceone -l app.kubernetes.io/instance=cloudforet
```

### 7. Check the status of the pods

Check the status of the pod with the following command. If all pods are in `Running` state, the installation is complete.

```shell
kubectl get pod -n spaceone
```

### 8. Configuration Ingress

Kubernetes Ingress is a resource that manages connections between services in a cluster and external connections. Cloudforet is serviced by registering the generated certificate as a secret and adding an ingress in the order below.

> **Install Nginx Ingress Controller**  
An ingress controller is required to use ingress in an on-premise environment. Here is a link to the installation guide for Nginx Ingress Controller supported by Kubernetes.  
> - Nginx Ingress Controller : [https://kubernetes.github.io/ingress-nginx/deploy/](https://kubernetes.github.io/ingress-nginx/deploy/)

#### Generate self-managed SSL

Create a private ssl certificate using the openssl command below. (If an already issued certificate exists, you can create a Secret using the issued certificate. For detailed instructions, please refer to the following link. [Create secret by exist cert](../../configuration/create_secret_by_exist_cert))

-   console
    
    -   *.{domain}
        
```shell
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout console_ssl.pem -out console_ssl.csr -subj "/CN=*.{domain}/O=spaceone" -addext "subjectAltName = DNS:*.{domain}"
```

-   api
    
    -   *.api.{domain}

```shell
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout api_ssl.pem -out api_ssl.csr -subj "/CN=*.api.{domain}/O=spaceone" -addext "subjectAltName = DNS:*.api.{domain}"
```        

#### Create secret for ssl

If the certificate is ready, create a secret using the certificate file.

```shell
kubectl create secret tls console-ssl --key console_ssl.pem --cert console_ssl.csr
```

```shell
kubectl create secret tls api-ssl --key api_ssl.pem --cert api_ssl.csr
```

#### Create Ingress

Prepare the two ingress files below. These ingress files can be downloaded from the following link.

-   console_ingress.yaml : [https://github.com/cloudforet-io/charts/blob/master/examples/ingress/on_premise/console_ingress.yaml](https://github.com/cloudforet-io/charts/blob/master/examples/ingress/on_premise/console_ingress.yaml)
    
-   rest_api_ingress.yaml : [https://github.com/cloudforet-io/charts/blob/master/examples/ingress/on_premise/rest_api_ingress.yaml](https://github.com/cloudforet-io/charts/blob/master/examples/ingress/on_premise/rest_api_ingress.yaml)
    

Each file is as follows. Change the hostname inside the file to match the domain of the certificate you created.

-   console
    ```shell 
    cat <<EOF> console_ingress.yaml
    ---
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
    name: console-ingress
    namespace: spaceone
    spec:
    ingressClassName: nginx
    tls:
        - hosts:
            - "console.example.com"  # Change the hostname
        secretName: spaceone-tls
    rules:
        - host: "console.example.com"  # Change the hostname
        http:
            paths:
            - path: /
                pathType: Prefix
                backend:
                service:
                    name: console 
                    port:
                    number: 80
    EOF
    ```      
    
-   rest_api

    ```shell
    cat <<EOF> rest_api_ingress.yaml
    ---
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
    name: console-api-ingress
    namespace: spaceone
    spec:
    ingressClassName: nginx
    tls:
        - hosts:
            - "*.api.example.com"  # Change the hostname
        secretName: spaceone-tls
    rules:
        - host: "console.api.example.com"  # Change the hostname
        http:
            paths:
            - path: /
                pathType: Prefix
                backend:
                service:
                    name: console-api
                    port:
                    number: 80
    ---
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
    name: console-api-v2-ingress
    namespace: spaceone
    spec:
    ingressClassName: nginx
    tls:
        - hosts:
            - "*.api.example.com"  # Change the hostname
        secretName: spaceone-tls
    rules:
        - host: "console-v2.api.example.com"  # Change the hostname
        http:
            paths:
            - path: /
                pathType: Prefix
                backend:
                service:
                    name: console-api-v2-rest
                    port:
                    number: 80
    EOF
    
Create the prepared ingress in the `spaceone` namespace with the command below.

```shell 
kubectl apply -f console_ingress.yaml -n spaceone
kubectl apply -f rest_api_ingress.yaml -n spaceone
```

#### Connect to the Console

Connect to the Cloudforet Console service.

-   https://console.example.com
    

___

## Advanced Configurations

Additional settings are required for the following special features. Below are examples and solutions for each situation.
|Name|Description|
|:---:|---|
|[Set Plugin Certificate](../../configuration/set_plugin_certificate)|This is how to set a certificate for each plugin when using a private certificate.|
|[Support Private Image Registry](../../configuration/support_private_image_registry)|In an environment where communication with the outside is blocked for organization's security reasons, you can operate your own Private Image Registry. In this case, Container Image Sync operation is required, and Cloudforet suggests a method using the dregsy tool.|
|[Change K8S Namespace](../../configuration/change_k8s_namespace)|Namespace usage is limited by each environment, or you can use your own namespace name. Here is how to change Namespace in Cloudforet.|
|[Set HTTP Proxy](../../configuration/set_http_proxy)|In the on-premise environment with no Internet connection, proxy settings are required to communicate with the external world. Here's how to set up HTTP Proxy.|
|[Set K8S ImagePullSecrets](../../configuration/set_k8s_imagepullsecrets)|If you are using Private Image Registry, you may need credentials because user authentication is set. In Kubernetes, you can use secrets to register credentials with pods. Here's how to set ImagePullSecrets.|
___

## Uninstall

You can uninstall Cloudforet by executing the following commands in order.

### 1. Delete the Helm Chart

```shell
helm delete cloudforet -n spaceone
helm delete cloudforet-initializer -n spaceone
```

### 2. Delete the Ingress

```shell
kubectl delete ingress --all -n spaceone
```

### 4. Delete all plugins

```shell
kubectl delete deployment --all -n spaceone-plugin
kubectl delete service --all -n spaceone-plugin
```

### 5. Delete cloudforet namespaces

```shell
kubectl delete namespace spaceone
kubectl delete namespace spaceone-plugin
```
