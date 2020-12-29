module.exports = {
  siteMetadata: {
    title: `GO-Dom`,
    author: {
      name: `Sutra.hr`,
      summary: `Građevinski obrt Dom. Specijalizirana građevinska tvrtka za izgradnju i građevinske radove na otocima Ugljanu i pašmanu. Ključ u ruke, rekonstrukcija, tradicionalna gradnja i kamen, fasade i izolacije, uređenje interijera, bazenski sustavi.  `,
    },
    description: `Građevinski obrt DOM. Specijalizirana građevinska tvrtka za izgradnju i građevinske radove na otocima Ugljanu i pašmanu. Ključ u ruke, rekonstrukcija, tradicionalna gradnja i kamen, fasade i izolacije, uređenje interijera, bazenski sustavi.`,
    siteUrl: `https://cms.gradevinskiobrt-dom.hr`,
    image: "/seoPhoto.png",
  },

  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "WPGraphQL",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "wpgraphql",
        // Url to query from
        url: "https://cms.gradevinskiobrt-dom.hr/graphql",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },

    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -150,
        duration: 1400,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `Montserrat\:300,400,500,700,800`,
    //       `Montserrat Alternates\:500`, // you can also specify font weights and styles
    //     ],
    //     display: "swap",
    //   },
    // },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GO-Dom Građevinski obrt`,
        short_name: `GO-Dom`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
