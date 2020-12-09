# Canvas Image Filter

[See it working on the demo](http://raphamorim.io/canvas-filter-tools/)

```jsx
import filter, { blackAndWhite } from 'canvas-image-filter';

const image = document.querySelector('#image');

image.src = filter(image, blackAndWhite); // image base64
```

```jsx
import filter from 'canvas-image-filter/wasm'; // powered by WebAssembly and Rust
import { sepia } from 'canvas-image-filter';

const image = document.querySelector('#image');

image.src = wasmFilter(image, blackAndWhite); // image base64
```

# Built-in Filters

- BlackAndWhite
- Sepia
- Raphael
- Francis
- Benjamin
