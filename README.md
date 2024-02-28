# BinarySearch

This library implements an easy-to-use binary search function that can be used to find elements in sorted arrays.

## Installation

Here is how to install the module to your projects:

### ES6 module

This is the recommended way as it leverages a modern and elegant approach to importing modules, which is supported in all actively maintained JavaScript environments.

```js
import BinarySearch from './path/to/BinarySearch.mjs';
```

### Browsers

```html
<script src = "./path/to/BinarySearch.min.js"></script>
```

### Common.js

```js
const BinarySearch = require('./path/to/BinarySearch.min.js');
```

### AMD

```js
requirejs(['./path/to/BinarySearch.min.js'], function(BinarySearch) {
  // ...
});
```

## Usage

After importing it you can start to use BinarySearch.
The function `BinarySearch` should never be constructed or invoked, instead check it's static methods:

```js
const users = [
  { name: 'Marie', age: 26 },
  { name: 'Alexander', age: 31 },
  { name: 'Natan', age: 27 },
  { name: 'Eleanor', age: 33 },
];

users.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  }
  return 0;
});

console.log('Alexander is located at index:', BinarySearch.getIndex(users, v => v.name, 'Alexander'));
console.log("Eleanor's age is:", BinarySearch.getValue(users, v => v.name, 'Eleanor').age);
```
