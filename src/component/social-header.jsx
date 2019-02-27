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
          <div className="container">
            <div className="row" />
            <div className="row" />
            <div className="row">
              <div className="form-inline text-white">
                {this.getHelloInDifferentLanguage()}
              </div>
            </div>
          </div>

          <div className="form-inline">
            <Icons
              classes="material-icons white pr-3"
              iconName="favorite_border"
            />
            <Icons classes="material-icons white pr-3" iconName="adjust" />
            <Icons classes="material-icons white pr-3" iconName="cloud_queue" />
            <Icons
              classes="material-icons white pr-3"
              iconName="photo_filter"
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default SocialHeaders;
