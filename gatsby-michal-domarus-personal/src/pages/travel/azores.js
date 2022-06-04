import React from 'react';
import { graphql } from 'gatsby';
import Page from '../../components/Page';
import TravelGallery from '../../components/TravelGallery';

const Gallery = ({ data }) => <Page>
  <TravelGallery data={data} title={"Azores / Portugal"} />
</Page>;

export default Gallery;

export const query = graphql`
  query AzoresQuery {
  allCloudinaryMedia(filter: {secure_url: {regex: "/azores/"}}) {
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
