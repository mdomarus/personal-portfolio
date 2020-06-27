import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import get from 'lodash/get';
import useInterval from '../hooks/useInterval';
import Page from '../components/Page';

const Slider = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);

  const clImages = get(data, 'allCloudinaryAsset.nodes', []);
  const imagesCount = clImages.length;

  const cycleImage = () => {
    setSlide(slide === imagesCount - 1 ? 0 : slide + 1);
    setNextSlide(nextSlide === imagesCount - 1 ? 0 : nextSlide + 1);
  };

  useInterval(
    cycleImage, 3000,
  );

  return (
    <Page>
      <div className="slideshow">
        {imagesCount > 1
        && (
        <>
          <Img fluid={clImages[slide].fluid} className="image--active" />
          <Img fluid={clImages[nextSlide].fluid} className="image" />
        </>
        )}
      </div>
    </Page>
  );
};

export default Slider;

export const query = graphql`
  query slideshowQuery {
  allCloudinaryAsset(filter: {fluid: {src: {regex: "/home/"}}}) {
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
