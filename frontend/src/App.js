import "./App.css";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop";
import Scategory from "./pages/scategory";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Loginsignup from "./pages/LoginSignup";
import Footer from "./components/footer/footer";
import Men_banner from "./components/assets/banner_mens.png";
import Women_banner from "./components/assets/banner_women.png";
import Kids_banner from "./components/assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<Scategory banner={Men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<Scategory banner={Women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<Scategory banner={Kids_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Loginsignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
