import 'dotenv/config'

const config = {
  siteMetadata: {
    title: 'Michał Domarus',
    description: 'Personal photography',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto Condensed:400,700:latin-ext', 'Montserrat:400,700:latin-ext']
        }
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
  ],
};

export default config;