import React from 'react'
import { Link } from 'react-router-dom'
import { ArticleItem } from './styled'

export default function ArticleCard(props) {
  const { title, date, author, media, category } = props;
  let articleLink = title.replace(" ", "-");
  return (
    <ArticleItem>
      <Link to={`/articles/${articleLink}`}>
        <header>
          <img src={media.image} alt={media.alt}/>
        </header>
        <div>
          <span>{category}</span>
          <h2>{title}</h2>
          <small>{date} - Author: {author}</small>
        </div>
      </Link>
    </ArticleItem>
  )
}
