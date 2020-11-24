import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ReducerCart from './store/reducerCart';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
   qtyCart: ReducerCart
})

const store = createStore(rootReducer);

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store} >
         <App />
      </Provider>
   </React.StrictMode>,
  document.getElementById('root')
);
