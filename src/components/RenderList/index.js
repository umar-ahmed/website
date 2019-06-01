import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Render from "../Render"

export default function RenderList() {
  return (
    <StaticQuery
      query={renderListQuery}
      render={data =>
        data.allContentfulDaily.edges.map(({ node }) => (
          <Render
            title={node.title}
            files={{ render: node.render, blend: node.blend }}
            date={node.date}
            tags={node.tags}
          />
        ))
      }
    />
  )
}

const renderListQuery = graphql`
  query RenderListQuery {
    allContentfulDaily(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          blendFile {
            id
            title
            file {
              url
            }
          }
          title
          tags
          date
          render {
            file {
              url
            }
            title
          }
        }
      }
    }
  }
`
