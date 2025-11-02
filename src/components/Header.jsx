export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      {/* 중앙 정렬 및 내부 패딩 조정 (반응형 여백) */}
      <div
        className="
          max-w-[1920px] mx-auto 
          flex justify-between items-center 
          px-6 sm:px-10 md:px-16 lg:px-28 
          py-4
        "
      >
        {/* 로고 및 네비게이션 메뉴 */}
        <div className="flex items-center gap-8">
          <img
            src="/assets/logo.svg"
            alt="판다마켓 로고"
            className="w-[150px] h-[48px] cursor-pointer"
          />

          <nav className="flex items-center gap-8 text-gray-800 text-lg">
            <span className="cursor-pointer hover:text-primary-700 font-semibold">
              자유게시판
            </span>
            <span className="cursor-pointer hover:text-primary-700 font-semibold">
              중고마켓
            </span>
          </nav>
        </div>

        {/* 프로필 아이콘 */}
        <div>
          <img
            src="/assets/thumbnail.svg"
            alt="프로필"
            className="w-10 h-10 bg-gray-100 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}
