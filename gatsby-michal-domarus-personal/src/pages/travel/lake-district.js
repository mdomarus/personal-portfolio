import React from 'react';
import { graphql } from 'gatsby';
import Page from '../../components/Page';
import TravelGallery from '../../components/TravelGallery';

const Gallery = ({ data }) => <Page>
  <TravelGallery data={data} title={"Lake District / UK"} />
</Page>;

export default Gallery;

export const query = graphql`
  query LakeQuery {
  allCloudinaryMedia(filter: {secure_url: {regex: "/lake-district/"}}) {
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
