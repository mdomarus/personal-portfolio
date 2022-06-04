import React from 'react';
import { graphql } from 'gatsby';
import Page from '../../components/Page';
import TravelGallery from '../../components/TravelGallery';

const Gallery = ({ data }) => <Page title={"Argentina"}>
  <TravelGallery data={data} />
</Page>;

export default Gallery;

export const query = graphql`
  query ArgentinaQuery {
  allCloudinaryMedia(filter: {secure_url: {regex: "/argentina2022/"}}) {
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
