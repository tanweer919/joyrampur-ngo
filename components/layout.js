import React from "react";
import AppHeader from "./header";

const Layout = ({ children, selectedKey }) => {
  return (
    <>
      <AppHeader selectedKey={selectedKey} />
      <div className="content">{children}</div>
    </>
  );
};

export default Layout;
