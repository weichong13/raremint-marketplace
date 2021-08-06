import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './ListNewsItem.module.scss';
import { ListNewsItemProps } from './types';
import NewsItem from '../NewsItem';
import { newsItemData } from '../NewsItem/types';

const ListNewsItem = (props: ListNewsItemProps) => {
  const { data, title } = props;
  const spaceIndex = title.indexOf(' ');
  const firstWord = spaceIndex === -1 ? title : title.substr(0, spaceIndex);
  const anotherWord =
    spaceIndex === -1 ? null : title.substr(spaceIndex, title.length);

  return (
    <section className={[styles.listNewItemSection, 'bg-white'].join(' ')}>
      <Container>
        <Row>
          <Col>
            <h2 className={styles.listNewItemTitle}>
              <span>{firstWord}</span>
              {anotherWord}
            </h2>
          </Col>
        </Row>
        <Row className="mx--2">
          {data.map((newsItem: newsItemData, index: number) => (
            <Col key={index} lg="4" className="px-2">
              <NewsItem data={newsItem} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ListNewsItem;
