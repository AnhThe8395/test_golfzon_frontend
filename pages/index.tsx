import Head from "next/head";
import { Fragment } from "react";
import { ListProductContainer } from "@/containers";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Product Gallery</title>
      </Head>
      <main className="mb-14">
        <ListProductContainer />
      </main>
    </Fragment>
  );
}
