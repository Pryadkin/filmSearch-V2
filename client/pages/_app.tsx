import type {AppProps} from 'next/app';

import Layout from '../component/Layout/index';

import '../styles/globals.scss';

/* eslint-disable react/jsx-props-no-spreading */
const MyApp = ({Component, pageProps}: AppProps) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);

export default MyApp;
