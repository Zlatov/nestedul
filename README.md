# NestedUl

![npm version](https://img.shields.io/npm/v/nestedul)
![npm downloads](https://img.shields.io/npm/dm/nestedul)
![license](https://img.shields.io/npm/l/nestedul)
[![npm](https://img.shields.io/npm/v/nestedul)](https://www.npmjs.com/package/nestedul)

NestedUl is a lightweight JavaScript library for rendering tree structures using standard nested HTML lists (`ul > li > ul`).

It converts a regular HTML list into an interactive expandable tree with minimal setup and no dependencies.

    ![NestedUl demo](docs/demo.gif)

Full documentation and live examples:

https://nestedul.zlatov.su


## Installation

    npm install nestedul


## Quick start

**HTML**

```html
<ul class="nestedul">
  <li>
    Root
    <ul>
      <li>Child</li>
      <li>Child</li>
    </ul>
  </li>
</ul>
```

**CSS**

```css
@import "nestedul";
```

**JS**

```js
import NestedUl from "nestedul"

document.addEventListener("DOMContentLoaded", () => {
  NestedUl.activate()
})
```


## Usage

### Bundler usage (Webpack, esbuild, Vite, Rails jsbundling, etc.)

    import NestedUl from "nestedul"

    document.addEventListener("DOMContentLoaded", () => {
      NestedUl.activate()
    })

If your project uses Turbo (for example Rails):

    import NestedUl from "nestedul"

    document.addEventListener("turbo:load", () => {
      NestedUl.activate()
    })


### Browser usage

    <link rel="stylesheet" href="nestedul.css">

    <script src="nestedul.iife.js"></script>

    <script>
      document.addEventListener("DOMContentLoaded", function () {
        NestedUl.activate()
      })
    </script>


## JS API

### activate(root?: Element/Document)

Initializes all `.nestedul` lists inside the specified container.

    NestedUl.activate()

Or inside a specific container:

    NestedUl.activate(document.querySelector("#container"))

Default root is `document`.


### destroy()

Removes event listeners and deactivates the library.

    NestedUl.destroy()


### version

Returns the current library version.

    console.log(NestedUl.version)


## CSS Interface

NestedUl behavior is controlled through CSS classes.


### .nestedul

Basic interactive tree. Displays the list as an interactive expandable tree.


### .nestedul.nestedul-static

Disable expand/collapse.


### .nestedul.nestedul-narrow

Displays a more compact tree layout.


### .nestedul.nestedul-narrow.nestedul-static

Compact layout without expand/collapse behavior.


### li.nestedul-close

To make a node collapsed on page load.


## Why NestedUl

*   No dependencies
*   Works with plain HTML lists
*   Very small footprint
*   Easy integration
*   Works with modern bundlers


## License

ISC
