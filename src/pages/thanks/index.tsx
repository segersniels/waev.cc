import Layout from 'components/Layout';
import translations from 'lib/translations';
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
          <h1 className={styles.title}>{translations.t('thanks.title')}</h1>
          <p className={styles.description}>{translations.t('thanks.text')}</p>
        </div>

        <p className={styles.info}>{translations.t('thanks.info')}</p>
      </div>
    </Layout>
  );
};

export default Thanks;
