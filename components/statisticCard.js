import React from "react";
import { Col, Statistic, Card, Row } from "antd";
import styles from "../styles/impact.module.css";
const StatisticCard = ({ stat }) => {
  return (
    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
      <Card className={styles.cards} hoverable>
        <div className={styles.cardTitle}>{stat.title}</div>
        <Row gutter={[24, 24]}>
          <Col>
            <Statistic
              title="Total Registered"
              value={stat.registered}
            ></Statistic>
          </Col>
          <Col>
            <Statistic
              title="Total Certified"
              value={stat.certified}
            ></Statistic>
          </Col>
          {stat.placement != null ? (
            <Col>
              <Statistic
                title="Total Placement"
                value={stat.placement}
              ></Statistic>
            </Col>
          ) : (
            <></>
          )}
        </Row>
      </Card>
    </Col>
  );
};

export default StatisticCard;
