/* eslint-disable camelcase */
// todo: for fluid images when original width and height is not set, use width and height of image as is and make full width
// todo: investigate graphQL query overrides for width and height and abstract control to user through gql query

const DEFAULT_FIXED_WIDTH = 1200;
const DEFAULT_FLUID_MAX_WIDTH = 2400;

// Create Cloudinary image URL with transformations.
const getImageURL = ({
  chained = [],
  cloudName,
  defaults = ['f_auto', 'q_auto'],
  public_id,
  transformations = [],
  version = false,
}) => {
  const baseURL = 'https://res.cloudinary.com/';
  const allTransformations = [transformations.concat(defaults).join()]
    .concat(chained)
    .join('/');

  const imagePath = [
    cloudName,
    '/image/upload/',
    allTransformations,
    version ? `/v${version}/` : '/',
    public_id,
  ]
    .join('')
    .replace('//', '/');

  return baseURL + imagePath;
};

// retrieve aspect ratio if in transformation else create aspect ratio values
const getAspectRatio = (transformations, originalAspectRatio) => {
  const arTransform = transformations.find((t) => t.startsWith('ar_'));
  if (!arTransform) {
    return originalAspectRatio;
  }

  const newAspectRatio = arTransform.replace('ar_', '');
  if (newAspectRatio.indexOf(':') === -1) {
    return Number(newAspectRatio);
  }

  const [w, h] = newAspectRatio.split(':').map(Number);

  return w / h;
};

// Create shared image data for both fixed and fluid. Returns src and Base64
const getSharedImageData = async ({
  chained,
  cloudName,
  public_id,
  transformations,
  version,
}) => {
  const src = getImageURL({
    chained,
    cloudName,
    public_id,
    transformations,
    version,
  });

  return { src };
};

exports.getFixedImageObject = async ({
  chained = [],
  cloudName,
  originalHeight,
  originalWidth,
  public_id,
  transformations = [],
  version = false,
  width = DEFAULT_FIXED_WIDTH,
}) => {
  const { src } = await getSharedImageData({
    chained,
    cloudName,
    public_id,
    transformations,
    version,
  });

  const aspectRatio = getAspectRatio(
    transformations,
    originalWidth / originalHeight,
  );

  const sizes = [1, 1.5, 2, 3].map((size) => ({
    resolution: size,
    width: width * size,
  }));

  const srcSet = sizes
    .filter((size) => size.width <= originalWidth)
    .map((size) => {
      // Get URL for each image including user-defined transformations.
      const url = getImageURL({
        // Add the size at the end to override width for srcSet support.
        chained,
        cloudName,
        public_id,
        transformations: transformations.concat(`w_${size.width}`),
        version,
      });

      return `${url} ${size.resolution}x`;
    })
    .join();

  return {
    height: width / aspectRatio,
    src,
    srcSet,
    width,
  };
};

exports.getFluidImageObject = async ({
  breakpoints = [400, 800, 1200, 2400],
  chained = [],
  cloudName,
  maxWidth = DEFAULT_FLUID_MAX_WIDTH,
  originalHeight,
  originalWidth,
  public_id,
  transformations = [],
  version = false,
}) => {
  const aspectRatio = getAspectRatio(
    transformations,
    originalWidth / originalHeight,
  );
  const max = Math.min(maxWidth, originalWidth);
  const sizes = `(max-width: ${max}px) 100vw, ${max}px`;
  const { src } = await getSharedImageData({
    breakpoints,
    chained,
    cloudName,
    public_id,
    transformations,
    version,
  });

  const cleaned = breakpoints
    .concat(max) // make sure we get the max size
    .filter((w) => w <= max) // don’t add larger sizes
    .sort((a, b) => a - b); // sort in ascending order

  const deduped = [...new Set(cleaned)];

  const srcSet = deduped
    .map((breakpointWidth) => {
      // Get URL for each image including user-defined transformations.
      const url = getImageURL({
        // Add the size at the end to override width for srcSet support.
        chained,
        cloudName,
        public_id,
        transformations: transformations.concat(`w_${breakpointWidth}`),
        version,
      });

      return `${url} ${breakpointWidth}w`;
    })
    .join();

  return {
    aspectRatio,
    sizes,
    src,
    srcSet,
  };
};
