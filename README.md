[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

# hex2rgb-plus

The script allows you to convert hex color to rgb

## Install

```sh
npm i hex2rgb-plus
```

## Usage

### from hex to rgb

```ts
import hex2rgb from "hex2rgb-plus"

let rgb_type_1 = hex2rgb.rgb2hex(0, 130, 195) // => '#0082c3'

let rgb_type_2 = hex2rgb.rgb2hex("rgba(0, 130, 195,1)") // => '#0082c3'
```

### from rgb to hex

```ts
import hex2rgb from "hex2rgb-plus"
let rgb = hex2rgb.hex2rgb("#0082c3") // => {r: 0, g: 130, b: 195, rgba: 'rgba(0,130,195,1)'}
```

[npm-image]: https://img.shields.io/npm/v/hex2rgb-plus.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/hex2rgb-plus
[downloads-image]: https://img.shields.io/npm/dm/hex2rgb-plus.svg?style=flat-square
[downloads-url]: https://www.npmjs.com/package/hex2rgb-plus
