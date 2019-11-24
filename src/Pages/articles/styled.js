import Styled from 'styled-components'

export const ArticlePage = Styled.section`
  padding: 1rem;
`

export const WrapperSection = Styled.article`
  @media(min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

`