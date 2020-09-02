import React, { Component } from "react";
import { USCurrencyFormat } from "../USCurrencyFormat/USCurrencyFormat";
import "./CartItem.css";

class CartItem extends Component {
  render() {
    const { feature, idx } = this.props;
    const featureHash = feature + "-" + idx;
    const selectedOption = this.props.selected[feature];

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  }
}

export default CartItem;
