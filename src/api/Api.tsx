export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  favoriteCount?: number;
}

export interface GetProductsParams {
  page?: number;
  pageSize?: number;
  orderBy?: "recent" | "favorite";
  keyword?: string;
}

interface RawProduct {
  id: number;
  name: string;
  price: number;
  description?: string;
  favoriteCount?: number;
  images?: string[];
}

const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProducts(
  params: GetProductsParams = {}
): Promise<{ list: Product[]; totalCount: number }> {
  const query = new URLSearchParams(
    Object.entries(params).reduce((acc, [key, value]) => {
      if (value !== undefined && value !== "") {
        acc[key] = String(value);
      }
      return acc;
    }, {} as Record<string, string>)
  ).toString();

  const res = await fetch(`${BASE_URL}/products?${query}`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data: { list: RawProduct[]; totalCount: number } = await res.json();

  const formattedList: Product[] = data.list.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    description: item.description,
    favoriteCount: item.favoriteCount,
    imageUrl: item.images?.[0] ?? "/default-product.png",
  }));

  return { list: formattedList, totalCount: data.totalCount };
}
