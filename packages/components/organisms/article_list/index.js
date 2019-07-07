import React from 'react'
import styled from 'styled-components'

const Article = styled.div`
  padding: 1em;
  color: ${props => props.theme.shade._700};
  :hover {
    color: ${props => props.theme.shade._900};
  }
`

const Wrapper = styled.div`
  border: 1px solid ${props => props.theme.shade._300};
`

const ArticleList = ({ articles }) => {
  return (
    <Wrapper>
      {articles.map((article, key) => (
        <Article key={key}>{article}</Article>
      ))}
    </Wrapper>
  )
}

ArticleList.Wrapper = Wrapper
ArticleList.Article = Article

export default ArticleList
