import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Page from '../../components/Page';

const Gallery = ({ data }) => (
  <Page>
    <h1>Lake District / UK</h1>
    {data.allCloudinaryAsset.nodes.map(({ fluid }) => (
      <Img
        key={fluid.src}
        className="image"
        fluid={fluid}
        lazyload
      />
    ))}
  </Page>
);

Gallery.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Gallery;

export const query = graphql`
  query lakeDistrictQuery {
  allCloudinaryAsset(filter: {fluid: {src: {regex: "/lake-district/"}}}) {
    nodes {
      id
      fluid {
        aspectRatio
        src
        srcSet
        sizes
      }
    }
  }
}
`;
