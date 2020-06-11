import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Mission from "../components/mission";
import Leaders from "../components/leaders";
import Impact from "../components/impact";
const About = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout selectedKey={"About:1"}>
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
        <Impact />
      </Layout>
    </>
  );
};

export default About;
