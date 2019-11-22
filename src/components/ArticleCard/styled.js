import Styled from 'styled-components'

export const ArticleItem = Styled.article`
  margin: 2rem 0;
  color: ${(theme) => theme.colorArticleCardText ? theme.colorArticleCardText : "#243B55" };
  /* background: ${(theme) => theme.colorArticleCardBackground ? theme.colorArticleCardBackground : "#243B55" }; */
  position: relative;
  border-radius: 10px;

  a {
    color: #333;
    text-decoration: none;

    header {
      flex-basis: 35%;

      img {
        border-radius: 15px;
        width: 100%;
        display: block;
        transition: 300ms ease-in-out;
      }
    }

    div {
      flex-basis: 70%;
      padding: 1rem;
      position: relative;
      

      span {
        font-size: 1rem;
        font-weight: bold;
        position: relative;
        top: -15px;
        background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
        color: #fff;
        padding: 8px;
        border-radius: 10px;
      }

      h2 {
        margin: 0;
        font-size: 1.5rem;
      }
    
      small {
        font-size: 0.7rem;
        padding-top: 1rem; 
        display: none;
      }
    }
  }
  
  @media(max-width: 425px) {
    width: 100%; 

    img {
      width: 100%;
      transition: 300ms;
    }
    
  }

  @media(min-width: 426px) and (max-width: 767px) {
    a {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      line-height: 24px;
    } 

    img {
      width: 100%;
      transition: 300ms;
    }
    
  }
`