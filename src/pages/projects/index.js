import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Grid from '../../components/Grid'

export default class ProjectsPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container container-full">
            <Grid size={3} full>
              {posts
                .map(({ node: post }) => (
                  <Link to={post.fields.slug}>
                    <div
                      className="grid-content"
                      style={{ 'background-image': `url(${post.frontmatter.image})` }}
                      key={post.id}
                    >
                      {post.frontmatter.title}
                    </div>
                  </Link>
                ))}
            </Grid>
          </div>
        </section>
      </Layout>
    )
  }
}

ProjectsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "project-page" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            image
          }
        }
      }
    }
  }
`
