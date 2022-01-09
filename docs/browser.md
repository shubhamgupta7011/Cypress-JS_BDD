***
# Cypress - Browser commands

- Framework is having interface layer which handles all the browser actions instead of direct invoking of cypress command in application automation code.

- The commands are built in generic browser terminology

**All commands return self instance of the browser *return this* for command chaining purpose**

- configBrowser: Config/Start browser and set all pre-conditons specific to tool

  ``` bash
  this.browser.configBrowser()
  ```
  input parameters: None


- openUrlBasicAuth: Open the url with basic authentication 
  ``` bash
  this.browser.openUrlBasicAuth(url, username, password, { timeout: value })
  ```
  input parameters
  - url : web url to launch in basic auth mode
  - username : username or user id
  - password : password 
  - timeout: in milli-seconds (e.g. 1 * 1000 for 1 second)
  
