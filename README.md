# browser-vendor-prefix

[![Build Status](https://travis-ci.org/UXtemple/browser-vendor-prefix.svg?branch=master)](https://travis-ci.org/UXtemple/browser-vendor-prefix)

Browser vendor prefixes exported as JSON objects.

It will provide sensible defaults for browsers that are lacking unprefixed styles.
It's based on [autoprefix](https://github.com/UXtemple/autoprefix)'s output and it works great with
[spread operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).

```js
import { alignItemsCenter, flexDirectionRow } from 'browser-vendor-prefix';

const style = {
  ...alignItemsCenter,
  ...flexDirectionRow,
  marginTop: 10
};
```

MIT license.

Made with <3 by [UXtemple](https://github.com/UXtemple).
