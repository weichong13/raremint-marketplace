import React from "react";
import { Card, Container } from "react-bootstrap";
import styles from "./LearnCard.module.scss";
import Link from "next/link";
import Image from "next/image";
import arrowIcon from "../../../public/images/icon/arrow-gray.png";
import { LearnCardProps } from "./types";

const LearnCard = (props: LearnCardProps) => {
  return (
    <div className={styles.learnCard}>
      <Card className={[styles.mainContainer, "flex-md-row"].join(" ")}>
        <div className={[styles.imageSection, "col-md-5 col-12"].join(" ")}>
          <Image className={styles.img} src={props.img} alt="Card Image" />
        </div>
        <div className={"col-md-7 col-12"}>
          <Card.Body className={[styles.body, "py-0"].join(" ")}>
            <Card.Text className={styles.title}>{props.title}</Card.Text>
            <Card.Text className={styles.subText}>
              Lorem ipsum dolor sit amet,aliqua consectetur adipiscing elit ut
              adipiscing elit ut
            </Card.Text>
            <div className={styles.line}></div>
            <Card.Text className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              facilisis vitae sed et ridiculus risus, purus, eu. Fermentum nulla
              scelerisque.
            </Card.Text>
            <Card.Text className={styles.arrow}>
              <Link href="/article">
                <Image src={arrowIcon} />
              </Link>
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default LearnCard;
