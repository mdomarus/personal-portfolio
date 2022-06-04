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
          <img
            key={node.id}
            srcSet={`
            ${node.responsive.small} 600w,
            ${node.responsive.medium} 1200w,
            ${node.responsive.normal} 2400w
            `}
            src={node.responsive.small} loading={index < 5 ? 'eager' : 'lazy'} sizes={'(max-width: 799px) 100vw, 1400px'} className="image"
          />
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
          normal
          medium
          small
      }
    }
  }
}
`;
