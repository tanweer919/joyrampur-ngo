import Head from "next/head";
import Layout from "../components/layout";
import CarouselHome from "../components/carouselHome";
import Services from "../components/services";
import Projects from "../components/projects";
import Project from "../components/project";

const Home = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout selectedKey={0}>
        <CarouselHome />
        <Services />
        <Projects />
      </Layout>
    </>
  );
};

export default Home;
