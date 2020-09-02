import React, { Component } from "react";
import FeatureOption from "../FeatureOption/FeatureOption";

class Feature extends Component {
  render() {
    const { features, feature, idx } = this.props;
    return (
      <fieldset className="feature" key={feature + "-" + idx}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {features[feature].map((item) => {
          return (
            <FeatureOption
              feature={feature}
              item={item}
              selected={this.props.selected}
              handleUpdate={(feature, newValue) =>
                this.props.handleUpdate(feature, newValue)
              }
            />
          );
        })}
        ;
      </fieldset>
    );
  }
}

export default Feature;
