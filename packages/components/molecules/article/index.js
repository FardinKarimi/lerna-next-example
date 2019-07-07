import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 1em;
  border-bottom: 1px solid ${props => props.theme.shade._200};
  cursor: pointer;
  width: 100%;
`

const Title = styled.div`
  color: ${props => props.theme.shade._700};
  :hover {
    color: ${props => props.theme.shade._900};
  }
`

const Description = styled.div`
  font-size: ${props => (props.expanded ? '0.75em' : 0)};
  max-height: ${props => (props.expanded ? '3em' : 0)};
  color: ${props => props.theme.shade._500};
  transition: max-height ${props => props.theme.animate._200};
`

const Article = ({ id, text, description, expanded, onClick }) => {
  return (
    <Wrapper key={id} onClick={onClick}>
      <Title expanded={expanded}>{text}</Title>
      <Description expanded={expanded}>
        {expanded ? description : null}
      </Description>
    </Wrapper>
  )
}

export default Article
