import React, { Component } from 'react'
import { products } from '../static/data/products'
import Item from './item'
import '../shopping_cart.scss'

class Shelf extends Component {
  render() {
    const all_products = products.map(product => <Item product={product} addProductToCart={this.props.addProductToCart} key={product.sku} />);
    return (
      <div className='shelf-container'>
        {all_products}
      </div>
    );
  }
}

export default Shelf