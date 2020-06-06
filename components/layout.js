import React from "react";
import AppHeader from "./header";

const Layout = ({ children, selectedKey }) => {
  return (
    <>
      <AppHeader selectedKey={selectedKey} />
      {children}
    </>
  );
};

export default Layout;
