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
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"
        />

        <title>{title}</title>
        <meta key="og:title" property="og:title" content={title} />
        <meta key="twitter:title" property="twitter:title" content={title} />

        <meta
          key="og:description"
          property="og:description"
          content={description}
        />
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
