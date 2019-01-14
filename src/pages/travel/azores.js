import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Page from '../../components/Page';

const Azores = ({ data }) => (
  <Page>
    <h1>Azores / Portugal</h1>
    {data.images.edges.map(el => (
      <Img
        key={el.node.childImageSharp.fluid.originalName}
        className="image"
        fluid={el.node.childImageSharp.fluid}
      />
    ))}
  </Page>
);

Azores.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Azores;

export const query = graphql`
  query {
    images: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativePath: { regex: "/azores/" }
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
