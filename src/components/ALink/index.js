import React from 'react';
import { ALinkComponent } from './styled';

export default function ArticleCard(props) {
  return ( 
    <ALinkComponent {...props}>
      {props.text}
    </ALinkComponent>
  )
}
