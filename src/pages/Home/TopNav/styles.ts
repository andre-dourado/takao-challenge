import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #819823;
  padding: 16px 0 8px;
  min-height: 60px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
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

export const CategoriesList = styled.ul`
  display: flex;
  justify-content: space-between;

  margin-top: 32px;
  list-style: none;
  width: 100%;
  max-width: 800px;
`;

export const CategoryName = styled.li``;
