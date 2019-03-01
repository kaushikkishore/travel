import React, { Component } from "react";
import { HeaderAndLabelRows, ImageAndLabelRows, RowsOfLinks, Link} from "./common"

const logobw = require('../db/images/logo_bw.PNG');

const ContactInfoContent = () =>
  <div className="row">
    <HeaderAndLabelRows header="ADDRESS" content={['L4-06, 3rd Floor, Sky Walk, 5/1,', 'Assaye Road, Ulsoor,', 'Bangalore-560042,', 'Karnataka, India.']} passClass="col-5" />
    <HeaderAndLabelRows header="CONTACT" content={['+91 97401 49327', '+91 93417 15545']} passClass="col-3" />
    <HeaderAndLabelRows header="EMAIL" content={['sales@eurolinkworldwide.com', 'contact@eurolinkworldwide.com']} passClass="col-4" />
  </div>

const ContactInfo = () =>
  <>
    <div className='row'>
      <h5>CONTACT INFO</h5>
    </div>
    <ContactInfoContent />
  </>


const LogoCaption = () =>
    <ImageAndLabelRows imgSrc={logobw} content={['Adsasdasdaas dasdsankdn kasndklnasklndndl kasndlknaknd', 'Tasondnas sdaonosndoan sdaoidasoin, adsasdasdaas dasdsankdn kasndklnasklndndl kasndlknaknd']}/>

const UsefulLinks = () =>
  <>
    <div className='row'>
      <h5>USEFUL LINKS</h5>
    </div>
    <div className='row'>
      <div className="col-6">
        <RowsOfLinks content={['Home', 'Services', 'Experiences', 'About', 'Contact']}/>
      </div>
      <div className="col-6">
        <RowsOfLinks content={['Rail Tours', 'Van Tours', 'Group Tours', 'Educational Tours', 'Pilgrimage Tours']}/>
      </div>
    </div>
  </>

class BottomLinks extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid bg-dark">
          <div className="row">
            <LogoCaption />
          </div>
          <div className="row">
            <div className="col-5 offset-2">
              <ContactInfo />
            </div>
            <div className="col-3">
              <UsefulLinks />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BottomLinks;
