# Canvas Image Filter

```jsx
import filter, { blackAndWhite } from 'canvas-image-filter'

const image = document.querySelector('#image');

image.src = filter(image, blackAndWhite); // image base64
```

# Filters

- BlackAndWhite
- Sepia
- Raphael
- Francis
- Benjamin
