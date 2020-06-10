import React from "react";
import AppHeader from "./header";
import AppFooter from "./footer";

const Layout = ({ children, selectedKey }) => {
  return (
    <>
      <AppHeader selectedKey={selectedKey} />
      <div className="content">{children}</div>
      <AppFooter />
    </>
  );
};

export default Layout;
