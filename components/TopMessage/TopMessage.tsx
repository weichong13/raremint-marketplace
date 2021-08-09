import React, { Fragment } from "react";
import styles from "./TopMessage.module.scss";
import { TopMessageProps } from "./types";

function TopMessage(props: TopMessageProps) {
  const { text } = props;
  return (
    <Fragment>
      {text && <div className={styles.messageSection}>{text}</div>}
    </Fragment>
  );
}

export default TopMessage;
