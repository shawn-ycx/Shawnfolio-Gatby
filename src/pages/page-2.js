import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div style={{
    margin: '0 auto',
    maxWidth: 960,
    padding: '0px 1.0875rem 1.45rem',
    paddingTop: 0,
  }}>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
