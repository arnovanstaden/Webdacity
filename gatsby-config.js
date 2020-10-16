module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
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
        name: `feedback`,
        path: `${__dirname}/src/data/`,
        plugins: [
          `gatsby-transformer-json`
        ]
      }
    }
  ],
  siteMetadata: {
    title: "Webdacity Studio",
    author: "Webdacity"
  },

}
