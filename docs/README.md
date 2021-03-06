***
# cypress - Automation Framework

## Setup framework
Follow instructions in [setup.md](setup.md)

## Generate build
compile Typescript files in ./src directory into Javascript files in ./dist
``` bash
npm run build
```

Developers can run below command to watch file changes and auto generate build during development.

``` bash
npm run build:watch
```

## How to run tests
we intitate tests using cypress-tags binary
``` bash
npm test -- 
```
Above command cypress test run will be initiated with default options

- Http Basic authentication

  http username & password is required to access test management via proxy in case we are running tests in non Inditex machine.
  username and password will be passed as cypress environment variables.

  ``` bash
  npm test -- --env username=<inditex-username>,password=<inditex-password>
  ```

- Site Language selection

  Test management application can be accessed in both spanish and english. we can choose site language via cypress environment parameter

  valid values:
  - *en* -> English [DEFAULT VALUE]
  - es -> Spanish

  ``` bash
  npm test -- --env lang=es
  ```

- Environment selection

  Tests can be initiated in different environment like test and uat environments.

  Refer to environment configuration in [path](../src/app/config/env.config.ts)

  valid values:
  - *pre1* -> test environment [DEFAULT VALUE] 
  - pru1 -> uat environment

  ``` bash
  npm test -- --env testenv=pre1
  ```

- Logging

  Framework log information to terminal or console where test run is initiated. When value is passed it will log all levels equal and below the score of the value passed

  valid values:
  - silent -> score 0 - will disable logging,
  - error -> score 1 - will log only errors,
  - warn -> score 2 - will log errors and warnings,
  - **info** -> score 3 - will log errors, warnings and information [DEFAULT VALUE],
  - debug -> score 4 - will log all the above levels

  ``` bash
  npm test -- loglevel=debug
  ```

- Choose tests by cucumber feature/scenario Tags

  Cucumber support cherry picking of tests using tags. Please refer to [ cucumber tags documentation](https://cucumber.io/docs/cucumber/api/#tags)

  ``` bash
  npm test --env TAGS='not @foo and (@bar or @zap)'
  ```

- Choose tests by feature files

  glob parameter accept full path or glob pattern. below example will run all files starts with test under contacts
  ``` bash
  npm test -- --glob=features/contacts/test*.feature
  ```

- Choose browser 

  Cypress run time paremeter allow to choose browser.
  By default cypress runs in Electron. please refer to [cypress supported browser list](https://docs.cypress.io/guides/guides/launching-browsers#Browsers)

  ``` bash
  npm test -- --browser chrome
  ```

- Cypress configuration commands

  configuration in [cypress.json](../cypress.json) can be overwritten via config command

  ``` bash
  npm test -- --config video=true
  ```
  
- Other Cypress commands

  - **--headed**  -> displays the browser instead of running headless.
  - **--headless**  -> hide the browser instead of running headed (default for cypress run)
  - **--no-exit**  -> keep the browser open after tests finish
  - **--dev**  -> runs cypress in development and bypasses binary check
 
## How to generate reports
  ``` bash
  npm run report
  ```
  This command will generate output files in [*reports*](../reports) folder:
  - Attach [screenshots](../reports/screenshots) generated during test failures to the report.
  - Generate consolidated [html cucumber report](../reports/html/index.html).
  - Merge all the cucumber json files into single file [cucumber.json](../reports/cucumber-json/merged/cucumber.json) to import into the Jira.
  We can import json file into [Xray test execution](https://docs.getxray.app/display/XRAY/Import+Execution+Results). 

## Framework structure

  - [**docs**](./): contains documents related to test framework.
  - [**features**](../features): contains all the cucumber test feature files structured by component level sub folders.
  - [**reports**](../reports): contains output files
    - [**cucumber-json**](../reports/cucumber-json): contains cucumber json output files generated by cypress cucumber plugin.
    - [**html**](../reports/html): contains consolidated cucumber html report.
    - [**screenshots**](../reports/screenshots): contains screenshots captured by cypress. By default screenshots will be captured for failed test steps.
    - [**videos**](../reports/videos): contains videos captured for the tests. by default set to false in [cypress.json](../cypress.json).

  - [**src/app**](../src/app/config): contains test code related to test management application.
    - [**src/app/config**](../src/app/config): contains configuration related to test management application.
    - [**src/app/copy**](../src/app/copy): contains copy appear in test management application web pages.
    - [**src/app/data**](../src/app/data): contains test data.
    - [**src/app/pages**](../src/app/pages): contains page object files.
    - [**src/app/selectors**](../src/app/selectors): contains selectors of application pages.

  - [**src/utils**](../src/app/utils): contains support files required for automation like browser actions, loggers.

  - [**utils**](../utils): contains utilities required to generate report.

  - **Tools and Configuration**
    - [*eslint*](../.eslintrc.json): eslint TypeScript rules configuration for files in [**src folder**](../src).
    - [*gherkin-lint*](../.gherkin-lintrc): Cucumber BDD Gherkin sytax rules configuration for files in [**features**](../features).
    - [*cypress*](../cypress.json): cypress default configuation.
    - [*tsconfig*](../tsconfig.json): type script compiler options to generate build.

***