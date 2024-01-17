import Head from "next/head";
import "../styles/globals.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.9" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
