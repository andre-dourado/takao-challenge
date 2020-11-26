import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
  width: 100%;
  max-width: 800px;
  padding: 24px 0;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 160px;
  min-height: 250px;
  margin: 24px 16px;
`;

export const Image = styled.img`
  max-width: 160px;
  height: 160px;
  object-fit: contain;
`;

export const Description = styled.p`
  color: #c5c5c5;
  font-size: 12px;
`;

export const Price = styled.p`
  color: #171516;
  font-size: 24px;
`;

export const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  font-size: 16px;
  background: #db491a;
  padding: 8px;
  max-width: 120px;
  border-radius: 6px;
`;
