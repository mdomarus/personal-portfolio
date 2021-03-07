/* eslint-disable camelcase */
const fs = require('fs');
const {
  getFixedImageObject,
  getFluidImageObject,
} = require('./get-image-objects');

exports.onPreExtractQueries = async ({ store }) => {
  const { program } = store.getState();

  function callback(err) {
    if (err) throw err;
  }

  await fs.copyFile(
    require.resolve('./fragments.js'),
    `${program.directory}/.cache/fragments/cloudinary-asset-fragments.js`,
    callback,
  );
};

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type CloudinaryAsset implements Node @dontInfer {
      fixed(
        chained: [String!]
        transformations: [String!]
        width: Int
      ): CloudinaryAssetFixed!

      fluid(
        chained: [String!]
        maxWidth: Int
        transformations: [String!]
      ): CloudinaryAssetFluid!
    }

    type CloudinaryAssetFixed {
      aspectRatio: Float
      height: Float
      src: String
      srcSet: String
      width: Float
    }

    type CloudinaryAssetFluid {
      aspectRatio: Float!
      sizes: String!
      src: String!
      srcSet: String!
    }
  `);
};

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    CloudinaryAsset: {
      fixed: {
        type: 'CloudinaryAssetFixed!',
        resolve: (
          {
            public_id, version, cloudName, originalHeight, originalWidth,
          },
          { chained, transformations, width },
        ) => getFixedImageObject({
          chained,
          cloudName,
          originalHeight,
          originalWidth,
          public_id,
          transformations,
          version,
          width,
        }),
      },
      fluid: {
        type: 'CloudinaryAssetFluid!',
        resolve: (
          {
            breakpoints,
            cloudName,
            originalHeight,
            originalWidth,
            public_id,
            version,
          },
          { chained, maxWidth, transformations },
        ) => getFluidImageObject({
          breakpoints,
          chained,
          cloudName,
          maxWidth,
          originalHeight,
          originalWidth,
          public_id,
          transformations,
          version,
        }),
      },
    },
  };

  createResolvers(resolvers);
};

exports.onCreateNode = async ({ node, actions, createNodeId }, options) => {
  if (node.format !== 'jpg') return;

  const imageNode = {
    // These helper fields are only here so the resolvers have access to them.
    // They will *not* be available via Gatsby’s data layer.
    breakpoints: [400, 800, 1200, 2400],
    cloudName: options.cloudName,
    originalHeight: node.height,
    originalWidth: node.width,
    public_id: node.public_id,
    version: node.version,

    // Add the required internal Gatsby node fields.
    id: createNodeId(`CloudinaryAsset-${node.id}`),
    parent: node.id,
    internal: {
      type: 'CloudinaryAsset',
      // Gatsby uses the content digest to decide when to reprocess a given
      // node. We can use the parent file’s digest to avoid doing extra work.
      contentDigest: node.internal.contentDigest,
    },
  };

  // Add the new node to Gatsby’s data layer.
  actions.createNode(imageNode);

  // Tell Gatsby to add `childCloudinaryAsset` to the parent `File` node.
  actions.createParentChildLink({ parent: node, child: imageNode });
};
