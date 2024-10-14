import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import "../src/App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>
      <Header/>
{/* <ProductList/> */}

      <Router>

        <Routes>

          <Route path="/" element={<ProductList />} />

          {/* Product Details Route */}
       <Route  path="/product/:id" element={<ProductDetails/>}/>

        </Routes>

      </Router>
    </>
  );
}

export default App;
