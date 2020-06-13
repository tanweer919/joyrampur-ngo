import React, { Component } from "react";
import { Row, Col, Card, Modal } from "antd";
import styles from "../styles/gallery.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      currentImage: ""
    };
    this.galleryImages = [
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/v1591966310/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.35.08_PM.jpg",
        alt: "Gallery 1",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/v1591966321/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.35.14_PM.jpg",
        alt: "Gallery 2",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/v1591966323/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.41.32_PM.jpg",
        alt: "Gallery 3",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/v1591966325/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.35.10_PM.jpg",
        alt: "Gallery 4",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/v1591966326/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.35.14_PM_1.jpg",
        alt: "Gallery 5",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/v1591966329/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.41.35_PM.jpg",
        alt: "Gallery 6",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/v1591966330/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.35.13_PM.jpg",
        alt: "Gallery 7",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/v1591966335/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.41.39_PM.jpg",
        alt: "Gallery 8",
      },
      // { src: "", alt: "Gallery 9" },
      // { src: "", alt: "Gallery 10" },
      // { src: "", alt: "Gallery 11" },
      // { src: "", alt: "Gallery 12" },
      // { src: "", alt: "Gallery 13" },
      // { src: "", alt: "Gallery 14" },
      // { src: "", alt: "Gallery 15" },
      // { src: "", alt: "Gallery 16" },
    ];
  }

  handleClose = (e) => {
    this.setState({
      modalVisible: false,
    });
  };

  handleOpen = (src) => {
    this.setState({
      modalVisible: true,
      currentImage: src
    });
  };
  render() {
    return (
      <section id="gallery" className="sections">
        <Row justify="center" className="section-heading">
          <p>Gallery</p>
        </Row>
        <Row justify="center" className="section-subheading">
          <p>
            We don't want to push our ideas on to customers, we simply want to
            make what they want
          </p>
        </Row>
        <Row
          justify="center"
          align="middle"
          gutter={[{ sm: 0, md: 8, lg: 8 }, 24]}
          className={styles.cardSection}
        >
          {this.galleryImages.map((image, i) => (
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
              key={i}
            >
              <Card
                hoverable
                className={styles.galleryCards}
                cover={
                  <LazyLoadImage
                    src={image.src}
                    className={styles.images}
                  />
                }
                onClick={() => this.handleOpen(image.src)}
              ></Card>
            </Col>
          ))}
        </Row>
        <Modal
          visible={this.state.modalVisible}
          onCancel={this.handleClose}
          className={styles.galleryModal}
        >
          <img src={this.state.currentImage} className={styles.modalImage} />
        </Modal>
      </section>
    );
  }
}
export default Gallery;
