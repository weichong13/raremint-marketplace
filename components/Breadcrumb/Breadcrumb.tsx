import Link from 'next/link';
import React from 'react';
import {
  Breadcrumb as BreadcrumbSystem,
  BreadcrumbItem,
  Container
} from 'react-bootstrap';
import { ROUTER_HOME_PAGE } from '../../constant/router';
import styles from './Breadcrumb.module.scss';
import { BreadcrumbItemType, BreadcrumbProps } from './types';

const Breadcrumb = (props: BreadcrumbProps) => {
  const { data, color } = props;
  return (
    <BreadcrumbSystem
      className={[
        color === 'light' && styles.breadcrumbLight,
        styles.breadcrumb,
      ].join(' ')}
    >
      <Link href={ROUTER_HOME_PAGE} passHref>
        <BreadcrumbItem className={styles.breadcrumbItem}>Home</BreadcrumbItem>
      </Link>
      {data?.map((breadcrumbItem: BreadcrumbItemType, index: number) =>
        breadcrumbItem.link ? (
          <Link href={breadcrumbItem.link} passHref>
            <BreadcrumbItem
              key={index}
              className={styles.breadcrumbItem}
              active={index === data.length - 1}
            >
              {breadcrumbItem.title}
            </BreadcrumbItem>
          </Link>
        ) : (
          <BreadcrumbItem
            key={index}
            className={styles.breadcrumbItem}
            active={index === data.length - 1}
          >
            {breadcrumbItem.title}
          </BreadcrumbItem>
        )
      )}
    </BreadcrumbSystem>
  );
};

export default Breadcrumb;
