import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  // 현재 경로 확인
  const path = location.pathname;

  // 각 메뉴 활성화 상태 확인
  const isBoardActive = path === "/board";
  const isMarketActive = path === "/items" || path === "/additem";

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      {/* container로 Layout과 폭 통일 */}
      <div className="container flex justify-between items-center py-4">
        {/* 로고 + 네비게이션 묶음 */}
        <div className="flex items-center gap-3">
          {/* 로고 클릭 시 홈으로 이동 */}
          <Link to="/">
            <img
              src="/assets/logo.svg"
              alt="판다마켓 로고"
              className="w-[144px] h-[42px] cursor-pointer"
            />
          </Link>

          {/* 메뉴 */}
          <nav className="flex items-center gap-5 text-xl font-semibold">
            <Link
              to="/board"
              className={`cursor-pointer transition-colors ${
                isBoardActive
                  ? "text-[#3692FF]"
                  : "text-gray-800 hover:text-primary-700"
              }`}
            >
              자유게시판
            </Link>

            <Link
              to="/items"
              className={`cursor-pointer transition-colors ${
                isMarketActive
                  ? "text-[#3692FF]"
                  : "text-gray-800 hover:text-primary-700"
              }`}
            >
              중고마켓
            </Link>
          </nav>
        </div>

        {/* 프로필 아이콘 */}
        <img
          src="/assets/thumbnail.svg"
          alt="프로필"
          className="w-10 h-10 bg-gray-100 rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
}
