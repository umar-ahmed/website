import { distanceInWordsToNow } from "date-fns"
import React from "react"
import styled from "styled-components"

import TagList from "../TagList"

const RenderContainer = styled.div`
  margin-bottom: 20px;
`

const RenderTitle = styled.h3`
  margin-bottom: 10px;
`

export default function Render({ title, files, tags = [], date }) {
  return (
    <RenderContainer>
      <RenderTitle>
        {title} - {distanceInWordsToNow(new Date(date), { addSuffix: true })}
      </RenderTitle>
      {tags && <TagList tags={tags} />}
      <img alt={files.render.title} src={files.render.file.url} />
    </RenderContainer>
  )
}
