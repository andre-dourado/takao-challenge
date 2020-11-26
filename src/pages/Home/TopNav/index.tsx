import React, { useEffect, useState } from 'react';

import api from 'src/services/api';

import { Container, CategoriesList, CategoryName } from './styles';

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
      <CategoriesList>
        {categories.map((category) => (
          <CategoryName key={category.id}>{category.descricao}</CategoryName>
        ))}
      </CategoriesList>
    </Container>
  );
};

export default TopNav;
