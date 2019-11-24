import React, { useState, useEffect } from 'react';
import { Content, BreadCrumb, Title, ALink } from './../../../components/';
import { NotFoundImage } from './../../../components/placeHolders/';
import { ArticleSection, ArticleHeader, ArticleTopBody } from './styled';
import { useFetch } from './../../../hooks/Fetch';
import { ARTICLES_API, EXTEND_CONTENT } from './../../../util/StringConstants';

const FIRST = 0;

export default  function Article({history, match}) {
  const [post, setPost] = useState({
    author: null,
    content: null,
    description: null,
    publishedAt: null,
    source: {
      id: null, 
      name: null
    },
    title: null,
    url: null,
    urlToImage: null 
  });
  const { data, loading } = useFetch(ARTICLES_API);
  const { id } = match.params;

  useEffect(() => {
    if(!loading) {
      const article = data.articles.filter(article => article.title === id)[FIRST];
      setPost(article);
    }
  }, [loading]);

  return (
    <ArticleSection>
      <BreadCrumb 
        buttonAction={history.goBack}
        text={"Go Back"}
      />
      <ArticleHeader>
        {post.title === null ?
          "Loading..."
          :
          <Title
            textCenter={true}
            fontSize={"1.5rem"}
          >{post.title }</Title>
        }
        {post.title === null ?
          "Loading..."
          : 
          <Title 
            textCenter={false}
            fontSize={"1.1rem"}
            color={"#646464"}
          >{post.description}</Title>
        }
        {post.author === null ?
          "Author: Unknown"
          :
          <p>Author: <b>{post.author}</b></p>
        }
      </ArticleHeader>
      {post.urlToImage === null ?
        <NotFoundImage 
          minHeight={"250px"}
        />
        :
        <img style={{width: '100%', margin: '30px 0'}} src={post.urlToImage} alt=""/>
      }
      <ArticleTopBody>
        {post.url === null ?
          "Source not available"
          :
          <ALink
            text={"News Source Link"}
            target={"_blank"} 
            href={post.url}
          />
        }
      </ArticleTopBody>
      <div>
        <Content
          content={post.content}
        />
        <Content 
          content={EXTEND_CONTENT}
        />
      </div>
    </ArticleSection>
  )
}