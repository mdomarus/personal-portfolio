import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { GalleryDataProps } from '../../../types';
import Page from '../../components/Page';
import TravelGallery from '../../components/TravelGallery';

const Gallery = ({ data }: PageProps<GalleryDataProps>) => <Page title={"Israel"}>
  <TravelGallery data={data} />
</Page>;

export default Gallery;

export const query = graphql`
  query IsraelQuery {
  allCloudinaryMedia(filter: {secure_url: {regex: "/israel/"}}) {
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
