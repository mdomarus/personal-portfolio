import React from 'react';
import { graphql } from 'gatsby';
import Page from '../../components/Page';
import TravelGallery from '../../components/TravelGallery';

const Gallery = ({ data }) => <Page>
  <TravelGallery data={data} title={"Sicily / Italy"} />
</Page>;

export default Gallery;

export const query = graphql`
  query sicilyQuery {
  allCloudinaryMedia(filter: {secure_url: {regex: "/sicily/"}}) {
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
