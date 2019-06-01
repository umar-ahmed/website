import React from "react"

import { Container, Tag } from "./TagList.styles"

export default function TagList({ tags }) {
  return (
    <Container>
      {tags.map(tag => (
        <Tag>{tag}</Tag>
      ))}
    </Container>
  )
}
