import React, { Component } from "react";
import { footerText } from "../db/footer-db";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer mt-auto py-3">
        <div className="container text-center">
          <span className="text-muted">{footerText}</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
