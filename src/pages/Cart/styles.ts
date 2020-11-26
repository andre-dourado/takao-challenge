import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 800px;
  margin: 0 auto;
  padding: 48px 0 24px;
  color: #171516;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  & + & {
    margin: 8px 0;
  }
`;

export const Image = styled.img`
  width: 48px;
  height: 48px;
`;

export const Description = styled.div`
  margin-left: 24px;
  width: 400px;
`;

export const Quantity = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Price = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  font-size: 24px;
`;
