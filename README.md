# NestedUl

![npm version](https://img.shields.io/npm/v/nestedul)
![npm downloads](https://img.shields.io/npm/dm/nestedul)
![license](https://img.shields.io/npm/l/nestedul)

NestedUl is a lightweight JavaScript library for rendering tree structures using standard nested HTML lists (`ul > li > ul`).

It converts a regular HTML list into an interactive expandable tree with minimal setup and no dependencies.

Full documentation and live examples:

https://nestedul.zlatov.su


## Installation

### NPM

    npm install nestedul


## Usage

NestedUl works with a standard HTML nested list structure.

Example:

    <ul class="nestedul">
      <li>
        Root
        <ul>
          <li>Child</li>
          <li>Child</li>
        </ul>
      </li>
    </ul>

After the page loads, activate the library.

    ![NestedUl demo](docs/demo.gif)


### Import usage (Webpack, esbuild, Vite, Rails jsbundling, etc.)

    import NestedUl from "nestedul"

    NestedUl.activate()

If your project uses Turbo (for example Rails):

    import NestedUl from "nestedul"

    document.addEventListener("turbo:load", () => {
      NestedUl.activate()
    })


### Script tag usage

    <link rel="stylesheet" href="nestedul.css">

    <script src="nestedul.iife.js"></script>

    <script>
      document.addEventListener("DOMContentLoaded", function () {
        NestedUl.activate()
      })
    </script>


### API

#### activate(root)

Initializes all `.nestedul` lists inside the specified container.

    NestedUl.activate()

Or inside a specific container:

    NestedUl.activate(document.querySelector("#container"))

Default root is `document`.


#### destroy()

Removes event listeners and deactivates the library.

    NestedUl.destroy()


#### version

Returns the current library version.

    console.log(NestedUl.version)


### CSS Interface

NestedUl behavior is controlled through CSS classes.


#### Basic tree

    <ul class="nestedul">

Displays the list as an interactive expandable tree.


#### Static tree

    <ul class="nestedul nestedul-static">

Nodes cannot be expanded or collapsed.


#### Compact mode

    <ul class="nestedul nestedul-narrow">

Displays a more compact tree layout.


#### Compact static tree

    <ul class="nestedul nestedul-narrow nestedul-static">

Compact layout without expand/collapse behavior.


#### Initially closed nodes

To make a node collapsed on page load:

    <li class="nestedul-close">


## Why NestedUl

*   No dependencies
*   Works with plain HTML lists
*   Very small footprint
*   Easy integration
*   Works with modern bundlers


## Examples and documentation

See full documentation and interactive demos:

https://nestedul.zlatov.su


## License

ISC License

Copyright (c) Zlatov

Permission to use, copy, modify, and distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS.
