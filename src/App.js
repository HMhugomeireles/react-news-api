import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Styled from 'styled-components';
import RouterHandler from './Routes';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <RouterHandler />
      </Layout>
    </BrowserRouter>
  );
}

const Layout = Styled.div`
  min-height: 100vh;
`
