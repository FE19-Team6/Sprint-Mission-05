import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/main-layout/MainLayout";
import Home from "@/pages/home/Home";
import ProductListPage from "@/pages/product/pages/ProductListPage";
import GlobalStyle from "@/styles/Globalstyle.styled";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/items" element={<ProductListPage />}></Route>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
