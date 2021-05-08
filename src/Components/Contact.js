import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const message = this.props.data.contactmessage;

    const networks = this.props.data.social.map(function (network) {
      return (
        <Fade duration={1000}>
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        </Fade>
      );
    });
    
    return (
      <section id="contact">
        <Fade duration={1000}>
          <div className="row section-head">
            <div className="four columns header-col">
            <div className="columns contact-details">
                  <h2>Contact Details</h2> 
                  <br />
                  <h5 className="white">
                    <span>{name}</span>
                    <br />
                    <span>
                    
                      {city}, </span>
                      <span>{state}</span>
                  </h5>
                </div>
            </div>
          
            <div className="four columns">
            <div className="columns contact-details">
              <br /> <br /> 
                  <h5 className="white">
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </h5>
            </div> </div>

            <div className="four columns">
            <div className="columns contact-details">
                  <h5 className="white"> <br /> <br />
                  <ul className="message">{message}</ul>
                  </h5>
            </div> </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Contact;
