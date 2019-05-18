const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Michał Domarus',
    description: 'Personal photography',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Roboto Condensed',
            subsets: ['latin-ext'],
            variants: ['400', '700'],
          },
          {
            family: 'Montserrat',
            subsets: ['latin-ext'],
            variants: ['400', '700'],
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-78670201-6',
      },
    },
  ],
};
