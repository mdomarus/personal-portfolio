import React from 'react';
import { graphql } from 'gatsby';
import Page from '../../components/Page';
import TravelGallery from '../../components/TravelGallery';

const Gallery = ({ data }) => <Page>
  <TravelGallery data={data} title={"Rome / Italy"} />
</Page>;

export default Gallery;

export const query = graphql`
  query romeQuery {
  allCloudinaryMedia(filter: {secure_url: {regex: "/rome/"}}) {
    nodes {
      id
      responsive {
          normal
          medium
          small
      }
    }
  }
}
`;
