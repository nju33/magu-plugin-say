# magu-plugin-say

[Magu](https://github.com/nju33/magu) plugin that say something a little.

[![Build Status](https://travis-ci.org/nju33/magu-plugin-say.svg?branch=master)](https://travis-ci.org/nju33/magu-plugin-say) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) ![Dependencies Status](https://david-dm.org/nju33/diz-plugin-say.svg)

## Install

```bash
yarn add magu-plugin-say
npm install magu-plugin-say
```

## Usage

```js
magu({}, [say({
  // required
  icon: 'path/or/url/to/your/icon'
  // default
  // Target element
  selector: 'say',
  // default
  // Element template to rewrite
  // Using sindresorhus/pupa
  markup: `
<aside class=say__box>
  <div class=say__img style="{backgroundImage}"></div>
  <div class=say__text>{inner}</div>
  </div>
</aside>
  `
})])
  .process(`${__dirname}/example.md`)
  .then(result => console.log(result.html));
```

## Example

Markdown is like this.

```js
# example

<say>
aiueo

あいうえお
</say>
```

Conversion result is this.

```html
<h1 id="example">example</h1>

<aside class="say__box">
  <div class="say__img" style="background-image:url(https://images.unsplash.com/photo-1433878665141-d6ceaf394ae2?ixlib=rb-0.3.5&q=80&fm
=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&s=30f27c9f725e5ae6125609c3d2f1de6a)"></div>
  <div class="say__text">
    <p>aiueo</p>
    <p>あいうえお</p>
  </div>
</aside>
```

## License

The MIT License (MIT)

Copyright (c) 2016 nju33 <nju33.ki@gmail.com>
