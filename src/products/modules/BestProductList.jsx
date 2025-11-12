import ProductCard from "@/products/components/ProductCard";
import useProductList from "@/products/hooks/useProductList";
import { useEffect, useState } from "react";

export default function BestProductList({ size = "pc" }) {
  const { products, loading, error } = useProductList({ order: "favorite" });

  const [displayCount, setDisplayCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setDisplayCount(1);
      } else if (width < 1024) {
        setDisplayCount(2);
      } else if (width < 1280) {
        setDisplayCount(3); // 중간 PC
      } else {
        setDisplayCount(4); // 큰 PC
      }
    };

    handleResize(); // 처음 실행
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p className="text-red-500">에러 발생: {error}</p>;
  if (!products?.length) return <p>상품이 없습니다 😢</p>;

  const gridCols =
    displayCount === 1
      ? "grid-cols-1"
      : displayCount === 2
      ? "grid-cols-2"
      : displayCount === 3
      ? "grid-cols-3"
      : "grid-cols-4";

  return (
    <div
      className={`grid ${gridCols} gap-6 place-items-center mt-10 transition-all duration-300`}
    >
      {products.slice(0, displayCount).map((product) => (
        <ProductCard
          key={product.id}
          size={size}
          name={product.name}
          images={product.images}
          price={product.price}
          favoriteCount={product.favoriteCount}
        />
      ))}
    </div>
  );
}
