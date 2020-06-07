import Head from "next/head";
import Layout from "../components/layout";
import { Carousel } from "antd";

const Home = () => {
  return (
    <Layout selectedKey={0}>
      <div className="carousel">
        <Carousel autoplay>
          <img src="/gallery1.jpg"></img>
          <img src="/gallery2.jpg"></img>
          <img src="/gallery3.jpg"></img>
          <img src="/banner.png"></img>
        </Carousel>
      </div>
      <div className="carousel">
        <Carousel autoplay>
          <img src="/gallery1.jpg"></img>
          <img src="/gallery2.jpg"></img>
          <img src="/gallery3.jpg"></img>
          <img src="/banner.png"></img>
        </Carousel>
      </div>
      <style jsx>{`
        .carousel {
          min-width: 100vh;
          object-fit: cover;
        }
        img {
          height: 90vh;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
