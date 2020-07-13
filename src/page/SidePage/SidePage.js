// import React from "react";
import React, { Component } from "react";
import "./SidePage.scss";
import NavButton from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import Tech from "../../components/Tech/Tech";
import Contact from "../../components/Contact/Contact";

class SidePage extends Component {
  state = {
    page: "about",
  };

  showpage() {
    switch (this.state.page) {
      case "about":
        return <About changePage={this.changePage} />;
      case "tech":
        return <Tech changePage={this.changePage} />;
      case "contact":
        return <Contact changePage={this.changePage} />;
      default:
    }
  }

  changePage = (e) => {
    e.preventDefault();
    console.log(e.target.getAttribute("data__page"));
    this.setState({
      page: e.target.getAttribute("data__page"),
    });
  };

  render() {
    return (
      <div className="sidePage">
        <input
          type="checkbox"
          className="sidePage__checkbox"
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="sidePage__button">
          <span className="sidePage__icon">&nbsp;</span>
        </label>

        <div className="sidePage__background">&nbsp;</div>
        <nav className="sidePage__nav">
          <ul className="sidePage__ul">
            <li>
              {" "}
              <NavButton data__page="about" onClick={this.changePage}>
                About
              </NavButton>
            </li>
            <li>
              <NavButton data__page="tech" onClick={this.changePage}>
                Tech
              </NavButton>
            </li>
            <li>
              <NavButton data__page="contact" onClick={this.changePage}>
                Contact
              </NavButton>
            </li>
          </ul>
          <div className="sidePage__container">{this.showpage()}</div>
        </nav>
      </div>
    );
  }
}

export default SidePage;
