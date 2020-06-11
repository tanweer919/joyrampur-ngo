import React from "react";
import { Row } from "antd";
import styles from "../styles/projects.module.css";
import Project from "./project";

const Projects = () => {
  const projects = [
    {
      title: "PMKVY CSSM (2018-2019)",
      description:
        "We teach small children about the naunces of web development ad its related fields. This project includes both frontend development and backend development.",
      imageUrl: "/pmkvy.png",
    },
    {
      title: "UTKARSH BANGLA",
      description:
        "We teach small children about the naunces of web development ad its related fields. This project includes both frontend development and backend development.",
      imageUrl: "/utkarsh.png",
    },
    {
      title: "NDLM(National Digital Literacy Mission)",
      description:
        "We teach small children about the naunces of web development ad its related fields. This project includes both frontend development and backend development.",
      imageUrl: "/ndlm.jpg",
    },
  ];
  return (
    <section id="projects" className="sections inverted-sections">
      <Row justify="center" className={styles.projectsHeading}>
        <p>Our Projects</p>
      </Row>
      <Row justify="center" className={styles.projectsSubheading}>
        <p>
          We don't want to push our ideas on to customers, we simply want to
          make what they want
        </p>
      </Row>
      <Row
        justify="center"
        align="middle"
        gutter={[{ sm: 0, md: 96, lg: 96 }, 48]}
        className={styles.cardSection}
      >
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </Row>
    </section>
  );
};

export default Projects;
