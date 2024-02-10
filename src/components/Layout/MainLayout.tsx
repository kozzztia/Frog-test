import React, { FC } from 'react';
import { Layout } from 'antd';
import {dictionary} from '../../dictionary/index'
import style from './style.module.scss';
import { Footer } from 'antd/es/layout/layout';

const { Header } = Layout;

interface MainLayoutProps {
    children : React.ReactNode
}

const MainLayout : FC<MainLayoutProps>= ({children}) => {
  const {headerTitle, footerContent} = dictionary
  return (
    <Layout className={style.layout}>
      <Header className={style.header}>
      {headerTitle}
      </Header>
      <Layout className={style.body}>
       {children}
      </Layout>
      <Footer className={style.footer}>
        {footerContent}
      </Footer>
    </Layout>
  );
};

export default MainLayout;