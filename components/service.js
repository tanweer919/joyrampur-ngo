import React from "react";
import { Row, Col, Card } from "antd";
import styles from "../styles/services.module.css";
const Service = ({ service }) => {
  return (
    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
      <Card hoverable className={styles.cards}>
        <Row justify="center" align="middle" className={styles.cardRow}>
          <Col className={styles.cardImage}>
            <img
              src={service.imageUrl}
              className={styles.images}
              alt="Service image"
            ></img>
          </Col>
          <Col>
            <Row
              className={styles.cardContent}
              justify="space-around"
              align="middle"
            >
              <Col className={styles.cardContentTitle}>{service.title}</Col>
              <Col className={styles.cardContentDescription}>
                {service.description}
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};
export default Service;
