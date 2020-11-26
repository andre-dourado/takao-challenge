import React, { useEffect, useState } from 'react';

import api from 'src/services/api';
import formatCurrency from 'src/utils/format-currency';

import {
  Container,
  ProductContainer,
  Image,
  Description,
  Price,
  AddToCartButton,
} from './styles';

interface Products {
  id: string;
  descricao: string;
  preco: number;
  imagem: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    api.get('produtos').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Container>
      {products.map((product) => (
        <ProductContainer key={product.id}>
          <Image src={`data:image/png;base64, ${product.imagem}`} />
          <Description>{product.descricao}</Description>
          <Price>{formatCurrency(product.preco)}</Price>
          <AddToCartButton>Adicionar</AddToCartButton>
        </ProductContainer>
      ))}
    </Container>
  );
};

export default ProductList;
