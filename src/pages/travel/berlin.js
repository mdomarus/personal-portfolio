import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Page from '../../components/Page';

const Gallery = ({ data: { images: { edges: images } } }) => (
  <Page>
    <h1>Berlin / Germany</h1>
    {images.map(({ node: { childImageSharp: { fluid } } }) => (
      <Img
        key={fluid.originalName}
        className="image"
        fluid={fluid}
      />
    ))}
  </Page>
);

Gallery.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Gallery;

export const query = graphql`
  query {
    images: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativePath: { regex: "/berlin/" }
      }
      sort: { order: ASC, fields: [name] }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 75) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
        }
      }
    }
  },

`;