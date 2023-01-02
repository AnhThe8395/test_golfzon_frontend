import ApiService, { TProduct } from "@/services/apis";

export type TGetProductPaths = {
  id: string;
};

export type TGetProductMaterials = {
  paths?: TGetProductPaths;
};

export type TProductResponse = TProduct;

export const getProductService = async (
  materials: TGetProductMaterials
): Promise<TProductResponse> => {
  const { paths } = materials;
  const response = await ApiService.get(`/products/${paths?.id}`);
  return response.data;
};
