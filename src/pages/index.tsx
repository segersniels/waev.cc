import Info from 'components/@pages/Landing/Info';
import Waitlist from 'components/@pages/Landing/Waitlist';
import Card from 'components/Card';
import Layout from 'components/Layout';
import translations from 'helpers/translations';
import React from 'react';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';

import styles from './Landing.module.css';

const Landing = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Card className={styles.card}>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>
              wae <HiOutlineSwitchHorizontal className={styles.icon} />v your
              unwanted email goodbye 👋
            </h1>
            <p className={styles.description}>
              {translations.t('landing.description')}
            </p>
          </div>

          <Waitlist className={styles.waitlist} />
        </Card>

        <hr className={styles.divider} />

        <Info
          title={translations.t('landing.info.vision.title')}
          text={translations.t('landing.info.vision.text')}
        />

        <hr className={styles.divider} />

        <Info title={translations.t('landing.info.what.title')}>
          <ul>
            <li>{translations.t('landing.info.what.features.reinvent')}</li>
            <li>{translations.t('landing.info.what.features.basic')}</li>
            <li>{translations.t('landing.info.what.features.gather')}</li>
            <li>{translations.t('landing.info.what.features.storage')}</li>
            <li>{translations.t('landing.info.what.features.accounts')}</li>
          </ul>
        </Info>
      </div>
    </Layout>
  );
};

export default Landing;
