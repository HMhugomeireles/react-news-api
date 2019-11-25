import React from 'react';
import { ArticlePage, WrapperSection } from './styled';
import { Title, ArticleCard, Spinner } from './../../components';
import { useFetch } from './../../hooks/';
import { ARTICLES_API } from './../../util/StringConstants';
import { convertStringDateTimeZoneToGMTString } from './../../util/UtilDataHandler';

export default function Articles() {
  const { data, loading } = useFetch(ARTICLES_API);
 
  return (
    <ArticlePage>
      <Title>Top headlines</Title>
      <WrapperSection>
        {loading ? 
          <Spinner /> 
          :
          data.articles.map((article, index) =>
            <ArticleCard
              key={article.publishedAt + article.title}
              id={index}
              title={article.title}
              description={article.description}
              publishedAt={convertStringDateTimeZoneToGMTString(article.publishedAt)}
              author={article.author}
              urlToImage={article.urlToImage}
              source={article.source}
            />
          )
        }
      </WrapperSection> 
    </ArticlePage>
  )
}
