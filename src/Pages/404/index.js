import React from 'react';
import { PageNotFoundComponent } from './styled';

export default function PageNotFound({history}) {
  return (
    <PageNotFoundComponent>
      <article>
        <h2>404<div></div></h2>
        <p>There are nothing where, Try <span onClick={history.goBack}> &lt; Go Back</span></p>
      </article>
    </PageNotFoundComponent>
  )
}

