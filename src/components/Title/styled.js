import Styled from 'styled-components';

export const TitleComponent = Styled.h2`
  font-size: ${({fontSize}) => fontSize ? fontSize : "2rem"};
  color: ${({color}) => color ? color : "#333"};
  text-align: ${({textCenter}) => textCenter ? "center" : "default"};
  padding: 20px;
`;
