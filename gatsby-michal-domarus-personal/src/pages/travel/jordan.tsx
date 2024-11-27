import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { GalleryDataProps } from '../../../types';
import Page from '../../components/Page';
import TravelGallery from '../../components/TravelGallery';

const Gallery = ({ data }: PageProps<GalleryDataProps>) => <Page title={"Jordan"}>
  <TravelGallery data={data} />
</Page>;

export default Gallery;

export const query = graphql`
  query jordanQuery {
  allCloudinaryMedia(filter: {secure_url: {regex: "/jordan/"}}) {
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
