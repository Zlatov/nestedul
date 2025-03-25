# NestedUl

Make multi-level nested UL lists as trees and add child element disclosure.


## Install

```sh
$ npm install --save nestedul
# or
$ yarn add nestedul
```

## Usage

### Browser

```html
  <!-- CSSStyleSheet -->
  <link rel="stylesheet" type="text/css" href="node_modules/nestedul/css/nestedul.css">
  <!-- JS (If you need a drop down list) -->
  <script type="text/javascript" src="node_modules/jquery/dist/jquery.min.js"></script>
  <script type="text/javascript" src="node_modules/nestedul/js/nestedul.js"></script>
  <script type="text/javascript" src="index.js">
    $(document).ready(function() {
      NestedUl.activate()
    })
  </script>
```

### Node.js

```css
@import "nestedul/css/nestedul.css";
```

```js
import NestedUl from "nestedul"

$(document).on('turbo:load', function() { // Or your code is similar to $(document).ready(function() {
  NestedUl.activate()
})
```
