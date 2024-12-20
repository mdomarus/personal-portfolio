import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Slick, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { GalleryDataProps } from '../../types';
import Page from '../components/Page';
import SEO from '../components/SEO';

export const Head = () => {
  return <SEO />;
}

const Slider = ({ data }: PageProps<GalleryDataProps>) => {
  const settings: Settings = {
    autoplay: true,
    infinite: true,
    lazyLoad: 'progressive',
    fade: true,
    speed: 500,
    slidesToScroll: 1,
  };

  return (
    <Page>
      <Slick {...settings}>
        {data?.allCloudinaryMedia?.nodes.map((node) => (
          <img
            key={node.id}
            srcSet={`
            ${node.responsive.small} 600w,
            ${node.responsive.medium} 1200w,
            ${node.responsive.normal} 2400w
            `}
            src={node.responsive.small}
            sizes={'(max-width: 799px) 100vw, 1400px'}
            className="image"
            width={node.width}
            height={node.height}
            alt=""
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
