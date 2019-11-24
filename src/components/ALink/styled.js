import Styled from 'styled-components';

export const ALinkComponent = Styled.a`
  text-decoration: none;
  color: #333;
  margin-left: 50px;
  padding: 10px 20px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  

  &:before {
    content: '';
    width: 10%;
    height: 200%;
    display: block;
    position: absolute;
    background: linear-gradient(315deg, #a40606 0%, #d98324 74%);
    top: -50%;
    left: 0;
    z-index: -1;
    transition: 400ms ease-in-out;
  }

  &:hover {
    color: #fff;
    &:before {
      transition: 400ms ease-in-out;
      width: 100%;
      height: 100%;
      top: 0;
    }
  }
`;