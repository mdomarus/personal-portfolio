import { graphql } from 'gatsby';

export const cloudinaryAssetFluid = graphql`
  fragment CloudinaryAssetFluid on CloudinaryAssetFluid {
    aspectRatio
    sizes
    src
    srcSet
  }
`;

export const cloudinaryAssetFixed = graphql`
  fragment CloudinaryAssetFixed on CloudinaryAssetFixed {
    height
    src
    srcSet
    width
  }
`;
