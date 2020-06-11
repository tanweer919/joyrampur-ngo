import React from "react";
import { Layout, Row, Col } from "antd";
import Link from "next/link";
import styles from "../styles/footer.module.css";
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
      contact:
        " Reg. Office-Joyrampur, Post-Bhabanipur,District-Murshidabad, West Bengal, Pin-742202",
    },
    {
      icon: <PhoneOutlined style={{ fontSize: "20px", color: "#50C878" }} />,
      contact: " 8617607175",
    },
    {
      icon: <MailFilled style={{ fontSize: "20px", color: "#50C878" }} />,
      contact: " joyrampur@gmail.com",
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
            <p>
              JOYRAMPUR MODERN EDUCATION AND CHARITABLE SOCIETY is an ISO
              900-2015 Certified Company with an initiative to support the youth
              of the world in their time of need, and work towards a greater
              good.
            </p>
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
            <TwitterSquareFilled
              style={{ fontSize: "35px", marginRight: "5px" }}
            />
            <LinkedinFilled style={{ fontSize: "35px", marginRight: "5px" }} />
          </div>
        </Col>
      </Row>
    </Footer>
  );
};
export default AppFooter;
