module.exports = {
pathPrefix: "/cv.gatsby.larsmaeder",
  siteMetadata: {
    title: `larsmaeder.ch`,
    description: `Curriculum Vitae (CV) von Lars Mäder, Interaction Designer (UX—UI)`,
    author: `Lars Mäder`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
        resolve: `gatsby-plugin-sharp`,
        options: {
          defaultQuality: 80,
        },
      },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    {
        resolve: `gatsby-plugin-minify-classnames`,
        options: {
            develop: true, // Enable on `gatsby develop`
        },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
