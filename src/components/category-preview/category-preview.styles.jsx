import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;  
`;

export const Title = styled.span`
  margin-bottom: 25px;
  cursor: pointer;  
  font-size: min(max(10px, 2.0vw), 28px);
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));//
  column-gap: 20px;  
  row-gap: 10px;
`;
