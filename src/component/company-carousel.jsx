import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { CarouselSource } from "../db/carousel-db";

class CompanyCarousel extends Component {
  state = {};
  render() {
    return (
      <Carousel>
        {CarouselSource.map(item => (
          <Carousel.Item key={item.id}>
            <div className="image-container">
              <img
                className="d-block w-100 mx-auto"
                src={item.src}
                alt={item.alt}
              />
              <div className="after" />
              <div className="image-caption">
                <div className="yellow bar" />
                <div className="font-super font-weight-bold place-name-caption pl-3 pr-3">
                  {item.heading}
                </div>
                <div className="blue bar" />
                <div className="font-xlg font-weight-bold place-description">
                  {item.description}
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default CompanyCarousel;
