import BestProduct from "./components/BestProduct";
import AllProduct from "./components/AllProduct";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 px-4 md:px-8 lg:px-16">
      {/* 베스트 상품 섹션 */}
      <BestProduct />

      {/* 전체 상품 섹션 */}
      <AllProduct />
    </div>
  );
};

export default HomePage;
