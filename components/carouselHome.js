import React from "react";
import { Carousel } from "antd";
import styles from "../styles/carousel.module.css";

const CarouselHome = () => {
  return (
    <section id="carousel">
      <Carousel autoplay>
        <img
          src="https://res.cloudinary.com/doy9hqxr1/image/upload/v1591966296/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.33.24_PM.jpg"
          className={styles.carouselImage}
        ></img>
        <img
          src="https://res.cloudinary.com/doy9hqxr1/image/upload/v1591966325/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.35.10_PM.jpg"
          className={styles.carouselImage}
        ></img>
        <img
          src="https://res.cloudinary.com/doy9hqxr1/image/upload/v1591966321/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.35.14_PM.jpg"
          className={styles.carouselImage}
        ></img>
        <img
          src="https://res.cloudinary.com/doy9hqxr1/image/upload/v1591966335/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.41.39_PM.jpg"
          className={styles.carouselImage}
        ></img>
      </Carousel>
    </section>
  );
};

export default CarouselHome;
