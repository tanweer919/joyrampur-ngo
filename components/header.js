import React from "react";
import { Row, Col, Menu, Layout } from "antd";
import Link from "next/link";
import styles from "../styles/header.module.css";

const AppHeader = ({ selectedKey }) => {
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ];

  const { Header } = Layout;

  return (
    <Header className={styles.navbar}>
      <Row justify="space-between">
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 4 }}>
          <img src="/vercel.svg" width={128} alt="Brand Logo" />
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
      </Row>
    </Header>
  );
};

export default AppHeader;
