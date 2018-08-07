module.exports = {
  siteMetadata: {
    title: 'ShawnFolio',
    fname: 'Shawn',
    lname: 'Yap'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-react-next`
  ],
}

