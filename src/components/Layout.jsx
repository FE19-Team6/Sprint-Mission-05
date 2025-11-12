import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 헤더 */}
      <Header />

      {/* 메인 콘텐츠 */}
      <main
        className="
          flex-1
          max-w-[1200px] mx-auto
          px-6 sm:px-10 md:px-16 lg:px-20
          py-10
        "
      >
        {children}
      </main>
    </div>
  );
}
