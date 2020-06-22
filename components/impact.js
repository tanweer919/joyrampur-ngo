import React from "react";
import { Row } from "antd";
import styles from "../styles/impact.module.css";
import StatisticCard from "./statisticCard";
const Impact = () => {
  const stats = [
    {
      title: "Mason General",
      registered: 120,
      certified: 114,
      placement: 42,
    },
    {
      title: "Retail Sales Associate",
      registered: 120,
      certified: 118,
      placement: 33,
    },
    {
      title: "Quality Seed Grower",
      registered: 180,
      certified: 173,
      placement: 63,
    },
    {
      title: "Small Poultry Farmer",
      registered: 180,
      certified: 170,
      placement: 65,
    },
    {
      title: "Self Employed Tailor",
      registered: 420,
      certified: 67,
      placement: 29,
    },
    {
      title: "National Digital Literacy Mission",
      registered: 10000,
      certified: 9550,
    },
  ];
  return (
    <section id="impact" className="sections">
      <Row justify="center" className="section-heading">
        <p>Our Impact</p>
      </Row>
      <Row justify="center" className="section-subheading">
        <p>
          Since we started our organisation with a vision to promote education
          and knowledge, we were able to have a far reaching impact in the field
          of education.
        </p>
      </Row>
      <Row
        justify="start"
        align="start"
        gutter={[{ sm: 0, md: 24, lg: 24 }, 48]}
        className={styles.row}
      >
        {stats.map((stat, i) => (
          <StatisticCard
            title={stat.title}
            stat={(({ registered, certified, placement }) => ({
              registered,
              certified,
              placement,
            }))(stat)}
            key={i}
          />
        ))}
      </Row>
    </section>
  );
};
export default Impact;
