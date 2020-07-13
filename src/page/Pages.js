import React, { Component } from "react";

import Landing from "./Landing/Landing";
import Portfolio from "./Portfolio/Portfolio";

class Pages extends Component {
  state = {
    page: "landing",
  };

  showpage() {
    switch (this.state.page) {
      case "landing":
        return <Landing changePage={this.changePage} />;
      case "projects":
        return <Portfolio changePage={this.changePage} />;
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
    return <>{this.showpage()}</>;
  }
}

export default Pages;
