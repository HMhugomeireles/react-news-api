import React from 'react';
import { BreadCrumbComponent } from './styled';

export default function BreadCrumb({buttonAction, text}) {
  return (
    <BreadCrumbComponent>
      <button onClick={buttonAction}>{text.toUpperCase()}</button>
    </BreadCrumbComponent>
  )
}
