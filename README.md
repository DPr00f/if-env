# if-env-defined

Forked from [`if-env`](https://github.com/ericclemmons/if-env)


> Simplify npm scripts with `if-env-defined ... && npm run this || npm run that`

- - -

Suppose you want to simplify development and be able to run `npm start`
in all environments & run the correct scripts.

Your `package.json` might look like this:

```json
"scripts": {
  "start": "if [[ -z ${NODE_ENV} ]]; then npm run start:prod; else npm run start:dev; fi",
  "start:dev": "webpack",
  "start:prod": "start-cluster"
}
```

The problem is, this doesn't work in all environments.

Instead, you can write:

```json
"scripts": {
  "start": "if-env-defined NODE_ENV && npm run start:prod || npm run start:dev",
  "start:dev": "webpack",
  "start:prod": "start-cluster"
}
```


## Usage

### 1. Install

```shell
$ npm install if-env-defined --save
```

### 2. Add to `package.json`

```json
"scripts": {
  "start": "if-env-defined SOME_ENV_VAR=some_val ANOTHER_ENV_VAR=another_val && npm run this || npm run that"
}
```


## License

> MIT &copy; Eric Clemmons 2015
