import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './CategoryItem.module.scss';
import { categoryItemProps } from './types';

const CategoryItem = (props: categoryItemProps) => {
  const { data } = props;
  const { title, iconLink, description } = data;

  return (
    <Card className={styles.card}>
      <Card.Header className={styles.cardTitle}>
        <Card.Img src={iconLink} /> {title}
      </Card.Header>
      <Card.Body>
        <Card.Text className={styles.cardDescription}>{description}</Card.Text>
        <Card.Link href="/" className={styles.cardLink}>
          Explore Trading Cards
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CategoryItem;
