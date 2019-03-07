import React, { Component } from "react";
import Icons from "./icons";

class SocialHeaders extends Component {
  state = {};
  getHelloInDifferentLanguage = () => {
    return "Hello | Bonjour | Hola | Ola | Hej | Guten tag | Ciao | Jo Napot | Czesc ";
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-0">
        <div className="collapse navbar-collapse">
          <div className="container pt-1 pb-1">
            <div className="row">
              <div className="col-6">
                <div className="form-inline text-white font-sm">
                  {this.getHelloInDifferentLanguage()}
                </div>
              </div>
              <div className="col-3" />
              <div className="col-3">
                <div className="form-inline float-right">
                  <Icons
                    classes="material-icons white pr-3 md-18"
                    iconName="favorite_border"
                  />
                  <Icons
                    classes="material-icons white pr-3 md-18"
                    iconName="adjust"
                  />
                  <Icons
                    classes="material-icons white pr-3 md-18"
                    iconName="cloud_queue"
                  />
                  <Icons
                    classes="material-icons white md-18"
                    iconName="photo_filter"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default SocialHeaders;
