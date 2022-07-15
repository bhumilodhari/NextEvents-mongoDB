import Router from 'next/router';
import Head from 'next/head';

import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  Router.events.on("routeChangeStart", (url) => {
    console.log("Route is changing")
  })

  Router.events.on("routeChangeComplete", (url) => {
    console.log("Route changing is complete...")
  });

  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta name='description' content='NextJS Events' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
