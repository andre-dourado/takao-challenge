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
  imagem: string;
}

interface Item {
  id: string;
  produtoId: string;
  imagem: string;
  descricao: string;
  quantidade: number;
  preco: number;
}

const Cart: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  const getItemsFromServer = useCallback(async () => {
    const { data } = await api.get<Item[]>('/itemPedido');

    return data;
  }, []);

  const getProductFromServer = useCallback(async (id: string) => {
    const { data } = await api.get<Product>(`/produtos/${id}`);

    return data;
  }, []);

  useEffect(() => {
    async function request(): Promise<void> {
      const itemsFromServer = await getItemsFromServer();

      itemsFromServer.map(async (item) => {
        const productFromServer = await getProductFromServer(item.produtoId);

        const mergedItem = Object.assign(productFromServer, item) as Item;

        setItems((value) => [...value, mergedItem]);
      });
    }

    request();
  }, [getItemsFromServer, getProductFromServer]);

  return (
    <DefaultLayout>
      <Container>
        {items.map((item) => (
          <ItemContainer key={item.id}>
            <Image src={`data:image/png;base64, ${item.imagem}`} />
            <Description>{item.descricao}</Description>
            <Quantity>{item.quantidade}</Quantity>
            <Price>{formatCurrency(item.preco)}</Price>
          </ItemContainer>
        ))}
      </Container>
    </DefaultLayout>
  );
};

export default Cart;
