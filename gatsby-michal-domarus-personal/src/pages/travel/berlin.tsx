import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { GalleryDataProps } from '../../../types';
import Page from '../../components/Page';
import TravelGallery from '../../components/TravelGallery';

const Gallery = ({ data }: PageProps<GalleryDataProps>) => <Page title={"Berlin / Germany"}>
  <TravelGallery data={data} />
</Page>;

export default Gallery;

export const query = graphql`
  query BerlinQuery {
  allCloudinaryMedia(filter: {secure_url: {regex: "/berlin/"}}) {
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
