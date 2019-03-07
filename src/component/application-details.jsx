import React, { Component } from "react";
import WhyUsCard from "./why-us-card";
import { whyUsDB } from "../db/why_us";

class ApplicationDetails extends Component {
  state = {};
  render() {
    return (
      <div className="card bg-success text-white">
        <svg
          className="bd-placeholder-img bd-placeholder-img-lg card-img"
          width="100%"
          height="500"
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
          <h1 className="card-title text-center">Why Choose Us</h1>
          <div className="container">
            <div className="row set-height-100" />
          </div>
          <div className="container">
            <div className="row">
              {whyUsDB.map(item => (
                <WhyUsCard
                  key={item.Id}
                  heading={item.Heading}
                  content={item.Content}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApplicationDetails;
