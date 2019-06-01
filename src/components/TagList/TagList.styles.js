import styled from "styled-components"

export const Container = styled.div`
  margin-bottom: 20px;
`

export const Tag = styled.span`
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
