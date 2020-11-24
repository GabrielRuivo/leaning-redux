import styled from 'styled-components';

export const HeaderDiv = styled.div`
  max-width: 1280px;
  width: 100%;
  background: #bbb;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  margin: 0 auto;

  .div-cart {
    display: flex;
    align-items: center;

    .icon-cart {
      width: 30px;
      height: 30px;
    }

    p {
      font-size: 20px;
      margin: 5px;
    }
  
  }
`;