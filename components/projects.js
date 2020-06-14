import React from "react";
import { Row } from "antd";
import styles from "../styles/projects.module.css";
import Project from "./project";

const Projects = () => {
  const projects = [
    {
      title: "PMKVY CSSM (2018-2019)",
      description:
        "The PMKVY 2 (including both CSCM and CSSM components) is a National Skill Qualification Framework (NSQF) aligned scheme. It also fully adheres to common norms of the MSDE. ",
      imageUrl: "/pmkvy.png",
    },
    {
      title: "UTKARSH BANGLA",
      description:
        "West Bengal government has launched the Utkarsh Bangla Scheme with an aim of providing vocational training to school dropouts. The scheme was launche",
      imageUrl: "/utkarsh.png",
    },
    {
      title: "NDLM(National Digital Literacy Mission)",
      description:
        "NDLM is an effort to complement government's vision to transform one from each household as digitally literate. The project aims at helping adults with low technological literacy develop the skills they need to interact in an increasingly digital world.",
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
