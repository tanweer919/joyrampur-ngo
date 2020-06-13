import React, { useState } from "react";
import { Col, Card, Row } from "antd";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Statistic from "./statistic";
import styles from "../styles/impact.module.css";
const StatisticCard = ({ stat, title }) => {
  const titles = ["Total Registered", "Total Certified", "Total Placed"];
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
      <Card className={styles.cards} hoverable>
        <div className={styles.cardTitle}>{title}</div>
        <Row gutter={[24, 24]}>
          {Object.keys(stat).map((key, i) =>
            stat[key] != null ? (
              <Col>
                <Statistic
                  title={titles[i]}
                  value={
                    <CountUp
                      end={stat[key]}
                      duration={2}
                      start={viewPortEntered ? null : 0}
                    >
                      {({ countUpRef }) => (
                        <VisibilitySensor
                          active={!viewPortEntered}
                          onChange={(isVisible) => {
                            if (isVisible) {
                              setViewPortEntered(true);
                            }
                          }}
                          delayedCall
                        >
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  }
                ></Statistic>
              </Col>
            ) : (
              <></>
            )
          )}
        </Row>
      </Card>
    </Col>
  );
};

export default StatisticCard;
