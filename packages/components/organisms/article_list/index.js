import React from 'react'
import styled from 'styled-components'

const Article = styled.div`
  padding: 1em;
  color: ${props => props.theme.shade._700};
  :hover {
    color: ${props => props.theme.shade._900};
  }
`

const ArticleList = styled.div`
  border: 1px solid ${props => props.theme.shade._300};
  margin: 0.5em;
`

ArticleList.Article = Article

export default ArticleList
