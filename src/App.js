import React from 'react';
import Styled from 'styled-components'

export default function App() {
  return (
    <Layout>
      Start point
    </Layout>
  );
}

const Layout = Styled.div`
  min-height: 100vh;
  background: #141e30; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #141e30, #243b55); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #141e30, #243b55);
`
