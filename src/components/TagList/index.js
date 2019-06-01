import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin-bottom: 20px;
`

const Tag = styled.span`
  padding: 5px 10px;
  display: inline-block;
  background-color: #eeeeee;
  color: #666666;
  border-radius: 2px;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;

  & + & {
    margin-left: 10px;
  }
`

export default function TagList({ tags }) {
  return (
    <Container>
      {tags.map(tag => (
        <Tag>{tag}</Tag>
      ))}
    </Container>
  )
}
