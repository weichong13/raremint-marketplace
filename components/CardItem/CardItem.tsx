import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import cardImage from '../../public/images/card-img.jpg';
import soldTagImage from '../../public/images/icon/sold-tag.svg';
import styles from './CardItem.module.scss';
import { cardItemProps } from './types';
import {
  ROUTER_ASSET_DETAIL_PAGE,
  ROUTER_MY_ASSETS_DETAIL_PAGE,
} from '../../constant/router';

const CardItem = (cardItemProps: cardItemProps) => {
  const { data, showActionButton, isCollection } = cardItemProps;
  const { name, quantity, priceInDollar, priceInEther, minted, type } = data;
  const isSold = quantity === 0;

  return (
    <Card className={styles.card}>
      <Card.Body data-sold={isSold} className={styles.cardBody}>
        <div className={styles.cardImageWrapper}>
          <Image
            src={cardImage}
            className={styles.cardImage}
            alt='Card Image'
          />
          {isSold && (
            <div className={styles.cardImageSold}>
              <Image src={soldTagImage} alt='Account Icon' />
            </div>
          )}
        </div>
        <Card.Title className={styles.cardTitle}>
          <Link
            href={{
              pathname: isCollection
                ? ROUTER_MY_ASSETS_DETAIL_PAGE
                : ROUTER_ASSET_DETAIL_PAGE,
              query: { id: '123' },
            }}
          >
            {name}
          </Link>
        </Card.Title>
        <Card.Text className={styles.cardPrice}>
          <b>Price: </b> ${priceInDollar} ({priceInEther} ETH) <br />
          <b>Minted: </b> {minted}
        </Card.Text>
      </Card.Body>
      <Card.Footer className={styles.cardFooter}>
        <div data-type={type} className={styles.cardType}>
          <div className={styles.cardTypeBefore} />
          <div>Ultra Rare</div>
          <div className={styles.cardTypeAfter} />
        </div>
      </Card.Footer>

      {showActionButton && (
        <div className={styles.groupActionButton}>
          <Button variant='secondary'>Buy Now</Button>
          <Button variant='light'>View</Button>
        </div>
      )}
    </Card>
  );
};

export default CardItem;
