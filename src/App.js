import React, { Component } from 'react'
import { products } from './static/data/products'
import './shopping_cart.scss'

class App extends Component {
  render() {
    return (
      <div>
      <Shelf></Shelf>
      <FloatCart></FloatCart>
      </div>
    )
  }
}

class Item extends Component {
  render() {
    const { product } = this.props
    const selected_img = require(`./static/photos/${product.sku}_1.jpg`)
    return (
      <div className='shelf-item'>
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

class Shelf extends Component {
  render() {
    const all_products = products.map(product => <Item product={product} />);
    return (
      <div className='shelf-container'>
        {all_products}
      </div>
    );
  }
}

class FloatCart extends React.Component{
    state = {
        isOpen: false
    };

    openFloatCart = () => {
      this.setState({ isOpen: true });
    };

    closeFloatCart = () => {
      this.setState({ isOpen: false });
    };

    render(){
        
        return (
            <span onClick={() => this.openFloatCart()} className="bag bag--float-cart-closed">
                <span className="bag__quantity"></span>
            </span>
        );
    }
}

export default App