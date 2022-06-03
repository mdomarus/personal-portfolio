import React from 'react';
import { graphql } from 'gatsby';
import Slick from 'react-slick';
import Page from '../components/Page';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = ({ data }) => {

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
        {data?.allCloudinaryMedia?.nodes.map((node, index) => (
          <picture key={node.id}>
            <source srcSet={`${node.responsive.webp.normal}`} type="image/webp" />
            <source srcSet={node.responsive.jpg.normal} media="(min-width: 1200px)" />
            <source srcSet={`${node.responsive.jpg.medium} 1x, ${node.responsive.jpg.normal} 2x`} media="(min-width: 600px)" />
            <img src={node.responsive.jpg.small} loading={index < 5 ? 'eager' : 'lazy'} />
          </picture>
        ))}
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
      responsive {
        jpg {
          normal
          medium
          small
        }
        webp {
          normal
          medium
          small
        }
      }
    }
  }
}
`;
