import React from "react";
import { truncateText } from "./truncateText";

let formatCurrency = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
});

const Products = ({ products }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
      }}
    >
      {products?.map((item, index) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              border: "2px solid gray",
              borderRadius: "1em",
              padding: "1em",
              margin: "1em",
            }}
          >
            <p
              style={{
                border: "2px solid gray",
                borderRadius: "1em",
                width: "1.5em",
                height: "1.5em",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item?.id}
            </p>
            <p>{formatCurrency.format(item?.price)}</p>
            <h3>{item?.title}</h3>
            <p>{truncateText(item?.description)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
