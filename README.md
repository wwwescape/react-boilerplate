# simple-react-boilerplate

[![Build Status](https://travis-ci.org/wwwescape/simple-react-boilerplate.svg?branch=master)](https://travis-ci.org/wwwescape/simple-react-boilerplate)

This is a boilerplate to build a full stack web application using React, Node.js, Express and Webpack. It is configured with webpack-dev-server, eslint and babel. Tests are configured using Jest and Enzyme. It also demonstrates basic Redux concepts.

- [simple-react-boilerplate](#simple-react-boilerplate)
  - [Introduction](#introduction)
    - [Development mode](#development-mode)
    - [Production mode](#production-mode)
  - [Quick Start](#quick-start)
  - [Documentation](#documentation)
    - [Folder Structure](#folder-structure)
    - [Babel](#babel)
    - [ESLint](#eslint)
    - [Webpack](#webpack)
    - [Webpack dev server](#webpack-dev-server)
    - [Nodemon](#nodemon)
    - [Express](#express)
    - [Concurrently](#concurrently)
    - [Jest](#jest)
    - [Enzyme](#enzyme)
    - [Redux](#redux)

## Introduction

[Create React App](https://github.com/facebook/create-react-app) is a quick way to get started with React development and it requires no build configuration. But it completely hides the build config which makes it difficult to extend. It also requires some additional work to integrate it with an existing Node.js/Express backend application.

### Development mode

In the development mode, we will have 2 servers running. The front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

### Production mode

In the production mode, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the Node.js/Express application.

### Prerequisites
You need to have Node.js® installed on your machine. If you don’t, please go to https://nodejs.org and download the latest version. We need this because we use npm (node package manager) to manage all the dependencies and packages we use in our project.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/wwwescape/simple-react-boilerplate

# Go inside the directory
cd simple-react-boilerplate

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Run tests
npm run test
```

## Documentation

### Folder Structure

All the source code will be inside **src** directory. Inside src, there is client and server directory. All the frontend code (react, css, js and any other assets) will be in client directory. Backend Node.js/Express code will be in the server directory.

```
root
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── client
│   │   ├── __tests__
│   │   │   ├── __mocks__
│   │   │   ├── components
│   │   │   │   └── containers
│   │   │   └── setup
│   │   │       └── setupEnzyme.js
│   │   ├── actions
│   │   ├── components
│   │   │   ├── containers
│   │   │   └── App.js
│   │   ├── images
│   │   ├── reducers
│   │   ├── stylesheets
│   │   └── index.js
│   └── server
│       └── index.js
├── .babelrc
├── .editorconfig
├── .eslintrc
├── nodemon.json
├── package.json
└── webpack.config.js
```

### Babel

[Babel](https://babeljs.io/) helps us to write code in the latest version of JavaScript. If an environment does not support certain features natively, Babel will help us to compile those features down to a supported version. It also helps us to convert JSX to Javascript.

[.babelrc file](https://babeljs.io/docs/usage/babelrc/) is used describe the configurations required for Babel. Below is the .babelrc file which is being used.

```javascript
{
  "presets": ["env", "react"],
  "plugins": ["transform-class-properties"]
}
```

Babel requires plugins to do the transformation. Presets are the set of plugins defined by Babel. Preset **env** allows to use babel-preset-es2015, babel-preset-es2016, and babel-preset-es2017 and it will transform them to ES5. Preset **react** allows us to use JSX syntax and it will transform JSX to Javascript.

### ESLint

[ESLint](https://eslint.org/) is a pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

[.eslintrc.json file](<(https://eslint.org/docs/user-guide/configuring)>) (alternatively configurations can we written in Javascript or YAML as well) is used describe the configurations required for ESLint. Below is the .eslintrc.json file which is being used.

```javascript
{
  "extends": "eslint-config-airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "jest": true,
    "node": true
  },
  "globals": {
        "describe": true,
        "expect": true,
        "ga": true,
        "it": true,
        "spy": true,
        "sinon": true
    },
    "rules": {
        "arrow-body-style": 0,
        "block-scoped-var": 0,
        "camelcase": 1,
        "comma-dangle": 0,
        "consistent-return": 0,
        "default-case": 0,
        "dot-notation": 0,
        "eqeqeq": 0,
        "guard-for-in": 0,
        "global-require": 1,
        "id-length": 0,
        "jest/no-identical-title": 2,
        "key-spacing": 0,
        "new-cap": [1, {"capIsNewExceptions": ["Immutable", "Map", "List"]}],
        "no-else-return": 0,
        "no-fallthrough": 0,
        "no-nested-ternary": 0,
        "no-param-reassign": 0,
        "no-return-assign": 0,
        "no-redeclare": 0,
        "no-shadow": 0,
        "no-undef": 0,
        "no-unreachable": 0,
        "no-unused-expressions": 0,
        "no-unused-vars": 0,
        "no-use-before-define": 0,
        "no-useless-constructor": 0,
        "no-var": 0,
        "no-wrap-func": 0,
        "padded-blocks": 0,
        "prefer-arrow-callback": 0,
        "prefer-const": 0,
        "radix": 0,
        "react/destructuring-assignment": 0,
        "react/jsx-boolean-value": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-one-expression-per-line": 0,
        "react/no-did-mount-set-state": 0,
        "react/no-did-update-set-state": 0,
        "react/prefer-stateless-function": 0,
        "react/prop-types": 0,
        "react/sort-comp": 0,
        "spaced-comment": 0,
        "vars-on-top": 0
    },
    "plugins": [
      "react",
      "jest"
    ]
}
```

[This boilerplate uses Airbnb's Javascript Style Guide](https://github.com/airbnb/javascript) which is used by many JavaScript developers worldwide. Since this boilerplate contains both client (browser) and server side (Node.js) code, the **env** is set to browser and node. Optionally, we can override the Airbnb's configurations to suit our needs. [**no-console**](https://eslint.org/docs/rules/no-console), [**comma-dangle**](https://eslint.org/docs/rules/comma-dangle) and [**react/jsx-filename-extension**](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md) rules have been turned off.

### Webpack

[Webpack](https://webpack.js.org/) is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser. [webpack.config.js](https://webpack.js.org/configuration/) file is used to describe the configurations required for webpack. Below is the webpack.config.js file which is being used.

```javascript
const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const outputDirectory = "dist";

module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js",
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    }),
    new UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
};
```

1.  **entry:** Here the application starts executing and webpack starts bundling
2.  **output path and filename:** The target directory and the filename for the bundled output
3.  **module rules:** Module loaders are transformations that are applied on the source code of a module. We pass all the js file through [babel-loader](https://github.com/babel/babel-loader) to transform JSX to Javascript. CSS files are passed through [css-loaders](https://github.com/webpack-contrib/css-loader) and [style-loaders](https://github.com/webpack-contrib/style-loader) to load and bundle CSS files. Fonts and images are loaded through url-loader.
4.  **devServer:** Configurations for the webpack-dev-server which will be described in coming section.
5.  **plugins:** [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) is a webpack plugin to remove the build folder(s) before building. [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) simplifies creation of HTML files to serve your webpack bundles. It loads the template (public/index.html) and injects the output bundle. [uglifyjs-webpack-plugin](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/) used to minify minify your JavaScript. [compression-webpack-plugin](https://github.com/webpack-contrib/compression-webpack-plugin) used to prepare compressed versions of assets to serve them with Content-Encoding.

### Webpack dev server

[Webpack dev server](https://webpack.js.org/configuration/dev-server/) is used along with webpack. It provides a development server that provides live reloading for the client side code. This should be used for development only.

The devServer section of webpack.config.js contains the configuration required to run webpack-dev-server which is given below.

```javascript
devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    proxy: {
        "/api": "http://localhost:8080"
    }
}
```

[**port**](https://webpack.js.org/configuration/dev-server/#devserver-port) specifies the Webpack dev server to listen on this particular port (3000 in this case). When [**open**](https://webpack.js.org/configuration/dev-server/#devserver-open) is set to true, it will automatically open the home page on startup. [Proxying](https://webpack.js.org/configuration/dev-server/#devserver-proxy) URLs can be useful when we have a separate API backend development server and we want to send API requests on the same domain.

### Nodemon

Nodemon is a utility that will monitor for any changes in the server source code and it automatically restart the server. This is used in development only.

nodemon.json file is used to describe the configurations for Nodemon. Below is the nodemon.json file which is being used.

```javascript
{
  "watch": ["src/server/"]
}
```

Here, we tell nodemon to watch the files in the directory src/server where out server side code resides. Nodemon will restart the node server whenever a file under src/server directory is modified.

### Express

Express is a web application framework for Node.js.

src/server/index.js is the entry point to the server application. Below is the src/server/index.js file

```javascript
const path = require("path");
const express = require('express');

const app = express();

app.use(express.static('dist'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  })
});

app.listen(8080, () => console.log('Listening on port 8080!'));
```

This starts a server and listens on port 8080 for connections. It is configured to serve the static files from **dist** directory.

### Concurrently

[Concurrently](https://github.com/kimmobrunfeldt/concurrently) is used to run multiple commands concurrently. It is used to run the webpack dev server and the backend node server concurrently in the development environment. Below are the npm script commands used.

```javascript
"client": "webpack-dev-server --mode development --devtool inline-source-map --hot",
"server": "nodemon src/server/index.js",
"dev": "concurrently \"npm run server\" \"npm run client\""
```

### Jest

[Jest](https://jestjs.io) is used by Facebook to test all JavaScript code including React applications. Below are the commands used for setting jest with simple-react-boilerplate. The `--coverage` option will also generate a coverage report.

```javascript
"scripts": {
  "test": "jest --verbose --coverage",
  "test:watch": "jest --watch"
},
"jest": {
  "setupTestFrameworkScriptFile": "<rootDir>src/client/__tests__/setup/setupEnzyme.js",
  "testPathIgnorePatterns": [
    "<rootDir>/src/client/__tests__/setup/",
    "<rootDir>/src/client/__tests__/__mocks__/"
  ],
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/client/__tests__/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
}
```

### Enzyme

[Enzyme](http://airbnb.io/enzyme/) is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.

Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.

### Redux

Redux is a predictable state container for JavaScript apps.
