import React, { Component } from "react";
import CustomButton from "./CustomButton";
import "./Common.css";

class NavBar extends Component {
  render() {
    return (
      <div className="row justify-content-between pl-m pr-m pt-m">
        <div>Deskera Menu</div>
        <div>
          <div className="row">
            <CustomButton title="About" handler={this.aboutClicked} />
            <CustomButton title="Home" handler={this.homeClicked} />
            <CustomButton title="Contact" handler={this.contactClicked} />
            <CustomButton title="Export" handler={this.exportClicked} />
          </div>
        </div>
      </div>
    );
  }

  aboutClicked = () => {
    alert("aboutClicked");
  };
  homeClicked = () => {
    alert("homeClicked");
  };
  contactClicked = () => {
    alert("contactClicked");
  };
  exportClicked = () => {
    alert("exportClicked");
  };
}

export default NavBar;
