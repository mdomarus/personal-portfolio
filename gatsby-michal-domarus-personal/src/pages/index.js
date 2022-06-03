import React from 'react';
import { graphql } from 'gatsby';
import Slick from 'react-slick';
import { GatsbyImage } from 'gatsby-plugin-image';
import get from 'lodash/get';
import Page from '../components/Page';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = ({ data }) => {
  const clImages = get(data, 'allImageSharp.nodes', []);

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
        {clImages.map(({ fluid }) => <GatsbyImage fluid={fluid} key={fluid} />)}
      </Slick>
    </Page>
  );
};

export default Slider;

export const query = graphql`
  query slideshowQuery {
  allCloudinaryMedia(filter: {secure_url: {regex: "/home/"}}) {
    nodes {
      id
      secure_url
      width
      height
    }
  }
}
`;
