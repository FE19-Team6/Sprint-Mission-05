import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductListPage from "@/products/pages/ProductListPage";
import AddItemPage from "@/products/pages/AddItemPage";
import BoardPage from "@/products/pages/BoardPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/items" replace />} />

        <Route path="/" element={<ProductListPage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/items" element={<ProductListPage />} />
        <Route path="/additem" element={<AddItemPage />} />
      </Route>
    </Routes>
  );
}

export default App;
