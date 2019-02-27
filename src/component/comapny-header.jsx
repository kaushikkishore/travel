import React, { Component } from "react";

class CompanyHeader extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              Application Logo goes here
            </button>
          </a>

          <form className="form-inline">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Make an Enquiry
            </button>
          </form>
        </nav>
      </React.Fragment>
    );
  }
}

export default CompanyHeader;
