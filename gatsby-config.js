module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `http://localhost/findmymobilehomeWP/graphql`,
        verbose: true,
        options: {
          debug: {
            graphql: {
              // writeQueriesToDisk: true,
              onlyReportCriticalErrors: true,
            },
          },
          html: {
            createStaticFiles: false,
            useGatsbyImage: false,
          },
          schema: {
            requestConcurrency: 1, // currently set to undefined
            previewRequestConcurrency: 1, // currently set to undefined
          },
          // not sure if this works?
          // excludeFieldNames: [
          //   `Coupon`,
          //   `Comment`,
          //   `Order`,
          //   `ContentType`,
          //   `TaxRate`,
          //   `ShippingClass`,
          //   `ShippingMethod`,
          //   `PostFormat`,
          //   `Refund`,
          //   `Tag`,
          //   `VisibleProduct`,
          // ],
          // not sure if this works?
          type: {
            Testimonial: {
              exclude: true,
            },
            Comment: {
              exclude: true,
            },
            Refund: {
              exclude: true,
            },
            TaxRate: {
              exclude: true,
            },
            ShippingMethod: {
              exclude: true,
            },
            PostFormat: {
              exclude: true,
            },
            ContentType: {
              exclude: true,
            },
            MediaItem: {
              lazyNodes: true,
              // beforeChangeNode: () => {},
              // exclude: true,
            },
            Order: {
              exclude: true,
            },
            Coupon: {
              exclude: true,
            },
            UserRole: {
              exclude: true,
            },
            User: {
              exclude: true,
            },
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
