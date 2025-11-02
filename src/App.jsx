import Header from "@/components/Header";
import Button from "@/components/Button";
import Layout from "@/components/Layout";
import Input from "@/components/Input";
import Pagination from "@/components/Pagination";

function App() {
  return (
    <div>
      <Header />
      <Layout>
        <Button />
        <br />
        <br />
        <Input />
        <br />
        <Pagination />
        <br />
        <br />
      </Layout>
    </div>
  );
}

export default App;
