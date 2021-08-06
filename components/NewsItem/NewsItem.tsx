import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './NewsItem.module.scss';
import { newsItemProps } from './types';

const NewsItem = (props: newsItemProps) => {
  const { data } = props;
  const { title, photoLink } = data;

  return (
    <Card className={styles.card}>
      <Card.Link href='/'>
        <div className={styles.cardImageWrapper}>
          <Card.Img src={photoLink} alt="News Feature Image" />
        </div>
        <Card.Footer className={styles.cardFooter}>{title}</Card.Footer>
      </Card.Link>
    </Card>
  );
};

export default NewsItem;
