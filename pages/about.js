import React from "react";
import Layout from "../components/layout";
import { Row, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Mission from "../components/mission";
const About = () => {
  return (
    <Layout selectedKey={1}>
      <div className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">About</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Mission />
    </Layout>
  );
};

export default About;
