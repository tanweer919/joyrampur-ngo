import React from "react";
import { Layout, Row, Col } from "antd";
import Link from "next/link";
import styles from "../styles/footer.module.css";
import info from "../data/info.json";
import {
  BankFilled,
  MailFilled,
  PhoneOutlined,
  TwitterSquareFilled,
  LinkedinFilled,
  FacebookFilled,
} from "@ant-design/icons";
const AppFooter = () => {
  const links = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about" },
    { title: "Contact Us", url: "/contact" },
    { title: "Projects", url: "/#projects" },
  ];

  const contacts = [
    {
      icon: <BankFilled style={{ fontSize: "20px", color: "#50C878" }} />,
      contact: ` ${info.address}`,
    },
    {
      icon: <PhoneOutlined style={{ fontSize: "20px", color: "#50C878" }} />,
      contact: ` ${info.phone}`,
    },
    {
      icon: <MailFilled style={{ fontSize: "20px", color: "#50C878" }} />,
      contact: ` ${info.email}`,
    },
  ];
  const { Footer } = Layout;
  return (
    <Footer className={styles.footer}>
      <Row
        justify="space-around"
        align="start"
        gutter={[{ sm: 0, md: 48, lg: 48 }, 48]}
      >
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
        >
          <div>
            <img src="/vercel.svg" width="100px" />
          </div>
          <div className={styles.description}>
            <p>{info.description}</p>
          </div>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
        >
          <div className={styles.colHeading}>QUICK LINKS</div>
          {links.map((link, i) => (
            <div className={styles.links} key={i}>
              <Link href={link.url}>
                <a>{link.title}</a>
              </Link>
            </div>
          ))}
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
        >
          <div className={styles.colHeading}>CONTACT US</div>
          {contacts.map((contact, i) => (
            <div key={i}>
              <span className={styles.contactIcon}>{contact.icon}</span>
              <span>{contact.contact}</span>
            </div>
          ))}
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
        >
          <div className={styles.colHeading}>FOLLOW US</div>
          <div>
            <FacebookFilled style={{ fontSize: "35px", marginRight: "5px" }} />
            <a href={info.twitter} className={styles.socialLink}>
              <TwitterSquareFilled
                style={{ fontSize: "35px", marginRight: "5px" }}
              />
            </a>
            <LinkedinFilled style={{ fontSize: "35px", marginRight: "5px" }} />
          </div>
        </Col>
      </Row>
    </Footer>
  );
};
export default AppFooter;
