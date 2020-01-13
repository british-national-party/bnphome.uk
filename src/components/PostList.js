import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap'

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="edi-title">{title}</h1>
          </div>

          {posts.map(({ node: post }) => (
            <div
              id="content-edi"
              className="content"
              style={{
                border: '1px solid #eaecee',
                padding: '1em 1em',
                background: '#fff',
              }}
              key={post.id}
            >
              <Card>
                {post.featured_media && (
                  <Link className="has-text-primary" to={post.slug}>
                  <CardImg
                    src={
                      post.featured_media.localFile.childImageSharp.fluid.src
                    }
                    alt-text={post.featured_media.alt_text}
                  />
                  </Link>
                )}

                <CardBody>
                  <CardTitle>
                    <Link className="has-text-primary" to={post.slug}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardSubtitle>
                    <small>
                      {post.date} - posted by{' '}
                     
                        {post.author.name}
                      
                    </small>
                  </CardSubtitle>

                  <CardText>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.replace(
                          /<p class="link-more.*/,
                          ''
                        ),
                      }}
                    />
                  </CardText>
                  <Link className="btn btn-primary" to={post.slug}>
                    Keep Reading →
                  </Link>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    date(formatString: "MMMM DD, YYYY")
    slug
    featured_media {
      alt_text
      source_url
      localFile {
        childImageSharp {
          fluid(maxWidth: 800) {
            src
          }
        }
      }
    }
  }
`
