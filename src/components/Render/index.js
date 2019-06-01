import { distanceInWordsToNow } from "date-fns"
import React from "react"

import { RenderContainer, RenderTitle } from "./Render.styles"
import TagList from "../TagList"

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
