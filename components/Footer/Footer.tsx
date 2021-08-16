import React, { Fragment } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Row,
} from 'react-bootstrap';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import {
  ROUTER_COMMUNITY_PAGE,
  ROUTER_LEARN_PAGE,
  ROUTER_MARKETPLACE_PAGE,
  ROUTER_MY_ASSETS_PAGE,
} from '../../constant/router';

function Footer() {
  return (
    <footer>
      <section className={styles.partners}>
        <Container>
          <Row>
            <Col>
              <div className='d-flex justify-content-between'>
                <Image
                  src='/images/partners/Tesla.svg'
                  width={40}
                  height={51}
                  alt='Tesla Logo'
                />{' '}
                <Image
                  src='/images/partners/Allianz.svg'
                  alt='Allianz Logo'
                  width={156}
                  height={51}
                />{' '}
                <Image
                  src='/images/partners/Hsbc.svg'
                  alt='HSBC Logo'
                  width={201}
                  height={51}
                />{' '}
                <Image
                  src='/images/partners/Lexmark.svg'
                  alt='Lexmark Logo'
                  width={151}
                  height={51}
                />{' '}
                <Image
                  src='/images/partners/Sennheiser.svg'
                  alt='Sennheiser Logo'
                  width={151}
                  height={51}
                />{' '}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.footer}>
        <Container>
          <Row>
            <Col lg='12' className={styles.logo}>
              <Image
                src='/images/logo-icon.svg'
                alt='RareMint Logo'
                width={25}
                height={25}
              />{' '}
              <span>RareMint</span>
            </Col>

            <Col lg='12'>
              <Row>
                <Col className={styles.footerMenu}>
                  <Nav className={styles.footerMenuItem}>
                    <Nav.Link>Marketplace</Nav.Link>
                    <Link
                      href={`${ROUTER_MARKETPLACE_PAGE}?filter=latest-drops`}
                    >
                      Latest Drops
                    </Link>
                    <Link href={`${ROUTER_MARKETPLACE_PAGE}?filter=hot`}>
                      Hot
                    </Link>
                    <Link
                      href={`${ROUTER_MARKETPLACE_PAGE}?filter=what-we-love`}
                    >
                      What We Love
                    </Link>
                  </Nav>

                  <Nav className={styles.footerMenuItem}>
                    <Nav.Link>Activity</Nav.Link>
                    <Link href={ROUTER_MY_ASSETS_PAGE}>My Inventory</Link>
                  </Nav>

                  <Nav className={styles.footerMenuItem}>
                    <Nav.Link>Community</Nav.Link>
                    <Link href={ROUTER_COMMUNITY_PAGE}>Resources</Link>
                  </Nav>

                  <Nav className={styles.footerMenuItem}>
                    <Nav.Link>Learn</Nav.Link>
                    <Link href={ROUTER_LEARN_PAGE}>Blogs</Link>
                  </Nav>
                </Col>

                <Col className={styles.signMeUp}>
                  <h6>Stay up to date</h6>
                  <p>
                    Get notifications about upcoming drops delivered directly to
                    your inbox.
                  </p>

                  <Form inline className={styles.signMeUpForm}>
                    <FormControl type='email' />
                    <Button variant='primary' size='sm'>
                      Sign Me Up
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.languageAndCopyright}>
        <Container>
          <Row className='align-items-center'>
            <Col lg='4'>
              <div className={styles.language}>
                United States &nbsp;|&nbsp; English &nbsp;|&nbsp; $USD/ETH
              </div>
            </Col>
            <Col lg='4' className={styles.social}>
              <a href='#'>
                <Image
                  src='/images/icon/telegram.svg'
                  alt='Telegram Icon'
                  width={32}
                  height={32}
                />
              </a>
              <a href='#'>
                <Image
                  src='/images/icon/pig.svg'
                  alt='Pig Icon'
                  width={32}
                  height={32}
                />
              </a>
              <a href='#'>
                <Image
                  src='/images/icon/twitter.svg'
                  alt='Twitter Icon'
                  width={32}
                  height={32}
                />
              </a>
            </Col>
            <Col lg='4'></Col>
            <Col lg='12' className={styles.footerMenu}>
              <Nav className={styles.footerMenuItem}>
                <Link href='/'>How It Works</Link>
                <Link href='/'>Privacy</Link>
                <Link href='/'>Terms</Link>
                <Link href='/'>Contact</Link>
              </Nav>
            </Col>
            <Col lg='12' className={styles.copyright}>
              @2021 Raremint. All Rights Reserved.
            </Col>
          </Row>
        </Container>
      </section>
    </footer>
  );
}

export default Footer;
