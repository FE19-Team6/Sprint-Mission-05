import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../../api/Api";
import type { Product } from "../../api/Api";

const getVisibleCount = () => {
  const width = window.innerWidth;
  if (width < 768) return 1;
  if (width < 1280) return 2;
  return 4;
};

const BestProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  const fetchBestProducts = async () => {
    try {
      const { list } = await getProducts({
        page: 1,
        pageSize: 20,
        orderBy: "favorite",
      });

      const sorted = [...list].sort(
        (a, b) => (b.favoriteCount ?? 0) - (a.favoriteCount ?? 0)
      );

      setProducts(sorted);
    } catch (error) {
      console.error("❌ Failed to fetch best products:", error);
    }
  };

  useEffect(() => {
    fetchBestProducts();

    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="px-6 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">베스트 상품</h1>

      {/* 반응형 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products
            .slice(0, visibleCount)
            .map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            상품이 없습니다.
          </p>
        )}
      </div>
    </section>
  );
};

export default BestProduct;
