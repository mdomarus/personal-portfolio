import React from 'react';
import { graphql } from 'gatsby';
import Page from '../../components/Page';
import TravelGallery from '../../components/TravelGallery';

const Gallery = ({ data }) => <Page>
  <TravelGallery data={data} title={"Israel"} />
</Page>;

export default Gallery;

export const query = graphql`
  query IsraelQuery {
  allCloudinaryMedia(filter: {secure_url: {regex: "/israel/"}}) {
    nodes {
      id
      responsive {
        jpg {
          normal
          medium
          small
        }
        webp {
          normal
          medium
          small
        }
      }
    }
  }
}
`;
