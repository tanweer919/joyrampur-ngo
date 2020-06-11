import React from "react";
import { Row } from "antd";
import styles from "../styles/leaders.module.css";

const Leaders = () => {
  const leaders = [
    {
      title: "Web Development",
      description:
        "We teach small children about the naunces of web development ad its related fields. This project includes both frontend development and backend development.",
      imageUrl: "/projects.png",
    },
    {
      title: "Web Development",
      description:
        "We teach small children about the naunces of web development ad its related fields. This project includes both frontend development and backend development.",
      imageUrl: "/projects.png",
    },
    {
      title: "Web Development",
      description:
        "We teach small children about the naunces of web development ad its related fields. This project includes both frontend development and backend development.",
      imageUrl: "/projects.png",
    },
  ];
  return (
    <section id="leaders" className="sections">
      <Row justify="center" className={styles.leadersHeading}>
        <p>Our Projects</p>
      </Row>
      <Row justify="center" className={styles.leadersSubheading}>
        <p>
          We don't want to push our ideas on to customers, we simply want to
          make what they want
        </p>
      </Row>
      <Row
        justify="center"
        align="middle"
        gutter={[{ sm: 0, md: 96, lg: 96 }, 48]}
      >
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </Row>
    </section>
  );
};

export default Leaders;
