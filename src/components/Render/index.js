import { distanceInWordsToNow } from "date-fns"
import React from "react"
import PropTypes from "prop-types"

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

Render.propTypes = {
  date: PropTypes.string.isRequired,
  files: PropTypes.object({
    render: PropTypes.object({
      title: PropTypes.string,
      file: PropTypes.object({
        url: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}
