import Head from "next/head";
import Layout from "../components/layout";
import CarouselHome from "../components/carouselHome";
import Services from "../components/services";

const Home = () => {
  return (
    <Layout selectedKey={0}>
      <CarouselHome />
      <Services />
    </Layout>
  );
};

export default Home;
