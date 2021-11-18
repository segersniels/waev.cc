import Card from 'components/Card';
import Layout from 'components/Layout';
import React from 'react';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';

import styles from './Landing.module.css';

const Landing = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Card>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>
              wae <HiOutlineSwitchHorizontal className={styles.icon} />v your
              unwanted email goodbye 👋
            </h1>
            <p className={styles.description}>
              Easy to use and aesthetically pleasing email client, coming soon!
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Landing;
