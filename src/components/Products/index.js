import React, {Component} from 'react';
/* import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions'; */

import {Main} from './style';

class Products extends Component {
   render() {
      return(
         <Main>
            <div className="div-product" >
               <img src="https://m.media-amazon.com/images/I/51c0zhkg1PL._AC_AA180_.jpg"  alt="product" />
               <div>
                  <h2>Cadeira</h2>
                  <h4>Descrição: Cadeira muito confortavel e bonita</h4>
               </div>
               <div className="div-price-btn-cart" >
                  <p><strong>R$900,00</strong></p>
                  <button onClick={this.props.addCart} >Adcionar ao carrinho</button>
                  <button onClick={this.props.delCart} >Excluir do carrinho</button>
               </div>
            </div>
   
            <div className="div-product" >
               <img src="https://images-na.ssl-images-amazon.com/images/I/416HeuxgjHL._AC_SY450_.jpg"  alt="product" />
               <div>
                  <h2>Piscina</h2>
                  <h4>Descrição: Piscina 5mil litros INTEX</h4>
               </div>
               <div className="div-price-btn-cart" >
                  <p><strong>R$1.000,00</strong></p>
                  <button onClick={this.props.addCart} >Adcionar ao carrinho</button>
                  <button onClick={this.props.delCart} >Excluir do carrinho</button>            
               </div>
            </div>
   
            <div className="div-product" >
               <img src="https://images-na.ssl-images-amazon.com/images/I/61KF2axTBKL._AC_SY450_.jpg"  alt="product" />
               <div>
                  <h2>Mouse</h2>
                  <h4>Descrição: Mouse Razer gamer</h4>
               </div>
               <div className="div-price-btn-cart" >
                  <p><strong>R$200,00</strong></p>
                  <button onClick={this.props.addCart} >Adcionar ao carrinho</button>
                  <button onClick={this.props.delCart} >Excluir do carrinho</button>
               </div>
            </div>
         </Main>
      );
   }
}


export default Products;