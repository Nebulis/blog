const pages = (page) => {
  return [page, `/en${page}`]
}
module.exports = {
  flags: {
    FAST_DEV: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    DEV_SSR: false, // can't disable this fucker
  },
  siteMetadata: {
    siteUrl: `https://magicoftravels.com`,
    title: `Magic of travels`,
    author: `@_magicoftravels`,
    config: {
      context: process.env.CONTEXT || "local",
      comments: process.env.COMMENTS_FEATURE || "disabled",
      ssrBuild: process.env.SSR_BUILD || "disabled",
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
    // idea for fb / twitter : allow one week before the release
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [
          {
            userAgent: "*",
            allow: [
              ...pages("/index.html"),
              ...pages("/organisation/"),
              ...pages("/discovery/"),
              ...pages("/about/"),
              ...pages("/asia/vietnam/index.html"),
              ...pages("/asia/vietnam/southern-vietnam/"),
              ...pages("/asia/philippines/"),
              ...pages("/asia/japan/"),
            ],
            disallow: [
              ...pages("/asia/vietnam/northern-vietnam/"),
              ...pages("/asia/vietnam/central-vietnam/"),
              ...pages("/asia/cambodia/"),
              ...pages("/asia/indonesia/"),
              ...pages("/asia/malaysia/"),
              ...pages("/asia/singapore/"),
              ...pages("/asia/taiwan/"),
              ...pages("/oceania/"),
            ],
          },
          // {
          //   userAgent: "twitterbot",
          //   allow: [...pages("/asia/japan/")],
          // },
          // {
          //   userAgent: "facebookexternalhit",
          //   allow: [...pages("/asia/japan/")],
          // },
        ],
      },
    },
  ],
}
