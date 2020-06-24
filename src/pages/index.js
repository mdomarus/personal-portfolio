import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import useInterval from '../hooks/useInterval';
import Page from '../components/Page';

const Slider = () => {
  const [slide, setSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const data = useStaticQuery(graphql`
  query MyQuery {
  allCloudinaryAsset(filter: {fluid: {src: {regex: "/slideshow/"}}}) {
    nodes {
      fluid {
        aspectRatio
        src
        srcSet
        sizes
      }
    }
  }
}


`);
  const clImages = data.allCloudinaryAsset.nodes;

  const cycleImage = () => {
    const imagesCount = clImages.length;
    setSlide(slide === imagesCount - 1 ? 0 : slide + 1);
    setNextSlide(nextSlide === imagesCount - 1 ? 0 : nextSlide + 1);
  };

  useInterval(
    cycleImage, 3000,
  );

  return (
    <Page>
      <div className="slideshow">
        <Img fluid={clImages[slide].fluid} className="image--active" />
        <Img fluid={clImages[nextSlide].fluid} className="image" />
      </div>
    </Page>
  );
};

export default Slider;
