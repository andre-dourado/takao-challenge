import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import { Container, MaxWidthContainer, Logo, CartButton } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <MaxWidthContainer>
        <Logo>
          Super<span>Market</span>
        </Logo>

        <span>Pedidos</span>
        <CartButton>
          <FaShoppingCart />
        </CartButton>
      </MaxWidthContainer>
    </Container>
  );
};

export default Header;
