import React from "react";
import { Row, Col, Card } from "antd";
import styles from "../styles/services.module.css";

const Services = () => {
  const services = [
    {
      title: "Online Certification",
      description:
        "We are providing Online Certification. We have almost 400 institute and more than 50,000 Students got Certificate till now.",
      imageUrl: "/certification.svg",
    },
    {
      title: "Online Certification",
      description:
        "We are providing Online Certification. We have almost 400 institute and more than 50,000 Students got Certificate till now.",
      imageUrl: "/certification.svg",
    },
    {
      title: "Online Certification",
      description:
        "We are providing Online Certification. We have almost 400 institute and more than 50,000 Students got Certificate till now.",
      imageUrl: "/certification.svg",
    },
    {
      title: "Online Certification",
      description:
        "We are providing Online Certification. We have almost 400 institute and more than 50,000 Students got Certificate till now.",
      imageUrl: "/certification.svg",
    },
    {
      title: "Online Certification",
      description:
        "We are providing Online Certification. We have almost 400 institute and more than 50,000 Students got Certificate till now.",
      imageUrl: "/certification.svg",
    },
    {
      title: "Online Certification",
      description:
        "We are providing Online Certification. We have almost 400 institute and more than 50,000 Students got Certificate till now.",
      imageUrl: "/certification.svg",
    },
    {
      title: "Online Certification",
      description:
        "We are providing Online Certification. We have almost 400 institute and more than 50,000 Students got Certificate till now.",
      imageUrl: "/certification.svg",
    },
    {
      title: "Online Certification",
      description:
        "We are providing Online Certification. We have almost 400 institute and more than 50,000 Students got Certificate till now.",
      imageUrl: "/certification.svg",
    },
    {
      title: "Online Certification",
      description:
        "We are providing Online Certification. We have almost 400 institute and more than 50,000 Students got Certificate till now.",
      imageUrl: "/certification.svg",
    },
    {
      title: "Online Certification",
      description:
        "We are providing Online Certification. We have almost 400 institute and more than 50,000 Students got Certificate till now.",
      imageUrl: "/certification.svg",
    },
  ];
  return (
    <section id="services" className="sections">
      <Row justify="center" className={styles.servicesHeading}>
        <p>Our Services</p>
      </Row>
      <Row justify="center" className={styles.servicesSubheading}>
        <p>
          We don't want to push our ideas on to customers, we simply want to
          make what they want
        </p>
      </Row>
      <Row
        justify="space-around"
        align="middle"
        gutter={[{ sm: 0, md: 96, lg: 96 }, 24]}
        className={styles.cardSection}
      >
        {services.map((service, i) => (
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} key={i}>
            <Card hoverable className={styles.cards}>
              <Row
                justify="space-between"
                align="middle"
                className={styles.cardRow}
              >
                <Col className={styles.cardImage}>
                  <img src={service.imageUrl} width="150px"></img>
                </Col>
                <Col>
                  <Row
                    className={styles.cardContent}
                    justify="space-around"
                    align="middle"
                  >
                    <Col className={styles.cardContentTitle}>
                      {service.title}
                    </Col>
                    <Col className={styles.cardContentDescription}>
                      {service.description}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Services;
