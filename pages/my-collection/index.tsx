import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { Container } from 'react-bootstrap';
import Breadcrumb from '../../components/Breadcrumb';
import { cardItemData } from '../../components/CardItem/types';
import Layout from '../../components/Layout';
import ListCardItem from '../../components/ListCardItem';
import { MARKETPLACE_LIST_CARD } from '../../constant/dummyData';
import styles from './MyCollection.module.scss';

export const getServerSideProps: GetServerSideProps = async () => {
  const dummylistRelatedData = MARKETPLACE_LIST_CARD.slice(0, 24);
  return {
    props: {
      collectionData: dummylistRelatedData,
    },
  };
};

const CardDetailPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const router = useRouter();
  const { collectionData } = props;
  const sort: string =
    (Array.isArray(router.query.sort)
      ? router.query.sort[0]
      : router.query.sort) || '';
  const [showLoading, setShowLoading] = React.useState<boolean>(false);
  const [listItems, setListItems] = React.useState<cardItemData[]>(
    collectionData || []
  );
  const breadcrumb = [
    {
      title: 'My Collection',
    },
  ];

  React.useEffect(() => {
    setShowLoading(true);

    setTimeout(() => {
      setListItems(MARKETPLACE_LIST_CARD.slice(0, 24));
      setShowLoading(false);
    }, 1000);
  }, [sort]);

  return (
    <Layout title='My Collection'>
      <Container fluid className={styles.breadcrumbSection}>
        <Breadcrumb data={breadcrumb} color='dark' />
      </Container>

      <ListCardItem
        title='My Collection:'
        data={listItems}
        isOwned
        showLoading={showLoading}
      />
    </Layout>
  );
};

export default CardDetailPage;
