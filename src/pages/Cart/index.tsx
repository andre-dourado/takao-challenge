import React, { useEffect, useState, useCallback } from 'react';

import api from 'src/services/api';
import formatCurrency from 'src/utils/format-currency';
import DefaultLayout from '../_layouts/default';

import {
  Container,
  ItemContainer,
  Image,
  Description,
  Quantity,
  Price,
} from './styles';

interface Product {
  descricao: string;
  imagem_url: string;
}

interface Item {
  id: string;
  product: Product;
  quantidade: number;
  preco: number;
}

const Cart: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    api.get('itemPedido').then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <DefaultLayout>
      <Container>
        {items.map((item) => (
          <ItemContainer key={item.id}>
            <Image src={item.product.imagem_url} />
            <Description>{item.product.descricao}</Description>
            <Quantity>{item.quantidade}</Quantity>
            <Price>{formatCurrency(item.preco)}</Price>
          </ItemContainer>
        ))}
      </Container>
    </DefaultLayout>
  );
};

export default Cart;
