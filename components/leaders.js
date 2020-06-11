import React from "react";
import { Row, Col, Card, Avatar } from "antd";
import styles from "../styles/leaders.module.css";

const Leaders = () => {
  const leaders = [
    {
      title: "Director",
      name: "Md Sahidul Islam",
      imageUrl:
        "https://res.cloudinary.com/doy9hqxr1/image/upload/v1591880552/joyrampurNgo/abhijit.jpg",
    },
    {
      title: "Treasurer",
      name: "Tuhina Tuhi",
      imageUrl:
        "https://res.cloudinary.com/doy9hqxr1/image/upload/v1591880553/joyrampurNgo/tuhina.jpg",
    },
    {
      title: "Operation Manager",
      name: "Abhijit Bhattacharya",
      imageUrl:
        "https://res.cloudinary.com/doy9hqxr1/image/upload/v1591880552/joyrampurNgo/abhijit.jpg",
    },
  ];
  return (
    <section id="leaders" className="sections inverted-sections">
      <Row justify="center" className={styles.leadersHeading}>
        <p>Leadership Team</p>
      </Row>
      <Row justify="center" className={styles.leadersSubheading}>
        <p>
          Leadership are geared toward bringing out out the best in employees by
          communicating effectively about what needs to be done.
        </p>
      </Row>
      <Row
        justify="center"
        align="middle"
        gutter={[{ sm: 0, md: 24, lg: 24 }, 48]}
        className={styles.leadersRow}
      >
        {leaders.map((leader, i) => (
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
          >
            <Card hoverable className={styles.leaderCard}>
              <Row
                justify="center"
                align="middle"
                className={styles.leaderRow}
              >
                <Col>
                  <Avatar src={leader.imageUrl} className={styles.avatar}/>
                </Col>
                <Col className={styles.leaderTitle}>{leader.title}</Col>
                <Col className={styles.leaderName}>{leader.name}</Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Leaders;
