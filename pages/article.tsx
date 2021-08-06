import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Article from '../components/ArticlePage/Article';
import Layout from '../components/Layout';

const ArticlePage = () => {
  return (
    <Layout>
      <Container>
        <Article />
      </Container>
    </Layout>
  );
};

export default ArticlePage;
