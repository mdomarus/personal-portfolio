import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { GalleryDataProps } from '../../../types';
import Page from '../../components/Page';
import TravelGallery from '../../components/TravelGallery';

const Gallery = ({ data }: PageProps<GalleryDataProps>) => <Page title={"Sicily / Italy"}>
  <TravelGallery data={data} />
</Page>;

export default Gallery;

export const query = graphql`
  query sicilyQuery {
  allCloudinaryMedia(filter: {secure_url: {regex: "/sicily/"}}) {
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
