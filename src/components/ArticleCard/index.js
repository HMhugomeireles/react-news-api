import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleItem } from './styled';
import { NotFoundImageInCard } from './../placeHolders/';

export default function ArticleCard(props) {
  const { title, description, publishedAt, author, urlToImage, source } = props;
  return (
    <ArticleItem>
      <Link to={`/articles/${title}`}>
        <header>
          {urlToImage === null ? 
            <NotFoundImageInCard />
            :
            <img src={urlToImage} alt=""/>
          }
        </header>
        <div>
          <span>{source.name}</span>
          <h2>{title}</h2>
          <p>{publishedAt} - Author: {author === null ? "Unknown" : author}</p>
          <div>{description}</div>
        </div>
      </Link>
    </ArticleItem>
  )
}
