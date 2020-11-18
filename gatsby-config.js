module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/layouts/index.js`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Webdacity | Design & Development",
        short_name: "Webdacity",
        start_url: "/",
        background_color: "#151618",
        theme_color: "#151618",
        display: "standalone",
        icon: "src/assets/images/logos/webdacity/favicon.png",
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/assets/data/`,
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-6BPEZ60Z1S",
        head: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 1000,
        // Defers execution of google analytics script after page load
        defer: true,
      },
    },
  ],
  siteMetadata: {
    title: "Webdacity Studio",
    author: "Webdacity",
    siteUrl: `https://webdacity.dev`,
  },
}
