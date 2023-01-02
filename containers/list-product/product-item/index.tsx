import { TProduct } from "@/services/apis";
import Image from "next/image";
import { useRouter } from "next/router";
import ReactStars from "react-rating-stars-component";

const ProductItem = ({ product }: { product: TProduct }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };
  return (
    <div
      className="shadow-lg rounded-lg overflow-hidden w-full cursor-pointer hover:shadow-2xl"
      onClick={handleClick}
    >
      <div className="flex flex-col">
        <div className="flex justify-center bg-white">
          <Image
            src={product.thumbnail}
            alt="image-product"
            className="w-full aspect-square object-cover"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col mx-4 my-6 gap-2">
          <h3 className="font-semibold text-gray-500 truncate hover:underline">
            {product.brand}
          </h3>
          <p className="text-black font-semibold truncate">{product.title}</p>
          <p className="text-sm text-blue-500 font-medium hover:underline">
            {product.category}
          </p>
          <ReactStars
            count={5}
            onc
            value={product.rating}
            size={24}
            edit={false}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
          <p className="text-xl font-semibold">
            {Number(product.price).toFixed(0, 3)} $
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
