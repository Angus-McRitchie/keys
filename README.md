# @gooby/keys

## Install

```
$ npm install @gooby/keys
```

## Usage

```js
import keys from '@gooby/keys';

// Simple object
keys.toCamel({my_key: null}); // {myKey: null}
keys.toSnake({myKey: null}); // {my_key: null}

// Nested objects
keys.toCamel({my_key: {my_key: null}}); // {myKey: {myKey: null}}
keys.toSnake({myKey: {myKey: null}}); // {my_key: {my_key: null}}
```
> You can also pass in an array of simple or nested objects.

## API
### keys.toSnake(input)
#### input
Type: `object | object[]`

            
### keys.toCamel(input)
#### input
Type: `object | object[]`