import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby';

import Layout from '../components/layout'

const IndexPage = ({ pictures }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <p>{ pictures }</p>
  </Layout>
)

const Pictures = () => (
  <StaticQuery
    query={graphql`
      query {
        allInstaNode {
          edges {
            node {
              id
              likes {
                count
              }
              localFile {
                childImageSharp {
                  fluid(maxHeight: 400, maxWidth: 400, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <IndexPage
        pictures={data.allInstaNode.edges.map(obj => obj.node)}
      />
    )}
  />
)

export default Pictures
