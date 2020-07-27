import React from 'react';
import { graphql } from 'gatsby';
import Slick from 'react-slick';
import Img from 'gatsby-image';
import get from 'lodash/get';
import Page from '../components/Page';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = ({ data }) => {
  const clImages = get(data, 'allCloudinaryAsset.nodes', []);

  const settings = {
    autoplay: true,
    infinite: true,
    lazyLoad: false,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Page>
      <Slick {...settings}>
        {clImages.map(({ fluid }) => <Img fluid={fluid} key={fluid} />)}
      </Slick>
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
