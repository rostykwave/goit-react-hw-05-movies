import styled from 'styled-components';

export const ActorsAvatar = styled.div`
  max-width: 200px;
  overflow: hidden;
  border-radius: 3px;
`;

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

export const CastItem = styled.li`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f8f8f8;
  border-radius: 3px;
`;
