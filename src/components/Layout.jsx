export default function Layout({ children }) {
  return (
    <div>
      <main
        className="
          flex-1
          w-full
          max-w-[1920px]
          mx-auto
          px-6 sm:px-10 md:px-16 lg:px-28
          py-10
        "
      >
        {children}
      </main>
    </div>
  );
}
