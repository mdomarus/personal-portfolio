import React from 'react';
import { graphql } from 'gatsby';
import Page from '../../components/Page';
import TravelGallery from '../../components/TravelGallery';

export const Head = ({ location, params, data, pageContext }) => (
  <>
    <title>{data.site.siteMetadata.title}</title>
    <meta name="description" content={data.site.siteMetadata.description} />
    <meta name="paris" />
  </>
)

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
