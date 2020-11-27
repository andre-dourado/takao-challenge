import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 800px;
  margin: 0 auto;
  padding: 48px 0 24px;
  color: #171516;
`;

export const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 24px;
  }
`;

export const Status = styled.div`
  font-size: 24px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;
