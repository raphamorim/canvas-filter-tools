function processRaphael(canvas, context) {
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;

  for (let i = 0; i < pixels.length; i += 4) {
    const red = pixels[i];
    const green = pixels[i + 1];
    const blue = pixels[i + 2];
    const alpha = pixels[i + 3];

    pixels[i] = 0.2 * red;
    pixels[i + 1] = 1 * green;
    pixels[i + 2] = 1 * blue;
    pixels[i + 3] = 1 * alpha;
  }

  context.putImageData(imageData, 0, 0);
};

export default {
  name: 'raphael',
  generate: processRaphael
}
