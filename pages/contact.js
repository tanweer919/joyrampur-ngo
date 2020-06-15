import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import ContactCards from "../components/contactCards";
import Link from "next/link";
const Contact = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Contact Us</title>
      </Head>
      <Layout selectedKey={3}>
        <div className="breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link href="/">
                <HomeOutlined />
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Contact Us</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <ContactCards />
      </Layout>
    </>
  );
};

export default Contact;
