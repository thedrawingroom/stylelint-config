# @thedrawingroom/stylelint-config

[![NPM version](http://img.shields.io/npm/v/@thedrawingroom/stylelint-config.svg)](https://www.npmjs.org/package/@thedrawingroom/stylelint-config)
[![Greenkeeper badge](https://badges.greenkeeper.io/thedrawingroom/stylelint-config.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/thedrawingroom/stylelint-config.svg?branch=master)](https://travis-ci.org/thedrawingroom/stylelint-config)

[![Dependency Status](https://david-dm.org/thedrawingroom/stylelint-config.svg)](https://david-dm.org/thedrawingroom/stylelint-config)
[![devDependency Status](https://david-dm.org/thedrawingroom/stylelint-config/dev-status.svg)](https://david-dm.org/thedrawingroom/stylelint-config/?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/thedrawingroom/stylelint-config/badge.svg)](https://snyk.io//test/github/thedrawingroom/stylelint-config)

A stylelint config based on [sass-guidelin.es](https://sass-guidelin.es/).

This linter has been designed / tested with SCSS syntax based on the SCSS guidelines documented in https://sass-guidelin.es/. It is intended for use with SCSS syntax, not Sass (tab style) syntax.

## Installation

```console
$ npm install --save @thedrawingroom/stylelint-config
```

## Usage

Set your stylelint config to:

```json
{
  "extends": "@thedrawingroom/stylelint-config"
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to tabs and turn off the `number-leading-zero` rule:


```json
{
  "extends": "@thedrawingroom/stylelint-config",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

## Documentation

### Plugins

* [`stylelint-order`](https://github.com/hudochenkov/stylelint-order): A plugin pack of order related linting rules for stylelint.
* [`stylelint-scss`](https://github.com/kristerkari/stylelint-scss): A collection of SCSS specific linting rules for stylelint

#### Value

* [`value-no-vendor-prefix`](http://stylelint.io/user-guide/rules/value-no-vendor-prefix/): Disallow vendor prefixes for values.

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
