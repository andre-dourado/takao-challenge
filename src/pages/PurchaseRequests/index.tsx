import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ptBR from 'date-fns/locale/pt-BR';
import { format } from 'date-fns';

import api from 'src/services/api';
import DefaultLayout from '../_layouts/default';

import {
  Container,
  RequestContainer,
  Status,
  DescriptionContainer,
} from './styles';

interface Status {
  descricao: string;
}

interface Purchase {
  codigo: string;
  status: Status;
  created_at: Date;
}

const PurchaseRequests: React.FC = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  useEffect(() => {
    api.get('pedidos').then((response) => {
      setPurchases(response.data);
    });
  }, []);

  return (
    <DefaultLayout>
      <Container>
        {purchases.map((purchase) => (
          <RequestContainer>
            <Status>{purchase.status.descricao}</Status>

            <DescriptionContainer>
              <span>Pedido: {purchase.codigo}</span>
              <span>
                Criado em:{' '}
                {format(
                  new Date(purchase.created_at),
                  "dd 'de' MMMM 'de' yyyy",
                  {
                    locale: ptBR,
                  },
                )}
              </span>
              <Link to="/purchases">Ver detalhes</Link>
            </DescriptionContainer>
          </RequestContainer>
        ))}
      </Container>
    </DefaultLayout>
  );
};

export default PurchaseRequests;
