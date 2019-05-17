import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import useInterval from '../hooks/useInterval';
import Page from '../components/Page';

const Slider = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const cycleImage = () => {
    const imagesCount = data.images.edges.length - 1;
    setSlide(slide === imagesCount ? 0 : slide + 1);
  };

  useInterval(
    cycleImage, 2000,
  );

  return (
    <Page>
      <div className="slideshow">
        {data.images.edges.map((el, index) => {
          const classes = index === slide
            ? 'image image--active'
            : 'image';
          return (
            <Img key={`${el.node.originalName}${index * 2}`} className={classes} fluid={el.node.childImageSharp.fluid} loading="eager" />
          );
        })}
      </div>
    </Page>
  );
};

export default Slider;

Slider.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query {
    images: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativePath: { regex: "/slideshow/" }
      }
      # sort: { order: ASC, fields: [name] }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 75) {
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
  }
`;
