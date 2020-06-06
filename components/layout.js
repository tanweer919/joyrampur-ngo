import React from "react";
import AppHeader from "./header";

const Layout = ({ children, selectedKey }) => {
  return (
    <>
      <AppHeader selectedKey={selectedKey} />
      <div className="content">{children}</div>
      <style jsx>{`
        .content {
          padding-top: 64px;
        }
      `}</style>
    </>
  );
};

export default Layout;
