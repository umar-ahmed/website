import { distanceInWordsToNow } from "date-fns"
import React from "react"
import PropTypes from "prop-types"

import { RenderContainer, RenderTitle } from "./Render.styles"
import TagList from "../TagList"

export default function Render({ blend, date, files, tags = [], title }) {
  return (
    <RenderContainer>
      <RenderTitle>
        {title} - {distanceInWordsToNow(new Date(date), { addSuffix: true })}
      </RenderTitle>
      {tags && <TagList tags={tags} />}
      <img alt={files.render.title} src={files.render.file.url} />
      {blend && <a href={blend.file.url}>Download .blend file</a>}
    </RenderContainer>
  )
}

const filePropType = PropTypes.shape({
  title: PropTypes.string,
  file: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
})

Render.propTypes = {
  date: PropTypes.string.isRequired,
  files: PropTypes.shape({
    blend: filePropType,
    render: filePropType.isRequired,
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}
