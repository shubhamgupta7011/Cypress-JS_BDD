***
# Cypress - Automation Guidelines

## Useful VS code extention

  - ESLint
  - Cucumber (Gherkin) Full Support
  - GitLens — Git supercharged
  - TypeScript: Select TypeScript version

## Coding standards followed
  - ES6 style
  - [ESLint Airbnb](https://github.com/airbnb/javascript)
  - Gherkin Lint

## Naming Standards followed
  - File Naming -> Kebab case (e.g. constact-search.feature)
    exception: page.js files start with Caps letter
  - variable names -> Camel case (e.g. columnNumber)
  - constants -> Upper case (e.g. PAGE_TITLE)

  **Refert to existing code to understand standards**

## Branching and Commit notes
  - Before starting new features
    - checkout to develop branch
      ``` bash
      git checkout develop
      ```
    - update develop branch
      ``` bash
      git pull
      ```
    - create new branch
      ``` bash
      git branch -b <branchName>
      ```

  - Command to add verified commit
    - cherry pick the changes which needs to be promoted
      ``` bash
      git add <file path>
      ```
    - commit
      ``` bash
      git commit -m "AQA - update/new feature or file name"
      ```

***
