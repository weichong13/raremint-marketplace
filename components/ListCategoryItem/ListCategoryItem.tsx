import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './ListCategoryItem.module.scss';
import { ListCategoryItemProps } from './types';
import { categoryItemData } from '../CategoryItem/types';
import CategoryItem from '../CategoryItem';

const ListCategoryItem = (props: ListCategoryItemProps) => {
  const { data, title } = props;

  return (
    <section className={[styles.listNewItemSection, 'bg-white'].join(' ')}>
      <Container fluid>
        <h2 className={styles.listNewItemTitle}>{title}</h2>

        <Container>
          <Row className="mx--2">
            {data.map((newsItem: categoryItemData, index: number) => (
              <Col key={index} lg="4" className="px-2">
                <CategoryItem data={newsItem} />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default ListCategoryItem;
