import React, { Component } from "react";
import { Row, Col, Card, Modal } from "antd";
import styles from "../styles/gallery.module.css";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  handleClose = (e) => {
    this.setState({
      modalVisible: false,
    });
  };

  handleOpen = (e) => {
    this.setState({
      modalVisible: true,
    });
  };
  render() {
    return (
      <section id="gallery" className="sections">
        <Row justify="center" className={styles.galleryHeading}>
          <p>Gallery</p>
        </Row>
        <Row justify="center" className={styles.gallerySubheading}>
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
          {[...Array(8)].map((e, i) => (
            <Col
              xs={{ span: 12 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
              key={i}
            >
              <Card
                hoverable
                className={styles.galleryCards}
                cover={
                  <img src="/gallery3.jpg" className={styles.image}></img>
                }
                onClick={this.handleOpen}
              ></Card>
            </Col>
          ))}
        </Row>
        <Modal
          visible={this.state.modalVisible}
          onCancel={this.handleClose}
          className={styles.galleryModal}
        >
          <img src="/gallery3.jpg" className={styles.modalImage}/>
        </Modal>
      </section>
    );
  }
}
export default Gallery;
