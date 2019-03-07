import React, { Component } from "react";

class CompanyHeader extends Component {
  state = {
    CompanyLogo: "/img/Worldwidecopy.png"
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
        <div className="collapse navbar-collapse p-2">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className="form-inline">
                  <img src={this.state.CompanyLogo} className="company-logo" />
                </div>
              </div>
              <div className="col-5" />
              <div className="col-4">
                <div className="form-inline float-right">
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">
                          Home <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Features
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Pricing
                        </a>
                      </li>
                      <li className="nav-item">
                        <button
                          className="btn btn-primary my-2 my-sm-0"
                          type="submit"
                        >
                          Search
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default CompanyHeader;
