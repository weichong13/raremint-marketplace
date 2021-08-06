import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import CardDetail from '../../../components/CardDetail';
import Layout from '../../../components/Layout';
import ListCardItem from '../../../components/ListCardItem';
import { MARKETPLACE_LIST_CARD } from '../../../constant/dummyData';
import { ROUTER_MARKETPLACE_PAGE } from '../../../constant/router';
import Link from 'next/link';
import styles from './CardDetailPage.module.scss';
import { Container, Nav } from 'react-bootstrap';

export const getServerSideProps: GetServerSideProps = async () => {
  const dummylistRelatedData = MARKETPLACE_LIST_CARD.slice(0, 4);
  return {
    props: {
      listRelatedItem: dummylistRelatedData,
      data: MARKETPLACE_LIST_CARD[0],
    },
  };
};

const CardDetailPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { listRelatedItem, data } = props;
  const breadcrumb = [
    {
      title: 'Marketplace',
      link: ROUTER_MARKETPLACE_PAGE,
    },
    {
      title: 'Babe Ruth Signed Game Used Baseball',
    },
  ];

  return (
    <Layout title='Marketplace'>
      <CardDetail data={data} breadcrumb={breadcrumb}/>
      <section className={styles.alsoLikeSection}>
        <Container fluid>
          <h5>You may also like</h5>
          <Nav className={styles.alsoLikeList}>
            <Link href='/'>Trading Cards</Link>
            <Link href='/'>Sports jerseys</Link>
            <Link href='/'>Baseball cards</Link>
            <Link href='/'>Related Item 2</Link>
            <Link href='/'>Related Item 3</Link>
          </Nav>
        </Container>
      </section>
      <ListCardItem title='Related NFTs:' data={listRelatedItem} />
    </Layout>
  );
};

export default CardDetailPage;
