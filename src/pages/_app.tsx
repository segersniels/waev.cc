import 'styles/global.css';
import 'styles/core.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

const title = 'waev';
const description = 'Wave your unwanted email goodbye 👋';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta key="og:title" property="og:title" content={title} />
        <meta
          key="og:description"
          property="og:description"
          content={description}
        />

        <meta key="twitter:title" property="twitter:title" content={title} />
        <meta
          key="twitter:description"
          property="twitter:description"
          content={description}
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default App;
