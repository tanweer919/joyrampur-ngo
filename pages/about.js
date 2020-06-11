import React from "react";
import Layout from "../components/layout";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Mission from "../components/mission";
import Leaders from "../components/leaders";
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
      <Leaders />
    </Layout>
  );
};

export default About;
