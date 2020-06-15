import React, { useRef } from "react";
import { Carousel } from "antd";
import styles from "../styles/carousel.module.css";

const CarouselHome = () => {
  const slider = useRef();
  const carouselImages = [
    "https://res.cloudinary.com/doy9hqxr1/image/upload/v1591966296/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.33.24_PM.jpg",
    "https://res.cloudinary.com/doy9hqxr1/image/upload/v1591966325/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.35.10_PM.jpg",
    "https://res.cloudinary.com/doy9hqxr1/image/upload/v1591966321/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.35.14_PM.jpg",
    "https://res.cloudinary.com/doy9hqxr1/image/upload/v1591966335/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.41.39_PM.jpg",
  ];
  return (
    <section id="carousel">
      <Carousel
        autoplay
        ref={(ref) => {
          slider.current = ref;
        }}
      >
        {carouselImages.map((imageSrc, i) => (
          <img
            src={imageSrc}
            key={i}
            className={styles.carouselImage}
            onClick={() => {
              slider.current.next();
            }}
          />
        ))}
      </Carousel>
    </section>
  );
};

export default CarouselHome;
