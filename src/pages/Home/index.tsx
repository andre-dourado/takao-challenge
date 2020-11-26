import React from 'react';

import TopNav from './TopNav';
import ProductList from './ProductsList';
import DefaultLayout from '../_layouts/default';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <Container>
        <TopNav />
        <ProductList />
      </Container>
    </DefaultLayout>
  );
};

export default Home;
