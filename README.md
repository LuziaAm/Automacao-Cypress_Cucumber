# Automacao-Cypress_Cucumber

************************************************
VS Code:

Version: 1.65.2
Commit: c722ca6c7eed3d7987c0d5c3df5c45f6b15e77d1
Date: 2022-03-10T15:36:26.048Z
Electron: 13.5.2
Chromium: 91.0.4472.164
Node.js: 14.16.0
V8: 9.1.269.39-electron.0
OS: Linux x64 5.4.0-100-generic snap

*************************************************
Ambiente Node.JS

npm init –y

Instalar o Cypress

npm install cypress

"scripts": {
    "cypress:open": "cypress open",
    "test": "cypress run"
 }

*************************************************

Comando para execução dos testes:

npx cypress run
npx cypress open

*************************************************
Plugins:

npm install --save-dev cypress-cucumber-preprocessor

Descrição da configuração:

https://www.npmjs.com/package/cypress-cucumber-preprocessor


CONFIGURAÇÃO DO PLUGIN:

cypress/plugins/index.js

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

cypress.json

{
	"testFiles": "**/*.feature"
}

package.json:

"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}

**************************************************

Extensões:

VS Code - Cuke Step Definition Generator


**************************************************

NOTA:

Caso haja erro: Cypress command timeout of 4000ms exceeded.

Limoar os hitóricos, caches e cookies do navegador.



