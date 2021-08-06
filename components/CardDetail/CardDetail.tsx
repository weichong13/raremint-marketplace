import React, { Fragment } from 'react';
import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap';
import Image from 'next/image';
import authenIcon from '../../public/images/icon/verified.svg';
import originIcon from '../../public/images/icon/rate-balance.svg';
import signatureIcon from '../../public/images/icon/verified-document.svg';
import styles from './CardDetail.module.scss';
import Breadcrumb from '../Breadcrumb';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FsLightbox from 'fslightbox-react';
import { CardDetailPropsType } from './types';

const CardDetail = (props: CardDetailPropsType) => {
  const { data, breadcrumb, isOwned } = props;
  const { name, quantity, priceInDollar, priceInEther, minted, type, photo } =
    data;
  const isSold = quantity === 0;
  const [slideActive, setSlideActive] = React.useState<number>(0);
  const [lightboxController, setLightboxController] = React.useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  const slideSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accesibility: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    beforeChange: (current: number, next: number) => setSlideActive(next),
  };

  return (
    <Fragment>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={photo}
        slide={lightboxController.slide}
      />

      <section className={styles.generalDetailSection}>
        <Container>
          <div className={styles.breadCrumbSection}>
            {breadcrumb && <Breadcrumb data={breadcrumb} color='light' />}
          </div>
          <Row className='justify-content-between mx--3'>
            <Col lg={6} className='px-3'>
              {photo?.length > 0 && (
                <div className={styles.slideWrapper}>
                  <Slider
                    {...slideSettings}
                    className={styles.cardSliderImageWrapper}
                  >
                    {photo.map((photoItem: string, index: number) => (
                      <div className={styles.cardImageWrapper} key={index}>
                        <Image
                          src={photoItem}
                          className={styles.cardImage}
                          alt='Card Image'
                          layout='fill'
                          onClick={() => openLightboxOnSlide(slideActive + 1)}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              )}
            </Col>

            <Col lg={6} className='px-3 d-flex flex-column'>
              {isOwned ? (
                <Card className={[styles.card, styles.cardOwned].join(' ')}>
                  <Card.Body data-sold={isSold} className={styles.cardBody}>
                    <div className={styles.cardTextWrapper}>
                      <div className={styles.cardBuyDate}>May 26 2021</div>
                      <Card.Title className={styles.cardTitle}>
                        <Card.Link href='/'>{name}</Card.Link>
                      </Card.Title>
                      <Card.Text className={styles.cardPrice}>
                        <b>Minted: </b> {minted}
                        <br />
                        <b>Current Value: </b> {priceInEther} ETH
                        <br />
                        Lorem ipsum dolor sit amet
                      </Card.Text>
                    </div>
                    <div className={styles.groupButton}>
                      <Button variant='primary' size='lg'>
                        Place For Sale
                      </Button>
                      <Button variant='outline-primary' size='lg'>
                        Transfer
                      </Button>
                    </div>
                  </Card.Body>
                  <Card.Footer className={styles.cardFooter}>
                    <div data-type={type} className={styles.cardType}>
                      <div className={styles.cardTypeBefore} />
                      <div>Ultra Rare</div>
                      <div className={styles.cardTypeAfter} />
                    </div>
                  </Card.Footer>
                </Card>
              ) : (
                <Card className={styles.card}>
                  <Card.Body data-sold={isSold} className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle}>
                      <Card.Link href='/'>{name}</Card.Link>
                    </Card.Title>
                    <Card.Text className={styles.cardPrice}>
                      <b>Price: </b> ${priceInDollar} ({priceInEther} ETH){' '}
                      <br />
                      <b>Minted: </b> {minted}
                    </Card.Text>
                    <Button variant='primary' size='lg'>
                      Buy Now
                    </Button>
                  </Card.Body>
                  <Card.Footer className={styles.cardFooter}>
                    <div data-type={type} className={styles.cardType}>
                      <div className={styles.cardTypeBefore} />
                      <div>Ultra Rare</div>
                      <div className={styles.cardTypeAfter} />
                    </div>
                  </Card.Footer>
                </Card>
              )}

              <Row className={styles.listImage}>
                {photo?.length > 0 &&
                  photo.map((photoItem: string, index: number) => {
                    if (index !== slideActive)
                      return (
                        <Col lg={3} key={index}>
                          <div className={styles.itemImage}>
                            <Image
                              src={photoItem}
                              alt='Card Image'
                              layout='fill'
                              objectFit='cover'
                            />
                          </div>
                        </Col>
                      );
                  })}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.cardInformationSection}>
        <Container>
          <Row className='text-center'>
            <Col lg={12}>
              <h3>Details:</h3>
            </Col>
            <Col lg={4} className={styles.cardInformationDetailItem}>
              <Image src={authenIcon} alt='Authenticated Icon' />
              <h4>Authenticated.</h4>
              <p>
                At nam minimum ponderum. Est audiam animal molestiae te. Ex duo
                eripuit mentitum.
              </p>
            </Col>

            <Col lg={4} className={styles.cardInformationDetailItem}>
              <Image src={originIcon} alt='Original Icon' />
              <h4>Original.</h4>
              <p>
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam.
              </p>
            </Col>

            <Col lg={4} className={styles.cardInformationDetailItem}>
              <Image src={signatureIcon} alt='Signature Verified Icon' />
              <h4>Signature Verified.</h4>
              <p>
                At nam minimum ponderum. Est audiam animal molestiae te. Ex duo
                eripuit mentitum.
              </p>
            </Col>
          </Row>

          <Row className={styles.cardInformationAssetHistorySection}>
            <Col lg={12}>
              <h3>Asset History:</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. At
                in tellus integer feugiat scelerisque. Aliquet nibh praesent
                tristique magna. Sed vulputate mi sit amet. Etiam non quam lacus
                suspendisse faucibus. Amet facilisis magna etiam tempor. Blandit
                volutpat maecenas volutpat blandit aliquam etiam. Urna cursus
                eget nunc scelerisque viverra mauris in. Platea dictumst
                vestibulum rhoncus est pellentesque elit ullamcorper dignissim.
                Dui id ornare arcu odio ut. Vulputate dignissim suspendisse in
                est. Orci a scelerisque purus semper. Facilisis sed odio morbi
                quis. Morbi tristique senectus et netus et malesuada fames. Id
                semper risus in hendrerit gravida rutrum quisque non. Ante metus
                dictum at tempor commodo. Mauris sit amet massa vitae tortor.
                Convallis a cras semper auctor neque vitae tempus.
              </p>
            </Col>
          </Row>

          <Row className={styles.cardInformationAboutSection}>
            <Col lg={12}>
              <h3>About the player:</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. At
                in tellus integer feugiat scelerisque. Aliquet nibh praesent
                tristique magna. Sed vulputate mi sit amet. Etiam non quam lacus
                suspendisse faucibus. Amet facilisis magna etiam tempor. Blandit
                volutpat maecenas volutpat blandit aliquam etiam. Urna cursus
                eget nunc scelerisque viverra mauris in. Platea dictumst
                vestibulum rhoncus est pellentesque elit ullamcorper dignissim.
                Dui id ornare arcu odio ut. Vulputate dignissim suspendisse in
                est. Orci a scelerisque purus semper. Facilisis sed odio morbi
                quis. Morbi tristique senectus et netus et malesuada fames. Id
                semper risus in hendrerit gravida rutrum quisque non. Ante metus
                dictum at tempor commodo. Mauris sit amet massa vitae tortor.
                Convallis a cras semper auctor neque vitae tempus.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default CardDetail;
