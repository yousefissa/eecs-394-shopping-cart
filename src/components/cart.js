import React, { Component } from 'react'
import CartProduct from './cart_product'

import '../shopping_cart.scss'

class ShoppingCart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { cartTotal, /*cartProducts, removeProduct*/ } = this.props

    const products = this.props.itemsInCart.map(product => {
      return <CartProduct product={product} key={product.id} removeProduct={this.props.removeProduct} />
    });

    return (
      <div className={`float-cart${this.props.isOpen ? ' float-cart--open' : ''}`}>
        {(() => {
          if (this.props.isOpen) {
            return (
              <div
                onClick={() => this.props.handleToggle()}
                className="float-cart__close-btn"
              >
                X
              </div>
            )
          } else {
            return (
              <span
                onClick={() => this.props.handleToggle()}
                className="bag bag--float-cart-closed"
              >
                <span className="bag__quantity">{cartTotal.productQuantity}</span>
              </span>
            )
          }
        })()}

        <div className="float-cart__content">
          <div className="float-cart__header">
            <span className="bag">
              <span className="bag__quantity">{cartTotal.productQuantity}</span>
            </span>
            <span className="header-title">Bag</span>
          </div>

          <div className="float-cart__shelf-container">
            {products}
            {!products.length && (
              <p className="shelf-empty">
                Add items you want to purchase!
              </p>
            )}
          </div>

          <div className="float-cart__footer">
            <div className="sub">SUBTOTAL</div>
            <div className="sub-price">
              <p className="sub-price__val">
                {`$${cartTotal.cartTotalPrice}`}
              </p>
            </div>
            <div className="buy-btn">
              Checkout
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShoppingCart