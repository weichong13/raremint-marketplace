import React, { useState } from "react";
import Image from "next/image";
import styles from "./Accordion.module.scss";
import arrowIcon from "../../../public/images/icon/accordionIcon.png";
import { AccordionProps } from "./types";

const Accordion = (props: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionContainer}>
      <button
        className={[styles.accordion, "d-flex align-items-center"].join(" ")}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {props.title}
        <Image
          className={[styles.icon, isOpen ? styles.rotate : ""].join(" ")}
          src={arrowIcon}
        />
      </button>
      <div className={[styles.panel, isOpen ? styles.isOpen : ""].join(" ")}>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Accordion;
