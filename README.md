# eslint-config-essential

This package provides base JS .eslintrc as an extensible shared config.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6.

First, install this package

```sh
yarn add --dev eslint eslint-config-prime

or

npm install --save-dev eslint eslint-config-prime
```

Then add following contents to your .eslintrc.js file

```js
// .eslintrc.js

{
  "extends": "prime"
}
```

## License

[**The MIT License**](LICENSE).
