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
      title: "Address",
      value:
        "Reg. Office-Joyrampur, Post-Bhabanipur,District-Murshidabad, West Bengal, Pin-742202",
    },
    {
      icon: <PhoneOutlined style={{ fontSize: "40px" }} />,
      title: "Phone no.",
      value: "8617607175",
    },
    {
      icon: <MailFilled style={{ fontSize: "40px" }} />,
      title: "Email",
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
    <Row
      justify="start"
      align="middle"
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
  );
};

export default ContactCards;
