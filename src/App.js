import React, {Component} from 'react';
import * as actionTypes from './store/actions';
import { connect } from 'react-redux';
import Header from './components/Header/index';
import Products from './components/Products/index';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header quantityCart={this.props.items} />
                <Products addCart={this.props.addCart} delCart={this.props.delCart}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('STATE:', state)
    return {
        items: state.qtyCart.quantityCart,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCart: () => dispatch({type: actionTypes.ADD_TO_CART}),
        delCart: () => dispatch({type: actionTypes.DELETE_TO_CART}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

