import React, { Component } from "react";
class BottomLinks extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid bg-dark">
        <div className="row text-white">
          <div className="col" />
          <div className="col" />
          <div className="col">Main Head Link</div>
          <div className="col" />
          <div className="col">Main Head Link</div>
          <div className="col" />
          <div className="col" />
        </div>
        <div className="row text-secondary">
          <div className="col" />
          <div className="col" />
          <div className="col">Main Head Link</div>
          <div className="col" />
          <div className="col">Main Head Link</div>
          <div className="col" />
          <div className="col" />
        </div>
        <div className="row text-light">
          <div className="col" />
          <div className="col" />
          <div className="col">
            <button type="button" className="btn btn-link btn-sm">
              Link
            </button>
          </div>
          <div className="col" />
          <div className="col">
            <button type="button" className="btn btn-link btn-sm">
              Link
            </button>
          </div>
          <div className="col" />
          <div className="col" />
        </div>

        <div className="row text-light">
          <div className="col" />
          <div className="col" />
          <div className="col">
            <button type="button" className="btn btn-link btn-sm">
              Link
            </button>
          </div>
          <div className="col" />
          <div className="col">
            <button type="button" className="btn btn-link btn-sm">
              Link
            </button>
          </div>
          <div className="col" />
          <div className="col" />
        </div>
      </div>
    );
  }
}

export default BottomLinks;
