import React from 'react'
import styled from 'styled-components'

import Article from '../../molecules/article'

const Wrapper = styled.div``

const ArticleList = ({ articles, expandedArticles, toggleArticle }) => {
  return (
    <Wrapper>
      {articles.map(({ id, ...article }) => {
        const expanded = !!expandedArticles[id]
        return (
          <Article
            key={id}
            {...article}
            expanded={expanded}
            onClick={() => toggleArticle(id)}
          />
        )
      })}
    </Wrapper>
  )
}

export default ArticleList
