import Dropdown from "../components/Dropdown";
import Pagination from "../components/Pagination";

function HomePage() {
  return (
    <div className="flex flex-col items-center gap-8">
      <Dropdown
        options={["최신순", "인기순", "댓글순"]}
        placeholder="정렬 기준 선택"
        onSelect={(val) => console.log("선택됨:", val)}
      />

      <Pagination
        totalPageNum={10}
        activePageNum={3}
        onPageChange={(page) => console.log("페이지 이동:", page)}
      />
    </div>
  );
}

export default HomePage;
