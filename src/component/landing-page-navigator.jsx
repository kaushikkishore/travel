import React, { Component } from "react";
class LandingPageNavigator extends Component {
  state = {};
  render() {
    return (
      <div className="card text-white bg-success mb-12">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Success card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
  }
}

export default LandingPageNavigator;
