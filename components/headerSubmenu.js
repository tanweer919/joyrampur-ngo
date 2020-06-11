import React from "react";
import { Menu } from "antd";
import Link from "next/link";

const HeaderSubMenu = ({ menuItem, navLink }) => {
  const { SubMenu } = Menu;
  return (
    <SubMenu title="About" className={menuItem}>
      <Menu.Item key={`${navLink.title}:1`}>
        <Link href="/about#mission">
          <a>Our Mission</a>
        </Link>
      </Menu.Item>
      <Menu.Item key={`${navLink.title}:2`}>
        <Link href="/about#leaders">
          <a>Leadership Team</a>
        </Link>
      </Menu.Item>
      <Menu.Item key={`${navLink.title}:3`}>
        <Link href="/about#impact">
          <a>Our Impact</a>
        </Link>
      </Menu.Item>
    </SubMenu>
  );
};
export default HeaderSubMenu;
