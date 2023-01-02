import ApiService from "@/services/apis";

export type TProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
};
export type TGetProductsParams = {
  limit?: number;
  skip?: number;
  q?: string;
};

export type TGetProductsMaterials = {
  params?: TGetProductsParams;
};

export type TProductsResponse = {
  total: number;
  skip: number;
  limit: number;
  products: Array<TProduct>;
};

export const getProductsService = async (
  materials: TGetProductsMaterials
): Promise<TProductsResponse> => {
  const { params } = materials;
  const url = params?.q ? "/products/search" : "/products";
  const response = await ApiService.get(url, {
    params,
  });
  return response.data;
};
