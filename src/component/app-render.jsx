import React, { Component } from "react";
import SocialHeader from "./social-header";
import CompanyCarousel from "./company-carousel";
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
        <CompanyCarousel />
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
