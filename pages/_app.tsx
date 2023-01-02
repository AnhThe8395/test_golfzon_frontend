import type { AppProps } from "next/app";
import { NextComponentType } from "next";
import { GuestLayout } from "@/layouts";
import { Fragment } from "react";
import Head from "next/head";
import "../styles/globals.scss";

interface CustomAppProps extends AppProps {
  Component: NextPageWithLayout;
}

export type NextPageWithLayout = NextComponentType & {
  Layout?: any;
};

export default function App({ Component, pageProps }: CustomAppProps) {
  const Layout = Component.Layout || GuestLayout;
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1"
        ></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}
