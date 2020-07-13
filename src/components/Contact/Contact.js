import React from "react";
import Button from "../Button/Button"
import "./Contact.scss";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  submitForm(ev) {
    console.log("Form submitted!");
    const form = ev.target;
    console.log(form);
  }

  render() {
    return (
      <section className="contain">
        <div className="wrapper">
        
        <div className="form">
          <h3 className="heading-secondary">Let's get in touch</h3>
          <form
            className="contact__form"
            onClick={this.submitForm}
            method="POST"
            action="https://formspree.io/mgenzwrz"
          >
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" name="name" />
            </p>
           
            <p>
              <label htmlFor="email">Email Address</label>
              <input type="text" name="email" />
            </p>
            <p className="full-width">
              <label htmlFor="message">Write your message</label>
              <textarea name="message" cols="30" rows="7"></textarea>
            </p>
            <Button className="btn">
              Submit
            </Button>
          </form>
        </div>
        <div className="contacts">
          <h3>My Info</h3>

          <ul>
            <li>
              <i className="fa fa-map-marker"></i><span>Orlando, US</span>
            </li>
            <li>
              <i className="fas fa-phone"></i> <span className="label"></span>
              <a href="tel:8285457853">(828)545-7853</a>
            </li>
            <li>
              <span className="fas fa-envelope-open"></span>
              <a href="mailto:@enaiman1@gmail.com">enaiman1@gmail.com</a>
            </li>
            <li>Open to relocation</li>
          </ul>
        </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
