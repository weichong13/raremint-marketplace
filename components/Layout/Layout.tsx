import React, { Fragment } from 'react';
import Footer from '../Footer';
import TopMessage from '../TopMessage';
import styles from './Layout.module.scss';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { LayoutProps } from './types';

const Header = dynamic(() => import('../Header'), { ssr: false });

function Layout(props: LayoutProps) {
  const { title } = props;

  return (
    <Fragment>
      <Head>
        <title>{title || 'RareMint'}</title>
      </Head>

      <div className={styles.layout}>
        <TopMessage text="Messages Go Up Here" />
        <Header />
        <main className={styles.pageContent}>{props.children}</main>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Layout;
