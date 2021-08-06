import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import styles from './HowRareMintWorkSection.module.scss';
import cartIcon from '../../../public/images/icon/cart.svg';
import magnifier2Icon from '../../../public/images/icon/magnifier-2.svg';
import handIcon from '../../../public/images/icon/hand.svg';

const HowRareMintWorkSection = () => {
  return (
    <section className={[styles.howWorkSection, 'bg-green'].join(' ')}>
      <Container fluid>
        <h3>How RareMint Works</h3>

        <Row>
          <Col lg='4'>
            <div className={styles.howWorkItem}>
              <Image src={cartIcon} alt='Cart Icon' /> <h4>Purchase NFTs.</h4>
              <p>
                At nam minimum ponderum. Est audiam animal molestiae te. Ex duo
                eripuit mentitum.
              </p>
            </div>
          </Col>

          <Col lg='4'>
            <div className={styles.howWorkItem}>
              <Image src={magnifier2Icon} alt='Cart Icon' />{' '}
              <h4>Browse a library of iconic memorabilia.</h4>
              <p>
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam.
              </p>
            </div>
          </Col>

          <Col lg='4'>
            <div className={styles.howWorkItem}>
              <Image src={handIcon} alt='Cart Icon' />{' '}
              <h4>Trade whenever you want.</h4>
              <p>
                At nam minimum ponderum. Est audiam animal molestiae te. Ex duo
                eripuit mentitum.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowRareMintWorkSection;
