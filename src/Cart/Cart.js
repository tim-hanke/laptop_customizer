import React, { Component } from "react";
import CartList from "../CartList/CartList";
import CartTotal from "../CartTotal/CartTotal";
import "./Cart.css";

class Cart extends Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <CartList selected={this.props.selected} />
        <CartTotal selected={this.props.selected} />
      </section>
    );
  }
}

export default Cart;
