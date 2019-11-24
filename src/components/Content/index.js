import React from 'react';
import { ContentComponent } from './styled';

export default function Content({ content }) {
  return (
    <ContentComponent>
      <p>{content}</p>
    </ContentComponent>
  )
}
