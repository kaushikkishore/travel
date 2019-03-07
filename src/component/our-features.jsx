import React, { Component } from "react";
class OurFeatures extends Component {
  state = {};
  render() {
    const divStyle = {
      width: "18rem"
    };
    return (
      <React.Fragment>
        <div className="card text-dark">
          <svg
            className="bd-placeholder-img bd-placeholder-img-lg card-img"
            width="100%"
            height="600"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Card image"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#F3F3F3" />
            <image
              xlinkHref="/img/tower1.png"
              x="75%"
              y="0"
              height="100%"
              width="20%"
            />
            <image
              xlinkHref="/img/tower2.png"
              x="0"
              y="0"
              height="100%"
              width="20%"
            />
          </svg>
          <div className="card-img-overlay">
            <h1 className="card-title text-center">HELLO FOLKS!</h1>
            <div className="container">
              <div className="row set-height-100" />
            </div>
            <div className="container">
              <div className="row">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OurFeatures;
