import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import api from 'src/services/api';

import {
  Container,
  Header,
  Logo,
  CartButton,
  CategoriesList,
  CategoryName,
} from './styles';

interface Category {
  id: string;
  descricao: string;
}

const TopNav: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    api.get('categorias').then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <Container>
      <Header>
        <Logo>
          Super<span>Market</span>
        </Logo>

        <span>Pedidos</span>
        <CartButton>
          <FaShoppingCart />
        </CartButton>
      </Header>

      <CategoriesList>
        {categories.map((category) => (
          <CategoryName key={category.id}>{category.descricao}</CategoryName>
        ))}
      </CategoriesList>
    </Container>
  );
};

export default TopNav;
