import React, { Component } from "react";
import AppHeader from "./header";

class Layout extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  constructor(props) {
    super(props);
    this.state = {
      navbarHome: this.props.selectedKey == "0" ? true : false,
      menuHome: this.props.selectedKey == "0" ? true : false,
      menuItemHome: this.props.selectedKey == "0" ? true : false,
    };
  }
  handleScroll = (e) => {
    if (window.pageYOffset < 657) {
      if (this.props.selectedKey == "0") {
        this.setState({
          navbarHome: true,
          menuHome: true,
          menuItemHome: true,
        });
      }
    } else {
      this.setState({
        navbarHome: false,
        menuHome: false,
        menuItemHome: false,
      });
    }
  };
  render() {
    const { children, selectedKey } = this.props;
    const { navbarHome, menuHome, menuItemHome } = this.state;
    return (
      <>
        <AppHeader
          selectedKey={selectedKey}
          navbarHome={navbarHome}
          menuHome={menuHome}
          menuItemHome={menuItemHome}
        />
        <div className="content" onScroll={this.handleScroll}>
          {children}
        </div>
      </>
    );
  }
}

export default Layout;
