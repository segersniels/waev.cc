import React from 'react';

import styles from './Layout.module.css';

const Layout = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
};

export default Layout;
