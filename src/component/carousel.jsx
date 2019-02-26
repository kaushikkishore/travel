import React, { Component } from "react";
class Carousel extends Component {
  state = {};
  render() {
    return (
      <div className="bd-example">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className=""
            />
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="1"
              className=""
            />
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="2"
              className="active"
            />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                width="800"
                height="400"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: First slide"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#555" dy=".3em">
                  First slide
                </text>
              </svg>
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                width="800"
                height="400"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: Second slide"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#666" />
                <text x="50%" y="50%" fill="#444" dy=".3em">
                  Second slide
                </text>
              </svg>
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="carousel-item active">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                width="800"
                height="400"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: Third slide"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#555" />
                <text x="50%" y="50%" fill="#333" dy=".3em">
                  Third slide
                </text>
              </svg>
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Carousel;
