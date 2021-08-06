import React from 'react';
import Layout from '../../components/Layout';
import ListCardItem from '../../components/ListCardItem';
import Breadcrumb from '../../components/Breadcrumb';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { MARKETPLACE_CONFIG, MARKETPLACE_FILTER } from '../../constant/setting';
import { BreadcrumbItemType } from '../../components/Breadcrumb/types';
import { useRouter } from 'next/router';
import { MARKETPLACE_LIST_CARD } from '../../constant/dummyData';
import { cardItemData } from '../../components/CardItem/types';
import { Container } from 'react-bootstrap';
import styles from './MarketPlace.module.scss';

const getFilterSettingById = (filterId: string) => {
  const filterSettingIndex: number = MARKETPLACE_FILTER.findIndex(
    (filterItem: { title: string; value: string }) =>
      filterId === filterItem.value,
  );
  const filterSetting = { ...MARKETPLACE_FILTER[filterSettingIndex] };
  if (filterSettingIndex === 0) filterSetting.title = 'Marketplace';
  return filterSetting;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const filter = query.filter || '';
  const page: number = Number(query.page) || 1;
  const size = MARKETPLACE_CONFIG.itemPerPage;
  const offset = (page - 1) * size;
  const filterSettingIndex: number = MARKETPLACE_FILTER.findIndex(
    (filterItem: { title: string; value: string }) =>
      filter === filterItem.value,
  );
  const filterSetting = MARKETPLACE_FILTER[filterSettingIndex];
  const listItemsSSR = {
    data: MARKETPLACE_LIST_CARD.slice(offset, offset + size),
    totalItem: MARKETPLACE_LIST_CARD.length,
  };

  const breadcrumbSSR: BreadcrumbItemType[] = [
    {
      title: filterSettingIndex !== 0 ? filterSetting.title : 'Marketplace',
    },
  ];

  return {
    props: {
      breadcrumbSSR,
      listItemsSSR,
    },
  };
};

const MarketPlacePage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  const { listItemsSSR, breadcrumbSSR } = props;
  const { data, totalItem } = listItemsSSR;
  const router = useRouter();
  const filter: string =
    (Array.isArray(router.query.filter)
      ? router.query.filter[0]
      : router.query.filter) || '';
  const page: number = Number(router.query.page) || 1;
  const [breadcrumb, setBreadcrumb] =
    React.useState<BreadcrumbItemType[]>(breadcrumbSSR);
  const [listItems, setListItems] = React.useState<cardItemData[]>(data || []);
  const [showLoading, setShowLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const size = MARKETPLACE_CONFIG.itemPerPage;
    const offset = (page - 1) * size;
    setShowLoading(true);

    setTimeout(() => {
      setListItems(MARKETPLACE_LIST_CARD.slice(offset, offset + size));
      setShowLoading(false);
    }, 1000);
  }, [filter, page]);

  React.useEffect(() => {
    const filterSetting = getFilterSettingById(filter);
    setBreadcrumb([
      {
        title: filterSetting.title,
      },
    ]);
  }, [filter]);

  return (
    <Layout title='Marketplace'>
      <Container fluid className={styles.breadcrumbSection}>
        <Breadcrumb data={breadcrumb} color='dark'/>
      </Container>

      <ListCardItem
        data={listItems}
        showFilter
        showPagination
        totalItem={totalItem}
        showLoading={showLoading}
      />
    </Layout>
  );
};

export default MarketPlacePage;
