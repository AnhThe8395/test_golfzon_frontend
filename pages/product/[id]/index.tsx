import Head from "next/head";
import { Fragment } from "react";
import { DetailProductContainer } from "@/containers";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  getProductService,
  getProductsService,
  TProduct,
} from "@/services/apis/product";
import { useRouter } from "next/router";

const ProductDetailPage = ({ product }: { product: TProduct }) => {
  const router = useRouter();
  const handleOnClickPrevious = () => {
    if (product.id > 0) {
      router.push(`/product/${product.id - 1}`);
    }
  };
  const handleOnClickNext = () => {
    router.push(`/product/${product.id + 1}`);
  };

  const handleOnClickBack = () => {
    router.push(`/`);
  };

  if (!product) {
    return null;
  }
  return (
    <Fragment>
      <Head>
        <title>{product.title}</title>
      </Head>
      <main className="my-14 max-w-7xl mx-auto flex flex-col gap-8">
        <div className="w-full flex items-center justify-start">
          <button
            className=" text-blue-500 font-bold hover:underline"
            onClick={handleOnClickBack}
          >
            Back
          </button>
        </div>
        <DetailProductContainer product={product} />
        <div className="w-full flex items-center justify-between">
          <button
            className="px-4 py-2 rounded-lg bg-blue-500 text-white font-bold hover:opacity-75 disabled:bg-gray-500"
            onClick={handleOnClickPrevious}
            disabled={product.id <= 1}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-blue-500 text-white font-bold hover:opacity-75"
            onClick={handleOnClickNext}
          >
            Next
          </button>
        </div>
      </main>
    </Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    console.log(getProductsService);
    const { products } = await getProductsService({ params: {} });
    const pageIds = products.map(({ id }) => `${id}`);
    const paths = pageIds.map((id) => ({ params: { id } }));
    return {
      paths,
      fallback: true,
    };
  } catch (e) {
    console.log("paths", e);
    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  if (!id) {
    return {
      props: {},
      notFound: true,
      revalidate: 1,
    };
  }

  try {
    const product = await getProductService({
      paths: { id },
    });

    return {
      props: { product },
      revalidate: 1,
    };
  } catch (e) {
    console.log("product: ", e);
    return {
      props: {},
      notFound: true,
      revalidate: 1,
    };
  }
};

export default ProductDetailPage;
