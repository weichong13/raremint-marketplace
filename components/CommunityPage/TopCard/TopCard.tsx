import React from 'react';
import { Card } from 'react-bootstrap';
import arrowIcon from '../../../public/images/icon/arrow.png';
import Link from 'next/link';
import styles from './TopCard.module.scss';
import { TopCardIProps } from './type';
import ImgBootStrap from 'react-bootstrap/Image';
import Image from 'next/image';
import { timeAgo } from '../../../utils/helper';

const TopCard = (props: TopCardIProps) => {
  return props.data ? (
    <div className={styles.topCard}>
      <div className={styles.breadCrumb}>
        <Link href="/">Home</Link> / Community
      </div>
      <Card
        className={[styles.mainContainer, 'flex-md-row w-100'].join(' ')}
        style={{ width: '18rem' }}
      >
        <div className={'col-md-5 col-12'}>
          <ImgBootStrap
            className={[styles.topCardImage, 'p-2'].join(' ')}
            src={props.data.featured_image}
            alt="Card Image"
          />
        </div>
        <div className={'col-md-7 col-12'}>
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
  ) : null;
};

export default TopCard;
