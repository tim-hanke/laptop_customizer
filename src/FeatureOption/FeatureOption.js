import React, { Component } from "react";
import slugify from "slugify";
import { USCurrencyFormat } from "../USCurrencyFormat/USCurrencyFormat";
import "./FeatureOption.css";

class FeatureOption extends Component {
  render() {
    const { feature, item } = this.props;
    const itemHash = slugify(JSON.stringify(item));
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={item.name === this.props.selected[feature].name}
          onChange={(e) => this.props.handleUpdate(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  }
}

export default FeatureOption;
