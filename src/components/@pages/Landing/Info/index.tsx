import React from 'react';

import styles from './Info.module.css';

interface Props {
  title: string;
  text?: string;
  children?: React.ReactNode;
}

const Info = (props: Props) => {
  const { title, text } = props;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {props.children ? (
        <div className={styles.text}>{props.children}</div>
      ) : (
        <p className={styles.text}>{text}</p>
      )}
    </div>
  );
};

export default Info;
