import React, { useEffect, useState } from "react";
import Products from "./Products";

const Solution = () => {
  const [products, setProducts] = useState([]);
  const [filtredProducts, setFiltredProducts] = useState([]);
  const [query, setQuery] = useState("");
  function fetchProducts() {
    fetch("  https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json?.products);
        setFiltredProducts(json?.products);
      });
  }
  console.log("products", products);
  console.log("filtredProducts", filtredProducts);
  useEffect(() => {
    fetchProducts();
  }, []);
  function handleSearchInputChange(e) {
    setQuery(e.target.value);
  }
  useEffect(() => {
    if (query == "") {
      setFiltredProducts(products);
    } else {
      let allProducts = products;
      let filtrProducts = allProducts.filter(
        (product) =>
          product?.title?.includes(query) ||
          product?.description?.includes(query) ||
          product?.price?.toString()?.includes(query)
      );
      setFiltredProducts(filtrProducts);
    }
  }, [query]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>MoonshotX Products</h2>
      <input
        autoFocus
        placeholder="search cards ..."
        onChange={(e) => handleSearchInputChange(e)}
      />
      <Products products={filtredProducts} />
    </div>
  );
};

export default Solution;
