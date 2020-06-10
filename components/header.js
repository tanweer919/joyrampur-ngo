import React from "react";
import { Row, Col, Menu, Layout, Popover } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "../styles/header.module.css";

const AppHeader = ({ selectedKey }) => {
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    {title: "Projects", link: "/#projects"},
    { title: "Contact", link: "/contact" },
  ];

  const { Header } = Layout;

  const content = (
    <div style={{ width: "100%" }}>
      <Menu
        mode="vertical"
        selectedKeys={[`${selectedKey}`]}
        className={styles.menu}
        justify="space-between"
      >
        {navLinks.map((navLink, i) => (
          <Menu.Item key={i} className={styles.menuItem}>
            <Link href={navLink.link}>
              <a>{navLink.title}</a>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );

  return (
    <Header className={styles.navbar}>
      <Row
        justify="space-between"
        align="middle"
        gutter={{ sm: 0, md: 24, lg: 8 }}
      >
        <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 4 }}>
          <Row justify="center" align="middle">
            <img src="/vercel.svg" width={128} alt="Brand Logo" />
          </Row>
        </Col>
        <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 20 }}>
          <Menu
            mode="horizontal"
            selectedKeys={[`${selectedKey}`]}
            className={styles.menu}
            justify="space-between"
          >
            {navLinks.map((navLink, i) => (
              <Menu.Item key={i} md={{ span: 5 }} className={styles.menuItem}>
                <Link href={navLink.link}>
                  <a>{navLink.title}</a>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Col>
        <Col xs={{ span: 2 }} sm={{ span: 2 }} md={{ span: 0 }}>
          <Popover
            placement="bottomRight"
            trigger="click"
            content={content}
            overlayClassName={styles.navbarPopover}
          >
            <UnorderedListOutlined style={{ fontSize: "16px" }} />
          </Popover>
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
