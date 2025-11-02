import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <BrowserRouter>
      {/* 상단 고정 헤더 */}
      <Header />

      {/* 메인 콘텐츠 영역 */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-180px)] bg-gray-50 pt-(--header-height)">
        <Dropdown
          options={["최신순", "인기순", "댓글순"]}
          placeholder="정렬 기준 선택"
          onSelect={(val) => console.log("선택됨:", val)}
        />
      </main>

      {/* 하단 페이지네이션 */}
      <Pagination
        totalPageNum={10}
        activePageNum={3}
        onPageChange={(page) => console.log("페이지 이동:", page)}
      />
    </BrowserRouter>
  );
}

export default App;
