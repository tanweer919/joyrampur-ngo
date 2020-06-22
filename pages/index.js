import Head from "next/head";
import Layout from "../components/layout";
import CarouselHome from "../components/carouselHome";
import Services from "../components/services";
import Projects from "../components/projects";
import Gallery from "../components/gallery";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Joyrampur Society</title>
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
