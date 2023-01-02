import {
  getProductsService,
  TGetProductsParams,
  TProduct,
} from "@/services/apis/product";
import { useDebounce } from "@/utils/hooks";
import clsx from "clsx";
import { useState, useEffect, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./ListProduct.module.scss";
import ProductItem from "./product-item";
import SearchProduct from "./search";

const ListProductContainer = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [productsPage, setProductsPage] = useState<Array<TProduct>>([]);
  const [total, setTotal] = useState<number>(0);
  const searchQuery = useDebounce(searchValue, 500);

  const loadProducts = async (params: TGetProductsParams) => {
    const data = await getProductsService({ params });
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const { total, products } = await loadProducts({
        limit: 8,
        skip: 0,
        q: searchQuery,
      });
      setProductsPage(products);
      setTotal(total);
    };
    fetchData();
  }, [searchQuery]);

  const hasMore = useMemo(
    () => productsPage.length < total,
    [productsPage, total]
  );

  const handleNextProduct = async () => {
    if (!productsPage.length) {
      return;
    }
    const { products } = await loadProducts({
      skip: productsPage.length,
      limit: 8,
      q: searchQuery,
    });
    setProductsPage((current) => [...current, ...products]);
  };

  return (
    <div className={clsx(styles.ListProduct, "flex flex-col gap-4")}>
      <SearchProduct value={searchValue} setValue={setSearchValue} />
      <div className="max-w-7xl mx-auto w-full">
        <InfiniteScroll
          hasMore={hasMore}
          dataLength={productsPage.length}
          loader={null}
          next={handleNextProduct}
        >
          {productsPage.length === 0 && (
            <h1 className="text-center">No Data display</h1>
          )}
          <div className="grid grid-cols-4 gap-8 ">
            {productsPage.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default ListProductContainer;
