import styled from 'styled-components';

const mainColor = 'rgba(235, 72, 42, 1)';

export const Container = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 3px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.19);

  &:hover, &:focus {
    border: ${mainColor} solid 1px;
  }
`;

export const Image = styled.img`
  width: 290px;
  height: 200px;
  margin-top: 5px;
  position: absolute;
`;

export const Recommand = styled.div`
  border: 1px solid ${mainColor};
  width: 100px;
  height: 30px;
  background: ${mainColor};
  color: #fff;
  position: relative;
  top: 20px;
  left: -105px;
  z-index: 1;
  padding-top: 3px;
  padding-left: 5px;
`;

export const NoRecommand = styled.div`
  border: none;
  width: 100px;
  height: 30px;
  position: relative;
  top: 20px;
  left: -105px;
  z-index: 1;
  padding-top: 3px;
  padding-left: 5px;
`;

export const Title = styled.div`
  width: 290px;
  font-size: 20px;
  height: 60px;
  position: relative;
  top: 180px;
  padding: 5px;
`;

export const Prize = styled.div`
  width: 290px;
  height: 40px;
  font-size: 20px;
  position: relative;
  top: 190px;
  padding: 5px;
  color: ${mainColor};
`;

export const PurchaseButton = styled.div`
  position: relative;
  top: 220px;
  padding: 5px;
`;
