import React from "react";
import "./About.scss";
// import Button from "../Button/Button";
import Biopic from "../../assets/img/bioPic.JPG";

function About(props) {
  return (
    <section className="about">
      <figure className="about__shape">
        <img src={Biopic} alt="Bio Pic of Eric" className="about__img" />
        <figcaption className="about__caption">Eric Naiman</figcaption>
      </figure>
      <div className="about__text">
        <h3 className="heading-secondary">Welcome to my portfolio</h3>
        <p>
          I am a customer centric, software developer, with an
          accomplished food & beverage management background.
          </p>
          <p>
          Currently looking to join a dynamic company and forge a career as a
          first class software developer. Effective at combining creativity,
          collaboration, and problem solving. Known among colleagues to have
          expertise in analyzing, developing, and implementing solutions to
          improve the user experience.
          <br />
          Comprehensive knowledge of management, organizational development,
          team building, and project execution.
        </p>
      
      </div>  
      {/* <p>Im open to relocation</p> */}
    </section>
  );
}

export default About;
