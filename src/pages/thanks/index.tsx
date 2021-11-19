import Layout from 'components/Layout';
import Router from 'next/router';
import React, { useEffect } from 'react';

import styles from './Thanks.module.css';

const Thanks = () => {
  /**
   * Redirect to landing page after 5 seconds
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      Router.push('/');
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Waitlist Joined</h1>
          <p className={styles.description}>
            Thank you for signing up for early access! Once the product is
            available for testing you will get notified 👋
          </p>
        </div>

        <p className={styles.info}>
          Redirecting to the main page in 5 seconds...
        </p>
      </div>
    </Layout>
  );
};

export default Thanks;
