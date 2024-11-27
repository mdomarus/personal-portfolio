import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { GalleryDataProps } from '../../../types';
import Page from '../../components/Page';
import SEO from '../../components/SEO';
import TravelGallery from '../../components/TravelGallery';

const TITLE = "Azores / Portugal";

export const Head = () => {
  return <SEO pageTitle={TITLE} />;
}

const Gallery = ({ data }: PageProps<GalleryDataProps>) => <Page title={TITLE}>
  <TravelGallery data={data} />
</Page>;

export default Gallery;

export const query = graphql`
  query {
  allCloudinaryMedia(filter: {secure_url: {regex: "/azores/"}}) {
    nodes {
      id
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
