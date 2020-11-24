import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {HeaderDiv} from './style';

const Header = (props) => {
  return(
    <HeaderDiv>
      <h1>MY E-COMMERCE</h1>
      <div className="div-cart" >
        <AiOutlineShoppingCart className="icon-cart"/>
        <h3>Cart:</h3>
        <p><strong>{props.quantityCart}</strong></p>
      </div>
    </HeaderDiv>
  );
}

export default Header;