import React, { Component } from "react";
import { Row, Col, Card, Modal } from "antd";
import SwipeableViews from "react-swipeable-views";
import styles from "../styles/gallery.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      currentImage: "",
      galleryIndex: 0,
    };
    this.galleryImages = [
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/q_20/v1591966310/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.35.08_PM.jpg",
        alt: "Gallery 1",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/q_20/v1591966321/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.35.14_PM.jpg",
        alt: "Gallery 2",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/q_20/v1591966323/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.41.32_PM.jpg",
        alt: "Gallery 3",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/q_20/v1591966325/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.35.10_PM.jpg",
        alt: "Gallery 4",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/q_20/v1591966326/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.35.14_PM_1.jpg",
        alt: "Gallery 5",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/q_20/v1591966329/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.41.35_PM.jpg",
        alt: "Gallery 6",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/q_20/v1591966330/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.35.13_PM.jpg",
        alt: "Gallery 7",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/q_20/v1591966335/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.41.39_PM.jpg",
        alt: "Gallery 8",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/q_20/v1591966337/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.41.34_PM.jpg",
        alt: "Gallery 9",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/q_20/v1591966340/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.41.40_PM_1.jpg",
        alt: "Gallery 10",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/q_20/v1591966341/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.35.11_PM.jpg",
        alt: "Gallery 11",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/q_20/v1591966347/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.41.42_PM.jpg",
        alt: "Gallery 12",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/q_20/v1591966349/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.41.41_PM.jpg",
        alt: "Gallery 13",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/q_20/v1591966349/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.41.40_PM.jpg",
        alt: "Gallery 14",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/q_20/v1591966352/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.41.43_PM_1.jpg",
        alt: "Gallery 15",
      },
      {
        src:
          "https://res.cloudinary.com/doy9hqxr1/image/upload/q_20/v1591966355/joyrampurNgo/WhatsApp_Image_2020-06-10_at_8.41.41_PM_1.jpg",
        alt: "Gallery 16",
      },
    ];
    this.len = this.galleryImages.length;
    this.numberofIndex = this.len / 8;
  }

  handleClose = (e) => {
    this.setState({
      modalVisible: false,
    });
  };

  handleOpen = (src) => {
    this.setState({
      modalVisible: true,
      currentImage: src,
    });
  };
  handleMoveRight = (e) => {
    if (this.state.galleryIndex < this.numberofIndex - 1) {
      const index = this.state.galleryIndex + 1;
      this.setState({
        galleryIndex: index,
      });
    }
  };
  handleMoveLeft = (e) => {
    if (this.state.galleryIndex != 0) {
      const index = this.state.galleryIndex - 1;
      this.setState({
        galleryIndex: index,
      });
    }
  };
  handleSwipe = index => {
    this.setState({galleryIndex: index})
  }
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
          gutter={[12, 0]}
          className={styles.galleryIndicatorRow}
        >
          {[...Array(this.numberofIndex)].map((e, i) => (
            <Col
              xs={{ span: 6 }}
              sm={{ span: 5 }}
              md={{ span: 3 }}
              lg={{ span: 2 }}
              key={i}
            >
              <div
                className={
                  styles.galleryIndicator +
                  (this.state.galleryIndex == i
                    ? ` ${styles.activeGalleryIndicator}`
                    : ``)
                }
              ></div>
            </Col>
          ))}
        </Row>
        <Row justify="center" align="middle">
          <Col
            xs={{ span: 3 }}
            sm={{ span: 3 }}
            md={{ span: 2 }}
            lg={{ span: 2 }}
          >
            <LeftOutlined
              className={styles.galleryIcons}
              onClick={this.handleMoveLeft}
            ></LeftOutlined>
          </Col>
          <Col
            xs={{ span: 16 }}
            sm={{ span: 16 }}
            md={{ span: 20 }}
            lg={{ span: 20 }}
          >
            <SwipeableViews index={this.state.galleryIndex} onChangeIndex={this.handleSwipe}>
              {[...Array(this.numberofIndex)].map((e, i) => (
                <Row
                  justify="center"
                  align="middle"
                  gutter={[{ sm: 0, md: 8, lg: 8 }, 24]}
                  className={styles.cardSection}
                  key={i}
                >
                  {this.galleryImages
                    .slice(i * 8, this.len < 8 * (i + 1) ? this.len : 8 * (i + 1))
                    .map((image, j) => (
                      <Col
                        xs={{ span: 18 }}
                        sm={{ span: 18 }}
                        md={{ span: 8 }}
                        lg={{ span: 6 }}
                        key={i * 8 + j}
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
              ))}
            </SwipeableViews>
          </Col>
          <Col
            xs={{ span: 3 }}
            sm={{ span: 3 }}
            md={{ span: 2 }}
            lg={{ span: 2 }}
          >
            <RightOutlined
              className={styles.galleryIcons}
              onClick={this.handleMoveRight}
            />
          </Col>
        </Row>
        <Modal
          visible={this.state.modalVisible}
          onCancel={this.handleClose}
          className={styles.galleryModal}
        >
          <img src={this.state.currentImage} className={styles.modalImage} alt="Modal image" />
        </Modal>
      </section>
    );
  }
}
export default Gallery;
