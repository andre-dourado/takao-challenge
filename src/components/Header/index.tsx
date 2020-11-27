import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import { Container, MaxWidthContainer, Logo, CartButton } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <MaxWidthContainer>
        <Link to="/" style={{ flex: 1 }}>
          <Logo>
            Super<span>Market</span>
          </Logo>
        </Link>

        <Link to="/purchases" style={{ color: '#fff' }}>
          Pedidos
        </Link>

        <Link to="/cart">
          <CartButton>
            <FaShoppingCart />
          </CartButton>
        </Link>
      </MaxWidthContainer>
    </Container>
  );
};

export default Header;
