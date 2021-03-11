import React, { Component } from "react";
import CustomButton from "./CustomButton";
import "./Common.css";
import deskera_logo from "./assets/deskera_logo/deskera-logo-dark@2x.png";

class NavBar extends Component {
  render() {
    return (
      <div className="row justify-content-between align-items-center pl-m pr-m pt-m">
        <div>
          <div className="row">
            <img style={{ height: 30 }} src={deskera_logo} alt="" />
            <div className="fw-b ml-m fs-l mt-m">Notes</div>
          </div>
        </div>
        <div>
          <div className="row">
            <CustomButton
              title="Home"
              className=" text-black fw-m"
              handler={this.homeClicked}
            />
            <CustomButton
              title="About"
              className=" text-black fw-m"
              handler={this.aboutClicked}
            />
            <CustomButton
              title="Contact"
              className=" text-black fw-m"
              handler={this.contactClicked}
            />
            <CustomButton
              title="Settings"
              className=" text-black fw-m"
              handler={this.exportClicked}
            />
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
