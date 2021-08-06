import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import CardItem from '../../CardItem';
import styles from './HeroSection.module.scss';

function HeroSection() {
  const dummyData = {
    name: 'Babe Ruth Signed Game Used Baseball',
    quantity: 1,
    priceInDollar: 300,
    priceInEther: 0.04,
    minted: '1/1 NTF + Physical Asset',
    type: 'ultraRare',
  };

  return (
    <section className={styles.heroSection}>
      <Container>
        <Row className='justify-content-between'>
          <Col lg='7'>
            <h1>
              Discover,
              <br />
              collect, and sell
              <br />
              rare NFTs.
            </h1>

            <p>
              Digital marketplace for crypto collectibles and non-fungible
              <br /> tokens (NFTs). Buy, sell, and discover exclusive digital
              assets.
            </p>

            <Button variant='secondary' size='lg'>
              Explore
            </Button>
          </Col>

          <Col>
            <CardItem data={dummyData} showActionButton />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
