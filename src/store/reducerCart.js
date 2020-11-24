import * as actionTypes from './actions';

const initialState = {
  quantityCart: 0
}

const reducerCart = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART: 
            return {
                ...state,
                quantityCart: state.quantityCart + 1,
            }

        case actionTypes.DELETE_TO_CART: 
            if(state.quantityCart >= 1) {
                return {
                    ...state,
                    quantityCart: state.quantityCart - 1,
                }
            } 
            return state

        default: {
            return state;
        }
    }
   
}

export default reducerCart;


