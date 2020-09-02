import React, { Component } from "react";
import "./FeatureList.css";
import Feature from "../Feature/Feature";

class FeatureList extends Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {Object.keys(this.props.features).map((feature, idx) => (
          <Feature
            features={this.props.features}
            feature={feature}
            idx={idx}
            key={feature}
            selected={this.props.selected}
            handleUpdate={(feature, newValue) =>
              this.props.handleUpdate(feature, newValue)
            }
          />
        ))}
      </form>
    );
  }
}

export default FeatureList;
