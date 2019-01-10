import React, { Component } from 'react'

class Item extends Component {
  render() {
    const { product } = this.props
    const selected_img = require(`../static/photos/${product.sku}_1.jpg`)
    return (
      <div className='shelf-item' onClick={() => this.props.addProductToCart(product)}>
      <div>
        <img src={selected_img} alt={product.title}></img>
        <p className='shelf-item__title'>{product.title}</p>
        <p className='shelf-item__price'>{product.price}</p>
      </div>
        <div className='shelf-item__buy-btn'>Add to cart</div>
      </div>
    );
  }
}

export default Item