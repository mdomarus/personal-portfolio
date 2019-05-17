import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Sidebar from './Sidebar';
import BackToTop from './BackToTop';
import '../scss/style.scss';

const Page = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            description
          }
        }
      }
    `}
    render={(data) => {
      const now = new Date();
      const year = now.getFullYear();
      return (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: 'photography, street photography, travel photography' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <div className="page">
            <Sidebar />
            <div className="content">
              {children}
            </div>
            <BackToTop />
          </div>
          <div className="copyright">{`©${year} Michał Domarus`}</div>
        </>
      );
    }}
  />
);

export default Page;

Page.propTypes = {
  children: PropTypes.object,
};
