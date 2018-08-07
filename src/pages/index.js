import React from 'react'
import Profile from '../components/profile';

const IndexPage = ({ data }) => (
  <div style={{
    margin: '0 auto',
    maxWidth: 960,
    padding: '0px 1.0875rem 1.45rem',
    paddingTop: 0,
  }}>
    <Profile siteMetadata={data.site.siteMetadata} />
  </div>
)

export default IndexPage

export const query = graphql`
  query indexQuery {
    site {
      siteMetadata {
        fname
        lname
      }
    }
  }
`
