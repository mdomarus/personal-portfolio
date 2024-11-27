import React from 'react';
import { graphql } from 'gatsby';
import Page from '../../components/Page';
import TravelGallery from '../../components/TravelGallery';

const Gallery = ({ data }) => <Page title={"Mexico"}>
  <TravelGallery data={data} />
</Page>;

export default Gallery;

export const query = graphql`
  query MexicoQuery {
  allCloudinaryMedia(filter: {secure_url: {regex: "/mexico/"}}) {
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
