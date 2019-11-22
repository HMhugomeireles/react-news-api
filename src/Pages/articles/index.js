import React from 'react'
import { ArticlePage } from './styled'

import { 
  Title,
  ArticleCard
} from './../../components'

import { ArticlesMocks } from './../../mocks/articles'


export default function Articles() {
  return (
    <ArticlePage>
      <Title>Articles</Title>
      {ArticlesMocks.map(article => 
        <ArticleCard 
          key={article.id}
          {...article} 
        />
      )}
    </ArticlePage>
  )
}
