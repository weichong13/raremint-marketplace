import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Learn.module.scss";
import Link from "next/link";
import LearnCard from "../LearnCard";
import img1 from "../../../public/images/learnPage1.png";
import img2 from "../../../public/images/learnPage2.png";
import img3 from "../../../public/images/learnPage3.png";
import video from "../../../public/images/video-frame.png";
import Image from "next/image";
import Accordion from "../Accordian";
import butter from "../../../butter-client";
import { LearnCardProps } from "../LearnCard/types";

const LearnPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) getLearnData();
  }, [data]);

  const getLearnData = () => {
    butter.post.list({ page: 1 }).then((response: any) => {
      if (response.data.data.length > 3) {
        let data: any = [...response.data.data];
        data.length = 3;
        setData(data);
      } else {
        setData(response.data.data);
      }
    });
  };

  const mockDataImages = [
    {
      title: "Buying and Selling",
      imgSrc: img1,
    },
    {
      title: "Trade",
      imgSrc: img2,
    },
    {
      title: "View and Manage your collection",
      imgSrc: img3,
    },
  ];
  const accordionMockData = [
    {
      title: "How do I make money with RareMint?",
      description:
        "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.",
    },
    {
      title: "What is a wallet and how do I connect it?",
      description:
        "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.",
    },
    {
      title: "How does RareMint verify items?",
      description:
        "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.",
    },
    {
      title: "Where does RareMint source items?",
      description:
        "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.",
    },
    {
      title: "How do I make money with RareMint?",
      description:
        "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.",
    },
    {
      title: "What is a wallet and how do I connect it?",
      description:
        "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.",
    },
    {
      title: "How does RareMint verify items?",
      description:
        "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.",
    },
    {
      title: "Where does RareMint source items?",
      description:
        "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.",
    },
  ];

  return (
    <Container className={styles.learn}>
      <div className={styles.innerContainer}>
        <div className={styles.breadCrumb}>
          <Link href="/">Home</Link> / Learn
        </div>

        <p className={styles.title}>Buy, sell, trade with RareMint.</p>
        <Row>
          {data.map((item: LearnCardProps, index) => {
            return (
              <Col key={index} className={"col-md-4 col-12 py-md-0 py-2"}>
                <LearnCard
                  slug={item.slug}
                  title={item.title}
                  featured_image={item.featured_image}
                />
              </Col>
            );
          })}
        </Row>
      </div>
      <div
        className={[styles.videoSection, "d-flex align-items-center"].join(" ")}
      >
        <Row className={"h-100"}>
          <Col className={"col-md-6 col-12"}>
            <p className={styles.heading}>What do we offer?</p>
            <p className={styles.description}>
              Our memorabilia is sourced from blank and its of the highest
              quality as verified by blank. Et has minim elitr intellegat. Mea
              aeterno eleifend antiopam ad, nam no suscipit quaerendum. Our
              platform is more valuable than others because of this reason and
              that reason. Also, blockchain is the best and so is our stuff that
              we want to sell you. Our memorabilia is sourced from blank and its
              of the highest quality as verified by blank.
            </p>
          </Col>
          <Col
            className={
              "col-md-6 col-12 d-flex align-items-center justify-content-center"
            }
          >
            <Image className={styles.img} src={video} />
          </Col>
        </Row>
      </div>

      <div className={styles.faqSection}>
        <p className={styles.heading}>Frequently Asked Questions</p>
        <Row className={"d-flex justify-content-between"}>
          {accordionMockData.map((item, index) => {
            return (
              <Col key={index} className={"col-md-6 col-12"}>
                <Accordion title={item.title} description={item.description} />
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
};

export default LearnPage;
