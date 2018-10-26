import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Photo = styled.img`
  border: 1px solid gray;
  width: 200px;
  height: 250px;
  border-radius: 50px;
`;

export const Description = styled.div`
  width: 400px;
  height: 200px;
  font-size: 24px;
  padding-left: 20px;
`;

export const Margin = styled.div`
  height: 10px;
`;
