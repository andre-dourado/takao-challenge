import styled from 'styled-components';

export const Container = styled.header`
  background: #819823;
`;

export const MaxWidthContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0 8px;
  margin: 0 auto;
  min-height: 60px;
  width: 100%;
  max-width: 800px;
`;

export const Logo = styled.h1`
  display: flex;
  flex: 1;
  color: #fff812;

  span {
    color: #fff;
  }
`;

export const CartButton = styled.button`
  display: flex;
  margin-left: 16px;
  font-size: 24px;
`;
