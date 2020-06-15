import React from "react";
import {
  BankFilled,
  MailFilled,
  PhoneOutlined,
  TwitterSquareFilled,
  FacebookFilled,
} from "@ant-design/icons";
import { Row, Col } from "antd";
import ContactCard from "./contactCard";
import styles from "../styles/contacts.module.css";

const ContactCards = () => {
  const contacts = [
    {
      icon: <BankFilled style={{ fontSize: "40px" }} />,
      title: "Contact Location",
      value:
        "Reg. Office-Joyrampur, Post-Bhabanipur,District-Murshidabad, West Bengal, Pin-742202",
    },
    {
      icon: <PhoneOutlined style={{ fontSize: "40px" }} />,
      title: "Phone number",
      value: "8617607175",
    },
    {
      icon: <MailFilled style={{ fontSize: "40px" }} />,
      title: "Contact Mail",
      value: "joyrampursociety@gmail.com",
    },
    {
      icon: <FacebookFilled style={{ fontSize: "40px" }} />,
      title: "Facebook",
      value: "facebook.com",
    },
    {
      icon: <TwitterSquareFilled style={{ fontSize: "40px" }} />,
      title: "Twitter",
      value: "twiiter.com",
    },
  ];
  return (
    <section id="contacts" className="sections">
      <Row justify="center" className="section-heading">
        <p>Contact Us</p>
      </Row>
      <Row justify="center" className="section-subheading">
        <p>
          If you want to reach and connect with us, you can connect with using these mediums. 
        </p>
      </Row>
      <Row
        justify="start"
        align="start"
        gutter={[{ xs: 0, sm: 0, md: 48, lg: 48 }, 24]}
        className={styles.contactsRow}
      >
        {contacts.map((contact, i) => (
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
            key={i}
          >
            <ContactCard contact={contact} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ContactCards;
