import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import api from 'src/services/api';
import DefaultLayout from '../_layouts/default';

import {
  Container,
  RequestContainer,
  Status,
  DescriptionContainer,
} from './styles';

const PurchaseRequests: React.FC = () => {
  return (
    <DefaultLayout>
      <Container>
        <RequestContainer>
          <Status>Entregue</Status>

          <DescriptionContainer>
            <span>Pedido: 31323</span>
            <span>Criado em: 24 de janeiro de 1995</span>
            <Link to="/purchases">Ver detalhes</Link>
          </DescriptionContainer>
        </RequestContainer>

        <RequestContainer>
          <Status>Entregue</Status>

          <DescriptionContainer>
            <span>Pedido: 31323</span>
            <span>Criado em: 24 de janeiro de 1995</span>
            <a href="/purchases/#">Ver detalhes</a>
          </DescriptionContainer>
        </RequestContainer>
      </Container>
    </DefaultLayout>
  );
};

export default PurchaseRequests;
