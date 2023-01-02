import { TProduct } from "@/services/apis";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ReactStars from "react-rating-stars-component";
import Image from "next/image";
import clsx from "clsx";

const DetailProductContainer = ({ product }: { product: TProduct }) => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-1">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
        >
          {product.images.map((image, idx) => (
            <SwiperSlide key={image}>
              <Image
                src={image}
                alt="image-product"
                className="w-full object-cover"
                width={100}
                height={100}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-black">{product.title}</h1>
        <p>{product.description}</p>
        <h2
          className={clsx(
            "text-xl font-bold",
            product.stock > 0 ? "text-green-500" : "text-red-500"
          )}
        >{`${product.stock > 0 ? "In Stock" : "Out Stock"}`}</h2>
        <ReactStars
          count={5}
          onc
          value={product.rating}
          size={36}
          edit={false}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
        <h5 className="text-lg font-semibold text-gray-500 hover:underline">
          {product.brand}
        </h5>
        <h5 className="text-lg font-semibold text-blue-500 hover:underline">
          {product.category}
        </h5>
        <div className="flex gap-2 items-start">
          <h1 className="text-2xl font-bold text-orange-500">
            ${product.price}
          </h1>
          <p className="text-sm text-red-500 font-semibold line-through">
            {product.discountPercentage}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailProductContainer;
