import React from 'react';
import { graphql } from 'gatsby';
import Page from '../../components/Page';
import TravelGallery from '../../components/TravelGallery';

const Gallery = ({ data }) => <Page title={"Paris / France"}>
  <TravelGallery data={data} />
</Page>;

export default Gallery;

export const query = graphql`
  query parisQuery {
  allCloudinaryMedia(filter: {secure_url: {regex: "/paris/"}}) {
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
