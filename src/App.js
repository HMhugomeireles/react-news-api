import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Styled from 'styled-components';
import RouterHandler from './Routes';

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <RouterHandler />
      </BrowserRouter>
    </Layout>
  );
}

const Layout = Styled.div`
  min-height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
  background: #fff;
`
