import cx from 'classnames';
import React from 'react';

import styles from './Card.module.css';

interface Props {
  fgColor?: string;
  bgColor?: string;
  children: React.ReactNode;
}

const Card = (props: Props & Partial<Pick<HTMLDivElement, 'className'>>) => {
  const { children } = props;

  return (
    <div className={cx(props.className, styles.container)}>
      <div className={styles.backdrop} />
      <div className={styles.foreground}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Card;
