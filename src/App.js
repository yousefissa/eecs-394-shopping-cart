import React, { Component } from 'react'
import { products } from './static/data/products'
import './shopping_cart.scss'
import Shelf from './components/shelf'
import ShoppingCart from './components/cart'

// class App extends Component {
//   render() {
//     return (
//       <div>
//       <Shelf></Shelf>
//       <shoppingCart></shoppingCart>
//       </div>
//     )
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productQuantity: 0,
      itemsInCart: [],
      cartTotalPrice: 0,
      openCart: false
    };
    this.handleToggle = this.handleToggle.bind(this)
    this.addProductToCart = this.addProductToCart.bind(this)
  }

  addProductToCart(product) {
    this.setState(prevState => {
      return {
        productQuantity: prevState.productQuantity + 1,
        itemsInCart: prevState.itemsInCart.concat(product),
        cartTotalPrice: prevState.cartTotalPrice + product.price
      }
    });
    this.setState({ openCart: true })
  }

removeProduct = product => {
      this.setState(prevState => {
      const { itemsInCart } = prevState
      const new_price = this.state.cartTotalPrice - product.price
      this.setState({'cartTotalPrice':new_price});
      let new_cart = { itemsInCart: itemsInCart.filter(p => p.sku !== product.sku) }
      if (new_cart.length === 0) {
        this.setState({'cartTotalPrice':0})
      }
      return new_cart
    })
  };

  handleToggle() {
    this.setState({ openCart: !this.state.openCart })
  }

  render() {
    return (
      <div>
        <Shelf
          addProductToCart={this.addProductToCart}
        />
        <ShoppingCart
          cartTotal={{
            productQuantity: this.state.productQuantity,
            cartTotalPrice: this.state.cartTotalPrice
          }}
          isOpen={this.state.openCart}
          handleToggle={this.handleToggle}
          itemsInCart={this.state.itemsInCart}
          removeProduct={this.removeProduct}
        />
      </div>
    )
  }
}

export default App