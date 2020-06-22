import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Mission from "../components/mission";
import Leaders from "../components/leaders";
import Impact from "../components/impact";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <Layout selectedKey={"About:1"}>
        <div className="breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link href="/">
                <HomeOutlined />
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>About Us</Breadcrumb.Item>
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
