import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { StaticQuery, graphql } from 'gatsby';
import Sidebar from './Sidebar';
import '../scss/style.scss';


const Layout = ({ children }) => (
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
            <div className="content">{children}</div>
          </div>
          <div className="copyright">{`©${year} Michał Domarus`}</div>

        </>
      );
    }}
  />
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.object,
};
//   render() {
//     const now = new Date();
//     const year = now.getFullYear();

//     const { children } = this.props;
//     return (
//       <React.Fragment>
//         <div className="page">
//           <Sidebar />
//           <div className="content">{children}</div>
//         </div>
//         <div className="copyright">{`©${year} Michał Domarus`}</div>
//       </React.Fragment>
//     );
//   }
// }

// export default Page;

// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;
