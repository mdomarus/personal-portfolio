import React from 'react';
import { graphql } from 'gatsby';
import Page from '../../components/Page';
import TravelGallery from '../../components/TravelGallery';

const Gallery = ({ data }) => <Page title={"Azores / Portugal"}>
  <TravelGallery data={data} />
</Page>;

export default Gallery;

export const query = graphql`
  query AzoresQuery {
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
