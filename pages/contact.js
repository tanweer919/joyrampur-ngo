import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import ContactCards from "../components/contactCards";
const Contact = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout selectedKey={3}>
        <div className="breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">Contact Us</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <ContactCards />
      </Layout>
    </>
  );
};

export default Contact;
