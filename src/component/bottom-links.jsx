import React, { Component } from "react";
import { HeaderAndContent, Link} from "./common"

const ContactInfoContent = () =>
  <div className="row">
    <HeaderAndContent header='ADDRESS' content={['L4-06, 3rd Floor, Sky Walk, 5/1,', 'Assaye Road, Ulsoor,', 'Bangalore-560042,', 'Karnataka, India.']}  className="col-md-6"/>
    <HeaderAndContent header='CONTACT' content={['+91 97401 49327', '+91 93417 15545']}/>
    <HeaderAndContent header='EMAIL' content={['sales@eurolinkworldwide.com', 'contact@eurolinkworldwide.com']}/>
  </div>

const ContactInfo = () =>
  <div className="col-md-6">
    <h5>CONTACT INFO</h5>
    <ContactInfoContent />
  </div>

const UsefulLinks = () =>
  <div className="col-md-6">
    <h5>USEFUL LINKS</h5>
    <div className="row">
      <div className="col-md-6">
        <Link name={'Home'} /><br/>
        <Link name={'Services'} /><br/>
        <Link name={'Experiences'} /><br/>
        <Link name={'About'} /><br/>
        <Link name={'Contact'} />
      </div>
      <div className="col-md-6">
        <Link name={'Rail Tours'} /><br/>
        <Link name={'Van Tours'} /><br/>
        <Link name={'Group Tours'} /><br/>
        <Link name={'Educational Tours'} /><br/>
        <Link name={'Pilgrimage Tours'} />
      </div>
    </div>
  </div>

class BottomLinks extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid bg-dark">
          <div className="row">
            <ContactInfo />
            <UsefulLinks />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BottomLinks;
