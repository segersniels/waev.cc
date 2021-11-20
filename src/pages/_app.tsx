import 'styles/global.css';
import 'styles/core.css';

import translations from 'helpers/translations';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  const title = translations.t('head.title');
  const description = translations.t('head.description');

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
        <meta key="og:sitename" property="og:sitename" content={title} />

        <meta key="description" property="description" content={description} />
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
        <meta
          key="twitter:card"
          property="twitter:card"
          content="summary_large_image"
        />

        <link key="canonical" rel="canonical" href="https://waev.cc" />
        <meta key="og:url" property="og:url" content="https://waev.cc" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default App;
