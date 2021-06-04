import React from "react";
import ToolBar from "./ToolBar";
import Drawer from "./Drawer";
import BackDrop from "./BackDrop";

class Napp extends React.Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    // let sideDrawer;

    let backdrop;

    if (this.state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />;
      backdrop = <BackDrop click={this.backDropClickHandler} />;
    }

    return (
      <div style={{ height: "100%" }}>
        <ToolBar drawerToggleClickHandler={this.drawerToggleClickHandler} />
        <Drawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
  }
}

export default Napp;
