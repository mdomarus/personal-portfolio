require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Michał Domarus',
    description: 'Personal photography',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-132820524-1',
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
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
    {
      resolve: 'gatsby-source-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: 'image',
        prefix: 'personal',
        maxResults: 500,
      },
    },
    {
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        fluidMaxWidth: 2400,
      },
    },
  ],
};
