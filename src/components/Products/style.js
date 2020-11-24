import styled from 'styled-components';

export const Main = styled.div`
  max-width: 1280px;
  width: 100%;
  background: #fff;

  display: flex;
  flex-direction: column;
  margin: 0 auto;

  img {
    width: 150px;
    height: 150px;
  }

 .div-product {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #ccc;
  width: 100%;
  border-bottom: 1px solid #666;

  .div-price-btn-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

 }
`;