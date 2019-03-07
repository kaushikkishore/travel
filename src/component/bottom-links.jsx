import React, { Component } from "react";
import { HeaderAndLabelRows, ImageAndLabelRows, RowsOfLinks, Link} from "./common"

const logobw = require('../db/images/logo_bw.PNG');

const ContactInfoContent = () =>
  <div className="row text-white">
    <HeaderAndLabelRows header="ADDRESS" content={['L4-06, 3rd Floor, Sky Walk,', ' 5/1, Assaye Road,', 'Ulsoor, Bangalore-560042,', 'Karnataka, India.']} classes="col-4 small" />
    <HeaderAndLabelRows header="CONTACT" content={['+91 97401 49327', '+91 93417 15545']} classes="col-3 small" />
    <HeaderAndLabelRows header="EMAIL" content={['sales@eurolinkworldwide.com', 'contact@eurolinkworldwide.com']} classes="col-5 small" />
  </div>

const ContactInfo = () =>
  <>
    <div className="row">
      <h5 className="blue">CONTACT INFO</h5>
    </div>
    <ContactInfoContent />
  </>


const LogoCaption = () =>
  <>
    <div className="container pt-3 pb-5">
      <ImageAndLabelRows 
        imgSrc={logobw} 
        content={['Adsasdasdaas dasdsankdn kasndklnasklndndl kasndlknaknd', 'Tasondnas sdaonosndoan sdaoidasoin, adsasdasdaas dasdsankdn kasndklnasklndndl kasndlknaknd']}
        classes="text-white mx-auto text-center"
        />
    </div>
  </>

const UsefulLinks = () =>
  <>
    <div className="row">
      <h5 className="blue">USEFUL LINKS</h5>
    </div>
    <div className="row">
      <div className="col-4">
        <RowsOfLinks content={['Home', 'Services', 'Experiences', 'About', 'Contact']} classes="row white-link button-left-padding-nil"/>
      </div>
      <div className="col-4">
        <RowsOfLinks content={['Rail Tours', 'Van Tours', 'Group Tours', 'Educational Tours', 'Pilgrimage Tours']} classes="row white-link button-left-padding-nil"/>
      </div>
    </div>
  </>

class BottomLinks extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="grey-background">
          <div className="container pb-5">
            <div className="row">
              <LogoCaption />
            </div>
            <div className="row">
              <div className="col-8">
                <ContactInfo />
              </div>
              <div className="col-4">
                <UsefulLinks />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BottomLinks;
