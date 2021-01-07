const pages = (page) => {
  return [page, `/en${page}`]
}
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.magicoftravels.com`,
    title: `Magic of travels`,
    author: `@gatsbyjs`,
    config: {
      context: process.env.CONTEXT || "local",
      comments: process.env.COMMENTS_FEATURE || "disabled",
    },
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#343a40`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        allExtensions: true, // defaults to false
      },
    },
    "gatsby-plugin-sitemap",
    // could this be done automatically ?
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [
          {
            userAgent: "*",
            allow: [...pages("/asia/vietnam/index.html"), ...pages("/asia/vietnam/southern-vietnam/")],
            disallow: [
              ...pages("/asia/japan"),
              ...pages("/asia/vietnam/*"),
              ...pages("/asia/vietnam/southern-vietnam/cu-chi-tunnels"),
              ...pages("/asia/philippines"),
            ],
          },
          {
            userAgent: "twitterbot",
            allow: [...pages("/asia/philippines")],
          },
          {
            userAgent: "facebookexternalhit",
            allow: [...pages("/asia/philippines")],
          },
        ],
      },
    },
  ],
}
