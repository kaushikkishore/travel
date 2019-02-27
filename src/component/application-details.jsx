import React, { Component } from "react";
class ApplicationDetails extends Component {
  state = {};
  render() {
    return (
      <div className="card bg-success text-white">
        <svg
          className="bd-placeholder-img bd-placeholder-img-lg card-img"
          width="100%"
          height="270"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: Card image"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96" />
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
            Card image
          </text>
        </svg>
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    );
  }
}

export default ApplicationDetails;
