---
title: "Plugin Debugging"
linkTitle: "Plugin Debugging"
weight: 4
date: 2021-08-04
description: 
    How To Debugging SpaceONE Plugins 

---


## Using Pycharm
 
<br>
It is recommand to using pycharm(The most popular python IDE) to develop & testing plugins. 
Overall setting processes are as below. 

- [1. Open Projects and Dependencies](/docs/developers/plugins/developer_guide/plugin_debugging/#1-open-projects-and-dependencies)
- [2. Configure Virtual Environment](/docs/developers/plugins/developer_guide/plugin_debugging/#2-configure-virtual-environment)
- [3. Run Server](/docs/developers/plugins/developer_guide/plugin_debugging/#3-run-server)
- [4. Test Code](/docs/developers/plugins/developer_guide/plugin_debugging/#4-execute-test-code)

### 1. Open projects and dependencies
First, open project Identity, python-core and api one by one.

- Click Open
![](/docs/developers/plugins/developer_guide/plugin_debugging/plugin_debugging_img/plugin-debugging-img-01.png)

- Select your project directory. In this example '~/source/cloudone/identity'
![](/docs/developers/plugins/developer_guide/plugin_debugging/plugin_debugging_img/plugin-debugging-img-02.png)

- Click File > Open , then select related project one by one. In this example '~/source/cloudone/python-core'
![](/docs/developers/plugins/developer_guide/plugin_debugging/plugin_debugging_img/plugin-debugging-img-03.png)
![](/docs/developers/plugins/developer_guide/plugin_debugging/plugin_debugging_img/plugin-debugging-img-04.png)

- Select New Window for an additional project. You might need to do several times if you have multiple projects.
   Ex) python-core and api
![](/docs/developers/plugins/developer_guide/plugin_debugging/plugin_debugging_img/plugin-debugging-img-05.png)

- Now we have 3 windows. Just close python-core and API projects.
![](/docs/developers/plugins/developer_guide/plugin_debugging/plugin_debugging_img/plugin-debugging-img-06.png)

- Once you open your project at least one time, you can attach them to each other.
   Let's do it on identity project.
   Do this again Open > select your anther project directory. In this example, python-core and API.

But this time, you can ATTACH it to Identity project.
![](/docs/developers/plugins/developer_guide/plugin_debugging/plugin_debugging_img/plugin-debugging-img-07.png)

You can attach a project as a module if it was imported at least once.

### 2. Configure Virtual Environment

- Add additional python interpreter
![](/docs/developers/plugins/developer_guide/plugin_debugging/plugin_debugging_img/plugin-debugging-img-09.png)

- Click virtual environment section
- Designate base interpreter as 'Python 3.8'(Python3 need to be installed previously)
- Then click 'OK'
![](/docs/developers/plugins/developer_guide/plugin_debugging/plugin_debugging_img/plugin-debugging-img-10.png)

- Return to 'Python interpreter > Interpreter Settings..'
- List of installed python package on virtual environment will be displayed
![](/docs/developers/plugins/developer_guide/plugin_debugging/plugin_debugging_img/plugin-debugging-img-11.png)

- Click '+' button, Then search & click 'Install Package' below
- 'spaceone-core'
- 'spaceone-api'
- 'spaceone-tester'
- Additional libraries are in 'pkg/pip_requirements.txt' in every repository. You also need to install them.
- Repeat above process or you can install through command line
~~~bash
$> pip3 install -r pip_requirements.txt
~~~
![](/docs/developers/plugins/developer_guide/plugin_debugging/plugin_debugging_img/plugin-debugging-img-13.png)

![](/docs/developers/plugins/developer_guide/plugin_debugging/plugin_debugging_img/plugin-debugging-img-12.png)

### 3. Run Server

- Set source root directory
- Right click on 'src' directory 'Mark Directory as > Resource Root'
![](/docs/developers/plugins/developer_guide/plugin_debugging/plugin_debugging_img/plugin-debugging-img-15.png)
- Set test server configuration
![](/docs/developers/plugins/developer_guide/plugin_debugging/plugin_debugging_img/plugin-debugging-img-14.png)
- Fill in test server configurations are as below, then click 'OK'
![](/docs/developers/plugins/developer_guide/plugin_debugging/plugin_debugging_img/plugin-debugging-img-16.png)

|Item|Configuration|Etc|
|:--:|:--|:--:|
|Module name|spaceone.core.command||
|Parameters|grpc spaceone.inventory -p 50051|-p option means portnumber (Can be changed)|

- You can run test server with 'play button' on the upper right side or the IDE
![](/docs/developers/plugins/developer_guide/plugin_debugging/plugin_debugging_img/plugin-debugging-img-17.png)

### 4. Execute Test Code

Every plugin repository has their own unit test case file in 'test/api' directory
- Right click on 'test_collector.py' file
- Click 'Run 'test_collector''

![](/docs/developers/plugins/developer_guide/plugin_debugging/plugin_debugging_img/plugin-debugging-img-18.png)

Some plugin needs credential to interface with other services.
You need to make credential file and set them as environments before run
- Go to test server configuration > test_server > Edit Configurations
- Click Edit  variables
![](/docs/developers/plugins/developer_guide/plugin_debugging/plugin_debugging_img/plugin-debugging-img-19.png)

- Add environment variable as below
![](/docs/developers/plugins/developer_guide/plugin_debugging/plugin_debugging_img/plugin-debugging-img-20.png)

|Item|Configuration|Etc|
|:--:|:--|:--:|
|Module name|spaceone.core.command||
|GOOGLE_APPLICATION_CREDENTIALS|Full path of your configuration file||

Finally you can test run your server
- First, run test server locally
![](/docs/developers/plugins/developer_guide/plugin_debugging/plugin_debugging_img/plugin-debugging-img-21.png)

- Second, run unit test
![](/docs/developers/plugins/developer_guide/plugin_debugging/plugin_debugging_img/plugin-debugging-img-22.png)




## Using Terminal


