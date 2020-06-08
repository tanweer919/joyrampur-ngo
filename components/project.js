import React from "react";
import { Row, Col, Card } from "antd";
import styles from "../styles/projects.module.css";

const Project = ({ project }) => {
  const { Meta } = Card;
  return (
    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
      <Card
        cover={<img src={project.imageUrl} alt={project.title} />}
        className={styles.projectCard}
        hoverable
      >
        <Meta title={project.title} description={project.description}></Meta>
      </Card>
    </Col>
  );
};
export default Project;
