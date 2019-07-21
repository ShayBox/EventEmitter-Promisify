Just load the package by importing it

```js
require('eventemitter-promisify');

const error = await event.promisify('error')
console.log(error);
```

Works with Typescript!
```js
import 'eventemitter-promisify';

const error = await event.promisify('error')
console.log(error);
```