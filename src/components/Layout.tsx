import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-180px)] bg-gray-50 pt-(--header-height)">
        {children}
      </main>
    </>
  );
}

export default Layout;
