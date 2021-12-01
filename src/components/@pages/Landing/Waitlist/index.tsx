import cx from 'classnames';
import translations from 'lib/translations';
import React from 'react';

import styles from './Waitlist.module.css';

const Waitlist = (props: React.FormHTMLAttributes<HTMLFormElement>) => {
  return (
    <form
      action="https://waev.us20.list-manage.com/subscribe/post?u=2d143c6d02a40cf795d3de7c0&amp;id=9351c91a5d"
      method="post"
      target="_blank"
      noValidate
      className={cx(props.className, styles.container)}
    >
      <input
        style={{ display: 'none' }}
        type="text"
        name="b_2d143c6d02a40cf795d3de7c0_9351c91a5d"
      />

      <div className={styles.wrapper}>
        <input
          type="email"
          name="EMAIL"
          id="EMAIL"
          placeholder={translations.t('landing.waitlist.input.placeholder')}
          required
          className={styles.input}
        />

        <input
          type="submit"
          value={translations.t('landing.waitlist.button')}
          name="subscribe"
          className={styles.button}
        />
      </div>
    </form>
  );
};

export default Waitlist;
