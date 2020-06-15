import React from "react";
import { Row, Col, Card } from "antd";
import styles from "../styles/contacts.module.css";
const ContactCard = ({ contact }) => {
  return (
    <Card className={styles.contactCard}>
      <Row justify="start" align="middle" className={styles.contactCardRow}>
        <Col className={styles.contactIcon}>{contact.icon}</Col>
        <Col>
          <Row className={styles.contactDetailsRow}>
            <Col className={styles.contactTitle}>{contact.title}</Col>
            <Col className={styles.contactValue}>{contact.value}</Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default ContactCard;
