module.exports = {
  siteMetadata: {
    title: 'Jorge Mancheno, Product Designer',
    author: 'Jorge Mancheno',
    description: 'Jorge Mancheno is a product designer and front-end developer based in Brooklyn, NY.',
    siteUrl: 'http://jorgemancheno.com',
    email: 'hello@jorgemancheno.com',
    dribbbleUrl: 'https://dribbble.com/jorgemancheno',
    githubUrl: 'https://github.com/jorgemancheno',
    twitterUrl: 'https://twitter.com/jorgemancheno',
    twitterHandle: '@jorgemancheno',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1024,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-10105364-1',
        anonymize: true,
        respectDNT: true,
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          `nunito sans\:400,400i,600,700`,
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        title: false,
        viewBox: true,
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
  ],
};
