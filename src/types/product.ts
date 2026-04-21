export type TProduct = {
  id: string;
  categoryId: string;
  title: string;
  description: string | null;
  regularPrice: number;
  discountPrice: number;
  stockQuantity: number;
  imageKey: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  category: {
    id: string;
    name: string;
  };
  imageUrl: string;
};
