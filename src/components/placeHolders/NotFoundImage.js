import React from 'react';
import Styled from 'styled-components';

export default function NotFoundImage() {
  return (
    <NotFoundImageComponent>
      <b>Image Not Found</b>
    </NotFoundImageComponent>
  )
}

const NotFoundImageComponent = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  margin: 30px 0;

  span {
    font-size: 2rem;
    font-weight: bold;
  }
`;