import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/layout/AppLayout";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import HomePage from "./components/pages/HomePage";
import FaqPolicy from "./components/pages/FaqPolicy";

import Page404 from "./components/pages/Page404";
import SearchPage from "./components/pages/SearchPage";

// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module
import "swiper/modules/thumbs/thumbs.scss";
import "swiper/modules/free-mode/free-mode.scss";
import ProductsPage from "./components/pages/ProductsPage";
import ProductDetail from "./components/pages/ProductDetail";
import CartPage from "./components/pages/CartPage";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products/all" element={<ProductsPage />}></Route>
          <Route path="products/:productId" element={<ProductDetail />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="pages/contact" element={<ContactUs />} />
          <Route path="pages/about-us" element={<AboutUs />} />
          <Route path="pages/faq-policy" element={<FaqPolicy />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
