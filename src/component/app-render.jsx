import React, { Component } from "react";
import SocialHeader from "./social-header";
import Carousel from "./carousel";
import CompanyHeader from "./comapny-header";
import OurFeatures from "./our-features";
import ApplicationDetails from "./application-details";
import LandingPageNavigator from "./landing-page-navigator";
import Footer from "./footer";
import BottomLinks from "./bottom-links";

class AppRender extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <SocialHeader />
        <CompanyHeader />
        <Carousel />
        <OurFeatures />
        <ApplicationDetails />
        <LandingPageNavigator />
        <BottomLinks />
        <Footer />
      </React.Fragment>
    );
  }
}

export default AppRender;
