import React, { Component } from "react";
class WhyUsCard extends Component {
  state = {};
  render() {
    const { heading, content } = this.props;
    return (
      <React.Fragment>
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 border relative bg-white text-dark">
            <div className="circle set-position absolute" />
            <div className="p-3 mt-5">
              <h5>{heading}</h5>
              <p className="">{content}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default WhyUsCard;
