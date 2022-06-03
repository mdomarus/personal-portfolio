import React from 'react';
import { graphql } from 'gatsby';
import Page from '../../components/Page';
import TravelGallery from '../../components/TravelGallery';

const Gallery = ({ data }) => <Page>
  <TravelGallery data={data} title={"Jordan"} />
</Page>;

export default Gallery;

export const query = graphql`
  query jordanQuery {
  allCloudinaryMedia(filter: {secure_url: {regex: "/jordan/"}}) {
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
