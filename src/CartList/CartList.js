import React, { Component } from "react";
import CartItem from "../CartItem/CartItem";
import "./CartList.css";

export default class Cartlist extends Component {
  render() {
    return (
      <>
        {Object.keys(this.props.selected).map((feature, idx) => (
          <CartItem
            feature={feature}
            idx={idx}
            selected={this.props.selected}
          />
        ))}
      </>
    );
  }
}
