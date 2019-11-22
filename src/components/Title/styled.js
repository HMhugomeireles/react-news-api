import Styled from 'styled-components'

export const Title = Styled.h1`
  font-size: ${(theme) => theme.fontSizeTitle ? theme.fontSizeTitle : "2rem" };
  color: ${(theme) => theme.fontSizeTitle ? theme.fontSizeTitle : "#333" };
`