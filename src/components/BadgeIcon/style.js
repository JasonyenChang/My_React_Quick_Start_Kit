import styled from 'styled-components';

export const Container = styled.div`
  width: 55px;
  height: 60px;
`;

export const Photo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid gray;
`;

export const Number = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid white;
  position: relative;
  z-index: 1;
  background: red;
  color: white;
  text-align: center;
  top: -15px;
  left: 30px;
  font-size: 12px;
  padding-top: 1px;
`;
