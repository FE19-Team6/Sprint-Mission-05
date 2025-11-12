import ProductCard from "@/products/components/ProductCard";
import useProductList from "@/products/hooks/useProductList";

export default function GeneralProductList({ order, page, size = "general" }) {
  // useProductList 훅을 사용해 상품 데이터를 불러오고 상태를 관리함
  const { products, loading, error } = useProductList({ order, page });
  console.log("제너럴", order);

  // 상품 데이터, 로딩, 에러 상태 가져오기
  if (loading) return <p>로딩 중...</p>;
  if (error) return <p className="text-red-500">에러 발생: {error}</p>;

  // 상품 리스트 렌더링
  return (
    <div
      className="grid gap-10
      grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
      place-items-center mt-10"
    >
      {products.map((product) => (
        <ProductCard
          size={size}
          key={product.id}
          name={product.name}
          price={product.price}
          images={product.images}
          favoriteCount={product.favoriteCount}
        />
      ))}
    </div>
  );
}
