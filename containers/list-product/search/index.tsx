import Image from "next/image";
import { ChangeEvent } from "react";

const SearchProduct = ({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) => {
  const handleOnChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  return (
    <div className="w-full h-36 bg-blue-200 relative">
      <div className="absolute w-full h-full flex justify-center items-center">
        <div className="bg-white rounded-2xl border flex gap-4 px-4 overflow-hidden">
          <input
            className="outline-none py-2 w-96"
            value={value}
            onChange={handleOnChangeValue}
          />
          <div className="flex items-center">
            <button>
              <Image
                src={"/icons/search-outlined.svg"}
                alt={""}
                className="w-5 aspect-square"
                width="100"
                height="100"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
