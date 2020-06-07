import React from "react";
import { Carousel } from "antd";
import styles from "../styles/carousel.module.css";

const CarouselHome = () => {
  return (
    <section id="carousel">
      <Carousel autoplay>
        <img src="/gallery1.jpg" className={styles.carouselImage}></img>
        <img src="/gallery2.jpg" className={styles.carouselImage}></img>
        <img src="/gallery3.jpg" className={styles.carouselImage}></img>
        <img src="/banner.png" className={styles.carouselImage}></img>
      </Carousel>
    </section>
  );
};

export default CarouselHome;
