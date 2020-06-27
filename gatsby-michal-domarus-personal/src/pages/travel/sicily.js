import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Page from '../../components/Page';

const Gallery = ({ data }) => (
  <Page>
    <h1>Sicily / Italy</h1>
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
  query sicilyQuery {
  allCloudinaryAsset(filter: {fluid: {src: {regex: "/sicily/"}}}) {
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
