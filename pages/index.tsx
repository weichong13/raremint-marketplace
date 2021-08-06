import React from 'react';
import HeroSection from '../components/HomePage/HeroSection';
import Layout from '../components/Layout';
import ListCardItem from '../components/ListCardItem';
import HowRareMintWorkSection from '../components/HomePage/HowRareMintWorkSection';
import ListNewsItem from '../components/ListNewsItem';
import ListCategoryItem from '../components/ListCategoryItem';
import {
  CATEGORIES_LIST,
  MARKETPLACE_LIST_CARD,
  MARKETPLACE_OUT_OF_STOCK_LIST_CARD,
  NEWS_LIST,
} from '../constant/dummyData';
import { ROUTER_MARKETPLACE_PAGE } from '../constant/router';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const dummyListData = MARKETPLACE_LIST_CARD.slice(0, 4);
  const dummyListOutOfStockData = MARKETPLACE_OUT_OF_STOCK_LIST_CARD.slice(
    0,
    4,
  );
  const dummyNewsListData = NEWS_LIST.slice(0, 3);
  const dummyCategoriesListData = CATEGORIES_LIST.slice(0, 6);

  return {
    props: {
      listLatestDropsItems: dummyListData,
      listHotItems: dummyListData,
      listWhatWeLoveItems: dummyListData,
      listRecentSalesItems: dummyListOutOfStockData,
      listNews: dummyNewsListData,
      listCategoryItem: dummyCategoriesListData,
    },
  };
};

const Home = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  const {
    listLatestDropsItems,
    listHotItems,
    listWhatWeLoveItems,
    listRecentSalesItems,
    listNews,
    listCategoryItem,
  } = props;

  return (
    <Layout>
      <HeroSection />

      <ListCardItem
        title='Latest Drops'
        iconImage='lock.svg'
        showMoreLink={`${ROUTER_MARKETPLACE_PAGE}?filter=latest-drops`}
        data={listLatestDropsItems}
      />

      <HowRareMintWorkSection />

      <ListCardItem
        title='Hot'
        iconImage='fire.svg'
        showMoreLink={`${ROUTER_MARKETPLACE_PAGE}?filter=hot`}
        data={listHotItems}
      />

      <ListCardItem
        title='What We Love'
        iconImage='heart.svg'
        showMoreLink={`${ROUTER_MARKETPLACE_PAGE}?filter=what-we-love`}
        data={listWhatWeLoveItems}
      />

      <ListCardItem
        title='Recent Sales'
        iconImage='line-chart.svg'
        showMoreLink={`${ROUTER_MARKETPLACE_PAGE}?filter=recent-sales`}
        data={listRecentSalesItems}
      />

      <ListNewsItem title='News and Notewothy' data={listNews} />

      <ListCategoryItem title='Categories' data={listCategoryItem} />
    </Layout>
  );
};

export default Home;
