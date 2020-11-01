<!-- markdownlint-disable -->
<p align="center">
    <img src="https://raw.githubusercontent.com/shhdharmen/keyboard-css/main/src/copy/assets/logo.png" alt="Keyboard CSS Logo">
</p>

<p align="center">
    <i>Show off your keyboard shortcuts with style 🦄.</i>
</p>

<p align="center">
    <img src="https://raw.githubusercontent.com/shhdharmen/keyboard-css/main/src/copy/assets/demo.gif" alt="Keyboard CSS Demo">
</p>
<!-- markdownlint-restore -->

# Keyboard CSS <!-- omit in toc -->

Keyboard CSS is a library of ready-to-use, cross-browser compatible keyboard like button UI for use in your web projects. Great for showing off your keyboard shortcuts.

[![npm](https://img.shields.io/npm/v/keyboard-css?style=flat-square)](https://www.npmjs.com/package/keyboard-css)
[![GitHub license](https://img.shields.io/github/license/shhdharmen/keyboard-css?style=flat-square)](https://github.com/shhdharmen/keyboard-css/blob/main/LICENSE)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
    - [Usage with `kbd`](#usage-with-kbd)
    - [Usage with `button` and `a`](#usage-with-button-and-a)
  - [Remove Surface Border](#remove-surface-border)
  - [Sizing](#sizing)
  - [States](#states)
  - [Colors](#colors)
- [Usage with Javascript](#usage-with-javascript)
- [Advanced Configuration Options with SASS](#advanced-configuration-options-with-sass)
  - [Variables file](#variables-file)
  - [Change font size](#change-font-size)
  - [Add new size](#add-new-size)
  - [Change depth](#change-depth)
- [License and Contributing](#license-and-contributing)
  - [Contributing](#contributing)
  - [Code of Conduct](#code-of-conduct)
- [Contributors ✨](#contributors-)

## Installation

Add it directly to your webpage using a `link` tag, thanks to <https://unpkg.com>:

```html
<link rel="stylesheet" href="https://unpkg.com/keyboard-css/css/main.min.css" />
```

or install it with npm:

```bash
npm i keyboard-css
```

with yarn:

```bash
yarn add keyboard-css
```

## Usage

According to [W3C](https://www.w3.org/TR/2011/WD-html5-author-20110809/the-kbd-element.html), the `kbd` element represents user input (typically keyboard input, although it may also be used to represent other input, such as voice commands).

The main purpose of Keyboard CSS is to enhance look and feel such `kbd` elements, but it can also be used with `button` and `a` elements, for better interactivity (like simulating click).

### Basic Usage

You just have to add a single class to `kbd`, `button` or `a` to apply the related styles, i.e. **`kbc-button`**

#### Usage with `kbd`

When `.kbc-button` is used with `kbd` element, font-size and line-height is inherited from parent for better accessibility.

```html
<h3>Press <kbd class="kbc-button">/</kbd> to search this site.</h3>
<p>Press <kbd class="kbc-button">Ctrl</kbd> + <kbd class="kbc-button">Shift</kbd> + <kbd class="kbc-button">R</kbd> to re-render this page.</p>
```

![kbd](https://cdn.hashnode.com/res/hashnode/image/upload/v1604225546161/lUeN3BJzF.png)

#### Usage with `button` and `a`

When used with button and a elements, it starts supporting interactions.

```html
<button class="kbc-button">K</button>
<a class="kbc-button">K</a>
```

![.kbc-button](https://cdn.hashnode.com/res/hashnode/image/upload/v1604125963109/kn4Fi5C1y.png)

### Remove Surface Border

To remove surface border, simply add `no-container` class.

```html
<kbd class="kbc-button no-container">K</kbd>
```

![.kbc-button.no-container](https://cdn.hashnode.com/res/hashnode/image/upload/v1604126020814/45uX1tLO5.png)

### Sizing

Total 5 sizes are available. You can add respective class to see the effect.

> Sizing works with `button` and `a` elements, and not `kbd` element.

| Size              | Use case                                    | Class             |
| ----------------- | ------------------------------------------- | ----------------- |
| Extra-extra Small | In inputs, like searchbox                   | `.kbc-button-xxs` |
| Extra Small       | In links, like footer or credit             | `.kbc-button-xs`  |
| Small             | Same as above, but for more prominent cases | `.kbc-button-sm`  |
| Large             | In banners or jumbotrons                    | `.kbc-button-lg`  |

```html
<button class="kbc-button kbc-button-xxs">XXS</button>
<button class="kbc-button kbc-button-xs">XS</button>
<button class="kbc-button kbc-button-sm">SM</button>
<button class="kbc-button">MD</button>
<button class="kbc-button kbc-button-lg">LG</button>
```

![kbc-button sizes](https://cdn.hashnode.com/res/hashnode/image/upload/v1604132299890/8IjYhtfAf.png)

### States

> States work with `button` and `a` elements, and not `kbd` element.

Like all buttons, this also have 4 states: `:hover`, `:focus`, `:active`, and `:disabled`. You can add classes with same state name to see it statically.

```html
<button class="kbc-button hover">Hovered</button>
<button class="kbc-button focus">Focused</button>
<button class="kbc-button active">Activated</button>
<button class="kbc-button disabled">Disabled</button>
```

![.kbc-button states](https://cdn.hashnode.com/res/hashnode/image/upload/v1604132353928/DdPzXHfOz.png)

### Colors

Colors are inspired from [Bootstrap theme colors](https://getbootstrap.com/docs/4.5/getting-started/theming/#theme-colors).

```html
<kbd> class="kbc-button">Default</kbd>
<kbd> class="kbc-button kbc-button-primary">Primary</kbd>
<kbd> class="kbc-button kbc-button-secondary">Secondary</kbd>
<kbd> class="kbc-button kbc-button-success">Success</kbd>
<kbd> class="kbc-button kbc-button-danger">Danger</kbd>
<kbd> class="kbc-button kbc-button-info">Info</kbd>
<kbd> class="kbc-button kbc-button-light">Light</kbd>
<kbd> class="kbc-button kbc-button-dark">Dark</kbd>
```

![.kbc-button colors](https://cdn.hashnode.com/res/hashnode/image/upload/v1604132409394/Wx4yypH83.png)

## Usage with Javascript

You can do a whole bunch of other stuff with Keyboard CSS when you combine it with Javascript. A simple example:

```javascript
const element = document.querySelector('.my-element');
element.classList.add('kbc-button', 'kbc-button-dark');
```

You can also bind keyboard events:

```html
<button class="kbc-button" data-keyboard-key="K">K</button>
```

```javascript
document.addEventListener('keydown', (ev) => {
    const key = ev.key;
    const element = document.querySelector(
        '[data-keyboard-key="' + key.toUpperCase() + '"]'
    );
    element.classList.add('active');
});

document.addEventListener('keyup', (ev) => {
    const key = ev.key;
    const element = document.querySelector(
        '[data-keyboard-key="' + key.toUpperCase() + '"]'
    );
    element.classList.remove('active');
});
```

## Advanced Configuration Options with SASS

I have used [sass](https://sass-lang.com/) to create this build. Mostly, everything is handled through [sass variables](https://sass-lang.com/documentation/variables), so you can easily override the defaults, thanks to [!default](https://sass-lang.com/documentation/variables#default-values) flag.

### Variables file

You can check all the variables at [_variables.scss](https://github.com/shhdharmen/keyboard-css/blob/main/src/scss/abstracts/_variables.scss) file.

### Change font size

To change the default base font-size of `button` and `a` elements, to 20px, you can do like below:

```scss
// assuming you have already done: npm i keyboard-css

// define variables first
$kbc-font-size-base: 20 / 16 * 1rem;

// and then import
@import "path/to/node_modules/keyboard-css/dist/scss/main";
```

or with new [@use](https://sass-lang.com/documentation/at-rules/use) rule, you can achieve the same using below code:

```scss
// assuming you have already done: npm i keyboard-css

@use "path/to/node_modules/keyboard-css/dist/scss/main" with (
    $kbc-font-size-base: 20 / 16 * 1rem
);
```

### Add new size

You can also introduce your new size:

```scss
// add size in $kbc-btn-size-map
$kbc-btn-size-map: (
  "xl": (
    "padding-y": 0.75rem,
    "padding-x": 1.25rem,
    "font-size": 1.5rem,
    "line-height": 1.5,
    "depth": 11,
    "after-border-width": 0.125rem,
    "after-adjust-x": -0.125rem,
    "after-adjust-y": -5,
    "after-border-radius": 0.5rem,
  ),
);

// and then import
@import "path/to/node_modules/keyboard-css/dist/scss/main";
```

And then use it in HTML:

```html
<button class="kbc-button kbc-button-xl">XL Button</button>
```

### Change depth

Depth is calculated and applied as multiple shadows. To increase/decrease it, you can change respective variables:

```scss
// add size in $kbc-btn-size-map
$kbc-kbd-depth: 4;

// and then import
@import "path/to/node_modules/keyboard-css/dist/scss/main";
```

## License and Contributing

Keyboard CSS is licensed under the [MIT](https://github.com/shhdharmen/keyboard-css/blob/main/LICENSE) license. And same is available on Github:

%[https://github.com/shhdharmen/keyboard-css]

### Contributing

🙏 I would ❤️ for you to contribute to Keyboard CSS and help make it even better than it is today! Checkout [contributing](https://github.com/shhdharmen/keyboard-css/blob/main/CONTRIBUTING.md) guidelines for more details.

### Code of Conduct

This project and everyone participating in it are governed by the [Contributor Covenant Code of Conduct](https://github.com/shhdharmen/keyboard-css/blob/main/CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to <shhdharmen@gmail.com>.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/shhdharmen"><img src="https://avatars3.githubusercontent.com/u/6831283?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dharmen Shah</b></sub></a><br /><a href="https://github.com/Dharmen Shah/keyboard-css/commits?author=shhdharmen" title="Code">💻</a> <a href="#content-shhdharmen" title="Content">🖋</a> <a href="#design-shhdharmen" title="Design">🎨</a> <a href="https://github.com/Dharmen Shah/keyboard-css/commits?author=shhdharmen" title="Documentation">📖</a> <a href="#ideas-shhdharmen" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
