const cloudinary = require('cloudinary').v2;
const snakeCase = require('lodash.snakecase');

const DEFAULT_KEYS = ['resourceType', 'prefix', 'tags', 'maxResults', 'type', 'context'];
const DEFAULT_TYPE = 'upload';

const getResourceOptions = (options) => {
  const result = {};

  DEFAULT_KEYS.forEach((key) => {
    if (typeof options[key] !== 'undefined') {
      result[snakeCase(key)] = options[key];
    }
  });

  result.type = result.type || DEFAULT_TYPE;

  return result;
};

const type = 'CloudinaryMedia';

const getNodeData = (gatsby, media) => ({
  ...media,
  id: gatsby.createNodeId(`cloudinary-media-${media.public_id}`),
  parent: null,
  internal: {
    type,
    content: JSON.stringify(media),
    contentDigest: gatsby.createContentDigest(media),
  },
});

const addTransformations = (resource, transformation, secure) => {
  const splitURL = secure ? resource.secure_url.split('/') : resource.url.split('/');
  splitURL.splice(6, 0, transformation);

  const transformedURL = splitURL.join('/');
  return transformedURL;
};

const createCloudinaryNodes = async (
  gatsby,
  options,
) => {
  cloudinary.config({
    cloud_name: options.cloudName,
    api_key: options.apiKey,
    api_secret: options.apiSecret,
  });

  const resourceOptions = getResourceOptions(options);

  const fetchBatch = () => cloudinary.api.resources(
    resourceOptions,
    (error, result) => {
      const hasResources = (result && result.resources && result.resources.length);

      if (error) {
        console.error(error);
        return;
      }

      if (!hasResources) {
        console.warn('\n ~Yikes! No nodes created because no Cloudinary resources found. Try a different query?');
        return;
      }

      if (result.next_cursor) {
        resourceOptions.next_cursor = result.next_cursor;
        fetchBatch();
      }

      result.resources.forEach((resource) => {
        const transformations = 'q_auto,f_auto';
        resource.url = addTransformations(resource, transformations);
        resource.secure_url = addTransformations(resource, transformations, true);

        const nodeData = getNodeData(gatsby, resource);
        gatsby.actions.createNode(nodeData);
      });

      console.info(`Added ${hasResources} CloudinaryMedia ${hasResources > 1 ? 'nodes' : 'node'}`);
    },
  );

  await fetchBatch();
};
exports.sourceNodes = createCloudinaryNodes;
