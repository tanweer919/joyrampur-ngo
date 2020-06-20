import Head from "next/head";
import Layout from "../components/layout";
import CarouselHome from "../components/carouselHome";
import Services from "../components/services";
import Projects from "../components/projects";
import Gallery from "../components/gallery";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Link from "next/link";
import info from "../data/info.json";

const Home = () => {
  const seo = {
    twitterHandle: info.twitter,
    currentUrl: "https://joyrampur-ngo.now.sh/",
    pageTitle: "Joyrampur Society",
    siteName: "Joyrampur Modern Education and Charitable Society",
    description: "Home Page",
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
      <Layout selectedKey={0}>
        <div className="breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link href="/">
                <HomeOutlined />
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <CarouselHome />
        <Services />
        <Projects />
        <Gallery />
      </Layout>
    </>
  );
};

export default Home;
