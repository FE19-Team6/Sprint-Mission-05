export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  imageUrls: string[];       
  images: string[]; 
  ownerId: number;
  favoriteCount: number;
  createdAt: string;
  updatedAt: string;
}

export type OrderBy = "recent" | "favorite"

export interface ProductListResponse {
  list: Product[];
  totalCount: number;
}