import React from 'react';
import Styled from 'styled-components';

export default function LoadingImage({text}) {
  return (
    <LoadingImageComponent>
      <span>{text}</span>
    </LoadingImageComponent>
  )
}

const LoadingImageComponent = Styled.div`
  width: 100%;
  height: 100%;
  min-height: ${({minHeight}) => minHeight ? minHeight : '250px'};
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