function convertImageToCanvas(image) {
  const canvas = document.createElement('canvas');
  canvas.width = image.naturalWidth || image.width;
  canvas.height = image.naturalHeight || image.height;
  canvas.getContext('2d').drawImage(image, 0, 0);

  return canvas;
}

function filter(image, config) {
  const canvas = convertImageToCanvas(image);
  if (!config) {
    return canvas.toDataURL();
  }

  const { generate } = config;

  if (typeof generate === 'function') {
    generate(canvas, canvas.getContext('2d'));
    return canvas.toDataURL('image/jpeg');
  }
}

export default filter;
