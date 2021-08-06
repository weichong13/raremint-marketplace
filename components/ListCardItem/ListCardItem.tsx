import { useRouter } from 'next/router';
import React from 'react';
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  Pagination,
  Row
} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { ROUTER_MARKETPLACE_PAGE } from '../../constant/router';
import { MARKETPLACE_CONFIG, MARKETPLACE_FILTER } from '../../constant/setting';
import CardItem from '../CardItem';
import { cardItemData } from '../CardItem/types';
import Spinner from '../Spinner';
import styles from './ListCardItem.module.scss';
import { ListCardItemProps } from './types';

const ListCardItem = (props: ListCardItemProps) => {
  const router = useRouter();
  const filter = router.query.filter || '';
  const page: number = Number(router.query.page) || 1;
  const filterSettingIndex = MARKETPLACE_FILTER.findIndex(
    (filterItem: { title: string; value: string }) =>
      filter === filterItem.value
  );
  const filterSetting = MARKETPLACE_FILTER[filterSettingIndex];
  const {
    title,
    iconImage,
    showFilter,
    showPagination,
    showMoreLink,
    data,
    totalItem,
    showLoading
  } = props;
  const size = MARKETPLACE_CONFIG.itemPerPage;
  const totalPage = totalItem ? Math.ceil(totalItem / size) : 1;

  const handleChangePage = (page: number) => {
    router.push(
      {
        pathname: ROUTER_MARKETPLACE_PAGE,
        query: { ...(filter ? { filter } : {}), page }
      },
      undefined,
      { shallow: true }
    );
  };

  const handleChangeFilter = (filter: string) => {
    router.push(
      {
        pathname: ROUTER_MARKETPLACE_PAGE,
        query: { ...(filter ? { filter } : {}), page: 1 }
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <section className={[styles.listCardItemSection, 'bg-white'].join(' ')}>
      <Container fluid>
        <Row>
          <Col>
            <div className={styles.listCardItemTitle}>
              <h2>
                {title
                  ? title
                  : filterSetting.title !== MARKETPLACE_FILTER[0].title
                  ? filterSetting.title
                  : 'Marketplace'}{' '}
                {iconImage ? (
                  <Image src={`/images/icon/${iconImage}`} alt="Title Icon" />
                ) : (
                  filterSetting?.icon && (
                    <Image
                      src={`/images/icon/${filterSetting.icon}`}
                      alt="Title Icon"
                    />
                  )
                )}
              </h2>

              {showMoreLink && (
                <Nav.Link
                  href={showMoreLink}
                  className="btn btn-outline-primary btn-lg"
                >
                  View More
                </Nav.Link>
              )}

              {showFilter && (
                <DropdownButton
                  as={ButtonGroup}
                  key="Secondary"
                  id="marketplace-filter"
                  variant="secondary"
                  title={filterSetting.title || MARKETPLACE_FILTER[0].title}
                >
                  {MARKETPLACE_FILTER.map(
                    (
                      filterItem: { title: string; value: string },
                      index: number
                    ) => (
                      <Dropdown.Item
                        key={index}
                        eventKey={index}
                        active={filter === filterItem.value}
                        onClick={() => handleChangeFilter(filterItem.value)}
                      >
                        {filterItem.title}
                      </Dropdown.Item>
                    )
                  )}
                </DropdownButton>
              )}
            </div>
          </Col>
        </Row>
        <Row
          className={[
            styles.listCardItemContent,
            'mx--1 position-relative'
          ].join(' ')}
        >
          {data?.map((cardItem: cardItemData, index: number) => (
            <Col
              key={index}
              lg="3"
              className={[
                'px-1',
                showPagination ? styles.cardItemSpacingBottom : ''
              ].join(' ')}
            >
              <CardItem data={cardItem} />
            </Col>
          ))}

          {showLoading && <Spinner />}
        </Row>

        {showPagination && (
          <Row className={styles.paginationSection}>
            <Col lg={12} className="justify-content-between">
              <Pagination>
                <Button
                  variant="secondary"
                  onClick={() => handleChangePage(page - 1)}
                  disabled={page <= 1}
                >
                  &lt; Back
                </Button>
                <div className="pagination-number">
                  {page} of {totalPage}
                </div>
                <Button
                  variant="secondary"
                  onClick={() => handleChangePage(page + 1)}
                  disabled={page >= totalPage}
                >
                  Next &gt;
                </Button>
              </Pagination>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default ListCardItem;
