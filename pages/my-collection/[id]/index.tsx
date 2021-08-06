import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import CardDetail from '../../../components/CardDetail';
import Layout from '../../../components/Layout';
import ListCardItem from '../../../components/ListCardItem';
import { MARKETPLACE_LIST_CARD } from '../../../constant/dummyData';
import { ROUTER_MY_ASSETS_PAGE } from '../../../constant/router';

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
      title: 'Assets',
      link: ROUTER_MY_ASSETS_PAGE,
    },
    {
      title: 'Babe Ruth Signed Game Used Baseball',
    },
  ];
  
  return (
    <Layout title='Marketplace'>
      <CardDetail data={data} breadcrumb={breadcrumb} isOwned />
    </Layout>
  );
};

export default CardDetailPage;
