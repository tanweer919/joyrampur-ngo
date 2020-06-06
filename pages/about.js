import React from "react";
import Layout from "../components/layout";
import { Row } from "antd";
const About = () => {
  return (
    <Layout selectedKey={1}>
      <Row justify="space-around" align="middle" className="row">
        <h1>About Page</h1>
      </Row>
      <style jsx>{`
        .row {
          min-height: 100vh;
        }
      `}</style>
    </Layout>
  );
};

export default About;
