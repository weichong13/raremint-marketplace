import React from 'react';
import { Card } from 'react-bootstrap';
import arrowIcon from '../../../public/images/icon/arrow.png';
import ImgBootStrap from 'react-bootstrap/Image';
import Image from 'next/image';
import styles from './Lists.module.scss';
import Link from 'next/link';
import { ListIProps } from './type';
import { timeAgo } from '../../../utils/helper';

const Lists = (props: ListIProps) => {
  return (
    <div className={styles.lists}>
      <Card className={[styles.mainContainer].join(' ')}>
        <div className={[styles.custom, 'col-12'].join(' ')}>
          <ImgBootStrap
            className={styles.image}
            src={props.data.featured_image}
            alt="Card Image"
          />
        </div>
        <div className={'col-12'}>
          <Card.Body className={styles.body}>
            <p className={styles.name}>
              {props.data.author.first_name + ' ' + props.data.author.last_name}
              <span className={styles.lastOnline}>
                {timeAgo(props.data.published)}
              </span>
            </p>
            <Card.Title className={styles.title}>{props.data.title}</Card.Title>
            <Card.Text className={styles.description}>
              {props.data.meta_description}
            </Card.Text>
            <div className={[styles.description, 'mt-4'].join(' ')}>
              <span className={styles.minuteRead}>
                <Link
                  href={{
                    pathname: 'article',
                    query: {
                      slug: props.data.slug
                    }
                  }}
                >
                  <span className={styles.readFull}>
                    Read Full
                    <Image src={arrowIcon} />
                  </span>
                </Link>
              </span>
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default Lists;
