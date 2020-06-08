import React from "react";
import { Row } from "antd";
import styles from "../styles/services.module.css";
import Service from "./service";

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
          <Service service={service} id={i} />
        ))}
      </Row>
    </section>
  );
};

export default Services;
