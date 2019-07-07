import React, { useState } from 'react'
import styled from 'styled-components'

import Article from '../../molecules/article'

const Wrapper = styled.div``

const ArticleList = ({ articles }) => {
  const [expandedArticles, toggleArticle] = useState({})
  return (
    <Wrapper>
      {articles.map(({ id, ...article }) => {
        const expanded = !!expandedArticles[id]
        return (
          <Article
            key={id}
            {...article}
            expanded={expanded}
            onClick={() =>
              toggleArticle({
                ...expandedArticles,
                [id]: !expanded
              })
            } 
          />
        )
      })}
    </Wrapper>
  )
}

export default ArticleList
