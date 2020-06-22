import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Mission from "../components/mission";
import Leaders from "../components/leaders";
import Impact from "../components/impact";
import Link from "next/link";
import info from "../data/info.json";

const About = () => {
  const seo = {
    twitterHandle: info.twitter,
    currentUrl: `${info.baseUrl}/about`,
    pageTitle: "About Us",
    siteName: "Joyrampur Modern Education and Charitable Society",
    description: "About Page",
  };
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta
          name="twitter:creator"
          content={seo.twitterHandle}
          key="twhandle"
        />

        {/* Open Graph */}
        <meta property="og:url" content={seo.currentUrl} key="ogurl" />
        <meta property="og:site_name" content={seo.siteName} key="ogsitename" />
        <meta property="og:title" content={seo.pageTitle} key="ogtitle" />
        <meta
          property="og:description"
          content={seo.description}
          key="ogdesc"
        />
        <title>{seo.pageTitle}</title>
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
