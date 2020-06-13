import React from "react";
import { Row, Col } from "antd";
import styles from "../styles/statistic.module.css";

const Statistic = ({ title, value }) => {
  return (
    <Row justify="start" className={styles.row}>
      <Col className={styles.title}>{title}</Col>
      <Col className={styles.value}>{value}</Col>
    </Row>
  );
};

export default Statistic;
