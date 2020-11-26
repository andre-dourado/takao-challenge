import React from 'react';

import TopNav from './TopNav';
import ProductList from './ProductsList';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <TopNav />
      <ProductList />
    </Container>
  );
};

export default Home;
